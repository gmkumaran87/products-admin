const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEMS":
            //    console.log(action.payload, state);
            return {...state, items: action.payload };
        default:
            throw new Error("no matching action type");
    }
};

export default reducer;