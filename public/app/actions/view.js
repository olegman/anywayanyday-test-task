import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';

let ViewActions = {
    startSearch() {
        AppDispatcher.handleViewAction({
            type: ActionTypes.START_SEARCH
        });
    },
    selectAirline(airline) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.SELECT_AIRLINE,
            airline: airline
        });
    },
    toggleAutoupdate(checked) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.TOGGLE_AUTOUPDATE,
            checked: checked
        });
    }
};

export default ViewActions;