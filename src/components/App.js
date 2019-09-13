import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      body: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateInput()) {
      // fetch operation
    }

  }

  validateInput() {
    let validation = true;

    if (this.state.subject === "") {
      validation = false;
      alert("Subject cannot be NULL");
    }
    else if (this.state.body === "") {
      validation = false;
      alert("Body cannot be NULL");
    }

    return validation;
  }

  render() {
    return (
      <div className="App">
        <form className="form-content" onSubmit={this.handleSubmit}>
          <div>
            Subject: <input type="text" size="60" name="subject" value={this.state.subject} onChange={this.handleChange} />
          </div>
          <textarea className="form-text-area" rows="10" cols="30" name="body" value={this.state.body} onChange={this.handleChange} placeholder="Enter text here..." />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
