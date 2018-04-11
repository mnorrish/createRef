import createRef from 'createref';
import * as React from 'react';

// An example component which has a ref for a rendered HTML DIV element

export default class Example1 extends React.Component {
  // assign the ref to the component instance
  private exampleRef = createRef<HTMLDivElement>();

  componentDidMount() {
    // the element can be accessed on the current property of the ref
    console.log(this.exampleRef.current);
  }

  render() {
    // pass the ref to the rendered element
    return <div ref={this.exampleRef} />;
  }
}
