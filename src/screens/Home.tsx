import React, { Component } from "react";

interface IProps {}

interface IState {
  elements: Array<number>;
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      elements: []
    };
  }

  checkFixedHeader = () => {
    let newArray: Array<number> = [];
    for (let index = 0; index < 100; index++) {
      newArray.push(index);
    }
    this.setState({ elements: this.state.elements.concat(newArray) });
  };

  componentDidMount = () => {
    // Use this for check header fixed
    // this.checkFixedHeader();
  };

  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        {this.state.elements.map(element => (
          <p>{element}</p>
        ))}
      </div>
    );
  }
}
