import * as React from 'react';
import createRef from '..';

describe('createRef', () => {
  it('returns a unique function', () => {
    expect(createRef()).not.toBe(createRef());
  });

  it('returns a function with a current property of null', () => {
    const ref = createRef();

    expect(ref).toEqual(expect.any(Function));
    expect(ref.current).toBe(null);
  });

  describe('returned function', () => {
    it('sets the given div element to its own current property', () => {
        const ref = createRef<HTMLDivElement>();
        const a = document.createElement('div');

        ref(a);
        expect(ref.current).toBe(a);

        ref(null);
        expect(ref.current).toBe(null);
    });

    // TODO: add tests for React components
  });
});
