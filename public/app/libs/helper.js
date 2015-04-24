class Helper {
    getTodayMonth() {
        var month = new Date().getMonth() + 1;
        return month < 10 ? '0' + month : '' + month;
    }
    getTodayDate() {
        var date = new Date().getDate();
        return date < 10 ? '0' + date : '' + date;
    }
}

export default new Helper();