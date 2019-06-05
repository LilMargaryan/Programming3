class Kendanapahpan extends LivingCreature{
 
    constructor(x, y, index){
        super(x, y, index);
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
            matrix[this.y][this.x] = 2;
            var norXotaker = new Xotaker(this.x, this.y);
            grassEaterArr.push(norXotaker);
            matrix[norvandak[1]][norvandak[0]] = 5;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}


