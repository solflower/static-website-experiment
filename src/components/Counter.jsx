import { useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(0)
    const [things, setThings] = useState(["thing1", "thing2"])

    function add(){
        setNum(prevNum => prevNum+1)
    }

    function sub(){
        setNum(prevNum => prevNum-1)
    }

    function addThing(){
        setThings(prevThings => {
            return [...prevThings, `Thing${prevThings.length+1}`]
        })
    }

    return (
        <div>
            <div className='section'>
                <button onClick={sub} className='btn'>-</button>
                <p className='paragraph'>{num}</p>
                <button onClick={add} className='btn'>+</button>
            </div>
            <div className='section'>
                <div className = "cardv2">{things}</div>
                <button onClick={addThing} className='btn'>add</button>
            </div>
        </div>
    )
}