import React from 'react';

export default function Form(props) {
    return (
        <div className='form'>
            <form>
                <div className='formRow'>
                    <label htmlFor='nameinput'>Name: </label>
                    <input type='text' />
                </div>
                <div className='formRow'>
                <label htmlFor='emailinput'>Email: </label>
                    <input type='email' />
                </div>
                <div className='formRow'>
                <label htmlFor='roleinput'>Role: </label>
                    <input type='text' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}