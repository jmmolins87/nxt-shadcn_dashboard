




import { Columns, DataTable } from "./components";
import { payments } from "./data/payments";

async function fetchData() {
  return payments
}


export default async function DataTablePage() {

  const data = await fetchData()

  return (
    <div>
      <DataTable columns={ Columns } data={ data } />
    </div>
  );
}