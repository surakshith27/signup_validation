import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [emailC, setEmailC] = useState(false);
  const [passC, setPassC] = useState(false);
  const [confirmPassC, setConfirmPassC] = useState(false);

  const [allParams, setAllParams] = useState(false);

  const handeChangeE = (event) => { 
    const { value} = event.target;
      setEmail(value);
      emailerr(value);
  };
  const emailerr = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (regex.test(value)) {
      document.getElementById("emailErr").style.display = "none";
      document.getElementById("email").style.borderColor  = "green";
      setEmailC(true);
    } else {
      document.getElementById("emailErr").style.display = "block";
      document.getElementById("email").style.borderColor  = "red";
      setEmailC(false);
    }
  }

  const handeChangeP = (event) => { 
    const { value} = event.target;
    setPass(value);
    passerr(value);
    }

    const passerr = (value) => {
      
      if (value.length < 8) {
        document.getElementById("passErr").style.display = "block";
        document.getElementById("pass").style.borderColor  = "red";
        setPassC(false);
        console.log(value)
      } else {
        document.getElementById("passErr").style.display = "none";
        document.getElementById("pass").style.borderColor  = "green";
        setPassC(true);
        console.log(value)
        
      }
    }

    const signUp = (e) => {
      e.preventDefault();
      if(emailC,passC,confirmPassC == true){
        setAllParams(true);
        submit(true);
        console.log(allParams)
        console.log(emailC,passC,confirmPassC)
      }else{
        setAllParams(false);
        submit(false);
        console.log(emailC,passC,confirmPassC)
        console.log(allParams)
      }
    }

    const submit = (allParams) => {
      if(allParams == true){
        alert("Form submitted successfully!");
      }else {
        alert("Form cannot be submitted!");
      }
    }
    
  

   const handeChangeCp = (event) => { 
    const { value} = event.target;

    setConfirmPass(value);
      if (value === pass) {
        document.getElementById("confirmPassErr").style.display = "none";
        document.getElementById("confirm-pass").style.borderColor  = "green";
        setConfirmPassC(true);
      } else {
        document.getElementById("confirmPassErr").style.display = "block";
        document.getElementById("confirm-pass").style.borderColor  = "red";
        setConfirmPassC(false);
      }
    
  };


  return (
    <div className="App">

      <form className='form'>
      <p>Email:</p>
      <input type='text' name='email' id='email' onChange={handeChangeE}></input>
      <p className='error' id='emailErr'>Invalid email format</p>
      <p>Password:</p>
      <input type="password" name='password' id='pass' onChange={handeChangeP}></input>
      <p className='error' id='passErr'>Password must be at least 8 characters</p>
      <p>Confirm Password:</p>
      <input type="password" name='conform-password' id='confirm-pass' onChange={handeChangeCp}></input>
      <p className='error' id='confirmPassErr'>Password do not match</p>

      <button onClick={signUp}>Sign Up</button>

      </form>

    </div>
  );
}

export default App;
