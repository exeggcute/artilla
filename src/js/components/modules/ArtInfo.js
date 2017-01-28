import React from 'react';

export default function ArtInfo(props) {
    return (
        <div className="art-section art-section--primary">
            <div className="art-image">
                <img
                    src={props.art.image}
                    title={props.art.name}
                    alt={`Image of ${props.art.name}`}
                />
            </div>
            <div className="art-info">
                <h1 className="art-name">{props.art.name}</h1>
                <ul className="art-meta-list">
                    <li className="art-meta-list__item">
                        <span className="type">Artist</span>{props.art.artist.getFullName()} ({props.art.artist.lifetime})
                    </li>
                    <li className="art-meta-list__item">
                        <span className="type">Creation Time</span>{props.art.creationTime}
                    </li>
                    <li className="art-meta-list__item">
                        <span className="type">Medium</span>{props.art.medium}
                    </li>
                    <li className="art-meta-list__item">
                        <span className="type">Dimensions</span>{props.art.getDimensionsString()}
                    </li>
                    <li className="art-meta-list__item">
                        <span className="type">Signature</span>{props.art.signature}
                    </li>
                </ul>
                <button className="btn art-action">View entire catalogue</button>
            </div>
        </div>
    );
}
