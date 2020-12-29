import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoInput from './TodoInput';

describe('TodoInput', () => {
  it('TodoInput을 렌더한다.', () => {
    const onInsert = jest.fn();
    render(<TodoInput onInsert={onInsert} />);
  });

  it('값을 변경하면 인풋 안에 값이 변경된다.', () => {
    const onInsert = jest.fn();
    const { getByPlaceholderText } = render(<TodoInput onInsert={onInsert} />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('input을 변경시키고 버튼을 클릭하면 onInsert 함수가 호출된다', () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoInput onInsert={onInsert} />,
    );
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('Add');
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});
