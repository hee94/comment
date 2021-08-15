import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
    margin : 0;
    padding: 1rem;
    border: 1px solid #999;
    display:flex;
    justify-content: space-between;
    color: #333;
`
const Likebtn = styled.img`
    width: 20px;
    hegith: 20px;
    cursor: pointer;
`
const UserName = styled.span`
    width: 10%;
    font-weight: bold;
    border-right: 1px solid #999;
    text-align: center;
`
const Text = styled.span`
 flex:1;
 padding-left: 5%;
 text-align: left;
`
const Btnbox = styled.div`
 display: flex;
 margin-right: 3%;
`
const Button = styled.button`
padding: .25rem .5rem;
border: none;
color: #fff;
outline: none;
cursor: pointer;
background-color: #f46496;
transition: all 0.3s;
border-radius: 2px;
margin: 0 3px;

&:hover{
    background-color: #f7c0c5;
}
`
const ListCommnet = ({list, ontoggle, remove}) => {
    console.log(list.like)
    const {text, user, like, onupdate, onremove} = list;
    const onclick =(e)=>{
     ontoggle(list.id);
       
    }
    return(   
    <Li>
        <UserName>{user}</UserName>
        <Text>{text}</Text>
        {
            onremove && <Btnbox ><Button onClick={()=>remove(list.id)}> 삭제 </Button> <Button>수정</Button></Btnbox>
        }
         <Likebtn src={like ? "img/onheart.png" : "img/heart.png"}  alt="좋아요" onheart={like} onClick={onclick} /> 
         
     </Li> )
}
export default ListCommnet;