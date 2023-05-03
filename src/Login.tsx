import React from 'react';
import { useState } from 'react';
import {
  Text,
  Button,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

interface MyFormValues {
  password: string;
  email: string;
  confirmPassword?: string;
}

export default function Login() {
  const [isRegistered, setIsRegistered] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<MyFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleChangeIsRegistered = (): void => {
    setIsRegistered(!isRegistered)
  }

  const onSubmit = (data: MyFormValues) => {
    console.log('email: ', data.email);
    console.log('password: ', data.password);
  }

  return (
    <div>
      {!!isRegistered ? 
      <>
        <Text>Log In</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } }}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Email"
                placeholder="Enter your email"
                required
              />
            )}
          />
          {errors.email && <p className="tw-text-red-500 tw-text-sm">{errors.email.message}</p>}
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
            render={({ field }) => (
              <PasswordInput
                {...field}
                label="Password"
                placeholder="Enter your password"
                required
                />
              )}
            />
            {errors.password && <p className="tw-text-red-500 tw-text-sm">{errors.password.message}</p>}
            <Button className='tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500' type="submit">
              Submit
            </Button>
            <Button className='tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500' onClick={handleChangeIsRegistered}>
              Not yet registered?
            </Button>
          </form>
        </>
        :
        <>
          <Text>Register</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } }}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Email"
                  placeholder="Enter your email"
                  required
                />
              )}
            />
            {errors.email && <p className="tw-text-red-500 tw-text-sm">{errors.email.message}</p>}
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  label="Password"
                  placeholder="Enter your password"
                  required
                />
              )}
            />
            {errors.password && <p className="tw-text-red-500 tw-text-sm">{errors.password.message}</p>}
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirm Password is required',
                validate: value => value === getValues().password || 'Passwords must match',
              }}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  required
                />
              )}
            />
            {errors.confirmPassword && <p className="tw-text-red-500 tw-text-sm">{errors.confirmPassword.message}</p>}
            <Button className='tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500' type="submit">
              Submit
            </Button>
            <Button className='tw-ml-auto tw-mt-2 tw-mr-9 tw-bg-orange-600 tw-rounded-full hover:tw-bg-orange-500' onClick={handleChangeIsRegistered}>
              Already registered?
            </Button>
          </form>
        </>}
      </div>
    )
  }
  
               
