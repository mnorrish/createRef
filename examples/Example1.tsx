import * as React from 'react';
import createRef from '..';

// An exmaple component which has a ref for a rendered HTML DIV element

export default class Example1 extends React.Component {
  exampleRef = createRef<HTMLDivElement>();

  componentDidMount() {
    console.log(this.exampleRef.current);
  }

  render() {
    return <div ref={this.exampleRef} />;
  }
}
