// Componente de contador de calorias

import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
    const caloriesConsumed  = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesBurned    = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    const calorieDifference = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Resúmen de calorías</h2>
            <div className="flex justify-between mt-4">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text="consumidas"
                />
                <CalorieDisplay
                    calories={caloriesBurned}
                    text="quemadas"
                />
                <CalorieDisplay
                    calories={calorieDifference}
                    text="de diferencia"
                />
            </div>
        </>
    )
}
