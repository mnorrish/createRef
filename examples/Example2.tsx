import * as React from 'react';
import createRef from '..';
import Example1 from './Example1';

// An example component which has a ref for a rendered React component

export default class Example2 extends React.Component {
  exampleRef = createRef<Example1>();

  componentDidMount() {
    console.log(this.exampleRef.current);
  }

  render() {
    return <Example1 ref={this.exampleRef} />;
  }
}
