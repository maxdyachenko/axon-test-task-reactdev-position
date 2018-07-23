const data = (state = [], action) => {
    switch(action.type) {
        case 'GET_DATA':
            return action.data;
        case 'ADD_ROW':
            return [...state, action.data];
        case 'DELETE_ROW':
            return state.filter( item => item.id !== action.id);
        default:
            return state;
    }
};

export default data