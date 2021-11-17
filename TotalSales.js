//Calculate sell
function totalSales(shirt,pant,shoe){
    let shirtPrice=shirt*100;
    let pantPrice=pant*200;
    let shoePrice=shoe*500;
    let total=shirtPrice+pantPrice+shoePrice;
    console.log(total);
    return total;
  
  }
  totalSales(5,10,20); 