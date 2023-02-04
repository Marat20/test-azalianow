export const getCurrency = (price: number) => {
  const str = String(Math.round(price * 70));
  return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
