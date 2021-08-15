import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';
import {toggle} from '../modules/comment';

const ListContainer = ({commentList, toggle}) => {
    return(
        <List list={commentList} ontoggle={toggle}/>
    )
}
const mapStateToProps = state => ({ 
    commentList : state.commentList,
});



export default connect  (mapStateToProps,
   { toggle })(ListContainer);