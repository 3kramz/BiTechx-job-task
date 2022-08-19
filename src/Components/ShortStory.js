import React from 'react';

const ShortStory = ({ data, img }) => {
    const { content, author, created, community } = data
    const date = created.split("|")
    return (
        <div className='bg-white my-5 rounded'>
            {img && <img className='w-full p-1' src={img} alt='cover' />}
            <div className="p-3">
                <div>
                    <p>{content}</p>
                </div>
                <hr className='my-3'/>
                <div className='flex justify-between  items-center'>

                    <div className="flex items-center gap-5">
                        <img className='h-[50px]' src={author.profileImage} alt='author' />
                        <p>{author.name}</p>
                    </div>

                    <p className="text-[#BCB8B1] ">{date[1]}, {date[0]}</p>
                    
                    <div className='flex items-center gap-3'>
                        <img className="h-5" src='/images/icon.png' alt='icon' />
                        <p>{community.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortStory;