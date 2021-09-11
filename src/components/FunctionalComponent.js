import React, { useState, useEffect } from 'react';
function FunctionalComponent(props) {
    const { userInfo } = props;
    const [flag, updateFlag] = React.useState(false);
    const handleClick = () => {
        updateFlag(!flag);
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect as mount");
    },[count]);//[count] this will be called only when count is updated.

    useEffect(() => {
        console.log("Effect as did update");
        return () => {
            console.log("Clean up");
            };
    });
    return (
        <div>
            <h1>Functional Component: Name = {userInfo.name}  Age= {userInfo.age} </h1>
            {props.children}
            <h4> {`${flag}`}</h4>
            <button onClick={handleClick}>Toggle </button>
        </div>
    )

}
export default FunctionalComponent;