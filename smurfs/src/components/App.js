import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  onFormSubmit = () => {
    this.props.addSmurf({name: this.state.name, age: this.state.age, height: this.state.height});
    this.setState({name: '', age: '', height: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Height"
            onChange={this.onInputChange}
          />
          <button type="submit">Add Smurf</button>
        </form>
        <ul>{this.props.smurfs.map(smurf => <li>{smurf.name}</li>)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
