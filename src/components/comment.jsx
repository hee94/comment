import React from 'react';
import styled from 'styled-components';
import Button from './common/button';

const CreateComment = styled.input `
        margin: 0;
        width:93.5%;
        padding: 1rem;
`

const Article = styled.article`
    display: flex;  
`

const Comment = (props) => {
    return(
        <Article>
            <CreateComment type="text" />
            <Button btn="등록"/>
        </Article>
    )
}
export default Comment;