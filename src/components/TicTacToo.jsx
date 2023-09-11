import React, { useState } from 'react';
import './tictactoe.css';


const TicTacToo = () => {

  const [board, setBoard] = useState(Array(9).fill(''));
  const [move, setMove] = useState('X')
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);


  const click = (n) => {
    let squr = [...board]
    // Not again 
    if (board[n] !== "") {
      console.log("no")
      return
    }
    squr[n] = move
    setBoard(squr)


    // Show "X" , "O"
    setMove(move === 'X' ? 'O' : 'X');


    if (metchDraw(squr)) {
      setDraw(true)
      squr.fill("")
      setBoard(squr)
      return
    }

    if (playerWin(squr)) {
      setWinner(move);
      squr.fill("")
      setBoard(squr)
    }


  }

  const metchDraw = (board) => {
    let count = 0
    board.forEach(element => {
      if (element !== "") {
        count++
      }
    })

    if (count >= 9) {
      return true
    } else {
      return false
    }
  }

  const playerWin = (board) => {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    let flag = false;
    conditions.forEach(element => {
      if (board[element[0]] !== '' && board[element[1]] !== '' && board[element[2]] !== '') {


        if (board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) {
          flag = true;
        }
      }
    })

    return flag

  }

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setMove('X');
    setWinner(null);
    setDraw(false);
  };
  const matchDraw = () => {
    setBoard(Array(9).fill(''));
    // setMove('X');
    setDraw(false);
  };


  return (
    <div className='text-center abd'><h1>Tic <span>Tac</span> Toe</h1>

      {winner ? (
        <div className='pop-up'>
          Player {winner} wins!
          <button onClick={resetGame}>Play again</button>
        </div>
      ) : null}

      {draw ? (
        <div className='pop-up'>
          Match draw!
          <button onClick={resetGame}>Play again</button>
        </div>
      ) : null}

      <table>
        <tbody>
          <tr>
            <td className='td-1' onClick={() => { click(0) }}>{board[0]}</td>
            <td className='td-2' onClick={() => { click(1) }}>{board[1]}</td>
            <td className='td-3' onClick={() => { click(2) }}>{board[2]}</td>
          </tr>
          <tr>
            <td className='td-4' onClick={() => { click(3) }}>{board[3]}</td>
            <td className='td-5' onClick={() => { click(4) }}>{board[4]}</td>
            <td className='td-6' onClick={() => { click(5) }}>{board[5]}</td>
          </tr>
          <tr>
            <td className='td-7' onClick={() => { click(6) }}>{board[6]}</td>
            <td className='td-8' onClick={() => { click(7) }}>{board[7]}</td>
            <td className='td-9' onClick={() => { click(8) }}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TicTacToo;