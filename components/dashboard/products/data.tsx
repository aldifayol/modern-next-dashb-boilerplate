export type Product = {
  id: string
  name: string
  category: string
  price: string
  stock: number
  status: "in stock" | "low stock" | "out of stock"
}

export const products: Product[] = [
  {
    id: "PROD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: "129.99",
    stock: 45,
    status: "in stock",
  },
  {
    id: "PROD-002",
    name: "Smart Watch",
    category: "Electronics",
    price: "199.99",
    stock: 28,
    status: "in stock",
  },
  {
    id: "PROD-003",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "79.99",
    stock: 5,
    status: "low stock",
  },
  {
    id: "PROD-004",
    name: "Laptop Backpack",
    category: "Accessories",
    price: "49.99",
    stock: 0,
    status: "out of stock",
  },
  {
    id: "PROD-005",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: "149.99",
    stock: 12,
    status: "in stock",
  },
  {
    id: "PROD-006",
    name: "Wireless Mouse",
    category: "Electronics",
    price: "39.99",
    stock: 32,
    status: "in stock",
  },
  {
    id: "PROD-007",
    name: "USB-C Hub",
    category: "Accessories",
    price: "59.99",
    stock: 3,
    status: "low stock",
  },
  {
    id: "PROD-008",
    name: "External SSD 1TB",
    category: "Storage",
    price: "159.99",
    stock: 18,
    status: "in stock",
  },
  {
    id: "PROD-009",
    name: "Wireless Charger",
    category: "Accessories",
    price: "29.99",
    stock: 0,
    status: "out of stock",
  },
  {
    id: "PROD-010",
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    price: "89.99",
    stock: 22,
    status: "in stock",
  },
]
