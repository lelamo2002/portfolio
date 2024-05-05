import { saveScore } from "@/lib/scoreFunctions";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import NameInput from "./NameInput";
import { useEffect } from "react";

interface ScoreFormProps {
  score: number;
  restartGame: () => void;
  leaderboard: () => void;
}

type Inputs = {
  playerName: string;
};

export default function ScoreForm({
  score,
  restartGame,
  leaderboard,
}: ScoreFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    saveScore(data.playerName, score).then(() => {
      console.log("Score saved successfully");
      leaderboard();
    });
  };

  if (score === 0) {
    restartGame();
  }

  useEffect(() => {
    setValue("playerName", "AAAAA");
  }, []);

  const handleNameChange = (name: string) => {
    console.log("name: ", name);
    setValue("playerName", name);
  };

  return (
    <div className="w-48 h-80 flex items-center flex-col justify-center gap-4 font-pixelifySans">
      <p className="cursor-pointer">Submit your score!</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center "
      >
        <label>your name:</label>
        {/* <input
          {...register("playerName")}
          className="bg-secondary-white mb-4"
        /> */}

        <NameInput onChange={handleNameChange} maxNameLength={5} />

        <div className="flex flex-col gap-2 font-pixelifySans">
          <button type="submit" className="bg-accent-orange p-2 rounded-md">
            Submit
          </button>

          <button
            type="button"
            className="bg-accent-orange p-2 rounded-md"
            onClick={() => restartGame()}
          >
            Restart
          </button>
        </div>
      </form>
    </div>
  );
}
