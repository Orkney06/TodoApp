import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todoの項目</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todo-title">タイトル</Label>
              <Input
                type="text"
                id="todo-title"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="タイトルを入力"
              />
            </FormGroup>
            <FormGroup>
              <Label for="todo-description">詳細</Label>
              <Input
                type="text"
                id="todo-description"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="詳細の入力"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                完了
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            保存
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}