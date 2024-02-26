import React, { forwardRef } from 'react';
import Input from './Input';
import { createPortal } from 'react-dom';

const FormField = (test, ref) => {
    console.log('ref', ref);

    return createPortal(
        <div>
            <Input ref={ref} />
        </div>,
        document.getElementById('portal')
    );
};

export default forwardRef(FormField);
