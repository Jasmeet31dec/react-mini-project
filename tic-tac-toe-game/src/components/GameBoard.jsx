import { useState } from "react";



export default function GameBoard({ onSelectSquare, board }) {

    /*const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClick(rowIndx,colIndx){
        setGameBoard( (prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map( (innerArray) => [...innerArray])];
            updatedBoard[rowIndx][colIndx]= activePlayerSymbol;
            return updatedBoard;
        });

        onSelect();
    }*/


    return (
        <ol id="game-board">
            {board.map((row, rowIndx) => (
                <li key={rowIndx}>
                    <ol>
                        {row.map((playerSymbol, colIndx) => (
                            <li key={colIndx}>
                                <button onClick={() => onSelectSquare(rowIndx, colIndx)} disabled={ playerSymbol !== null }>
                                    {playerSymbol}
                                </button>
                            </li>)
                        )}
                    </ol>
                </li>)
            )}
        </ol>
    );
}