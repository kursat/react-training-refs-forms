import React, { forwardRef } from 'react';

const Input = (props, ref) => {
    return (
        <div>
            <input ref={ref} />
            <span className="errors"></span>
        </div>
    );
};

export default forwardRef(Input);
