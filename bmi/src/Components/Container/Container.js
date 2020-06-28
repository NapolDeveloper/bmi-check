import React from 'react';
import './Container.css';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <div>test</div>
        <div>test</div>
      </div>
    );
  }
}
