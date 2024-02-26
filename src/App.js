import React, { useCallback, useRef, useState } from 'react';
import FormField from './components/FormField';
import { Button } from '@nextui-org/react';

const App = () => {
    const [dummy, setDummy] = useState();

    const formFieldRef = useRef();

    setTimeout(() => {
        console.log('formFieldRef', formFieldRef);
    }, 2000);

    const translate = (strings, ...values) => {
        console.log('strings, values', strings, values);
    };

    const onClickButton = useCallback((e) => {
        console.log(e);
    }, []);

    // const onClickButton_ = (e) => {
    //     console.log(e);
    // }
    // const onClickButton = useCallback(onClickButton_, []);

    return (
        <div>
            <FormField ref={formFieldRef} />

            {translate`ben ${1}, ve asd ${23}`}

            <Button
                onClick={() => {
                    console.log('formFieldRef', formFieldRef);
                    setDummy(1);
                }}
            >
                Focus
            </Button>
        </div>
    );
};

export default App;
