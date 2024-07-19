export function reducer(state, action) {
    switch (action.type) {
        case "+1":
            return state + 1
        case "-1":
            return state - 1
        case "+10":
            return state + 10
        case "-10":
            return state - 10
        case "+20":
            return state + 20
        case "-20":
            return state - 20
        case "input":
            return state + Number(action.payload)
        default:
            return state
    }
}