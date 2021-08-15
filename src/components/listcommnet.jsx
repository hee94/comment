import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    width: 93.5%;
    list-style: none;
    margin : 0;
    padding: 1rem;
    border: 1px solid #999;
    display:flex;
    justify-content: space-between;
`
// const LikeBtn = styled.img`
// 프롭을 받아서 그걸로 display나 src값을 바꿔주면 될듯 커서포인트
// `

const ListCommnet = ({list}) => {

    const {text, user} = list;
    return(   
    <Li>
        <span>{user}</span>
        <span>{text}</span>
        <img src="img/heart.png" alt="좋아요" width="20px" /> 
         
     </Li> )
}
export default ListCommnet;