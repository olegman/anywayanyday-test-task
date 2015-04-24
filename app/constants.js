import keyMirror from 'keymirror';

export default {
    ActionTypes: keyMirror({
        START_SEARCH: null,
        RECIEVE_SEARCH_SYNONIM: null,
        RECIEVE_SEARCH_STATUS: null,
        RECIEVE_FLIGHTS: null,
        SELECT_AIRLINE: null,
        TOGGLE_AUTOUPDATE: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};