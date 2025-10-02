// Componente de formulario

import { categories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-4 m-4 py-4 p-12 border border-cyan-900 rounded-3xl">
        <div>
            <label htmlFor="category" className="text-cyan-900 font-bold">Categoría</label><br/>
            <select
                className="py-1 px-2 my-3 w-full border border-slate-300 rounded-3xl"
                id="category"
                name="category"
            >
                { categories.map(category => (
                    <option value={category.id}>{category.name}</option>
                )) }
            </select>
        </div>
        <div>
            <label htmlFor="activity" className="text-cyan-900 font-bold">Actividad</label><br/>
            <input
                placeholder="ej. comida, jugo de naranja, ensalada, ejercicio, pesas, bicicleta"
                className="py-1 px-2 my-3 w-full border border-slate-300 rounded-3xl"
                type="text"
                id="activity"
                name="activity"
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
            />
        </div>
        <div>
            <input
                type="submit"
                value="Guardar comida o ejercicio"
                className="bg-cyan-900 hover:bg-cyan-700 text-white uppercase font-bold py-2 px-4 rounded-2xl cursor-pointer w-full text-center"
            />
        </div>
    </form>
  )
}
