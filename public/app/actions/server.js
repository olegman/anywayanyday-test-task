import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';

let ServerActions = {
    recieveSearchSynonim(data) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECIEVE_SEARCH_SYNONIM,
            data: data
        });
    },
    recieveSearchStatus(data) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECIEVE_SEARCH_STATUS,
            data: data
        });
    },
    recieveFlights(data) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.RECIEVE_FLIGHTS,
            data: data
        });
    }
};

export default ServerActions;