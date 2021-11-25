import axios from 'axios';
import { url } from '../utils/url';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import camera from '../assets/camera.png';
import demoPic from '../assets/demo-pic.png';
import { useGlobalContext } from '../context/AppContext';

const Profile = () => {
    const { user, updateUser } = useGlobalContext();
    const [formStatus, setFormStatus] = useState('Save');
    const [isUploading, setIsUploading] = useState(false);
    const [values, setValues] = useState({
        name: user?.name,
        email: user?.email,
        image: user?.image,
        location: user?.location
    });
    const [imageUrl, setImageUrl] = useState(values.image ? values.image : demoPic);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const uploadImage = async (e) => {
        setIsUploading(true);
        const imageFile = e.target.files[0];
        const imageData = new FormData();
        imageData.append('image', imageFile, imageFile.name);
        try {
            const { data } = await axios.post(`${url}/user/upload`, imageData, { withCredentials: true });
            setImageUrl(data.secure_url);
        } catch (error) {
            console.log(error)
        }
        setIsUploading(false);
    }

    const handleSubmit = (e) => {
        setFormStatus('Saving...');
        e.preventDefault();
        const { name, email, location } = values;
        const editedUser = { name, email, image: imageUrl, location };
        updateUser(editedUser);
        setFormStatus('Saved');
    }

    return (
        <>
            {!user && <Navigate to="/login" />}
            <section className="profile">
                <div className="profile__picture">
                    <div className="profile__picture__wrapper">
                        <label htmlFor="file" className={isUploading ? 'upload' : ''}>
                            <span>{isUploading ? 'Uploading...' : ''}</span>
                            <img src={camera} alt="camera" />
                        </label>
                        <input id="file" type="file" onChange={uploadImage} accept="image/*" />
                        <img src={imageUrl} alt="profile-pic" />
                    </div>
                </div>
                <form className="profile__form" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} autoComplete="off" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} autoComplete="off" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="location" id="location" value={values.location} onChange={handleChange} autoComplete="off" />
                        <label htmlFor="location">Location</label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value={formStatus} />
                    </div>
                </form>
            </section>
        </>
    );
};

export default Profile;