type Item = {
  price: number;
  quantity: number;
};

function getTotalPrice(items: Item[]) {
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => {
    const price = item.price * item.quantity;
    return acc + price;
  }, 0);

  const hasDiscount = totalQuantity >= 10;
  const priceWithDiscount = totalPrice * (hasDiscount ? 0.9 : 1);

  return priceWithDiscount;
}

const items1: Item[] = [
  { price: 10, quantity: 2 },
  { price: 20, quantity: 3 },
  { price: 30, quantity: 4 },
];
const items2: Item[] = [
  { price: 10, quantity: 3 },
  { price: 20, quantity: 3 },
  { price: 30, quantity: 4 },
];

console.log(getTotalPrice(items1));
console.log(getTotalPrice(items2));
