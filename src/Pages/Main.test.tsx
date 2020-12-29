import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';
import TodoButton from '../Components/TodoButton/TodoButton';

describe('Main', () => {
  it('컴포넌트 Main은 Main을 렌더한다.', () => {
    render(<Main />);
  });

  it('"Remove" 텍스트를 가진 버튼을 렌더한다', () => {
    const { getByText } = render(<TodoButton>Remove</TodoButton>);
    getByText('Remove');
  });

  it('리스트를 삭제한다', () => {
    const { getByText } = render(<Main />);
    const todoText = getByText('TDD 배우기');
    const targetButton = todoText.nextSibling as HTMLButtonElement;
    fireEvent.click(targetButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
