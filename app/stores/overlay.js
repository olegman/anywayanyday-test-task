import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';
import Storage from 'libs/storage';

class OverlayStore extends Storage {
    constructor(options) { super(options) }
}

let store = new OverlayStore({
    status: null,
    isShow: false
});

store.dispatchToken = AppDispatcher.register(function({action}) {
    let state = store.get();

    switch(action.type) {

        case ActionTypes.START_SEARCH:
            state.status = 0;
            state.isShow = true;
            store.set(state);
            break;

        case ActionTypes.RECIEVE_SEARCH_STATUS:
            state.status = action.data.Completed;
            store.set(state);
            break;

        case ActionTypes.RECIEVE_FLIGHTS:
            state.isShow = false;
            store.set(state);
            break;

        default:
        // do nothing
    }

});

export default store;