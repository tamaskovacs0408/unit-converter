import React from 'react';
import { UnitOption } from "@/types/types";
import classes from "@/components/UnitSelector.module.scss";

interface UnitSelectorProps {
  convertTitle: string;
  unitId: string;
  unitsArray: Array<UnitOption | string>;
  value?: string;
  // eslint-disable-next-line no-unused-vars, no-undef
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function UnitSelector({
  convertTitle,
  unitId,
  unitsArray,
  value,
  onChange,
}: UnitSelectorProps) {
  return (
    <div>
      <label className={classes.label} htmlFor={unitId}>{convertTitle}</label>
      <select name={unitId} id={unitId} value={value} onChange={onChange}>
        {unitsArray.map((unit) => {
          if (typeof unit === 'string') {
            return (
              <option key={unit} value={unit}>
                {unit}
              </option>
            );
          }
          const unitOption = unit as UnitOption;
          return (
            <option key={unitOption.value} value={unitOption.value}>
              {unitOption.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
