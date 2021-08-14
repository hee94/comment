import React from 'react';
import styled from 'styled-components';

const Btnstyle = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: #fff;
    outline: none;
    cursor: pointer;
    background-color: #333;
    transition: all 0.3s;
 
  &:hover {
    background-color: #999;
  `

const Button = ({btn}) => {
    return(
      <Btnstyle>{btn}</Btnstyle>
    )
}

export default Button;