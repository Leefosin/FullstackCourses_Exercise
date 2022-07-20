import {useEffect, useState} from 'react'
import React from "react";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
    const [Selected, setSelected] = useState(Math.floor(Math.random()*7));
    const [Points,setPoints] = useState([0, 0, 0, 0, 0, 0, 0,]);
    const [Max,setMax] = useState(5);
    useEffect(()=>{
        setMax(()=>{
            let max,newMax;
            max=Math.max(...Points);
            newMax=Points.indexOf(max);
            return newMax;
        });
    },[Points]);

    const Next = () =>{
        let a =Math.floor(Math.random()*7)
        if (a === Selected) {
            //console.log('a,' + a + ',beforeSelectedValue,' + Selected + ':continue');
            a=Next();
        }
        // else console.log('nowSelectedValue,' + a);
        return a;
    }

    const Chose =()=>{
        const m =Selected;
        const newPoints=[...Points];
        newPoints[m]+=1;
        setPoints(newPoints);
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <b>{anecdotes[Selected]}</b><br/>
            <>has {Points[Selected]} votes</><br/>
            <button onClick={()=>Chose()}>vote</button>
            <button onClick={()=>setSelected(Next)}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <b>{anecdotes[Max]}</b><br/>
            <>has {Points[Max]} votes</>
        </div>
    )
}

export default App;
