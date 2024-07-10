import { blog_data } from '@/assets/assets';
import React, { useState } from 'react';
import Gistitem from './Gistitem';

const GistList = () => {
    const [menu, setMenu] = useState('All');

    return (
        <div>
            <div className='flex justify-center gap-6 my-10 sm:gap-6 my-4'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button> 
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Tech</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Fashion')} className={menu === "Fashion" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Fashion</button>
                <button onClick={() => setMenu('Celebrity')} className={menu === "Celebrity" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Celebrity</button>
                <button onClick={() => setMenu('Sports')} className={menu === "Sports" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Sports</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-center gap-6 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {blog_data.filter((item) => menu === 'All' ? true : item.category === menu).map((item) => (
                    <Gistitem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        date={item.date}
                        category={item.category}
                        author={item.author}
                        author_img={item.author_img}
                    />
                ))}
            </div>
        </div>
    );
};

export default GistList;
