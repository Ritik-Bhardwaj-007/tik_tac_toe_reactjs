import React,{useState} from 'react';
import Square from './Square';

const Board= ()=>{
    const [state,setState]= useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn]= useState(true)

    const checkDraw= ()=>{
            for(let logic of state){
                if(logic===null){
                    return false;
                }
            }
            return true;
    }

    const checkWinner= ()=>{
        const winnerLogic= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for( let logic of winnerLogic){
            const [a,b,c]= logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    }
    const isWinner= checkWinner();
    const isDraw= checkDraw();
    const ClickHandler=(index)=>{
        if(state[index]!==null){
            return ;
        }
        const copystate=[...state]
        copystate[index]= isXTurn ? "X":"0";
        setState(copystate);
        setIsXTurn(!isXTurn);
      }
    return (
        <div className="board-container">
        <h4 className="turn"> {isXTurn ? <>Player X please Move </>: <> Player O please move</> }</h4>
            { isDraw? (<> Game Draw <button onClick={()=> setState(Array(9).fill(null))}>Play Again</button></> ):(<>
            {isWinner? (<> {isWinner} Won the Game <button onClick={()=> setState(Array(9).fill(null))}>Play Again</button></> ):(<>
            <div className="board-row">
                <Square onClick={()=>ClickHandler(0)} value={state[0]}/>
                <Square onClick={()=>ClickHandler(1)} value={state[1]}/>
                <Square onClick={()=>ClickHandler(2)} value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>ClickHandler(3)} value={state[3]}/>
                <Square onClick={()=>ClickHandler(4)} value={state[4]}/>     
                <Square onClick={()=>ClickHandler(5)} value={state[5]}/>
                </div>
            <div className="board-row">
                <Square onClick={()=>ClickHandler(6)} value={state[6]}/>
                <Square onClick={()=>ClickHandler(7)} value={state[7]}/>
                <Square onClick={()=>ClickHandler(8)} value={state[8]}/>
            </div>
            </>)}</>)}
        </div>
    );
}
export default Board;