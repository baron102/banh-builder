function toggleListIndex(state, action) {
    const {id, name} = action.payload;
    const list = state.index_list[name];
    const position = list ? list.indexOf(id) : -1;
    const isIndex = position >= 0;
    // State mutations
    if (isIndex) {
        state.index_list[name].splice(position, 1);
    }
    if (!isIndex) {
        state.index_list[name] = state.index_list[name] || [];
        state.index_list[name].push(id);
    }
}

const reducer = {
    reducer: toggleListIndex,
}

export default reducer;