import React from 'react';
import styled from 'styled-components';


const CreateComment = styled.input `
        margin: 0;
        width:93.5%;
        padding: 1rem;
`
const Article = styled.article`
    display: flex;  
`

const Comment = ({onchange,oninsert,oninput}) => {
    const onChange =(e)=>{
        onchange(e.target.value);
    }
    const onsubmit =(e)=>{
        e.preventDefault();
         oninsert(oninput);
        onchange('');
    }
    return(
        <Article>
            <form onSubmit={onsubmit}>
            <CreateComment value={oninput}  type="text" onChange={onChange} placeholder="댓글을 작성 해주세요"/>
            <button type="submit" >등록</button>
            </form>
        </Article>
    )
}
export default Comment;