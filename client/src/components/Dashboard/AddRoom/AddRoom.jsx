import React, { useCallback, useEffect, useState } from 'react';
import './addRoom.scss';
import { useDropzone } from 'react-dropzone';

import { WiCloudUp } from "react-icons/wi";
import toast from 'react-hot-toast';
import { addRoomAction } from '../../../Redux/actions/controlPanelAction';
import { useDispatch } from 'react-redux';

const AddRoom = () => {
    const dispatch = useDispatch();

    const [roomNo, setRoomNo] = useState();
    const [roomName, setRoomName] = useState();
    const [noOfRooms, setNoOfRooms] = useState();
    const [availableRooms, setAvailableRooms] = useState();
    const [roomType, setRoomType] = useState();
    const [roomArray, setRoomArray] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [images, setImages] = useState([]);


    const onSubmitHandler = (e) => {

        e.preventDefault();

        if (!roomNo || !roomName || !noOfRooms || !availableRooms || !roomType || !roomArray || !description || !price) {
            return toast.error("Please fill all fields!");
        }

        if (noOfRooms > availableRooms)
            return toast.error("No of Room should be greater than equal Availble Rooms");

        if (images.length == 0) {

            return toast.error("please select atleast 1 image");
        }

        const success = addRoomAction(dispatch,
            roomNo,
            roomName,
            noOfRooms,
            availableRooms,
            roomType,
            roomArray,
            description,
            price,
            images,

        );

        if (success === true) {
            setImages([]);
            e.target.reset();
        }


    };



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

            <form action="" onSubmit={onSubmitHandler} encType="multipart/form-data">

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
                        <input type="text" placeholder='Room No.' required onChange={(e) => setRoomNo(e.target.value)} />
                    </div>



                    <div>
                        <input type="text" placeholder='Room Name' required onChange={(e) => setRoomName(e.target.value)} />
                    </div>


                    <div>
                        <input

                            type="number" placeholder='Number of Rooms.' required min={1} max={5} onChange={(e) => setNoOfRooms(e.target.value)} />

                    </div>



                    <div>
                        <input type="number" placeholder='No. of Available Room ' required min={1} max={5} onChange={(e) => setAvailableRooms(e.target.value)} />
                    </div>



                    <div>
                        <input type="text" placeholder='Room Type' required onChange={(e) => setRoomType(e.target.value)} />
                    </div>



                    <div>
                        <input type="text" placeholder='Enter the room No sperate by , ' required maxLength={100} onChange={(e) => setRoomArray(e.target.value)} />
                    </div>



                    <div>
                        <input type="text" placeholder='Description' required minLength={10} maxLength={500} onChange={(e) => setDescription(e.target.value)} />
                    </div>






                    <div>
                        <input type="number" placeholder='Price' required min={10} onChange={(e) => setPrice(e.target.value)} />
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