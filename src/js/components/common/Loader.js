import React from 'react';

export default function Loader() {
    return (
        <div className="loader">
            <i className="fa fa-circle-o-notch fa-spin loader__icon" />
            <span className="loader__text">Loading</span>
        </div>
    );
}
