import React, { useState } from 'react';
import { blog_data } from '../assets/assets';
import Post from './Post';

const PostList = () => {
    const [menu, setMenu] = useState('All');

    return (
        <div>
            <div className='flex justify-center gap-6 my-10 flex-wrap'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Tech</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Startup</button>
                <button onClick={() => setMenu('Fashion')} className={menu === "Fashion" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Fashion</button>
                <button onClick={() => setMenu('Celebrity')} className={menu === "Celebrity" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Celebrity</button>
                <button onClick={() => setMenu('Sports')} className={menu === "Sports" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Sports</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}>Lifestyle</button>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {blog_data.filter((item) => menu === 'All' ? true : item.category === menu).map((item) => (
                    <Post
                        key={item.id}
                        post={{
                            id: item.id,
                            title: item.title,
                            body: item.description,
                            image: item.image,
                            author: item.author,
                            author_img: item.author_img
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostList;
