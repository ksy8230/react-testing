import React, { useState } from 'react';
import AddButton from '../TodoButton/AddButton';

interface TodoInputProps {
  onInsert: (event: string) => void;
}

const TodoInput = ({ onInsert }: TodoInputProps): JSX.Element => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        placeholder="할 일을 입력하세요"
        value={value}
      />
      <AddButton>Add</AddButton>
    </form>
  );
};

export default TodoInput;
