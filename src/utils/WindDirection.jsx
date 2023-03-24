const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];

export default function WindDirection({direction}) {
  return (direction >= 0 && direction <= 360) ? directions[Math.floor(((direction + 22.5) % 360) / 45)] : '-';
}