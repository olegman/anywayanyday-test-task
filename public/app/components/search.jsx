import React from 'react';
import ViewActions from 'actions/view';
import SearchStore from 'stores/search';
import Helper from 'libs/helper';

let Search = React.createClass({
    getInitialState() {
        return SearchStore.get();
    },
    componentDidMount() {
        SearchStore.addChangeListener(this._onChange);
    },
    componentWillUnmount() {
        SearchStore.removeChangeListener(this._onChange);
    },
    _onChange() {
        this.setState(SearchStore.get());
    },
    startSearch(e) {
        ViewActions.startSearch();
        e.preventDefault();
    },
    toggleAutoupdate(e) {
        ViewActions.toggleAutoupdate(e.target.checked);
    },
    render() {
        return (
            <div className="search">
                <button className="button" onClick={this.startSearch}>Искать</button>
                <span>{`рейсы по маршруту Москва — Санкт-Петербург, на сегодняшнее число (${Helper.getTodayDate()}.${Helper.getTodayMonth()})`}</span>
                <div>
                    <label htmlFor="fuu">Автообновление</label>
                    <input onChange={this.toggleAutoupdate} checked={this.state.autoupdate} id="fuu" type="checkbox" />
                </div>
            </div>
        );
    }
});

export default Search;