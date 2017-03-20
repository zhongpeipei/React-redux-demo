import {ADD_TODO, REMOVE_TODO, SETCH_FILTER, SETCH_VALUE} from '../contants/actionTypes';

const initState = [
    {text:'learning react', id: new Date().getTime()},
    {text:'learning js', id: new Date().getTime()},
    {text:'learning es6', id: new Date().getTime()}
];

export default function todos(state=initState, action){
    switch(action.type){
        case ADD_TODO:{
            // [...Arr1, ...Arr2]拆分之后合成一个数组
            return [
                ...state,
                {
                    text:action.text,
                    id: new Date().getTime()
                }
            ];
        }
        case REMOVE_TODO:{           
            const index = state.findIndex(item => {
                return item.id === action.id;
            });

            if(index !== -1){
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }  
            return state;
        }
        case SETCH_FILTER:{
            const newList = [];
            state.forEach(item => {
                if(item.text.toLowerCase().indexOf(action.text.toLowerCase()) !== -1){
                    newList.push(item);
                }
            });
            return newList;
        } 
        case SETCH_VALUE:{
            const newList = [];
            state.forEach(item => {
                if(item.text.toLowerCase().indexOf(action.text.toLowerCase()) !== -1){
                    newList.push(item);
                }
            });
            return newList;
        } 
        // case 'GET_LIST':{
        //     action.data
        //     return state;
        // }
        default:
           return state;
    }
}