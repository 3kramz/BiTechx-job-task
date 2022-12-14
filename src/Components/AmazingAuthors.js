import React from 'react';
import Author from './Author'
import { users } from '../data'

const AmazingAuthors = () => {
    return (
        <div className=' text-white'>
            <p className='font-extrabold text-xl'>Amazing authors to follow</p>
            {/* -------- Authors------- */}
            {users.map((author, index) => <Author author={author} key={index} />)}
        </div>
    );
};

export default AmazingAuthors;