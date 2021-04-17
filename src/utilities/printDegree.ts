export const printDegree = (value: number, unit: string): any => {
  const temperature =
    unit === 'C' ? Math.floor(value) : Math.floor(value * (9 / 5) + 32);
  const unitString = `°${unit}`;
  return { val:temperature, unit:unitString };
};
