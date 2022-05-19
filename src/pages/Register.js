import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* Name input */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        {/* Email input */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            name='email'
            value={values.email}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        {/* Password input */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            className='form-input'
          />
          <button type='submit' className='btn btn-block'>
            Login
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
export default Register;
