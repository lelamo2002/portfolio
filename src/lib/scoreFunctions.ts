import { db } from './firebase'; // Ensure path is correct
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';


export interface IScore {
  playerName: string;
  score: number;
  timestamp: any;
}

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

export const getScores = async ():Promise<IScore[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "score"));
    const scores = querySnapshot.docs.map((doc) => doc.data()) as IScore[];
    return scores;
  } catch (error) {
    console.error("Error getting scores: ", error);
    return [];
  }
}