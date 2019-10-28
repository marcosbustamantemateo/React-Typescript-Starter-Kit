import React, { Component } from "react";

interface IProps {
}

interface IState {
}

export default class Page2 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }


  render() {

    return (
      <div className="container">
          <h1>Page 2</h1>
      </div>
    );
  }
}
