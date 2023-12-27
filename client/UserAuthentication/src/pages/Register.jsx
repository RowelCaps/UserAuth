import React from 'react';
import {Form, redirect} from 'react-router-dom';

export async function action({request}){
    const formData = await request.formData();

    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get('password'),
        passwordConfirmation: formData.get('passwordConfirmation')
    };

    try{
        const res = await fetch('http://localhost:3000/api/register', {
            method: "post",
            credentials: 'include',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })

        if(res.ok){

        }
    } catch(err) {
        
    }
}

export default function Register(){
    return (
        <main>
            <Form method='post'>
                <input type ='text' id ='name' name='name'/>
                <input type ='email' id ='email' name='email'/>
                <input type='password' id ='password' name='password'/>
                <input type='password' id ='passwordConfirmation' name='passwordConfirmation'/>
                <button type="submit">Register</button>
            </Form>
        </main>
    )
}