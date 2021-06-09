getAllUserData () => {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.users)
    .catch(console.log('error'))
}