import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoButton from './TodoButton';

describe('TodoTable', () => {
  it('컴포넌트 TodoButton은 TodoButton을 렌더한다.', () => {
    render(<TodoButton>Add</TodoButton>);
  });
  it('컴포넌트 TodoButton은 Add 텍스트를 렌더한다.', () => {
    const { getByText } = render(<TodoButton>Add</TodoButton>);
    getByText('Add');
  });
});
