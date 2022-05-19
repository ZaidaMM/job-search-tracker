import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';
import FormRow from '../components/FormRow';

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
        <FormRow
          type='text'
          value={values.name}
          name='name'
          handleChange={handleChange}
          className='form-input'
        />
        {/* Email input */}
        <FormRow
          type='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
          className='form-input'
        />

        {/* Password input */}
        <FormRow
          type='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
          className='form-input'
        />

        <button type='submit' className='btn btn-block'>
          Login
        </button>
      </form>
    </Wrapper>
  );
}
export default Register;
