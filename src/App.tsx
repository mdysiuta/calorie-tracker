import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"

function App() {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities])

    const userCanRestart = () => useMemo(() => state.activities.length > 0, [state.activities])

    return (
        <>
            <header className="bg-gradient-to-b from-blue-300 pt-4">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="uppercase font-black text-cyan-800 text-2xl">Contador de calorías</h1>
                    <button
                        className="bg-cyan-900 hover:bg-cyan-700 text-white uppercase font-bold py-2 px-4 rounded-2xl cursor-pointer text-sm disabled:opacity-50 disabled:hover:bg-cyan-900 disabled:cursor-auto"
                        disabled={!userCanRestart()}
                        onClick={() => dispatch({type: "restart-app"})}
                    >
                        Reiniciar app
                    </button>
                </div>
            </header>
            <div className="max-w-4xl mx-auto py-4">
                <Form
                    dispatch={dispatch}
                    state={state}
                />
            </div>
            <div className="p-10 mx-auto max-w-4xl">
                <ActivityList
                    activities={state.activities}
                    dispatch={dispatch}
                />
            </div>
        </>
    )
}

export default App
