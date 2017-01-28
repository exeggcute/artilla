import React, {PureComponent} from 'react';
import Highlighter from '../../lib/Highlighter';

export default class Search extends PureComponent {
    constructor(props) {
        super(props);

        this.onSearchInput = this.onSearchInput.bind(this);

        this.state = {
            isSearchActive: false,
            count: 99
        };
    }


    onSearchInput(e) {
        const query = e.target.value;

        const opts = {
            query: query.length >= 3 ? query : '',
            highlightClass: 'fts-highlight',
            searchContainer: document.getElementById('js-searchContainer')
        };

        // Mutates the DOM
        Highlighter(opts, (count) => {
            this.setState({
                isSearchActive: query.length >= 3,
                count
            });
        });
    }


    render() {
        return (
            <div className="search-container">
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search in this page"
                        className="search-input"
                        onChange={this.onSearchInput}
                    />
                   <span className="search-result">{this.state.isSearchActive ? `${this.state.count} found` : ''}</span>
                </div>
            </div>
        );
    }
}
