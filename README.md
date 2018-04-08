# createRef

[![Build Status](https://travis-ci.org/mnorrish/createRef.svg?branch=master)](https://travis-ci.org/mnorrish/createRef)
[![npm version](https://badge.fury.io/js/createref.svg)](https://badge.fury.io/js/createref)

A `React.createRef` emulation for React < 16.3

### Installation

`npm i --save createref`

### Usage

Usage is much the same as `React.createRef` except that `createRef` must be
imported separately because it is not available from the React package.

See [Creating Refs](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs)
in the official React documentation for further details.

```javascript
import React from 'react';
import createRef from 'createref';

class MyComponent extends React.Component {
  contructor() {
    super(props);
    this.myRef = createRef();
  }

  doSomething() {
    // the element can be accessed on the current property
    console.log(this.myRef.current);
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
```

[See the examples directory for more](examples)
