import { useContext } from 'react';
import { ButtonProps } from '../types';
import { SelectedUnitContext } from '../store/selectedUnitContext';

import LengthIcon from './LengthIcon';
import WeightIcon from './WeightIcon';
import VolumeIcon from './VolumeIcon';

import classes from './Button.module.scss';

export default function Button(props: ButtonProps) {
  const { id, title } = props;

  const { handleUnitSelect } = useContext(SelectedUnitContext);

  return (
    <button className={classes.selectorButton} id={id} onClick={() => handleUnitSelect(id)}>
      {title === 'Length' && <LengthIcon />}
      {title === 'Weight' && <WeightIcon />}
      {title === 'Volume' && <VolumeIcon />}
      <span>{title}</span>
    </button>
  );
}
