import React from 'react';
import Community from './Community'
import { communities } from '../data'

const AmaizingCommunity = () => {
    return (
        <div className='my-2 pb-5 text-white'>
            <p className='font-extrabold text-xl'>Amazing communities to follow</p>
            {/* -------- communities------- */}
            {communities.map((community, index) => <Community community={community} key={index} />)}
        </div>
    );
};

export default AmaizingCommunity;