import React, {} from 'react';
import './App.css';

import Input from './components/input/index'


const App: React.FC = () => {

  const[valuePassword, setValuePassword] = React.useState('')
  const[valueSelect, setValueSelect] = React.useState('')
  const[valueDate, setValueDate] = React.useState('')
  const [error, setError] = React.useState(false)

  React.useEffect(()=>{
    if(valuePassword === 'qq') setError(true)
    else setError(false)
  }, [valuePassword])

  const options = ['qq', 'Second', 'Third']



  return (
    <div className="App">
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>{valuePassword}</div>
      <Input
        type='password'
        value={valuePassword}
        error={error}
        options={options}
        onChange={e => setValuePassword(e.target.value)}
      />
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>{valueSelect}</div>
      <Input
        type='select'
        value={valueSelect}
        error={error}
        options={options}
        onChange={e => setValueSelect(e.target.value)}
        onClick={e => {
          let target = e.target as HTMLInputElement
          if(target.textContent)setValueSelect(target.textContent)}
          }
      />
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>{valueDate}</div>
      <Input
        type='datepick'
        value={valueDate}
        disabled={true}
        error={error}
        options={options}
        onChange={e => setValueDate(e.target.value)}
        onClick={(str)=>setValueDate(str)}
      />
    </div>
  );
}



export default  App;
