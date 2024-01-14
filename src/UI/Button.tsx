import { useContext } from 'react';
import { ButtonProps } from '../types';
import { SelectedUnitContext } from '../store/selectedUnitContext';

import classes from './Button.module.scss';

export default function Button(props: ButtonProps) {
  const { id, title } = props;

  const { handleUnitSelect } = useContext(SelectedUnitContext);

  return (
    <button className={classes.button} id={id} onClick={() => handleUnitSelect(id)}>
      {title}
    </button>
  );
}
