 const setCurrentUser = (data) => {
    console.log(data);
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data,
        
    }
}

export default setCurrentUser;