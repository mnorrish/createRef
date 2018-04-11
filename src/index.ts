// This is a simple utility which emulates the React.createRef() function
// available in React 16.3.
// It allows callback refs to be created in an easier, more erognomic way with
// less boilerplate code.
// See https://reactjs.org/docs/refs-and-the-dom.html#creating-refs

// NOTE: this isn't the actual implemenation but rather an API compatible
//       version which creates a callback ref and can be used in the same way.
import * as React from 'react';

export type RefElement = React.Component | HTMLElement | null;

export interface IRef<E extends RefElement> {
  (element: E): void;
  current?: E;
}

export default function createRef<E extends RefElement>() {
  const ref: IRef<E | null> = (refElement: E | null = null) => {
    ref.current = refElement;
  };

  ref.current = null;

  // seal the object to prevent any extra properties from being added
  Object.seal(ref);

  return ref;
}
