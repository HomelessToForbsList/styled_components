import RadioButton from "./RadioButton";

export default {
  title: 'RadioButton',
  component: RadioButton
}

export const Default = () => <RadioButton name='radio'  onChange={console.log}/>