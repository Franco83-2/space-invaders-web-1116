 class Spaceship {

   addShipToCrew(crew) {
        crew.forEach(function(element) {
        element.currentShip = this
      }.bind(this))
    }

   constructor(name, crew, phasers, shields) {
     this.name = name
     this.crew = crew
     this.phasers = phasers
     this.shields = shields
     this.cloaked = false
     this.warpDrive = "disengaged"
     this.phasersCharge = "uncharged"
     if(crew.length > 0) {
         this.docked = false
         this.addShipToCrew(this.crew)
       } else {
         this.docked = true
       }
     }
}
