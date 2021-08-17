import React from 'react';
import styled from 'styled-components';


const CreateComment = styled.input `
        margin: 0;
        width: 92%;
        padding: 1rem;
`
const Form = styled.form`
    display: flex;  
    justify-content : space-between;
    background-color : orange;
`
const Button = styled.button`
width: 8%;
border: none;
font-size: 1rem;
font-weight: bold;
padding: 0.25rem 1rem;
color: #fff;
outline: none;
cursor: pointer;
background-color: #f46496;

`

const UpdateComment = ({reset,onupdate,changeInput, updateId,changeComment,oninput}) => {
    const onchange =(e)=>{
        changeInput(e.target.value)
    }
    const onsubmit =(e)=>{
        e.preventDefault();
        if(oninput === ''){
            changeComment(onupdate,updateId)
        }else {changeComment(oninput,updateId)}
       
        changeInput('');
        reset('',0);
      
    }
    return(
        <article>
            <Form onSubmit={onsubmit}>
            <CreateComment type="text" defaultValue={onupdate} onChange={onchange} / >
            <Button type="submit" >수정</Button>
            </Form>
        </article>
    )
}
export default UpdateComment;