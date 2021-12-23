import React, { useState, useEffect } from "react";
import Square from "./Square";
import Button from '@mui/material/Button';

const Tictactoe = () =>{
    const [turn, setTurn] = useState('O');
    const [newGame, setNewGame] = useState(0);

    useEffect(()=>{
        console.log("부모 리렌더링", newGame);
        setNewGame(0);
    },[newGame]);

    //turn 정해주는 함수
    const makeTurn = () => {
        console.log("makeTurn 호출");
        console.log(turn);
        if(turn === 'O') setTurn('X');
        else setTurn('O');
    };
    
    //게임 재시작 함수
    const playNewGame = () => {
        console.log("재시작가동");
        setNewGame(1);
        
    }

    return (
        <div>
            <div className="ui huge horizontal list">
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div className="ui huge horizontal list">
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div className="ui huge horizontal list">
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div>
                <Button onClick={playNewGame}>NewGame</Button>
            </div>
        </div>
    );
};

export default Tictactoe;