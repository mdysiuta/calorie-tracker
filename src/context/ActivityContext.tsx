import { createContext, useMemo, useReducer, type ReactNode } from "react";
import { activityReducer, initialState, type ActivityActions, type ActivityState } from "../reducers/activity-reducer";
import type { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityProviderProps = {
    children : ReactNode
}

type ActivityContextProps = {
    state : ActivityState
    dispatch : React.Dispatch<ActivityActions>
    caloriesConsumed : number
    caloriesBurned : number
    calorieDifference : number
    categoryName : (category: number) => string[]
    activityListIsEmpty : boolean
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)
    
    const {activities} = state

    const caloriesConsumed  = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesBurned    = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    const calorieDifference = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

    const categoryName = useMemo(() => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [activities])

    const activityListIsEmpty = useMemo(() => activities.length === 0, [activities])

    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            calorieDifference,
            categoryName,
            activityListIsEmpty,
        }}>
            {children}
        </ActivityContext.Provider>
    )
}