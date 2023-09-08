'use client';

import { useEffect, useState } from "react";

export default function WormGame() {
  const gridWidth = 24;
  const gridHeight = 40;

  const axys = {
    "ArrowUp": "y",
    "ArrowDown": "y",
    "ArrowLeft": "x",
    "ArrowRight": "x",
  }

  const grid = Array(gridHeight).fill(null).map(() => Array(gridWidth).fill(0));

  const defaultWorm = [ [12,20], [12,21], [12,22], [12,23] ];
  const [worm, setWorm] =  useState<number[][]>( defaultWorm);

  const [score, setScore] = useState<number>(0);

  const [moveDirection, setMoveDirection] = useState<"ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight">("ArrowUp");

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  function getFoodPosition() {

    let x = Math.floor(Math.random() * gridWidth );
    let y = Math.floor(Math.random() * gridHeight );

    if (worm.some((wormCell) => wormCell[0] === x && wormCell[1] === y)) {
      console.log("food in worm");
      return getFoodPosition();
    }

    console.log("food position: ", x, y)

    
    return [x, y];
  }

  const [food, setFood] = useState<number[]>([12, 4]);


  function RenderTiles() {

    return (
      
      <div className="w-full h-full flex flex-wrap ">
      {
        grid.map((row, rowIndex) => (
                row.map((cell, cellIndex) => {
                  
                  if (worm.some((wormCell) => wormCell[0] === cellIndex && wormCell[1] === rowIndex)) {

                    let wormIndex = worm.findIndex((wormCell) => wormCell[0] === cellIndex && wormCell[1] === rowIndex);
               
                    return (<div style={{width: "8px", height: "8px", backgroundColor: `rgb(${67 + wormIndex * 10}, ${217 - wormIndex * 10}, ${173 - wormIndex * 5})`}} key={cellIndex}>
                    </div>)
                  }


                  if(food[0] === cellIndex && food[1] === rowIndex) {
                    return (<div style={{width: "8px", height: "8px", backgroundColor: `rgb(255, 159, 28)`}} key={cellIndex}>
                    </div>)
                  }


                  return (<div style={{width: "8px", height: "8px", backgroundColor: `rgb(1, 22, 39)`}} key={cellIndex}>
                </div>)
                }
                )
  
        ))
      }
    </div>

    )

  }


  function inputHandler(event: KeyboardEvent) {
      if(event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setGameStarted(true);
        
        if(axys[event.key] === axys[moveDirection]) {
          return;
        }
        
        setMoveDirection(event.key);
      }
  }

  function gameOver() {
    setMoveDirection("ArrowUp");
    setGameStarted(false);
    return defaultWorm;
  }


  function moveWorm( direction: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" ) {

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

    if(newHead[0] < 0 || newHead[0] >= gridWidth || newHead[1] < 0 || newHead[1] >= gridHeight) {
      return gameOver();
    }

    if (worm.some((wormCell) => wormCell[0] === newHead[0] && wormCell[1] === newHead[1])) {
      return gameOver();
    }

    newWorm.unshift(newHead);

    if(newHead[0] === food[0] && newHead[1] === food[1]) {
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
  })

  useEffect(() => {

    const interval = setInterval(() => {
      if(gameStarted){
      setWorm((worm) => moveWorm(moveDirection));
    }
    }, 25);

    return () => {
      clearInterval(interval);
    };
  })

  useEffect(() => {

    setScore(worm.length - defaultWorm.length)

  },[worm])

  return (
    <RenderTiles/>
  );
}
