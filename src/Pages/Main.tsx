import React, { useState } from 'react';
import TodoInput from '../Components/TodoInput/TodoInput';
import TodoTable from '../Components/TodoTable';

const mockData = [
  {
    id: 1,
    text: 'TDD 배우기',
    done: true,
  },
  {
    id: 2,
    text: 'react-testing-library 사용하기',
    done: true,
  },
];

const Main = (): JSX.Element => {
  const [data, setData] = useState(mockData);

  const handleAdd = (text: string) => {
    const newTodo = {
      id: data.length + 1,
      text,
      done: true,
    };
    setData(data.concat(newTodo));
    console.log(data);
  };

  const handleRemove = (id: number) => {
    setData(data.filter((v) => v.id !== id));
  };

  return (
    <div>
      <TodoInput onInsert={handleAdd} />
      <TodoTable data={data} onRemove={handleRemove} />
    </div>
  );
};

export default Main;
