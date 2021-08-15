const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';

export const changeInput = (input) =>({
    type: CHANGE_INPUT,
    input
});
let i =4 ;
export const insert =(text) =>({
    type: INSERT,
    commentList:{
        id:i++,
        user : 'test',
        text,
        like:false,
        onupdate : true,
        onremove : true,
    }
});
export const toggle =id=>({
    type:TOGGLE,
    id
});
export const remove =id =>({
    type:REMOVE,
    id
});
export const update =id =>({
    type:UPDATE,
    id
});

const initState ={
    input:'',
    commentList : [
        {
            id:1,
            user : 'crella',
            text: '너무 귀여워..너무..',
            like: true,
            onupdate : false,
            onremove : false,
        },
        {
            id:2,
            user: 'Ursula',
            text: '이브이 진화 뭐로 시킬지 고민됩니다ㅠㅠ',
            like: false,
            onupdate : false,
            onremove : false,
        },
        {
            id: 3,
            user:'natasha',
            text: '좋은듯',
            like: false,
            onupdate : false,
            onremove : false,
        },
    ]
};

const commentlist =(state = initState, action)=>{
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return{
                ...state,
                commentList : state.commentList.concat(action.commentList)
            };
        case TOGGLE :
            return{
                ...state,
                commentList: state.commentList.map(list => list.id === action.id?{...list, like: !list.like} : list)
            };
        case REMOVE :
                return{
                    ...state,
                    commentList: state.commentList.filter(list => list.id !== action.id)
                };
        case UPDATE :
                return {
                    ...state,

                }
            default:
                return state;
    }
}

export default commentlist;