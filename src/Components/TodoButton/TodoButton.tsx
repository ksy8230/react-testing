import React from 'react';

interface TodoButtonProps {
  children: string;
  onClick?: (e: any) => void;
}

const TodoButton = ({ children, onClick }: TodoButtonProps): JSX.Element => {
  return <button onClick={onClick}>{children}</button>;
};

export default TodoButton;
