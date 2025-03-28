import { useState } from "react"

export default function Batsman(){
    const [rans, setRuns] = useState(0);
    const [sixes, setSixex] = useState(0)

    const handelSingle = ()=> {
        const updateRune = rans + 1;
        setRuns(updateRune);
    }

    const handelFour = ()=> {
        const updateRune = rans + 4;
        setRuns(updateRune)
    }

    const handelSix = () =>{
        const updateRune = rans + 6;
        const updateSixes = sixes + 1;
        setSixex(updateSixes)
        setRuns(updateRune)
    }
    return (
        <div>

            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
           
            {
                rans > 50 && <p>Your score: 50</p>
            }
            <h1>Score: {rans} </h1>
            <button onClick={handelSingle}>singles</button>
            <button onClick={handelFour}>four</button>
            <button onClick={handelSix}>six</button>
        </div>
    )
}