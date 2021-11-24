import React, { useState } from 'react';

const Form = () => {
    const [isFocusing, setIsFocusing] = useState(false);

    return (
        <form className="todos__form">
            <div className={isFocusing ? "checkbox focusing" : "checkbox"}></div>
            <input
                type="text"
                autoComplete="off"
                placeholder="Create a new todo..."
                onFocus={() => setIsFocusing(true)}
                onBlur={() => setIsFocusing(false)}
            />
        </form>
    );
};

export default Form;