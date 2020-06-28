import React from 'react';
import './Container.css';
import Input from '../Input/Input';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <Input />
      </div>
    );
  }
}
