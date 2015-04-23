import React from 'react';
import classNames from 'classnames';
import FlightsStore from 'stores/flights';
import ViewActions from 'actions/view';

let Flights = React.createClass({
    getInitialState() {
        return FlightsStore.get();
    },
    componentDidMount() {
        FlightsStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        FlightsStore.removeChangeListener(this._onChange);
    },
    _onChange() {
        this.setState(FlightsStore.get());
    },
    selectAirline(e) {
        var airline = e.target.innerHTML;
        ViewActions.selectAirline(airline);
        e.preventDefault();
    },
    render() {
        let classes = classNames({
            flights: true
        });
        let activeAirline = FlightsStore.getActiveAirline();
        let airlines = this.state.flights.map(airline =>
            <li key={'airline-' + airline.Code} className={airline.Code == activeAirline ? 'active' : null}>
                <a href="#" onClick={this.selectAirline}>{airline.Code}</a>
            </li>
        );
        let fares = FlightsStore.getFaresByAirline(activeAirline).map(fare =>
            <li key={fare.Id}>{`${fare.Id}, ${fare.TotalAmountRub} руб.`}</li>
        );
        return (
            <div className={classes}>
                <ul className="nav">
                    {airlines}
                </ul>
                <ul className="fares">
                    {fares}
                </ul>
            </div>
        )
    }
});

export default Flights;