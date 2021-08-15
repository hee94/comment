import React from 'react';
import { connect } from 'react-redux';
import List from '../components/list';

const ListContainer = ({commentList}) => {
    return(
        <List list={commentList}/>
    )
}
const mapStateToProps = state => ({ 
    commentList : state.commentList,
});
export default connect(mapStateToProps,null)(ListContainer);