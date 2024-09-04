import React from 'react';
import { ImHammer2 } from "react-icons/im";

const Footer = () => {
    const style={
        bottom: "0",
        marginTop: "50px"
    }

    return (
        <div className='Footer' style={style}>
            <div className="made-by">
                Made By &nbsp;<ImHammer2 />&nbsp; Pratham
            </div>
        </div>
    );
}

export default Footer;
