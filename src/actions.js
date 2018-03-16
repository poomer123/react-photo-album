export const loadUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_USERS',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_USERS_FAILED',
            payload: e.message
        }))
    }
}



export const loadAlbums = (userId) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(res => {
                if( res.ok ) {
                    return res
                }
                throw Error(res.status)
            })
            .then(rs => rs.json())
            .then(rs => {
                dispatch({
                    type: 'LOAD_ALBUMS',
                    payload: rs
                })
            })
        .catch( e => dispatch({
            type: 'LOAD_ALBUMS_FAILED',
            payload: e.message
        }))
    }
}