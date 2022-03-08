import ReactDOM from "react-dom"
import React from "react"

function App() {
    return (
        <div>
            <div>
                <label for="amount">ระบุวงเงินกู้</label>
            </div>
        </div>
    )
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app)