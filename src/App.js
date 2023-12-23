import logo from './logo.svg';
import './App.css';
import Generator from './component/Generator';
import CheckBoxForm from './component/CheckBox';
import PasswordOptionsForm from './component/CheckBox';
import { useState } from 'react';
import Pass from './component/Pass';

function App() {
  const [length, setlength] = useState(8)
  const [pass,setpass] =useState('')
  const ReciveLength = (arg) =>{
    setlength(arg)
    console.log(length);
  }
  const activeCheck = (arg) =>{
    // console.log(arg);   //{includeUpperCase: true, includeLowerCase: true, includeNumbers: true, includeSymbols: true}
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/[]{}';

    let validChars = '';
    let password = '';

    if (arg.includeUpperCase) validChars += upperCaseChars;
    if (arg.includeLowerCase) validChars += lowerCaseChars;
    if (arg.includeNumbers) validChars += numberChars;
    if (arg.includeSymbols) validChars += symbolChars;

    if (!validChars) {
      alert('Please select at least one option.');
      return;
    }

     // You can customize the length of the password

    for (let i = 0; i <=length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setpass(password)
  }
  return (
    <>
    <Generator len={ReciveLength}></Generator>
    <Pass pass={pass}></Pass>
    <PasswordOptionsForm active = {activeCheck}></PasswordOptionsForm>
    </>
  );
}

export default App;
