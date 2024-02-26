import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';

const App = (props) => {
    const [count, setCount] = useState(0);

    // const onClickPrint = () => {
    //     console.log(count);
    // };

    const onClickPrint = useCallback(() => {
        console.log(count);
    }, [count]);

    // useEffect(() => {
    //     onClickPrint();
    //     return () => {};
    // }, [onClickPrint]);

    return (
        <div>
            {count}
            {props.name}
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Button onClick={onClickPrint}>Print</Button>
        </div>
    );
};

export default App;
