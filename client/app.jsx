import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceA: 'Calculus',
      choiceB: '',
      choiceC: '',
      submission: 'pending'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccessMessage = this.handleSuccessMessage.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      submission: 'pending'
    });
  }

  handleSuccessMessage() {
    if (this.state.submission === 'success') {
      return 'view';
    } else {
      return 'hidden';
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/input', req)
      .then(success => {
        this.setState({
          choiceA: '',
          choiceB: '',
          choiceC: '',
          submission: 'success'
        });
      });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const successMessage = this.handleSuccessMessage();

    return (
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <form onSubmit={handleSubmit}>
              <h3>Type in your course choices</h3>
              <input className="inputs" onChange={handleChange} type="text" name="choiceA"
              value={this.state.choiceA}/>
              <input className="inputs" onChange={handleChange} type="text" name="choiceB"
              value={this.state.choiceB}/>
              <input className="inputs" onChange={handleChange} type="text" name="choiceC"
              value={this.state.choiceC}/>
              <input className="submit-button" type="submit" value="Submit" />
            </form>
            <p className={`${successMessage}`}>Your choices have been successfully submitted to the database!</p>
          </div>
        </div>
      </div>
    );
  }
}
