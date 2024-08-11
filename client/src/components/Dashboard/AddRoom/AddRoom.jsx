import React, { useCallback, useEffect, useState } from 'react';
import './addRoom.scss';
import { useDropzone } from 'react-dropzone';

import { WiCloudUp } from "react-icons/wi";

const AddRoom = () => {


    const [images, setImages] = useState([]);


    const onDrop = useCallback((acceptedFiles) => {

        const imageFiles = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setImages((prevImages) => [...prevImages, ...imageFiles]);

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });


    const removeImage = (name) => {
        const imageFiles = images.filter((file) => file.name !== name && file);
        setImages(imageFiles);

    };

    return (
        <div className='addRoom'>

            <form action="">

                <div className="images">

                    <div className='dragNdrop'  {...getRootProps()}>
                        <input {...getInputProps()} />

                        {isDragActive ? (
                            ""

                        ) : (
                            <>
                                <h1>
                                    <WiCloudUp />
                                </h1>

                                <div>
                                    <p>Drag & Drop Images here</p>

                                    <span>OR</span>

                                    {/* <input type="file" id='images' hidden /> */}
                                    <label htmlFor="images"> Choose File</label>

                                </div>

                            </>
                        )}



                    </div>


                    {
                        images.length > 0 &&

                        <div className="selectedImages">

                            <div className='imagesArray'>

                                {
                                    images && images?.map((file, index) => (

                                        <div className='image' key={index}>
                                            <button type='button' onClick={() => removeImage(file.name)}>x</button>
                                            <img src={file.preview} alt="" />
                                        </div>
                                    ))
                                }


                            </div>


                        </div>

                    }



                </div>



                <div className="details">

                    <div>
                        <input type="text" placeholder='Room No.' />
                    </div>



                    <div>
                        <input type="text" placeholder='Number of Rooms.' />
                    </div>



                    <div>
                        <input type="text" placeholder='No. of Available Room ' />
                    </div>



                    <div>
                        <input type="text" placeholder='Room Type' />
                    </div>



                    <div>
                        <input type="text" placeholder='Services' />
                    </div>



                    <div>
                        <input type="text" placeholder='Description' />
                    </div>



                    <div>
                        <input type="text" placeholder='Room Name' />
                    </div>



                    <div>
                        <input type="text" placeholder='Price' />
                    </div>

                    <div>

                    </div>

                    <div>
                        <button>Add Room</button>
                    </div>

                </div>



            </form>



        </div>
    );
};

export default AddRoom;