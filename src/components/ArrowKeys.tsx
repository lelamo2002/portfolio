"use client";
import React from "react";

type IDirection = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

interface ArrowKeysProps {
  setMoveDirection: (direction: IDirection) => void;
}
interface ArrowButtonProps {
  icon: string;
  direction: IDirection;
  setMoveDirection: (direction: IDirection) => void;
}

const ArrowButton = ({
  icon,
  direction,
  setMoveDirection,
}: ArrowButtonProps) => {
  const handleClick = () => {
    setMoveDirection(direction);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-button-ghost hover:bg-button-hover-ghost active:bg-accent-orange text-white font-bold px-4 rounded-lg border-line border"
    >
      <i className={icon}></i>
    </button>
  );
};

const keys: { direction: IDirection; icon: string }[] = [
  { direction: "ArrowUp", icon: "ri-arrow-up-line" },
  { direction: "ArrowLeft", icon: "ri-arrow-left-line" },
  { direction: "ArrowDown", icon: "ri-arrow-down-line" },
  { direction: "ArrowRight", icon: "ri-arrow-right-line" },
];

export default function ArrowKeys({ setMoveDirection }: ArrowKeysProps) {
  return (
    <div className="grid grid-cols-3 gap-1 text-lg mt-2">
      <div className="bg-transparent px-4"></div>
      <ArrowButton
        icon={keys[0].icon}
        direction={keys[0].direction}
        setMoveDirection={setMoveDirection}
      />
      <div className="bg-transparent px-4"></div>

      {keys.slice(1).map((key, index) => (
        <ArrowButton
          key={index}
          icon={key.icon}
          direction={key.direction}
          setMoveDirection={setMoveDirection}
        />
      ))}
    </div>
  );
}
