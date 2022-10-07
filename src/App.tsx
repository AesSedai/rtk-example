import { useState } from "react"
import "./App.css"
import reactLogo from "./assets/react.svg"
import { decrement, increment, set } from "./slices/counterSlice"
import { useAppSelector, useAppDispatch } from './store/hooks'

function App() {
    const count = useAppSelector((state) => state.counter.count)
    const [newVal, setNewVal] = useState(0)
    const dispatch = useAppDispatch()

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewVal(parseInt(event.target.value))
    }

    const onClick = async () => {
        void dispatch(set(newVal))
    }

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>count is {count}</p>
                <button onClick={async () => void dispatch(increment())}>
                    Increment
                </button>
                <button onClick={async () => void dispatch(decrement())}>
                    Decrement
                </button>
                <div>
                    <input type="number" value={newVal} onChange={onChange} placeholder="Enter a new number here to set" ></input>
                    <button onClick={onClick}>Set</button>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
