import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    
    list-style: none;
    margin : 0;
    padding: 1rem;
    border: 1px solid #999;
    display:flex;
    justify-content: space-between;
`
const Likebtn = styled.img`
    width: 20px;
    cursor: pointer;
`
//src={like ? "img/onheart.png" : "img/heart.png"}
const ListCommnet = ({list, ontoggle}) => {
    console.log(list.like)
    const {text, user, like, onupdate, onremove} = list;
    const onclick =(e)=>{
     ontoggle(list.id);
       
    }
    return(   
    <Li>
        <span>{user}</span>
        <span>{text}</span>
        <Likebtn src={like ? "img/onheart.png" : "img/heart.png"}  alt="좋아요" onheart={like} onClick={onclick} /> 
        {
            onremove && <button> 삭제 </button> 
        }
         
     </Li> )
}
export default ListCommnet;