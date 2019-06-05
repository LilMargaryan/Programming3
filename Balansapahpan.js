class Balansapahpan extends LivingCreature{
 
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 1000;
        this.directions = [];
    }
    
   //  yntrelVandak(ch) {
   //     this.stanalNorKordinatner();
   //     return super.yntrelVandak(ch);
   // }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 3;
            var norGishatich = new Gishatich(this.x, this.y);
            gishatichArr.push(norGishatich);
            matrix[norvandak[1]][norvandak[0]] = 6;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}

