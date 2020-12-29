import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddButton from './AddButton';

describe('TodoTable', () => {
  it('컴포넌트 AddButton은 AddButton을 렌더한다.', () => {
    render(<AddButton>Add</AddButton>);
  });
  it('컴포넌트 AddButton은 Add 텍스트를 렌더한다.', () => {
    const { getByText } = render(<AddButton>Add</AddButton>);
    getByText('Add');
  });
});
