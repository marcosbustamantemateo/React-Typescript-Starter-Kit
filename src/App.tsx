import React, { Component } from "react";
import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { items } from "./constants/MenuItems";
import Header from "./components/Header";
import Message from "./utils/Message";

interface IProps {}

interface IState {
  open: boolean;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  notificationInfo = () => {
    Message.open(
      "info",
      "Check my website",
      "bottomRight",
      <a href="https://www.marcosbustamantemateo.com">
        www.marcosbustamantemateo.com
      </a>,
      0,
      undefined
    );
  };

  notificationCongratulations = () => {
    Message.open(
      "success",
      "Congratulations",
      "bottomRight",
      <p>You are using React Typescript Starter Kit</p>,
      0,
      () => this.notificationInfo()
    );
  };

  componentDidMount() {
    this.notificationCongratulations();
  }

  render() {
    const { open } = this.state;

    return (
      <div className="center">
        <Router>
          <Menu show={open} place={"left"} handle={this.handleMenu} />
          <Header handleMenu={this.handleMenu} />
          {items.map((element, count) => (
            <Route
              key={count}
              path={element.path}
              component={element.component}
            />
          ))}
        </Router>
      </div>
    );
  }
}

export default App;
