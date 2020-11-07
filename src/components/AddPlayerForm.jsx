import React, {useRef, useState} from "react";

function AddPlayerForm(props){
  const [value,setValue] = useState( '');

  const formRef = useRef(null);
  const textRef = useRef(null);


  const handleValueChange = (e) =>{
    setValue(e.target.value);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('handleSubmit')
    //text 노드에 접근 하는 방법
    const form = formRef.current;
    const player = textRef.current; //document.getElementById(id)
    console.log(form.checkValidity()); //폼내의 모든 입력 validation을 체크
    console.log(player.validity.valid) //입력의 9가지 validation 을 체크
    if(!form.checkValidity()){
      //invalid 폼을 찾아서 에러문구 표시
      return;
    }

    props.addPlayer(value);
    setValue('');
  }

    return(
      <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
        <input type="text"
               ref={textRef}
               className="input"
               placeholder="enter a player's name"
               value={value}
               onChange={handleValueChange}
               required/>
        <input  type="submit" className="input" value="Add Player"/>
      </form>
    );

}

export default AddPlayerForm;