'use client';

import styled from 'styled-components';

interface Props {
  readonly onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly color?: string;
  readonly label: string;
  readonly width?: number;
}

const Container = styled.button<{ width?: number }>`
  width: ${({ width }) => width}px;
  color: #fff;
  height: 48px;
  background-color: #000;
  border-color: #000;
  border-style: solid;
  border-radius: 15px;
  box-sizing: border-box;
  &:hover {
    color: #fff;
    border-color: #000;
    cursor: pointer;
    border-style: solid;
    border-radius: 15px;
    border: 0;
    background-color: #ffaaa4;
  }
`;

export const Button = ({
  color = '#fff',
  label,
  onClick,
  width = 200,
}: Props) => {
  return (
    <Container color={color} onClick={onClick} width={width}>
      {label}
    </Container>
  );
};
