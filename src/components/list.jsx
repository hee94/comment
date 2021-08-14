import React from 'react';
import styled from 'styled-components';
import ListCommnet from './listcommnet';

const Ullist = styled.ul`
    margin: 5% 0 0 0;
    padding: 0;
`

const List = (props) => {
    return(
        <Ullist>
            <ListCommnet />
        </Ullist>
    )
}

export default List;