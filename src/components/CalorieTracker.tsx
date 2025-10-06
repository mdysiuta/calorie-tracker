// Componente de contador de calorias

import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {

    const { caloriesConsumed, caloriesBurned, calorieDifference } = useActivity()

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
