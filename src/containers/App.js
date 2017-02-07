import React, { Component } from 'react';
import InputContainer from './InputContainer';
import {Link} from 'react-router';
import CityListContainer from './CityListContainer';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='menu'>
          <h1> Меню: </h1>
          <Link to='History'><button className='btn'>История запросов</button></Link>
          <Link to='Statistics'><button className='btn btn-primary'>Статистика</button></Link>
        </div>
        <h1> Введите название города </h1>
        <InputContainer/>
        <h2> Последние введённые:</h2>
        <CityListContainer/>
      </div>
    );
  }
}

export default App;
