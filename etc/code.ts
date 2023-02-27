type Item = {
  price: number;
  quantity: number;
};

function getTotalPrice(items: Item[]) {
  let totalQuantity = 0;

  for (let i = 0; i < items.length; i++) {
    totalQuantity += items[i].quantity;
  }

  const hasDiscount = totalQuantity >= 10;

  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const price = items[i].price * items[i].quantity;
    if (hasDiscount) {
      totalPrice += price * 0.9;
    } else {
      totalPrice += price;
    }
  }

  return totalPrice;
}
