import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';
import Storage from 'libs/storage';
import Api from 'libs/api';
import FlightsStore from 'stores/flights';

const AUTOUPDATE_POLL_INTERVAL = 5*60*1000; // 5 min
const SEARCH_STATUS_POLL_INTERVAL = 500;
let autoupdateTimerId = null;
let searchStatusTimerId = null;

class SearchStore extends Storage {
    constructor(options) { super(options) }

    // Public methods
    getSynonymId() {
        return this.get().idSynonym;
    }
    getAutoupdate() {
        return this.get().autoupdate;
    }
}

let store = new SearchStore({
    idSynonym: null,
    autoupdate: true
});

function _startSearch() {
    clearInterval(searchStatusTimerId);
    Api.startSearch();
}

store.dispatchToken = AppDispatcher.register(function({action}) {
    let state = store.get();

    switch(action.type) {

        case ActionTypes.START_SEARCH:
            _startSearch();
            break;

        case ActionTypes.RECIEVE_SEARCH_SYNONIM:
            state.idSynonym = action.data.IdSynonym;
            Api.getSearchStatus(state.idSynonym);
            searchStatusTimerId = setInterval(Api.getSearchStatus.bind(null, state.idSynonym), SEARCH_STATUS_POLL_INTERVAL);
            store.set(state);
            break;

        case ActionTypes.RECIEVE_SEARCH_STATUS:
            if (action.data.Completed == 100) {
                clearInterval(searchStatusTimerId);
            }
            break;

        case ActionTypes.TOGGLE_AUTOUPDATE:
            state.autoupdate = action.checked;
            if (state.autoupdate && FlightsStore.getFlights().length) {
                _startSearch();
            } else {
                clearInterval(searchStatusTimerId);
                clearInterval(autoupdateTimerId);
            }
            store.set(state);
            break;

        case ActionTypes.RECIEVE_FLIGHTS:
            if (state.autoupdate) {
                clearInterval(searchStatusTimerId);
                clearInterval(autoupdateTimerId);
                autoupdateTimerId = setTimeout(Api.startSearch, AUTOUPDATE_POLL_INTERVAL);
            }
            break;

        default:
        // do nothing
    }

});

export default store;