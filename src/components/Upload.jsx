import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const Upload = () => {
    const [errMsg, setErrMsg] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const video = data.video[0];
        const image = data.image[0];
        console.log(data);
        console.log(video);
        console.log(image);
    }

    return (
        <div>
            <h1 className='text-2xl font-medium'>Basic upload</h1>

            <form className='w-full md:w-[600px] my-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full mb-2'>
                    <label htmlFor="video">Video:</label>
                    <input type="file" name="video" id="video" className="mt-1 ms-3" {...register("video")} />
                </div>

                <div className='w-full mb-2'>
                    <label htmlFor="image">Image:</label>
                    <input type="file" name="image" id="image" className="mt-1 ms-3" {...register("image")} />
                </div>

                <button className='py-2 px-5 rounded-md text-sm border hover:bg-gray-100 active:bg-transparent'>Upload</button>
            </form>
        </div>
    );
};

export default Upload;