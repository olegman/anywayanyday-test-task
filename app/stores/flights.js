import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';
import Storage from 'libs/storage';
import Api from 'libs/api';
import SearchStore from 'stores/search';

class FlightsStore extends Storage {
    constructor(options) { super(options) }

    // Public Methods
    getActiveAirline() {
        return this.get().activeAirline;
    }
    getFaresByAirline(airline) {
        let flights = this.get().flights;
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].Code == airline) {
                return flights[i].Fares;
            }
        }
        return [];
    }
    getFlights() {
        return this.get().flights;
    }
}

let store = new FlightsStore({
    activeAirline: null,
    flights: []
});

// Private Methods
function _sortFlights(data) {
    for (let i = 0; i < data.length; i++) {
        data[i].Fares.sort(function(a, b) {
            return a.TotalAmount - b.TotalAmount;
        });
    }
}

store.dispatchToken = AppDispatcher.register(function({action}) {
    let state = store.get();

    switch(action.type) {

        case ActionTypes.RECIEVE_SEARCH_STATUS:
            if (action.data.Completed == 100) {
                Api.getFlights(SearchStore.getSynonymId());
            }
            break;

        case ActionTypes.RECIEVE_FLIGHTS:
            if (state.activeAirline === null) {
                state.activeAirline = action.data.Airlines[0].Code;
            }
            _sortFlights(action.data.Airlines);
            state.flights = action.data.Airlines;
            store.set(state);
            break;

        case ActionTypes.SELECT_AIRLINE:
            state.activeAirline = action.airline;
            store.set(state);
            break;

        default:
        // do nothing
    }

});

export default store;