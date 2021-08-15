import React from 'react';
import { connect } from 'react-redux';
import Comment from '../components/comment';
import { changeInput,insert } from '../modules/comment';

const CommnetContainer = ({changeInput,insert,input}) => {
    return(
        <Comment onchange={changeInput} oninsert={insert} oninput={input}/>
    )
}
const mapStateToProps = state => ({ //스테이트값을 프롭스로 전달
    input : state.input,
});

const mapDispathchToPros = dispatch =>({
    changeInput: (value)=>{
      dispatch(changeInput(value));
      console.log('change')
    },
    insert: (list)=>{
        dispatch(insert(list))
    },
});

export default connect(mapStateToProps,mapDispathchToPros)(CommnetContainer);