import ServerActions from 'actions/server';
import $ from 'jquery';

class Api {
    constructor() {
        $.ajaxSetup({
            type: 'GET',
            jsonp: 'callback',
            dataType: 'jsonp'
        });
    }
    // TODO: handle error callback for request via plugin: https://github.com/jaubourg/jquery-jsonp or timeout.

    startSearch() {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: 'http://api.anywayanyday.com/api/NewRequest3/',
                data: {
                    Route: '2304MOWLEDAD1CN0IN0SCE',
                    _Serialize: 'JSON'
                },
                success: function(response) {
                    if (response.Error) {
                        reject(response.Error);
                    } else {
                        resolve(response);
                    }
                }
            });
        }).then(function (data) {
            ServerActions.recieveSearchSynonim(data);
        });
    }
    getSearchStatus(idSynonym) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: 'http://api.anywayanyday.com/api/RequestState/',
                data: {
                    R: idSynonym,
                    _Serialize: 'JSON'
                },
                success: function(response) {
                    if (response.Error) {
                        reject(response.Error);
                    } else {
                        resolve(response);
                    }
                }
            });
        }).then(function (data) {
            ServerActions.recieveSearchStatus(data);
        });
    }
    getFlights(idSynonym) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: 'http://api.anywayanyday.com/api/Fares2/',
                data: {
                    R: idSynonym,
                    L: 'RU',
                    C: 'RUB',
                    Limit: 200,
                    DebugFullNames: true,
                    _Serialize: 'JSON'
                },
                success: function(response) {
                    if (response.Error) {
                        reject(response.Error);
                    } else {
                        resolve(response);
                    }
                }
            });
        }).then(function (data) {
            ServerActions.recieveFlights(data);
        });
    }
}

export default new Api();