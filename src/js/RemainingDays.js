function remainingDays(starDate, endDate){
  const remainingDays = endDate.getTime() - starDate.getTime()
  return remainingDays / (1000 * 60 * 60 * 24) 
}

const fecha = new Date("2003/1/25")
const fechaFutura = new Date("2003/3/1")
const otraFuturo = new Date("2003/4/6")
console.log("DIAS RESTANTES(35): " + remainingDays(fecha,fechaFutura))
console.log("DIAS RESTANTES(71): " + remainingDays(fecha,otraFuturo))