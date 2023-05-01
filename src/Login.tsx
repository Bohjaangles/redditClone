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
}

export default function Login() {
  const [formValues, setFormValues] = useState<FormValues>({email: '', password: ''});
  

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
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
