import React, { Component } from "react";
import { Modal, Icon, InputGroup, Input } from "rsuite";

interface IProps {
  show: boolean;
  handle: any;
}

interface IState {}

const modalStyle = {
  textAlign: "center" as const,
  width: "250px"
};

export default class SearchModal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    const { show, handle } = this.props;

    return (
      <Modal show={show} onHide={handle} style={modalStyle}>
        <Modal.Header>
          <h4>What are you looking for?</h4>
        </Modal.Header>
        <Modal.Body>
          <InputGroup inside>
            <Input />
            <InputGroup.Button>
              <Icon icon="search" onClick={handle} />
            </InputGroup.Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    );
  }
}
