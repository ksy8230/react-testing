import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from './index';

const sampleTodos = [
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

describe('TodoTable', () => {
  it('컴포넌트 TodoTable은 TodoTable을 렌더한다.', () => {
    render(<TodoTable data={[]} />);
  });
  it('컴포넌트 TodoTable은 여러개의 리스트를 렌더한다.', () => {
    const { getByText } = render(<TodoTable data={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });
});
