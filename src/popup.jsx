import React from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import { Table } from 'react-bootstrap';
import { useChromeStorageSync } from 'use-chrome-storage';

const Popup = () => {
    const [value, setValue, isPersistent, error] = useChromeStorageSync('counterLocal', 0);
    return (
        <>
            <h3 className='text-align-center'>Web Counter</h3>
            <Table>

            </Table>
        </>
    );
};

render(<Popup />, document.getElementById('react-target'));
