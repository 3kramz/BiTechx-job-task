import React from 'react';

const LongStory = ({ data, img }) => {
    const { title, author, created, readTime, hashtags, community } = data
    const date = created.split("|")
    const tags = hashtags.join(" ").substring(0, 32)

    return (
        <div className='flex bg-white rounded justify center mt-5'>
            <div className='p-3 text-[15px]'>
                <h4 className="text-xl font-bold text-[#242526]">{title}</h4>
                <div className='flex justify-between my-2'>
                    {/* Author */}
                    <div className="flex items-center gap-5">
                        <img className='h-[50px]' src={author.profileImage} alt='author' />
                        <p>{author.name}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className="h-5" src='/images/icon.png' alt='icon' />
                        <p>{community.name}</p>
                    </div>
                </div>
                <hr/>
                <p className="text-[#BCB8B1] ">{date[0]} | {readTime} <span className='text-[#707070] ml-2'>{tags}...</span></p>
            </div>
            {img && <img className='hidden md:block h-[165px] mt' src={img} alt="cover" />}
        </div>
    );
};

export default LongStory;