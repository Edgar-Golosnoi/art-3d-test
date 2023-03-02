/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-label-var */
/* eslint-disable no-labels */
import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false)
  const [phone, setPhone] = useState('');
  const [nameDistry, setNameDistry] = useState('Name can\'t be empty');
  const [phoneDistry, setPhoneDistry] = useState('Phone can\'t be empty');
  const [phoneError, setPhoneError] = useState(false);

  const [comment, setComment] = useState('');

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



  const blurHandler = (e) => {
    switch (e.target.name) {
        case 'name':
          setNameError: (true)
          break;
        case 'phone':
          setPhoneError: (true)
          break;
  }
}

  return (
    <div>Form
      <form>
        <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text"/>
        {(nameDistry && nameError) && <div style={{color: 'blue'}}>{nameError}</div>}

        <input onChange={e => phoneNumber(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" type="text"/>
        {(phoneDistry && phoneError) && <div style={{color: 'blue'}}>{phoneError}</div>}
        
      
        <input onBlur={e => blurHandler(e)} name="comments" type="text"/>
        <button type="submit">Call me</button>
      </form>
    </div>
  );
}

