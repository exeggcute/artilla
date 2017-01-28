import React from 'react';
import {Header, Footer} from './common';
import ArtPage from './ArtPage';


export default function Container() {
    return (
        <div>
            <Header />
            <div className="container">
                <ArtPage artId="CAA-KZA" />
            </div>
            <Footer />
        </div>
    );
}
