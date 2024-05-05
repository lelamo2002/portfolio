"use client";

import { IScore, getScores } from "@/lib/scoreFunctions";
import { useEffect, useState } from "react";

export default function Leaderboard({
  restartGame,
}: {
  restartGame: () => void;
}) {
  const [scores, setScores] = useState<IScore[]>([]);

  const updateScores = async () => {
    const retrievedScores = await getScores();

    retrievedScores.sort((a, b) => b.score - a.score);

    setScores(retrievedScores);
    console.log(typeof retrievedScores, retrievedScores);
  };

  useEffect(() => {
    updateScores();
  }, []);

  return (
    <div className="w-48 h-80 flex items-center justify-evenly text-center flex-col">
      <p className="text-2xl font-pixelifySans">Leaderboard</p>

      <div className="w-full h-[60%] overflow-y-auto ">
        {scores &&
          scores.map((score, index) => (
            <p key={index} className="text-lg font-pixelifySans">
              {score.playerName} ------ {score.score}
            </p>
          ))}

        {scores.length === 0 && (
          <p className="text-lg font-pixelifySans">No scores yet!</p>
        )}
      </div>

      <div className="flex flex-col gap-4 font-pixelifySans">
        <button
          onClick={() => restartGame()}
          className="bg-accent-orange p-2 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
}
