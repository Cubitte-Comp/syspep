const ENDPOINT = 'http://localhost:3030';

export async function getUsers() {
    return  fetch(`${ENDPOINT}/users`);
}

export async function updateUser(id, role, status) {
    return fetch(`${ENDPOINT}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            typeuser: parseInt(role),
            state: status
        })
    });
}