import { useState } from "react"

export default function ConverterForm() {
  const [lengthUnit, setLengthUnit] = useState(0)
  const [unit, setUnit] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const fd = new FormData(event.currentTarget)
    const units = fd.getAll('from-units');
    const data: {[key: string]: FormDataEntryValue | FormDataEntryValue[]} = Object.fromEntries(fd.entries());
    data.unitData = units;
    const selectedUnit = data.unitData[0].toString();

    setUnit(selectedUnit);

    const convertableUnit = Number(unit);

    if (convertableUnit && convertableUnit > 0) {
      setLengthUnit(convertableUnit)
    }
    console.log(data);
    
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="from-units">
      Convert from:
      <select name="from-units" id="from-units">
        <option value='mm'>mm</option>
        <option value='cm'>cm</option>
        <option value='dm'>dm</option>
        <option value='m'>m</option>
        <option value='km'>km</option>
      </select>
      </label>
      <p>
        <label htmlFor="length-unit">
          <input type="number" id="length-unit" name={unit} step={0.1}/>
        </label>
      </p>
      <button>Convert</button>
    </form>
    {/* <p>{mmUnit} = {(mmUnit * 0.1).toFixed(2)} cm</p> */}
    </>
  )
}