import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <>
            <header className="bg-gradient-to-b from-blue-300 pt-4">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="uppercase font-black text-cyan-800 text-2xl">Contador de calorías</h1>
                    <button>Placeholder</button>
                </div>
            </header>
            <div className="max-w-4xl mx-auto py-4">
                <Form
                    dispatch={dispatch}
                />
            </div>
        </>
    )
}

export default App
