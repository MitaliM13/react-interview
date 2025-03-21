function vehicles(type, brand, model, year){
    return {
        type,
        brand,
        model,
        year,
        aboutVehicle: function(){
            return `Its a ${this.type} of ${this.brand} ${this.model} model and it was built in ${this.year}`
        }
    }
}

const buggati = vehicles("SUV", "Toyota", "RAV4", 2022)

console.log(buggati.aboutVehicle());