import AppDispatcher from 'app-dispatcher';
import { ActionTypes } from 'constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let state = Symbol('state');

/**
 * Реализация хранилища из Flux архитектуры.
 * @constructor
 * @param {object} initState - пустое состояние, со значениями по умолчанию.
 */
class Storage extends EventEmitter {
    constructor(initState = {}) {
        super();
        this[state] = initState;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    get() {
        return Object.assign({}, this[state]);
    }

    set(newState) {
        this[state] = newState;
        this.emitChange();
    }
}

export default Storage;