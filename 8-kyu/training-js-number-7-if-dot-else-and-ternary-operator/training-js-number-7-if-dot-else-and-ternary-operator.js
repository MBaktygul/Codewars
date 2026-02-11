function saleHotdogs(n){
  let price;
  n >= 5 && n < 10 ? price=95 : n >= 10 ? price=90 : price=100;
  return n * price;
}