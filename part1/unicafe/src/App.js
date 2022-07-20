import { useState } from 'react'
const Button =(props)=><button onClick={props.handleClick}>{props.text}</button>
const StatisticLine =({text,value}) =><tr><td>{text}</td><td>{value}</td></tr>
const Statistics = ({props})=>{
    return(
        <div>
            <table>
                <tbody>
            <StatisticLine text={'good'} value={props.good}/>
            <StatisticLine text={'neutral'} value={props.neutral}/>
            <StatisticLine text={'bad'} value={props.bad}/>
            <StatisticLine text={'All'} value={props.good+props.bad+props.neutral}/>
            <StatisticLine text={'average'} value={(props.good-props.bad)/(props.good+props.bad+props.neutral)}/>
            <StatisticLine text={'positive'} value={((props.good/(props.good+props.neutral+props.bad))*100+'%')}/>
                </tbody>
            </table>
        </div>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [Value,setValue] =useState(
        {
            good:0,
            neutral:0,
            bad:0,
        }
    )
    const goodClick =() =>setValue({...Value, good:Value.good+1,});
    const neutralClick =() => setValue({...Value, neutral:Value.neutral+1,});
    const badClick =() =>setValue({...Value, bad:Value.bad+1,});
    return <div>
        <h1>give feedback</h1>
        <Button handleClick={goodClick} text ="good"/>
        <Button handleClick={neutralClick} text="neutral"/>
        <Button handleClick={badClick} text="bad"/><br/>
        <h1>statistics</h1>
        {(Value.good+Value.neutral+Value.bad)?<Statistics props={Value}/>:
            (<h4>No feedback given</h4>)}

    </div>
}

export default App;
