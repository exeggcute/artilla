import React from 'react';

export default function ArtRecord(props) {
    const recordType = props.type;

    let title = null;

    switch (recordType) {
        case 'provenance':
            title = 'Provenance';
            break;

        case 'exhibition':
            title = 'Exhibitions';
            break;

        case 'literature':
            title = 'Literature';
            break;

        default:
            break;
    }

    const records = props.art.getRecordsByType(recordType);

    if (!records.length || !title) {
        return null;
    }

    return (
        <div className="art-record">
            <h3 className="art-record__title">{title}</h3>
            <ul className="art-record__list">
                {
                    records.map((r, i) => {
                        return (
                            <li
                                key={i}
                                className="art-record__list__item"
                            >
                                {r.displayText}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
