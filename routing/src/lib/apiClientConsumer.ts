import { User } from "@/model/user";

export async function getUser(id: number) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    return await res.json()
}


export async function deleteUser(id: number) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`,{
        method: 'DELETE'
    })
    const data = await res.json();
}

export async function getUsers() {
    const res = await fetch(`http://localhost:3000/api/users`)
    return await res.json()
}

export async function postUser(user: User | null) {
    if (user !== null) {
        const res = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
}