import axios from 'axios';
import { url } from '../utils/url';
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import camera from '../assets/camera.png';
import demoPic from '../assets/demo-pic.png';
import FormGroup from '../components/FormGroup';
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
            <section className="profile container">
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
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit} >
                        <FormGroup
                            type="text"
                            id="name"
                            label="Name"
                            value={values.name}
                            handleChange={handleChange}
                        />
                        <FormGroup
                            type="email"
                            id="email"
                            label="Email"
                            value={values.email}
                            handleChange={handleChange}
                        />
                        <FormGroup
                            type="text"
                            id="location"
                            label="Location"
                            value={values.location}
                            handleChange={handleChange}
                        />
                        <FormGroup
                            type="submit"
                            value={formStatus}
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;