export const loadUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(rs => rs.json())
        .then(rs => {
            dispatch({
                type: 'LOAD_USERS',
                payload: rs
            })
        })
    }
}