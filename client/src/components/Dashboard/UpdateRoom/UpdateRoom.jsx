import React, { useCallback, useEffect, useState } from 'react';
import './updateRoom.scss';
import { useDropzone } from 'react-dropzone';
import { WiCloudUp } from "react-icons/wi";
import { getRoomDetailsAction, updateRoomAction } from '../../../Redux/actions/controlPanelAction';
import { useDispatch, useSelector } from 'react-redux';

const UpdateRoom = () => {
    const dispatch = useDispatch();
    const { roomDetails } = useSelector(state => state.controlPanelReducer);

    const [searchRoom, setSearchRoom] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [roomName, setRoomName] = useState("");
    const [noOfRooms, setNoOfRooms] = useState(0);
    const [availableRooms, setAvailableRooms] = useState(0);
    const [roomType, setRoomType] = useState("");
    const [roomArray, setRoomArray] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState([]);
    const [deleteImagesArray, setDeleteImagesArray] = useState([]);

    const searchHandler = (e) => {
        e.preventDefault();
        getRoomDetailsAction(dispatch, searchRoom);
    };

    const onSubmitHandler = (e) => {

        e.preventDefault();

        if (!roomNo || !roomName || !noOfRooms || !availableRooms || !roomType || !roomArray || !description || !price) {
            return toast.error("Please fill all fields!");
        }

        if (noOfRooms > availableRooms) {
            return toast.error("No of Room should be greater than equal Available Rooms");
        }

        if (images.length === 0) {
            return toast.error("Please select at least 1 image");
        }

        const success = updateRoomAction(dispatch, roomNo, roomName, noOfRooms, availableRooms, roomType, roomArray, description, price, deleteImagesArray);

        if (success === true) {
            searchHandler();
        }
    };

    useEffect(() => {

        if (roomDetails) {
            setRoomNo(roomDetails.roomNo || "");
            setRoomName(roomDetails.name || "");
            setNoOfRooms(roomDetails.noOfRooms || 0);
            setAvailableRooms(roomDetails.availableRooms || 0);
            setRoomType(roomDetails.roomType || "");
            setRoomArray(roomDetails.roomArray || "");
            setDescription(roomDetails.description || "");
            setPrice(roomDetails.price || 0);
            setImages(roomDetails.images || []);
        }

    }, [roomDetails]);

    useEffect(() => {

    }, [deleteImagesArray]);


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
        const imageFiles = images.filter((file) => file.public_id !== name.public_id);
        setImages(imageFiles);

        const deleteImage = images.filter((file) => file.public_id === name.public_id);
        const delteImages = deleteImage.concat(deleteImagesArray);

        setDeleteImagesArray(delteImages);


    };

    return (
        <div className='addRoom'>
            <form className='inputBar' onSubmit={searchHandler}>
                <input type="text" placeholder='Type here...' value={searchRoom} onChange={(e) => setSearchRoom(e.target.value)} />
                <button>Search</button>
            </form>

            <form onSubmit={onSubmitHandler}>
                <div className="images">
                    <div className='dragNdrop' {...getRootProps()}>
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
                                    <label htmlFor="images"> Choose File</label>
                                </div>
                            </>
                        )}
                    </div>

                    {images?.length > 0 && (
                        <div className="selectedImages">
                            <div className='imagesArray'>
                                {images.map((file, index) => (
                                    <div className='image' key={index}>
                                        <button type='button' onClick={() => removeImage(file)}>x</button>
                                        <img src={file.url} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="details">
                    <div>
                        <input type="text" placeholder='Room No.' required value={roomNo || ""} onChange={(e) => setRoomNo(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Room Name' required value={roomName || ""} onChange={(e) => setRoomName(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" placeholder='Number of Rooms' required value={noOfRooms || 0} min={1} onChange={(e) => setNoOfRooms(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" placeholder='No. of Available Rooms' required value={availableRooms || 0} min={1} onChange={(e) => setAvailableRooms(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Room Type' required value={roomType || ""} onChange={(e) => setRoomType(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter room No separated by commas' required value={roomArray || ""} onChange={(e) => setRoomArray(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Description' required value={description || ""} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" placeholder='Price' required value={price || 0} min={10} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit'>Update Room</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateRoom;
