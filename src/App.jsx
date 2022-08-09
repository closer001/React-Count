import { useState } from "react"
import style from "./App.module.css"
import Button from "./Button"

function App(){
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={style.title}>
                <p>CONTADOR</p>
            </div>

            <div className={style.number}>
                <span>{count}</span>
            </div>

            <div className={style.buttons}>
                <Button onClick={() => {setCount(count - 1)}} title="DIMINUIR"/>


                <Button onClick={() => {setCount(0)}} title="RESETAR"/>


                <Button onClick={() => {setCount(count + 1)}} title="AUMENTAR"/>
            </div>
        </>
        )
}

export default App