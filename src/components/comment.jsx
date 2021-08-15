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

const Comment = ({onchange,oninsert,oninput}) => {
    const onChange =(e)=>{
        onchange(e.target.value);
    }
    const onsubmit =(e)=>{
        e.preventDefault();
        if(oninput !== ''){
            oninsert(oninput);
            onchange('');
        }else{ alert('댓글 내용을 입력해 주세요')}
      
    }
    return(
        <article>
            <Form onSubmit={onsubmit}>
            <CreateComment value={oninput}  type="text" onChange={onChange} placeholder="댓글을 작성 해주세요"/>
            <Button type="submit" >등록</Button>
            </Form>
        </article>
    )
}
export default Comment;