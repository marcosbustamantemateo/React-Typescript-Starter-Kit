import React, { Component } from "react";
import { Button } from "rsuite";
import { Icon } from "rsuite";
import SearchModal from "./SearchModal";

interface IProps {
  handleMenu: any;
}

interface IState {
  open: boolean;
}

export default class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { handleMenu } = this.props;
    const { open } = this.state;

    return (
      <div className="header">
        <Button className="buttonMenu" appearance="ghost" onClick={handleMenu}>
          <Icon icon="bars" />
        </Button>

        <h1>Title</h1>

        <Button
          className="buttonSearch"
          appearance="ghost"
          onClick={this.handleModal}
        >
          <Icon icon="search" />
        </Button>

        <SearchModal show={open} handle={this.handleModal} />
      </div>
    );
  }
}
