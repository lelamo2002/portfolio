import { db } from './firebase'; // Ensure path is correct
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';

export const saveScore = async (playerName: string, score: number) => {
  try {
    await addDoc(collection(db, "score"), {
      playerName,
      score,
      timestamp: serverTimestamp()
    });
    console.log("Score added successfully");
  } catch (error) {
    console.error("Error adding score: ", error);
  }
};

export const getScores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "scores"));
    const scores = querySnapshot.docs.map((doc) => doc.data());
    return scores;
  } catch (error) {
    console.error("Error getting scores: ", error);
    return [];
  }
}