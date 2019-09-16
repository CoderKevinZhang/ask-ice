import React from 'react';
import Content from './Content';

import '../styles/App.css';

const ACCESS_URL = 'https://uswestcentral.services.azureml.net/workspaces/544c0b985fd74c98ab71cadee4755b8c/services/0b49d6c527f24641ad2c3cbafc20ecef/execute?api-version=2.0&details=true';
const ACCESS_TOKEN = 'nTSuHIR1nRO2A+UD21DgnAayU+1ptmCYqMiAz9cL2E6wG6ysR74/jFtja+k+9tOLEnovOx9ioNpDICu8RsXYzA==';

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
      this.setState({
        isShowed: false
      });
      
      let subject = this.state.subject;
      let body = this.state.body;

      // fetch operation
      fetch (ACCESS_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + {ACCESS_TOKEN},
          'Content-Type': 'application/json',
          'Content-Length': '450'
        },
        body: JSON.stringify({
          "Inputs": {
            "input": {
              "ColumnNames": [
                "subject",
                "body"
              ],
              "Values": [
                [
                  subject,
                  body
                ]
              ]
            }
          },
          "GlobalParameters": {}
        })
      })
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
          </form> :
          <Content state={this.state} />
        }
      </div>
    );
  }
}

export default App;
