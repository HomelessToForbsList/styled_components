import React from 'react';
import './App.scss';

import Input from './components/input/InputComponent'
import ListComponent from './components/ListComponent/ListComponent';
import Avatar from './components/Avatar/Avatar';
import Typography from './components/Typography/Typography';
import Badge from './components/Badge/Badge';
import SideBar from './components/SideBar/SideBar';


const App: React.FC = () => {

  const [container1, setContainer1] = React.useState(false)
  const [sideBar, setSideBar] = React.useState(true)


  const [valuePassword, setValuePassword] = React.useState('')
  const [valueSelect, setValueSelect] = React.useState('')
  const [valueDate, setValueDate] = React.useState('')
  const inputOptions = ['Sales manager', 'Prodact manager', 'Administrator']
  const [checkOptions, setCheckOptions] = React.useState([
    {option: 'Sales менеджер', cheked: false},
    {option: 'Product менеджер', cheked: false},
    {option: 'Администратор', cheked: false},
  ])
  const [radioOptions,setRadioOptions] = React.useState([
    {option: 'Sales менеджер', cheked: true},
    {option: 'Product менеджер', cheked: false},
    {option: 'Администратор', cheked: false},
  ])
  const [toggleOptions, setToggleOptions] = React.useState([
    {option: 'Sales менеджер', cheked: false},
    {option: 'Product менеджер', cheked: false},
    {option: 'Администратор', cheked: false},
  ])

  const setCheck = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const options = checkOptions.map(el=> {
      if(el.option === e.target.value) el.cheked = e.target.checked
      return el
    })
    setCheckOptions(options)
  }

  const setRadio = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const options = radioOptions.map(el=> {
      if(el.option === e.target.value) el.cheked = e.target.checked
      else el.cheked = false
      return el
    })
    setRadioOptions(options)
  }

  const setTogle = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const options = checkOptions.map(el=> {
      if(el.option === e.target.value) el.cheked = e.target.checked
      return el
    })
    setToggleOptions(options)
  }

  //console.log(checkOptions)
  //console.log(radioOptions)
  //console.log(toggleOptions)

  return (
    <div className="App">
      <div className='buttons'>
        <button onClick={()=> setContainer1(prev=>!prev)}>Container 1</button>
        <button onClick={()=> setSideBar(prev=>!prev)}>SideBar</button>
      </div >
      {container1 &&
      <div className='container1'>
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
        options={inputOptions}
        size='M'
        onChange={e => setValueSelect(e.target.value)}
        onClick={e => {
          if(typeof e !== 'string'){
            let target = e.target as HTMLInputElement
            if(target.textContent)setValueSelect(target.textContent)}
          }
          }
      />
      <div style={{padding: '15px', margin: '10px', border: '2px solid blue', width: '200px'}}>Value: {valueDate}</div>
      <Input
        type='datepick'
        value={valueDate}
        size='L'
        onChange={e => setValueDate(e.target.value)}
        onClick={(str)=>{if(typeof str === 'string') setValueDate(str)}}
      />
      </section>
      <section className='list-components'>
      <ListComponent
      type='checkbox'
      options={checkOptions.map(el => el.option)}
      onChange={e=>setCheck(e)}
      />
      <ListComponent
      type='radio'
      options={radioOptions.map(el => el.option)}
      defaultCheckedElement={radioOptions.filter(el => el.cheked)[0].option}
      onChange={e => setRadio(e)}
      />
      <ListComponent
      type='toggle'
      options={toggleOptions.map(el => el.option)}
      onChange={e=>setTogle(e)}
      />
      </section>
      <Avatar name='Jonny Depp' size='L' jobPosition='manager' email='taras.borsuk@yandex.ru'/>
      <section className='typography'>
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
      <section className='badge'>
      <Badge count={100}>
      <div style={{width: '150px', height: '100px', backgroundColor: 'red'}}></div>
      </Badge>
      <Badge count={1} rounded={true}>
      <div style={{width: '100px', height: '100px', backgroundColor: 'red', borderRadius: '50%'}}></div>
      </Badge>
      </section>
      </div>}
      {sideBar &&
      <div className='sidebar-container'>
        <SideBar/>
      </div>}
    </div>
  );
}



export default  App;
