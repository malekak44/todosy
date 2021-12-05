import axios from 'axios';
import { url } from '../utils/url';
import React, { useState } from 'react';
import camera from '../assets/camera.png';
import FormGroup from '../components/FormGroup';
import useLocalState from '../utils/localState';
import defaultUser from '../assets/default-user.jpg';
import { useGlobalContext } from '../context/AppContext';

const Profile = () => {
    const { user, updateUser } = useGlobalContext();
    const [isUploading, setIsUploading] = useState(false);
    const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        image: user?.image,
        location: user?.location
    });
    const {
        alert,
        loading,
        showAlert,
        hideAlert,
        setLoading,
    } = useLocalState();
    const [imageUrl, setImageUrl] = useState(values.image ? values.image : defaultUser);

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
        setLoading(true);
        hideAlert();
        e.preventDefault();
        const { name, email, location } = values;

        if (!email || !name) {
            showAlert({ text: 'Please provide name and email' });
        } else {
            const editedUser = { name, email, image: imageUrl, location };
            updateUser(editedUser);
            showAlert({ text: 'Profile info saved', type: 'success' });
            setTimeout(() => {
                hideAlert();
            }, 3000);
        }
        setLoading(false);
    }

    return (
        <>
            {alert.show && (
                <div className={`alert alert-${alert.type}`}>
                    <p>{alert.text}</p>
                </div>
            )}
            <section
                className={`profile container${loading ? ' container__loading' : ''}`}
            >
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
                            value="Save"
                        />
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;