import { UnitSelectorProps } from "@/types/types";

import classes from "@/components/UnitSelector.module.scss";

export default function UnitSelector(props: UnitSelectorProps) {
  const { convertTitle, unitId, unitsArray } = props;

  return (
    <label className={classes.label} htmlFor={unitId}>
      {convertTitle}
      <select name={unitId} id={unitId}>
        {unitsArray.map(unit => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </label>
  );
}
