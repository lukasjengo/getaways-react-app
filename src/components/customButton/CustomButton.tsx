import React from 'react';
import { StyledButton, StyledButtonUnderline } from './styles';

interface CustomButtonProps {
  color?: 'primary' | 'secondary';
  isUnderlined?: boolean | undefined;
  size?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  isUnderlined,
  size,
  onClick,
  children,
  type,
}) => {
  return isUnderlined ? (
    <StyledButtonUnderline size={size} onClick={onClick} type={type}>
      {children}
    </StyledButtonUnderline>
  ) : (
    <StyledButton size={size} color={color} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
