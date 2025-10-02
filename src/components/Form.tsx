// Componente de formulario

import { useState } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"

export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category:   1,
        name:       '',
        calories:   0,
    })

    /**
     * Código que corre cuando se cambia la información de un input en el formulario.
     * @param e Elemento HTML del input que se está cambiando.
     */
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        /*
         * Verifica si el input que se está modificando corresponde a un atributo de
         * valor numérico, y convierte su valor a tipo 'number' antes de cambiar el state.
         */

        const numberFieldModified = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity, // evitar perder info que estaba en el state
            [e.target.id]: numberFieldModified ? +e.target.value : e.target.value // prefijar variable con '+' lo convierte en número
        })
    }

    /**
     * Verifica si la información ingresada en el formulario es válida para enviarse.
     * @returns `true` si la información en el formulario es válida, `false` si no lo es.
     */
    const activityIsValid = () => {
        // Verifica si nombre de actividad no está vacio o si calorías ingresadas son mayor a cero.

        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    /**
     * Cambia el texto del botón para guardar información dependiendo de la categoría seleccionada.
     * @returns El nuevo texto del botón.
     */
    const changeSubmitValue = () => {
        // Si la id de categoría es igual a la que corresponde a 'Comida', cambiar texto a comida y viceversa.

        const { category } = activity
        return category === 1 ? "Guardar comida" : "Guardar ejercicio"
    }

    return (
    <form className="space-y-4 m-4 py-4 p-12 border border-cyan-900 rounded-3xl">
        <div>
            <label htmlFor="category" className="text-cyan-900 font-bold">Categoría</label><br/>
            <select
                className="py-1 px-2 my-3 w-full border border-slate-300 rounded-3xl"
                id="category"
                name="category"
                value={activity.category}
                onChange={handleChange}
            >
                { categories.map(category => (
                    <option value={category.id}>{category.name}</option>
                )) }
            </select>
        </div>
        <div>
            <label htmlFor="name" className="text-cyan-900 font-bold">Actividad</label><br/>
            <input
                placeholder="ej. comida, jugo de naranja, ensalada, ejercicio, pesas, bicicleta"
                className="py-1 px-2 my-3 w-full border border-slate-300 rounded-3xl"
                type="text"
                id="name"
                name="name"
                value={activity.name}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="calories" className="text-cyan-900 font-bold">Calorías</label><br/>
            <input
                placeholder="ej. 300 o 500"
                className="py-1 px-2 my-3 w-full border border-slate-300 rounded-3xl"
                type="number"
                id="calories"
                name="calories"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                type="submit"
                value={changeSubmitValue()}
                className="bg-cyan-900 hover:bg-cyan-700 text-white uppercase font-bold py-2 px-4 rounded-2xl cursor-pointer w-full text-center disabled:opacity-50 disabled:hover:bg-cyan-900 disabled:cursor-auto"
                disabled={!activityIsValid()}
            />
        </div>
    </form>
    )
}
