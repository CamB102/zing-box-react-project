import actionTypes from "../action/actionTypes";

const initState = {
    homeData: [],
    test: 'Hello 123'
}
//action is the request from view
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state
        
        default:
            return state
    }
}

export default appReducer