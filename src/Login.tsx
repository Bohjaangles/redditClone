import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Text,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core'

interface FormValues {
  password: string;
  email: string;
  confirmPassword?: string;
}

export default function Login() {
  const [isRegistered, setIsRegistered] = useState(true)
  const [formValues, setFormValues] = useState<FormValues>({email: '', password: '', confirmPassword: ''});
  
  const handleChangeIsRegistered = (): void => {
    setIsRegistered(!isRegistered)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormValues((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('email: ', formValues.email);
    console.log('password: ', formValues.password);
  }

  return (
    <div>
      {isRegistered === true ? 
      <>
        <Text>Log In</Text>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            name='email'
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            label="Password"
            name='password'
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <Button onClick={handleChangeIsRegistered}>Not yet registered?</Button>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </>
      : 
      <>
        <Text>Register</Text>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            name='email'
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            label="Password"
            name='password'
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <PasswordInput
            label="Confirm Password"
            name='Confirmpassword'
            placeholder="Re-enter your password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button onClick={handleChangeIsRegistered}>Already registered?</Button>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </>}
    </div>
  )
}
