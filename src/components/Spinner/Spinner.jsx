import { TailSpin } from 'react-loader-spinner';

export function Spinner() {
  return (
    <TailSpin
      height="40"
      width="40"
      radius="9"
      color="orange"
      ariaLabel="three-dots-loading"
    />
  );
}
