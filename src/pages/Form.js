import React from 'react';
import Title from '../components/Title';

const Form = () => {
  return (
    <>
      <div className='inner'>
        <Title lineContent='This is the' lineContent2='Contact Me Page' />
      </div>
      <section>
        <form id='contact-form'>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label htmlFor='email'>Email address:</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea name='message' rows='5' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
