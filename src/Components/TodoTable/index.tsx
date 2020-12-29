import React from 'react';

type TodoObjectType = {
  id: number;
  text: string;
  done: boolean;
};

interface TodoDataProps {
  data: Array<TodoObjectType>;
}

const TodoTable = ({ data }: TodoDataProps): JSX.Element => {
  return (
    <table>
      <tbody>
        {data.map((v) => (
          <tr key={v.id}>
            <td>{v.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
