import { useState } from "react";

interface NameInputProps {
  maxNameLength: number;
  onChange: (name: string) => void;
}

export default function NameInput({ maxNameLength, onChange }: NameInputProps) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");

  const [playerName, setPlayerName] = useState(
    "".padEnd(maxNameLength, characters[0])
  );
  const [indices, setIndices] = useState(Array(maxNameLength).fill(0));

  const updateCharacter = (index: number, newIndex: number) => {
    setPlayerName((prev) => {
      const newName = prev.split("");
      newName[index] = characters[newIndex];
      onChange(newName.join(""));
      return newName.join("");
    });
    setIndices((prev) => {
      const newIndices = [...prev];
      newIndices[index] = newIndex;
      return newIndices;
    });
  };

  const CharacterDial = ({ position }: { position: number }) => {
    const incrementIndex = () => {
      const newIndex =
        indices[position] === characters.length - 1 ? 0 : indices[position] + 1;
      updateCharacter(position, newIndex);
    };

    const decrementIndex = () => {
      const newIndex =
        indices[position] === 0 ? characters.length - 1 : indices[position] - 1;
      updateCharacter(position, newIndex);
    };

    return (
      <div className="flex flex-col items-center justify-center gap">
        <button type="button" onClick={incrementIndex} className="text-lg">
          +
        </button>
        <p>{characters[indices[position]]}</p>
        <button type="button" onClick={decrementIndex} className="text-lg">
          -
        </button>
      </div>
    );
  };

  return (
    <div className="flex gap-4">
      {indices.map((_, index) => (
        <CharacterDial key={index} position={index} />
      ))}
    </div>
  );
}
