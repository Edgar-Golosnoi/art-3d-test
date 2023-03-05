/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-label-var */
/* eslint-disable no-labels */
import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false)
  const [phone, setPhone] = useState('');
  const [nameDistry, setNameDistry] = useState('Name can\'t be empty');
  const [phoneDistry, setPhoneDistry] = useState('Phone can\'t be empty');
  const [phoneError, setPhoneError] = useState(false);
  const [comment, setComment] = useState('');

  // ограничиваем ввод имени
  const nameHandler = (e) => {
    setName(e.target.value);
    const result = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!result.test(String(e.target.value).toLowerCase())) {
      setNameError('Name error')
    } else {
      setNameError('');
      console.log('Successfully validation name')
    }
  };



// проверяем валидацию номера телефона (только для российских номеров)
  function phoneNumber(e) {
    setPhone(e.target.value);
    let phoneno = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if(!phoneno) {
      setPhoneError('Not correct phone number')
    }
    if(e.target.value.length < 10 || e.target.value.length > 18) {
      setPhoneError('Phone cant be this length')
    } else {
      setPhoneError('')
      console.log('Successfully validation phone')
    }
  }


// задаем значение true в случае если введены правильно имя и телефон
  const blurHandler = (e) => {
    switch (e.target.name) {
        case 'name':
          setNameError: (true)
          break;
        case 'phone':
          setPhoneError: (true)
          break;
  }
};



// задаем смену градиента для линии HOT-COLD
document.addEventListener('mousemove', e => {
	const x = (e.clientX / window.screen.availWidth) * 150;
	const x2 = (e.clientX / window.screen.availWidth) * 45;
  const hr = document.getElementById("myHR");
	hr.style.background = `linear-gradient(90deg, hsl(${x}, 100%, 50%), hsl(${x2}, 50%, 50%)`;
});


  return (
    <div className="container">
      <div className="header"><h1>SEND A REQUEST</h1></div>

      <div className='services'><h2>Leave your contacts and we will contact you as soon as possible</h2>
      <div><label>SOMEBRR</label></div></div>

      <form className='project'>
        <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="NAME"/>
        {(nameDistry && nameError) && <div style={{color: 'white'}}>{nameError}</div>}
        <hr className="range" type="range" max='100' step='2' value='60'></hr>

        <input onChange={e => phoneNumber(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" type="text" placeholder="PHONE"/>
        {(phoneDistry && phoneError) && <div style={{color: 'white'}}>{phoneError}</div>}
        <hr className="range" type="range" max='100' step='2' value='60'></hr>
        
        <span>TEMP</span> 
        <h4 className='hot'>Hot</h4>
        <hr id="myHR" className="range" type="range" max='100' step='2' value='60'></hr>
        <h4 className='cold'>Cold</h4>

        <input onBlur={e => blurHandler(e)} name="comments" type="text" placeholder="COMMENTS"/>
        <h className="range" type="range" max='100' step='2' value='60'></h>

        <button className='submit' type="submit">Call me</button>
        <h4 className='privasy'>By pressing “Send” button 
        I agree with <strong><a href="#">PRIVACY POLICY</a></strong></h4>
      </form>
      <footer>© 2022 LUXURY RESIDENCE <h4 className='pryvacy-policy'>Privacy Policy</h4></footer>
    </div>
  );
}

