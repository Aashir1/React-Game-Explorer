import GitAction from '../action/searchUserAction';
import actionTypes from '../../constants/constant';
let defaultState = {
    allData : []
}

function StoreUser(state = defaultState, action){
    // console.log('decrement state: ', state);
    switch(action.type){
        case actionTypes.STORE_DATA:
            console.log(action.obj);
            return Object.assign({}, state, {allData : [...state.allData, action.obj]});
    
        case actionTypes.STORE_DATA_REQUEST:
            return Object.assign({}, state, {allData:[]});

        default:
            return state;
    }
}

export default StoreUser;