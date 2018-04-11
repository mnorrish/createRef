import createRef from 'createref';
import * as React from 'react';
import Example1 from './Example1';

// An example component which has a ref for a rendered React component

export default class Example2 extends React.Component {
  // assign the ref to the component instance
  private exampleRef = createRef<Example1>();

  componentDidMount() {
    // the element can be accessed on the current property of the ref
    console.log(this.exampleRef.current);
  }

  render() {
    // pass the ref to the rendered component
    return <Example1 ref={this.exampleRef} />;
  }
}
