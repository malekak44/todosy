import React from 'react';

const EmptyList = () => {
    return (
        <section className="todos__empty-list">
            <p>Your todo list is empty</p>
            <p>Add your first todo above &#9757;</p>
        </section>
    );
};

export default EmptyList;