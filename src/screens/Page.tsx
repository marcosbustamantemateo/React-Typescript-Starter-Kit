import React, { Component } from "react";

interface IProps {
}

interface IState {
}

export default class Page extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }


  render() {

    return (
      <div className="container">
          <h1>Page 1</h1>
      </div>
    );
  }
}
