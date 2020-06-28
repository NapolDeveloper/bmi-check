import React from 'react';
import './Input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { handleChange } = this;
    return (
      <div className='input-wrap'>
        <input className='input-box' type='text' name='height' onChange={handleChange}></input>
        <input className='input-box' type='text' name='weight' onChange={handleChange}></input>
      </div>
    );
  }
}
