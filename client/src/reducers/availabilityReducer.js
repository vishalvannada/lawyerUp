
const initialState = {};
export default function(state = initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case 'GET_AVAIL':
            return action.payload;
        default:
            return state;
    }
}