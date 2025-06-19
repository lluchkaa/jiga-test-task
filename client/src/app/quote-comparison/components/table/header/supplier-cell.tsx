import type { Supplier } from "~/repositories/quote-comparison"

type Props = {
  supplier: Supplier
}

export const SupplierCell: React.FC<Props> = (props) => {
  const { supplier } = props

  return (
    <th colSpan={2}>
      <div className="inline-flex flex-row items-center justify-between gap-4">
        <div className="inline-flex flex-col items-start">
          <span>{supplier.name}</span>
          <span className="text-sm text-gray-500">{supplier.country}</span>
        </div>
        <span>⭐️ {supplier.rating}</span>
      </div>
    </th>
  )
}
