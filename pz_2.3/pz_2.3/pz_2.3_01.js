const axios = require('axios');

const getUsers = async (url) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (e) {
        console.log(e);
    }
}

const saveUser = async (url) => {
    try {
        const user = {
            name: 'Oleksandr',
            email: 'test@test.test',
        };

        const {data} = await axios.post(url, user);
        return data;
    } catch (e) {
        console.log(e);
    }
}

const putUser = async (url) => {
    try {
        const user = {
            id: 1,
            "name": "Oleksandr",
            "username": "Frunkad",
            "email": "test@test.test",
        };

        const {data} = await axios.put(`${url}/1`, user);
        return data;
    } catch (e) {
        console.log(e);
    }
}

const patchUser = async (url) => {
    try {
        const user = {
            "name": "Oleksandr",
            "username": "Frunkad",
            "email": "test@test.test",
        }

        const {data} = await axios.patch(`${url}/1`, user);
        return data;
    } catch (e) {
        console.log(e);
    }
}

const deleteUser = async (url) => {
    try {
        const {data} = await axios.delete(`${url}/1`);
        return data;
    } catch (e) {
        console.log(e);
    }
}

const url = 'https://jsonplaceholder.typicode.com/users';

const axiosExample = async (url) => {
    try {
        const get = await getUsers(url);
        const post = await saveUser(url);
        const put = await putUser(url);
        const patch = await patchUser(url);
        const deleteUs = await deleteUser(url);

        console.log('GET', get, '\n');
        console.log('POST', post, '\n');
        console.log('PUT', put, '\n');
        console.log('PATCH', patch, '\n');
        console.log('DELETE', deleteUs, '\n');
    } catch (e) {
        console.log(e);
    }
}

axiosExample(url).then();
