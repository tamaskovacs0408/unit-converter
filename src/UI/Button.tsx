import { useContext } from 'react';
import { ButtonProps } from '../types';
import { SelectedUnitContext } from '../store/selectedUnitContext';

export default function Button(props: ButtonProps) {
  const { id, title } = props;

  const { handleUnitSelect } = useContext(SelectedUnitContext);

  return (
    <button id={id} onClick={() => handleUnitSelect(id)}>
      {title}
    </button>
  );
}
