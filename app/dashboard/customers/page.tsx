import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/customers/columns"
import { customers } from "@/components/dashboard/customers/data"

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      </div>
      <div>
        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  )
}
