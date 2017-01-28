import React from 'react';

export default function Error(props) {
    return (
        <div className="error">
            <i className="fa fa-exclamation-triangle error__icon" />
            <span className="error__text">{props.error.message}</span>
        </div>
    );
}
