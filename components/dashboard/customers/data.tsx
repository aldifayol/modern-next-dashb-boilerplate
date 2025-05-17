export type Customer = {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  lastOrder: string
}

export const customers: Customer[] = [
  {
    id: "CUST-001",
    name: "John Smith",
    email: "john.smith@example.com",
    status: "active",
    lastOrder: "2023-04-15",
  },
  {
    id: "CUST-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    status: "active",
    lastOrder: "2023-04-10",
  },
  {
    id: "CUST-003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "inactive",
    lastOrder: "2023-03-25",
  },
  {
    id: "CUST-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "active",
    lastOrder: "2023-04-18",
  },
  {
    id: "CUST-005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    status: "pending",
    lastOrder: "2023-04-12",
  },
  {
    id: "CUST-006",
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    status: "active",
    lastOrder: "2023-04-14",
  },
  {
    id: "CUST-007",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    status: "inactive",
    lastOrder: "2023-03-15",
  },
  {
    id: "CUST-008",
    name: "Jennifer Anderson",
    email: "jennifer.anderson@example.com",
    status: "active",
    lastOrder: "2023-04-20",
  },
  {
    id: "CUST-009",
    name: "Christopher Thomas",
    email: "christopher.thomas@example.com",
    status: "pending",
    lastOrder: "2023-04-05",
  },
  {
    id: "CUST-010",
    name: "Lisa Jackson",
    email: "lisa.jackson@example.com",
    status: "active",
    lastOrder: "2023-04-17",
  },
]
