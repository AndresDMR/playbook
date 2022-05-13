uber = {
    profile: "Andrés Daniel Mora Ríos",
    from: "Celaya,Gto",
    to: "Santiago de Querétaro,Qro",
    pyment: "Tarjeta de débito",
    getTravelInfo: function(){
        return `This user travel from: ${this.from}, to: ${this.to}`
    },
    getPaymentInfo: function(){
        return `Pyment metod selected: ${this.pyment}`
    }
}
console.log("Uber App")
console.log("Hello "+uber.profile+" this is your configuration")
console.log(uber.getTravelInfo())
console.log(uber.getPaymentInfo())