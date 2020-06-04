const actionMethods = {
    addNum: (state, action) => {
        console.log(action);
        
        state.num++;

        return state
    },
    login: (state, action) => {
        state.isLogin = true;
        action.num++;
        console.log(action.num);

        return state
    }
}

export default actionMethods;