import React from 'react';
import classNames from 'classnames';
import OverlayStore from 'stores/overlay';

let Overlay = React.createClass({
    getInitialState() {
        return OverlayStore.get();
    },
    componentDidMount() {
        OverlayStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        OverlayStore.removeChangeListener(this._onChange);
    },
    _onChange() {
        this.setState(OverlayStore.get());
    },
    render() {
        let classes = classNames({
            overlay: true,
            visible: this.state.isShow    
        });
        return (
            <div className={classes}>
                <div className="loading">
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="progress">{this.state.status}</div>
                </div>
            </div>
        )
    }
});

export default Overlay;