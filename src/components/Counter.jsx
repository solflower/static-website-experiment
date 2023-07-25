import { useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(0)

    function add(){
        setNum(prevNum => prevNum+1)
    }

    function sub(){
        setNum(prevNum => prevNum-1)
    }

    return (
        <div className='section'>
            <button onClick={sub} className='btn'>-</button>
            <p className='paragraph'>{num}</p>
            <button onClick={add} className='btn'>+</button>
        </div>
    )
}