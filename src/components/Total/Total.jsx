const Total = ({exercises}) =>{
    const total = exercises.reduce((s, num) => s + num)
    return <p>Number of exercises {total}</p>
}

export default Total