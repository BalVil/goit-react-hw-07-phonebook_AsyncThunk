import { SpinWrap, Spin } from './Spinner.styled';

export const Spinner = ({ size }) => {
  return (
    <SpinWrap>
      <Spin size={size} />
    </SpinWrap>
  );
};
