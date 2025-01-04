export default function remainingDays(starDate, endDate){
  const remainingDays = endDate.getTime() - starDate.getTime()
  return remainingDays / (1000 * 60 * 60 * 24) 
}
