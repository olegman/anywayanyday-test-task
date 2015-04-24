import React from 'react';
import Search from 'components/search';
import Flights from 'components/flights';
import Overlay from 'components/overlay';

let App = React.createClass({
    render() {
        return (
            <div id="app">
                <div className="col-left"></div>
                <div className="col-center">
                    <Search />
                    <Flights />
                    <Overlay />
                </div>
                <div className="col-right"></div>
            </div>
        );
    }
});

export default App;
