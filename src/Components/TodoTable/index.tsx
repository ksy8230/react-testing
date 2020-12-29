import React from 'react';
import TodoButton from '../TodoButton/TodoButton';

type TodoObjectType = {
  id: number;
  text: string;
  done: boolean;
};

interface TodoDataProps {
  data: Array<TodoObjectType>;
  onRemove: (event: number) => void;
}

const TodoTable = ({ data, onRemove }: TodoDataProps): JSX.Element => {
  return (
    <table>
      <tbody>
        {data.map((v) => (
          <tr key={v.id}>
            <td>
              <span>{v.text}</span>
              <TodoButton onClick={() => onRemove(v.id)}>Remove</TodoButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
