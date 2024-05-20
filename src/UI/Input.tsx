import { forwardRef } from 'react';
import { InputComponentType } from '../types';

const Input = forwardRef<HTMLInputElement, InputComponentType>(function(props, ref) {
    const { unitId, ...others } = props;
  return (
    <div>
      <label htmlFor={unitId}>
        <input id={unitId} {...others} ref={ref} min={0.01} />
      </label>
    </div>
  );
})

export default Input;