export default (state = 0, action) =>
{
    switch (action.type) {
        case "UPDATE_COUNT":
            return state + 1;
        default:
            return state;
    }
}