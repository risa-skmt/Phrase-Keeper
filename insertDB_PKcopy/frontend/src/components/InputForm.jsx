import React, { useState } from 'react'

function InputForm(props){

  const test = props.toInputForm.test;
  return(
    <div className="input_frame">
       <input type="text" name="inputPhrase"></input>
       <input type="submit" value="submit"></input>
       <p>{test}</p>
    </div>
  );
}

export default InputForm;
