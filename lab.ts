interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let tallestMountain: string = "";
  let tallestHeight: number = 0;

  for (const mountain of mountains) {
    if (mountain.height > tallestHeight) {
      tallestHeight = mountain.height;
      tallestMountain = mountain.name;
    }
  }

  return tallestMountain;
}

let nameOfTallestMountain: string = findNameOfTallestMountain(mountains);
console.log(nameOfTallestMountain);

interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  {
    name: "mascara",
    price: 27,
  },

  {
    name: "eyeliner",
    price: 20,
  },
  {
    name: "lipstick",
    price: 22,
  },
];
function calcAverageProductPrice(products: Product[]): number {
  let newTotal: number = 0;
  for (let i = 0; i < products.length; i++) {
    newTotal += products[i].price;
  }
  let average = newTotal / products.length;
  return average;
}

let finalTotal: number = calcAverageProductPrice(products);
console.log(finalTotal);

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10 },
    quantity: 10,
  },

  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1,
    },
    quantity: 20,
  },
];

function calcInventoryValue(inventory: InventoryItem[]) {
  let totalValue = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalValue += inventory[i].product.price * inventory[i].quantity;
  }
  return totalValue;
}

let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);
