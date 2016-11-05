import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    names: []
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props !== nextProps ||
      this.state !== nextState
    )
  }

  componentDidMount() {
    this.setState({
      names: [
        'Sarawut',
        'SirGuys'
      ]
    })
  }

  addName = (name) => {
    this.setState({
      names: [...this.state.names, name]
    })
  }

  render() {
    return (
      <div>
      <FormComponent
        addName={this.addName} />
      <NamesComponent
        names={this.state.names} />
      </div>
    )
  }
}

class FormComponent extends Component {
  state = {
    inputText: ''
  }

  componentDidMount() {
    this.refs.input.focus()
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      this.props.addName(this.state.inputText)
      this.clearField()
    }
  }

  handleKeyChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  clearField = () => {
    this.setState({ inputText: '' })
  }

  render() {
    return (
      <input
        ref="input"
        type="text"
        value={this.state.inputText}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleKeyChange}
      />
    )
  }
}

//Stateless
const NamesComponent = ({ names }) => (
  <ul>
    {names.map(
      (name, index) =>
        <NameComponent
          key={index}
          name={name}
        />
      )
    }
  </ul>
)

NamesComponent.defaultProps = {
  names: []
}

const NameComponent = ({ name }) => (
  <li>{name}</li>
)

export default App;
