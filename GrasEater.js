class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.MIN_energy = 3;
        this.MAX_energy = 8;
        this.directions = [];
        this.index = 2;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy--;

            if (this.energy <= 0) this.mahanal();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            for (var i in grassArr) {
                if (norvandak[0] == grassArr[i].x && norvandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;

            this.x = norvandak[0];
            this.y = norvandak[1];

            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {
        var NorVandak = random(this.yntrelVandak(0));
        if (NorVandak && this.energy >= this.MAX_energy) {
            var norXotaker = new Xotaker(NorVandak[0], NorVandak[1]);
            grassEaterArr.push(norXotaker);
            matrix[NorVandak[1]][NorVandak[0]] = 2;
            this.energy = this.MIN_energy;
        }
    }
    mahanal() {

        matrix[this.y][this.x] = 0;

        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
            }
        }
    }
}