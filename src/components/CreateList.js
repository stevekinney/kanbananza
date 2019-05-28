import React, { Component } from 'react';

class CreateList extends Component {
  state = { title: '' };

  get isValid() {
    const { title } = this.state;
    return !!title;
  }

  get isInvalid() {
    return !this.isValid;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onCreateList } = this.props;

    if (onCreateList) {
      onCreateList(this.state);
    }

    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form className="CreateList" onSubmit={this.handleSubmit}>
        <input
          className="CreateList-title"
          id="CreateList-title"
          name="title"
          onChange={this.handleChange}
          placeholder="New List Title"
          value={title}
        />
        <input
          className="CreateList-submit"
          type="submit"
          disabled={this.isInvalid}
        />
      </form>
    );
  }
}

export default CreateList;
