import React from 'react';
import { useGlobalContext } from '../context/AppContext';

const Profile = () => {
    const { user } = useGlobalContext();

    return (
        <section className="profile">
            <form>

            </form>
        </section>
    );
};

export default Profile;