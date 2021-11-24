import React from 'react';
import { useGlobalContext } from '../context/AppContext';

const Profile = () => {
    const { user } = useGlobalContext();

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Profile;