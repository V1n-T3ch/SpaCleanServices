import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query, 
  orderBy,
  where
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const COLLECTION_NAME = 'gallery';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get all images
export const getAllImages = async () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docSnapshot => ({
    id: docSnapshot.id,
    ...docSnapshot.data()
  }));
};

// Get images by category
export const getImagesByCategory = async (category) => {
  const q = query(
    collection(db, COLLECTION_NAME), 
    where('category', '==', category),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docSnapshot => ({
    id: docSnapshot.id,
    ...docSnapshot.data()
  }));
};

// Upload image to B2 via backend, then save metadata to Firebase
export const uploadImage = async (file, title, description, category) => {
  // 1. Upload image to B2 via backend
  const formData = new FormData();
  formData.append('image', file);

  const uploadResponse = await fetch(`${API_URL}/gallery/upload-image`, {
    method: 'POST',
    body: formData
  });

  const uploadResult = await uploadResponse.json();

  if (!uploadResult.success) {
    throw new Error(uploadResult.message || 'Failed to upload image');
  }

  // 2. Save metadata to Firebase
  const imageData = {
    title,
    description: description || '',
    category,
    src: uploadResult.data.url,
    fileName: uploadResult.data.fileName,
    fileId: uploadResult.data.fileId,
    createdAt: new Date().toISOString()
  };

  const docRef = await addDoc(collection(db, COLLECTION_NAME), imageData);
  
  return {
    id: docRef.id,
    ...imageData
  };
};

// Update image
export const updateImage = async (id, file, title, description, category, existingImage) => {
  let updateData = {
    title,
    description: description || '',
    category,
    updatedAt: new Date().toISOString()
  };

  // If new file provided, upload to B2
  if (file) {
    // Upload new image
    const formData = new FormData();
    formData.append('image', file);

    const uploadResponse = await fetch(`${API_URL}/gallery/upload-image`, {
      method: 'POST',
      body: formData
    });

    const uploadResult = await uploadResponse.json();

    if (!uploadResult.success) {
      throw new Error(uploadResult.message || 'Failed to upload image');
    }

    // Delete old image from B2
    if (existingImage.fileName && existingImage.fileId) {
      try {
        await fetch(`${API_URL}/gallery/delete-image`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: existingImage.fileName,
            fileId: existingImage.fileId
          })
        });
      } catch (err) {
        console.error('Failed to delete old image:', err);
      }
    }

    updateData.src = uploadResult.data.url;
    updateData.fileName = uploadResult.data.fileName;
    updateData.fileId = uploadResult.data.fileId;
  }

  // Update Firebase document
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, updateData);

  const updatedDoc = await getDoc(docRef);
  return {
    id: updatedDoc.id,
    ...updatedDoc.data()
  };
};

// Delete image
export const deleteImage = async (id, fileName, fileId) => {
  // Delete from B2 via backend
  if (fileName && fileId) {
    try {
      await fetch(`${API_URL}/gallery/delete-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName, fileId })
      });
    } catch (err) {
      console.error('Failed to delete from B2:', err);
    }
  }

  // Delete from Firebase
  await deleteDoc(doc(db, COLLECTION_NAME, id));
};