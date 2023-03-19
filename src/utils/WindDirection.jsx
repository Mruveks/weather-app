export default function WindDirection({direction}) {
  if ((23 > direction) && (direction >= 0)) {
    return 'North'
  } else if ((68 > direction) && (direction >= 24)){
    return 'North-East'
  } else if ((113 > direction) && (direction >= 69)){
    return 'East'
  } else if ((158 > direction) && (direction >= 114)){
    return 'South-East'
  } else if ((203 > direction) && (direction >= 159)){
    return 'South'
  } else if ((248 > direction) && (direction >= 204)){
    return 'South-West'
  } else if ((293 > direction) && (direction >= 249)){
    return 'West'
  } else if ((361 >= direction) && (direction >= 294)){
    return 'North-West'
  } else {
    return '-'
  }
}