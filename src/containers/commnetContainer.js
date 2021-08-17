import React from 'react';
import { connect } from 'react-redux';
import Comment from '../components/comment';
import UpdateComment from '../components/updateComment';
import { changeInput,insert,update ,changeComment } from '../modules/comment';

const CommnetContainer = ({changeInput,insert,input,update,updateText,updateId,changeComment}) => {
    return(
       <>
        {
            updateText ?  <UpdateComment updateId={updateId} onupdate={updateText} oninput={input}
             changeInput={changeInput} changeComment={changeComment} reset={update} /> 
             : <Comment onchange={changeInput} oninsert={insert} oninput={input} onupdate={update}/>
        }
        </>
        )
}
const mapStateToProps = state => ({ //스테이트값을 프롭스로 전달
    input : state.input,
    updateText : state.updateText,
    updateId : state.updateId,
});

const mapDispathchToPros = dispatch =>({
    changeInput: (value)=>{
      dispatch(changeInput(value));
    },
    insert: (list)=>{
        dispatch(insert(list))
    },
    update: (text ,id) =>{
        dispatch(update(text, id));
    },
    changeComment : (text, id) =>{
        dispatch(changeComment(text,id))
    },
});

export default connect(mapStateToProps,mapDispathchToPros)(CommnetContainer);