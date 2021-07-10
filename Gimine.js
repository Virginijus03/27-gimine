class Gimine {
    constructor() {
        this.list = [];
    }
    gime(name, year) {

        this.list.push([name, year]);
    }
    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            console.log((i + 1) + '. ' + this.list[i] + 'metais ir nera vedes');
        }
    }
}

module.exports = Gimine;