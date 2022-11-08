import React, {} from 'react';
import './App.css';

import Input from './components/input/InputComponent'



const App: React.FC = () => {

  const[valuePassword, setValuePassword] = React.useState('')
  const[valueSelect, setValueSelect] = React.useState('')
  const[valueDate, setValueDate] = React.useState('')


  const options = ['qq', 'Second', 'Third', 'four', 'five']



  return (
    <div className="App">
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>Value: {valuePassword}</div>
      <Input
        type='password'
        value={valuePassword}
        size='M'
        errorMessage='invalid'
        onChange={e => setValuePassword(e.target.value)}
      />
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>Value: {valueSelect}</div>
      <Input
        type='select'
        value={valueSelect}
        options={options}
        size='M'
        onChange={e => setValueSelect(e.target.value)}
        onClick={e => {
          let target = e.target as HTMLInputElement
          if(target.textContent)setValueSelect(target.textContent)}
          }
      />
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>Value: {valueDate}</div>
      <Input
        type='datepick'
        value={valueDate}
        size='M'
        onChange={e => setValueDate(e.target.value)}
        onClick={(str)=>setValueDate(str)}
      />
    </div>
  );
}



export default  App;
