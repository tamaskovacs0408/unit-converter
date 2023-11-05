import { useState } from "react"
import ConverterResult from "./ConverterResult"

export default function ConverterForm() {
  const [mmUnit, setMmUnit] = useState(0)
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const fd = new FormData(event.currentTarget)
    const mm = fd.get('mm')

    if (mm && Number(mm) > 0) {
      setMmUnit(Number(mm))
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="mm">
          <input type="number" id="mm" name="mm" step={0.1}/>
        </label>
      </p>
      <button>Convert</button>
    </form>
    <p>{mmUnit} = {(mmUnit * 0.1).toFixed(2)} cm</p>
    </>
  )
}