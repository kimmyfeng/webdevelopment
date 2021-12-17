import React from "react";
import { Route, Routes } from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A9 = () => {
    return (
        <div>
            <Routes>
                <Route path="/a9/practice" element={<Practice />} ></Route>
                <Route path="/a9/twitter"  element={<Build />}>  </Route>
            </Routes>
        </div>
    )
}

export default A9;