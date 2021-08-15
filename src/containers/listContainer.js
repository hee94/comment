import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import {toggle ,remove} from '../modules/comment';

const ListContainer = ({commentList, toggle,remove}) => {
    return(
        <List list={commentList} ontoggle={toggle} onremove={remove}/>
    )
}
const mapStateToProps = state => ({ 
    commentList : state.commentList,
});



export default connect  (mapStateToProps,
   { toggle , remove})(ListContainer);