import React from 'react';
import styled from 'styled-components';
import ListCommnet from './listcommnet';

const Ullist = styled.ul`
    margin: 5% 0 0 0;
    padding: 0;
`

const List = ({list, ontoggle, onremove,onupdate ,updatetext }) => {
   
    return(
        <Ullist>
            {list.map(list => ( <ListCommnet list={list} 
            key={list.id} ontoggle={ontoggle} 
            remove={onremove} update={onupdate} updateText={updatetext} /> ))}  
        </Ullist>
    )
}

export default List;