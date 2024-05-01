import { saveScore } from "@/lib/scoreFunctions";
import { Form, SubmitHandler, useForm } from "react-hook-form";

interface ScoreFormProps {
  score: number;
  restartGame: () => void;
}

type Inputs = {
  playerName: string;
};

export default function ScoreForm({ score, restartGame }: ScoreFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    saveScore(data.playerName, score).then(() => {
      console.log("Score saved successfully");
    });
  };
  return (
    <div className="w-48 h-80 flex items-center flex-col justify-center gap-4 font-pixelifySans">
      <p className="cursor-pointer">Submit your score!</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center "
      >
        <label>Name</label>
        <input {...register("playerName")} className="bg-" />

        <button type="submit">Submit</button>

        <button onClick={() => restartGame()}>Restart</button>
      </form>
    </div>
  );
}
