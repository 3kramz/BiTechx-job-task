import React from 'react';

const Community = ({ community }) => {
    const { name, profileImage, bio, summary } = community

    return (
        <div className='bg-[#242526] p-3 my-3 rounded flex justify-between'>
            <div className='flex items center gap-3'>
                <img className='h-[60px]' src={profileImage} alt='author' />
                <div>
                    <div className='flex'>
                        <p className='font-extrabold mr-1'>{name} </p>
                        <p className="text-[#bcb8b1] "> {summary.stories} stories </p>
                    </div>
                    <p className="text-[#707070]">{bio.substring(0, 33)}....</p>
                </div>
            </div>
            <div className='md:flex gap-3'>
                <p className='text-[#bcb8b1] '>{summary.followers} followers </p>
                <p className="text-[#4392f1]"> Follow </p>
            </div>
        </div>
    );
};

export default Community;