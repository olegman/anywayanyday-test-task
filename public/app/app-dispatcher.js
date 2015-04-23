import { PayloadSources } from 'constants';
import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {

    constructor() {
        super()
    }

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the server.
     */
    handleServerAction(action) {
        let payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    }

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the view.
     */
    handleViewAction(action) {
        let payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
}

export default new AppDispatcher();