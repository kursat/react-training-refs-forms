import React, { forwardRef } from 'react';
import Input from './Input';

const FormField = (test, ref) => {
    console.log('ref', ref);

    return (
        <div>
            <Input ref={ref} />
        </div>
    );
};

export default forwardRef(FormField);
