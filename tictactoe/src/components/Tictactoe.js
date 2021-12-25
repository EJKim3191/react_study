import React, { useState, useEffect } from "react";
import Square from "./Square";
import Button from '@mui/material/Button';
import Turn from './Turn';

let gameMap = [[' ', ' ', ' '], 
                [' ', ' ', ' '],
                [' ', ' ', ' ' ]];
let winner = '';

const Tictactoe = () =>{
    const [turn, setTurn] = useState('O');
    const [newGame, setNewGame] = useState(0);

    useEffect(()=>{
        console.log("부모 리렌더링", newGame);
        setNewGame(0);
    },[newGame]);

    //turn 정해주는 함수
    const makeTurn = (key) => {
        console.log("makeTurn 호출");
        console.log(turn);
        if(turn === 'O') setTurn('X');
        else setTurn('O');

        gameMap[Math.floor(key/3)][key%3]=turn;
        console.log(gameMap);
        //게임 이기는지 판단하는 함수
        makeWinner(gameMap);
        
    };
    

    const makeWinner = (gMap) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(winner=='' && gameMap[Math.floor(a/3)][a%3]!=' ' && gMap[Math.floor(a/3)][a%3]===gMap[Math.floor(b/3)][b%3] && gMap[Math.floor(a/3)][a%3]===gMap[Math.floor(c/3)][c%3]){
                console.log("winner!!");
                winner = turn+'가 승리하였습니다!!!';
            }
        }
        
    }

    //게임 재시작 함수
    const playNewGame = () => {
        console.log("재시작가동");
        
        //state 초기화, map 초기화, winner 초기화
        setNewGame(1);
        winner = '';
        gameMap= [[' ', ' ', ' '], 
        [' ', ' ', ' '],
        [' ', ' ', ' ' ]];
        console.log(gameMap);
    }

    return (
        <div>
            <div>
                <Turn turn={turn}/>
            </div>
            <div className="ui huge horizontal list">
                <Square squareNum='0' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='3' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='6' value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div className="ui huge horizontal list">
                <Square squareNum='1' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='4' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='7' value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div className="ui huge horizontal list">
                <Square squareNum='2' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='5' value={turn} makeTurn={makeTurn} newGame={newGame} />
                <Square squareNum='8' value={turn} makeTurn={makeTurn} newGame={newGame} />
            </div>
            <div>
                <h3>{winner}</h3>
                <Button onClick={playNewGame}>NewGame</Button>
            </div>
            
        </div>
    );
};

export default Tictactoe;