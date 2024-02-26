import { Button, Input } from '@nextui-org/react';
import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

// Form libraries
// https://react-hook-form.com/
// https://formik.org/

const SignupSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    lastName: yup
        .string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    // mobileNumber: yup.string(),
    //
    // email: yup.string().when('mobileNumber', {
    //     is: (mobileNumber) => mobileNumber !== '',
    //     then: yup.string().nullable().required(),
    // }),
});

function FormSample() {
    const {
        handleSubmit,
        values,
        dirty,
        touched,
        errors,
        handleChange,
        handleBlur,
    } = useFormik({
        initialValues: {
            firstName: 'Kürşat',
            lastName: 'Yiğitoğlu',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    // const handleBlur = (...rest) => {
    //     console.log('test');
    //
    //     _handleBlur(...rest);
    // };

    // console.log('values', values);
    // console.log('touched', touched);
    // console.log('dirty', dirty);
    console.log('errors', errors);

    return (
        <div className="App">
            <form
                className="flex flex-col gap-2 w-72 m-2"
                onSubmit={handleSubmit}
            >
                <Input
                    label={'Adı'}
                    name={'firstName'}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.firstName}
                    errorMessage={errors.firstName}
                />
                <Input
                    label={'Soyadı'}
                    name={'lastName'}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.lastName}
                    errorMessage={errors.lastName}
                />

                <Button color={'success'} type={'submit'}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default FormSample;
