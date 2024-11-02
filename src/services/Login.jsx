const ENPOINT = 'http://localhost:3030';

export default async function login({email, password}) {
    return  fetch(`${ENPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
}