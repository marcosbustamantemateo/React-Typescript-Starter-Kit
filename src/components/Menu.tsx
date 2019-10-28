import React, { Component } from "react";
import { Drawer } from "rsuite";
import { Link } from "react-router-dom";
import { items } from "../constants/MenuItems";
import { StringsUtils } from "../utils/StringsUtils";

interface IProps {
  show: boolean;
  place: Places;
  handle: any;
}

interface IState {}

const menuStyle = {
  width: "250px"
};

export default class Menu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    const { show, place, handle } = this.props;

    return (
      <Drawer style={menuStyle} show={show} placement={place} onHide={handle}>
        <Drawer.Header>
          <Drawer.Title>Menu</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          {items.map(element => (
            <Link
              key={element.name}
              className="menuItems"
              to={element.path}
              onClick={handle}
            >
              {StringsUtils.firstLetterUpperCase(element.name)}
            </Link>
          ))}
        </Drawer.Body>
        <Drawer.Footer></Drawer.Footer>
      </Drawer>
    );
  }
}

type Places = "left" | "right" | "top" | "bottom";
