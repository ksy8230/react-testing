import React from 'react';

interface AddButtonProps {
  children: string;
}

const AddButton = ({ children }: AddButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default AddButton;
