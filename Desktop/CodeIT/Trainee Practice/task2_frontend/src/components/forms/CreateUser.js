import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const CreateUser = () => {
    const sendData = (user) => {
        console.log('user', user)
        if (!user.birthday) {
            user.birthday =  Date.now()
        }
        axios.post('http://localhost:4020/user', user).then(res => console.log(res))
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(event.target.elements.username.value)
    // }
    const onSubmit = (data) => sendData(data)
    const {register, handleSubmit, formState:{errors}} = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create User</h1>
        <div>
        <label htmlFor='username'>Username</label>
        <input {...register('username')} id='username' type='text'/>
        </div>
        <div>
        <label htmlFor='firstname'>Firstname</label>
        <input {...register('firstname')} id='firstname' type='text'/>
        </div>
        <div>
        <label htmlFor='lastname'>Lastname</label>
        <input {...register('lastname')} id='lastname' type='text'/>
        </div>
        <div>
        <label htmlFor='email'>Email</label>
        <input  {...register('email')} id='email' type='email'/>
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input {...register('password')} id='password' type='password'/>
        </div>
        <div>
        <label htmlFor='birthday'>Birthday</label>
        <input {...register('birthday')} id='birthday' type='date'/>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default CreateUser