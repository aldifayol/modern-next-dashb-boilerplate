import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/products/columns"
import { products } from "@/components/dashboard/products/data"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  )
}
