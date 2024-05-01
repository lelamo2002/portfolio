"use client";

import { useEffect, useState } from "react";
import ScoreForm from "./ScoreForm";

interface WormGameProps {
  gridWidth: number;
  gridHeight: number;
}

export default function WormGame({ gridWidth, gridHeight }: WormGameProps) {
  // const gridWidth = 24;
  // const gridHeight = 40;

  const [score, setScore] = useState<number>(0);

  const axys = {
    ArrowUp: "y",
    ArrowDown: "y",
    ArrowLeft: "x",
    ArrowRight: "x",
  };

  const grid = Array(gridHeight)
    .fill(null)
    .map(() => Array(gridWidth).fill(0));

  const defaultWorm = [
    [12, 20],
    [12, 21],
    [12, 22],
    [12, 23],
  ];
  const [worm, setWorm] = useState<number[][]>(defaultWorm);

  const [moveDirection, setMoveDirection] = useState<
    "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"
  >("ArrowUp");

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  function getFoodPosition() {
    let x = Math.floor(Math.random() * (gridWidth - 1));
    let y = Math.floor(Math.random() * (gridHeight - 1));

    if (worm.some((wormCell) => wormCell[0] === x && wormCell[1] === y)) {
      console.log("food in worm");
      return getFoodPosition();
    }

    console.log("food position: ", x, y);

    return [x, y];
  }

  const [food, setFood] = useState<number[]>([12, 4]);

  function RenderTiles() {
    return (
      <div className="w-full h-full flex flex-wrap ">
        {grid.map((row, rowIndex) =>
          row.map((cell, cellIndex) => {
            if (
              worm.some(
                (wormCell) =>
                  wormCell[0] === cellIndex && wormCell[1] === rowIndex
              )
            ) {
              let wormIndex = worm.findIndex(
                (wormCell) =>
                  wormCell[0] === cellIndex && wormCell[1] === rowIndex
              );

              return (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: `rgb(${67 + wormIndex * 10}, ${
                      217 - wormIndex * 10
                    }, ${173 - wormIndex * 5})`,
                  }}
                  key={cellIndex}
                ></div>
              );
            }

            if (food[0] === cellIndex && food[1] === rowIndex) {
              return (
                <div className="w-2 h-2 bg-accent-orange" key={cellIndex}></div>
              );
            }

            return (
              <div
                className="w-2 h-2 bg-primary-dark-blue"
                key={cellIndex}
              ></div>
            );
          })
        )}
      </div>
    );
  }

  function inputHandler(event: KeyboardEvent) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      setGameStarted(true);

      if (axys[event.key] === axys[moveDirection]) {
        return;
      }

      setMoveDirection(event.key);
    }
  }

  function startGame() {
    setGameStarted(true);
    setWorm(defaultWorm);
    setFood(getFoodPosition());
  }

  function gameOver() {
    setMoveDirection("ArrowUp");
    setGameStarted(false);
    return defaultWorm;
  }

  function moveWorm(
    direction: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"
  ) {
    let newWorm = [...worm];
    let newHead = [...newWorm[0]];

    switch (direction) {
      case "ArrowUp":
        newHead[1] -= 1;
        break;
      case "ArrowDown":
        newHead[1] += 1;
        break;
      case "ArrowLeft":
        newHead[0] -= 1;
        break;
      case "ArrowRight":
        newHead[0] += 1;
        break;
      default:
        break;
    }

    if (
      newHead[0] < 0 ||
      newHead[0] >= gridWidth ||
      newHead[1] < 0 ||
      newHead[1] >= gridHeight
    ) {
      return gameOver();
    }

    if (
      worm.some(
        (wormCell) => wormCell[0] === newHead[0] && wormCell[1] === newHead[1]
      )
    ) {
      return gameOver();
    }

    newWorm.unshift(newHead);

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(getFoodPosition());
      return newWorm;
    }

    newWorm.pop();

    return newWorm;
  }

  useEffect(() => {
    document.addEventListener("keydown", inputHandler);

    return () => {
      document.removeEventListener("keydown", inputHandler);
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameStarted) {
        setWorm(() => moveWorm(moveDirection));
        setScore(worm.length - defaultWorm.length);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex p-4 bg-[linear-gradient(180deg,#237b6d,rgba(67,217,173,.13))]  rounded-xl">
      <div className=" m-2 bg-primary-dark-blue rounded-xl w-[192px] overflow-hidden ">
        {!gameStarted && score == 0 && (
          <div className="w-48 h-80 flex items-center justify-center text-center flex-col">
            <p className="text-4xl font-pixelifySans">Worm Game</p>
            <p className="text-2xl font-pixelifySans">Press arrows to start</p>
          </div>
        )}

        {!gameStarted && score > 0 && (
          <ScoreForm score={score} restartGame={() => startGame()} />
        )}

        {gameStarted && <RenderTiles />}
      </div>
      <div className=" m-2 w-[192px]">
        <div className="p-2 bg-[#011423]/[.19] rounded-xl h-[134px]">
          <p>{"// use keyboard"}</p>
          <p>{"// arrows to start"}</p>
          <p>{"// playing"}</p>
          <p>{`// score: ${score}`}</p>
        </div>
      </div>
    </div>
  );
}
