import { ButtonProps } from '../types';

export default function Button(props: ButtonProps) {
  const { id, imageUrl, title } = props;

  return (
    <button id={id}>
      {/* <img src={imageUrl} alt={id} /> */}
      {title}
    </button>
  );
}
