import axios from 'axios';
import React, { useState } from 'react';

const Upload = () => {
    const [img, setImg] = useState([]);
    const [video, setVideo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const uploadFile = async(type) => {
        const data = new FormData();
        console.log('Normal data:', data);
        data.append("file", type === "image" ? img : video);
        data.append("upload_preset", type === "image" ? "images_preset" : "videos_preset");

        console.log("After append data:", data);

        try{
            const cloudName = import.meta.env.VITE_CLOUD_NAME;
            const resourceType = type === 'image' ? 'image' : 'video';
            const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

            const res = await axios.post(api, data);
            const { secure_url } = res.data;
            console.log(secure_url);
            return secure_url;
        }catch(err){
            console.error(err);
            setErrMsg(err.message);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            setLoading(true);

            // upload image file
            const imgUrl = await uploadFile('image');

            // upload video file
            const videoUrl = await uploadFile('video');

            
        }catch(err){
            console.error(err);
            setErrMsg(err.message);
        }
    }

    return (
        <div>
            <h1 className='text-2xl font-medium'>Basic upload</h1>

            <form className='w-full md:w-[600px] my-5' onSubmit={handleSubmit}>
                <div className='w-full mb-2'>
                    <label htmlFor="video">Video:</label>
                    <input type="file" name="video" id="video" onChange={(e) => setVideo(prev => e.target.files[0])} className="mt-1 ms-3" />
                </div>

                <div className='w-full mb-2'>
                    <label htmlFor="image">Image:</label>
                    <input type="file" name="image" id="image" onChange={(e) => setImg(prev => e.target.files[0])} className="mt-1 ms-3" />
                </div>

                <button className='py-2 px-5 rounded-md text-sm border hover:bg-gray-100 active:bg-transparent'>Upload</button>
            </form>
        </div>
    );
};

export default Upload;