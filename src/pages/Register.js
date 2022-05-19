import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

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
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}

        {/* Name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            value={values.name}
            name='name'
            handleChange={handleChange}
            className='form-input'
          />
        )}

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
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
