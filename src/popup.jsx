import React from "react";
import { render } from 'react-dom';

const Popup = () => {

    return (
        <div>
            <h3 className="text-align-center">Web Counter</h3>
        </div>
    )
}

render(<Popup />, document.getElementById('react-target'));