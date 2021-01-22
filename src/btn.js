import React from 'react'
import Divider from '@material-ui/core/Divider';

function Btn() {
    return (
        <>
            <div id="test">

                <div className="status"><h2>
                    Pending</h2></div>

                <div className="status"><h2>
                    Executing</h2></div>
                <div className="status"><h2>
                    Executed</h2></div>
                <div className="status"><h2>
                    Completed</h2></div>

            </div>
            <Divider></Divider>
        </>
    )
}

export default Btn
