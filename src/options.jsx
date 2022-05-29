/* global chrome */
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const Options = () => {
    const [pages, setPages] = useState(new Map());

    useEffect(() => {
        const getChromeStorage = async () => {
            const all = await chrome.storage.sync.get();
            return all;
        }

        getChromeStorage().then(all => {
            const pages = new Map();
            for (const key in all) {
                pages.set(key, all[key]);
            }
            setPages(pages);
            console.log(pages);
        });

        console.log(pages);
    }, []);

    return (
        <>
            <h1 className='text-align-center'>Web Counter</h1>
            <Container>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Page</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pages && [...pages.keys()].map((key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{pages.get(key)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
const container = document.getElementById('react-target-options');
const root = createRoot(container);
root.render(<Options />);
