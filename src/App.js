import React, { useRef, useState } from 'react';
import FormField from './components/FormField';
import { Button } from '@nextui-org/react';

const App = () => {
    const [dummy, setDummy] = useState();

    const formFieldRef = useRef();

    setTimeout(() => {
        console.log('formFieldRef', formFieldRef);
    }, 2000);

    return (
        <div>
            <FormField ref={formFieldRef} />

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
