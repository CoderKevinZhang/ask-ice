import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      body: "",
      isShowed: true
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
      this.setState({
        isShowed: false
      });
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
        {this.state.isShowed ? 
          <form className="form-content" onSubmit={this.handleSubmit}>
            <div>
              Subject: <input type="text" size="60" name="subject" value={this.state.subject} onChange={this.handleChange} />
            </div>
            <textarea className="form-text-area" rows="10" cols="30" name="body" value={this.state.body} onChange={this.handleChange} placeholder="Enter content here..." />
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <Content state={this.state} />}
      </div>
    );
  }
}

const Content = (props) => (
  <div className='modal'>
        <h1>{props.state.subject}</h1>
        <h3>{props.state.body}</h3>
    </div>
  )

export default App;
