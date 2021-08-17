import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import {toggle ,remove, update} from '../modules/comment';

const ListContainer = ({commentList, toggle,remove,update, updateText}) => {
    return(
        <List list={commentList} ontoggle={toggle}
         onupdate={update} onremove={remove} updatetext={updateText} />
    )
}
const mapStateToProps = state => ({ 
    commentList : state.commentList,
    updateText : state.updateText,
});



export default connect  (mapStateToProps,
   { toggle , remove, update })(ListContainer);