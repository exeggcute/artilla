import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ArtActions} from '../actions';
import {ArtInfo, ArtRecord, Search} from './modules';
import {Loader, Error} from './common';


class ArtPage extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.actions.fetchArtInfo(this.props.artId);
    }


    render() {
        if (this.props.apiStatus.isFetching) {
            return <Loader />;
        }

        if (this.props.apiStatus.error) {
            return <Error error={this.props.apiStatus.error} />;
        }

        if (!this.props.art) {
            return null;
        }

        return (
            <div className="page-art">
                <Search />
                <div id="js-searchContainer">
                    <ArtInfo art={this.props.art} />
                    <div className="art-section art-section--secondary">
                        {
                            ['provenance', 'exhibition', 'literature'].map(r => {
                                return (
                                    <ArtRecord
                                        key={r}
                                        type={r}
                                        art={this.props.art}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(
    (state, props) => {
        const artId = props.artId;
        const art = state.art.arts[props.artId];
        const apiStatus = state.art.apiStatus;

        return {
            artId,
            art,
            apiStatus
        };
    },
    (dispatch) => ({
        actions: bindActionCreators(ArtActions, dispatch)
    })
)(ArtPage);
