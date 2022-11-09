import React, {} from 'react';
import './App.css';

import Input from './components/input/InputComponent'
import Checkbox from './components/Checkbox/Checkbox';
import Avatar from './components/Avatar/Avatar';
import Typography from './components/Typography/Typography';
import Badge from './components/Badge/Badge';
import Toggle from './components/Toggle/Toggle';




const App: React.FC = () => {

  const[valuePassword, setValuePassword] = React.useState('')
  const[valueSelect, setValueSelect] = React.useState('')
  const[valueDate, setValueDate] = React.useState('')
  const [switchChecked, setSwitchCheked] = React.useState(false)
  
  const options = ['Sales менеджер', 'Product менеджер', 'Администратор']


  return (
    <div className="App">
      <section className='inputs'>
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
        size='L'
        onChange={e => setValueDate(e.target.value)}
        onClick={(str)=>setValueDate(str)}
      />
      </section>
      <Checkbox options={options} onChange={e=>console.log(e.target.checked)}/>
      <Avatar name='Jonny Depp' size='L' jobPosition='manager' email='taras.borsuk@yandex.ru'/>
      <section>
      <Typography variant='heading1'>Heading 1</Typography>
      <Typography variant='heading2'>Heading 2</Typography>
      <Typography variant='heading3'>Heading 3</Typography>
      <Typography variant='heading4'>Heading 4</Typography>
      <Typography variant='heading5'>Heading 5</Typography>
      <Typography variant='subtitleM'>Subtitle M</Typography>
      <Typography variant='subtitleS'>Subtitle S</Typography>
      <Typography variant='bodyL'>Body L</Typography>
      <Typography variant='bodyM'>Body M</Typography>
      <Typography variant='caption' className='small'>Caption</Typography>
      </section>
      <Badge count={100}>
      <div style={{width: '150px', height: '100px', backgroundColor: 'red'}}></div>
      </Badge>
      <Badge count={1} rounded={true}>
      <div style={{width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '50%'}}></div>
      </Badge>
      <Toggle checked={switchChecked} onChange={e => setSwitchCheked(e.target.checked)}/>
      <Toggle  onChange={e => console.log(e.target.checked)}/>
    </div>
  );
}



export default  App;
