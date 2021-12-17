import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/a8/practice">
                Practice
            </Link> |
            <Link to="/a8/build">
                Build
            </Link>

        </>

    )
};

export default HelloWorld;



