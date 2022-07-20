const Header = ({course}) => {
    return <h1>{course}</h1>
}

const Part = ({part})=> {
    const {name,exercises}=part;
    return(
        <p>{name} {exercises}</p>
    )
}

const Content =({parts}) => (
        <>
            <Part part={parts[0]}/>
            <Part part={parts[1]}/>
            <Part part={parts[2]}/>
        </>
)
const Total = ({parts}) => (
    <>
        <p>Number of exercise {parts[0].exercises+parts[1].exercises
        +parts[2].exercises}</p>
    </>
)





const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}
export default App;
