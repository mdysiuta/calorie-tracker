// Componente de display de calorías

type CalorieDisplayProps = {
    calories: number
    text:     string
}

export default function CalorieDisplay({calories, text}: CalorieDisplayProps) {
  return (
    <div className="p-5 m-3 bg-cyan-800 rounded-2xl text-white text-center gap-3 w-100">
        <div className="text-6xl font-bold">{calories}</div>
        <div className="text-2xl">{text}</div>
    </div>
  )
}
