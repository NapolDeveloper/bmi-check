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
    const { height, weight } = this.state;
    if (e.target.name === 'height') {
      this.setState({ height: e.target.value });
    } else if (e.target.name === 'weight') {
      this.setState({ weight: e.target.value });
    }
    this.calculateBmi(height, weight);
  };

  calculateBmi = (height, weight) => {
    // console.log(`height : ${height} ||`)
    let bmiHeight = height / 100;
    let bmi = weight / (bmiHeight * bmiHeight);
    console.log(bmi);
  };

  render() {
    const { handleChange } = this;
    // const { height, weight } = this.state;
    return (
      <div className='input-wrap'>
        <input className='input-box' type='number' name='height' onChange={handleChange} placeholder='키 : ex) 175cm'></input>
        <input className='input-box' type='number' name='weight' onChange={handleChange} placeholder='몸무게 : ex) 65kg'></input>
      </div>
    );
  }
}
