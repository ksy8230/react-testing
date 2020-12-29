import React from 'react';

interface AddButtonProps {
  children: string;
}

const TodoButton = ({ children }: AddButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default TodoButton;
