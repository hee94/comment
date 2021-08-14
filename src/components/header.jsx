import React from 'react';
import { memo } from 'react';
import styled from 'styled-components';

const Headerstyle = styled.header`
    width : 100% ;
    background-color: #f46496;
    margin : 0;
    padding : 1rem;
`
const Titile = styled.h1`
        margin: 0 0 0 2rem;
        color:#fff;
`

const Header = memo((props) => (
      <Headerstyle >
          <Titile >PoKet Monster</Titile>
      </Headerstyle>
    ));

export default Header;