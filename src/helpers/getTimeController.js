
export function getTimeController(unixTime){
    const date = new Date(unixTime*1000)
    const miliseconds = -(date.getTime() - new Date().getTime())
    const seconds = Math.round(miliseconds/1000)
    if(seconds < 0) return {unit:"second", value:0}
    if(seconds < 60) return {unit:"second",value:seconds}
    const minutes = Math.round(seconds/60)
    if(minutes < 60) return {unit:"minute",value:minutes}
    const hours = Math.round(minutes/60)
    if(hours < 24) return {unit:"hour",value:hours}
    const days = Math.round(hours/24)
    if(days < 30) return {unit:"day",value:days}
    const months = Math.round(days/30)
    if(months < 12) return {unit:"month",value:months}
    const years = Math.round(months/12)
    return {unit:"year",value:years}
    
}