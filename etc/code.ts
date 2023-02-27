type Item = {
  price: number;
  quantity: number;
};

function getTotalPrice(items: Item[]) {
  const [totalQuantity, totalPrice] = items.reduce(
    (acc, item) => {
      const [accQuantity, accPrice] = acc;
      const quantity = accQuantity + item.quantity;
      const price = accPrice + item.price * item.quantity;

      return [quantity, price];
    },
    [0, 0]
  );

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
