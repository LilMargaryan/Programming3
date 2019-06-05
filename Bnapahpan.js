class Bnapahpan extends LivingCreature{
  
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
            matrix[this.y][this.x] = 1;

            var norXot = new Grass(this.x, this.y);
            grassArr.push(norXot);

            matrix[norvandak[1]][norvandak[0]] = 4;

            this.x = norvandak[0];
            this.y = norvandak[1];
        }
    }
}