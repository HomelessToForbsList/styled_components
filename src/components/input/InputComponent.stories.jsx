import InputComponent from './InputComponent'
import React from 'react'


export default {
  title: 'Input Component',
  component : InputComponent,
  argTypes: {
    type:{
      type: 'string',
      options: ['password', 'select', 'datepick'],
      control: {
        type: 'radio'
      }
    },
    // onChange: {
    //   action: "changed",
    //   onEmit: (e) => ({value: e.target.value}),
    // },
    // value: {
    //   type: "string",
    // },
  },
}
const Template = (args) => {
  const [value, setValue] = React.useState('')
  return <InputComponent value={value} onChange={(e) => setValue(e.target.value)}  {...args}/>
}

export const Password = Template.bind({})
// Password.args={
//   type: 'password',
//   //value: ''
// }
