import { useState } from "react"

function Counter() {
  const [history, setHistory] = useState([0])
  const [position, setPosition] = useState(0)

  const currentValue = history[position]

  function increment() {
    const newValue = currentValue + 1
    const updatedHistory = history.slice(0, position + 1)
    updatedHistory.push(newValue)
    setHistory(updatedHistory)
    setPosition(updatedHistory.length - 1)
  }

  function decrement() {
    const newValue = currentValue - 1
    const updatedHistory = history.slice(0, position + 1)
    updatedHistory.push(newValue)
    setHistory(updatedHistory)
    setPosition(updatedHistory.length - 1)
  }

  function undo() {
    if (position > 0) setPosition(position - 1)
  }

  function redo() {
    if (position < history.length - 1) setPosition(position + 1)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-600">Undo / Redo Counter</h1>

      <div className="text-6xl font-bold text-gray-800">{currentValue}</div>

      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          -
        </button>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={undo}
          disabled={position === 0}
          className={`px-6 py-3 rounded-lg shadow transition ${
            position === 0
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
          }`}
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={position === history.length - 1}
          className={`px-6 py-3 rounded-lg shadow transition ${
            position === history.length - 1
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Redo
        </button>
      </div>
    </div>
  )
}

export default Counter
