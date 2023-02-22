export default function SelectDay({number}) {
  if (number === 1) {
    return 'Monday'
  } else if (number === 2){
    return 'Tueseday'
  } else if (number === 3){
    return 'Wednesday'
  } else if (number === 4){
    return 'Thursday'
  } else if (number === 5){
    return 'Friday'
  } else if (number === 6){
    return 'Saturday'
  } else if (number === 7){
    return 'Sunday'
  }
}