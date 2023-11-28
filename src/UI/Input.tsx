import { InputComponentType } from '../types';

export default function Input(props: InputComponentType) {
    const { unitId, ...others } = props;
  return (
    <div>
      <label htmlFor={unitId}>
        <input id={unitId} {...others} />
      </label>
    </div>
  );
}
