import * as React from 'react';
import { render, wait } from 'react-testing-library';
import createRef from '..';

test('correctly assigns ref.current for rendered HTML element', () => {
  const ref = createRef<HTMLDivElement>();

  class A extends React.Component {
    myRef = ref;
    render() {
      return <div data-testid="x" ref={this.myRef} />;
    }
  }

  const { getByTestId } = render(<A />);

  expect(ref.current).toBe(getByTestId('x'));
});

test('correctly assigns ref.current for rendered component', () => {
  class A extends React.Component {
    render() {
      return <div />;
    }
  }

  const ref = createRef<A>();

  class B extends React.Component {
    myRef = ref;
    render() {
      return <A ref={this.myRef} />;
    }
  }

  const { container } = render(<B />);

  expect(ref.current).toEqual(expect.any(A));
});
