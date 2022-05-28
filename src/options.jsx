import React from "react";
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import {useChromeStorageSync} from 'use-chrome-storage';

const Options = () => {
    const [value, setValue, isPersistent, error] = useChromeStorageSync('counterLocal', 0);
    return (
        <>
            <h1 className="text-align-center">Web Counter</h1>
            <Table>

            </Table>
        </>
    )
}

render(<Options />, document.getElementById('react-target'));