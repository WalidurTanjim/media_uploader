import React, { useState } from 'react';

const SecureUpload = () => {
    const [img, setImg] = useState(null);
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{

        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <h1 className='text-2xl font-medium'>Secure upload</h1>

            <form className='w-full md:w-[600px] my-5' onSubmit={handleSubmit}>
                <div className='w-full mb-2'>
                    <label htmlFor="video">Video:</label>
                    <input type="file" name="video" id="video" className="mt-1 ms-3" onChange={(e) => setVideo(prev => e.target.files[0])} />
                </div>

                <div className='w-full mb-2'>
                    <label htmlFor="image">Image:</label>
                    <input type="file" name="image" id="image" className="mt-1 ms-3" onChange={(e) => setImg(prev => e.target.files[0])} />
                </div>

                <button className='py-2 px-5 rounded-md text-sm border hover:bg-gray-100 active:bg-transparent'>Upload</button>
            </form>
        </div>
    );
};

export default SecureUpload;