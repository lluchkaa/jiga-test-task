import type { Supplier } from "~/repositories/quote-comparison"

type Props = {
  supplier: Supplier

  isTop: boolean
}

export const SupplierCell: React.FC<Props> = (props) => {
  const { supplier, isTop } = props

  const topPickNode = isTop ? (
    <span className="absolute right-0 bottom-0 translate-y-1/2 rounded-full bg-purple-500 p-1 text-xs text-white">
      Top Pick
    </span>
  ) : null

  return (
    <th colSpan={2} className="relative">
      <div className="inline-flex flex-row items-center justify-between gap-4">
        <div className="inline-flex flex-col items-start">
          <span>{supplier.name}</span>
          <span className="text-sm text-gray-500">{supplier.country}</span>
        </div>
        <span>⭐️ {supplier.rating}</span>
      </div>
      {topPickNode}
    </th>
  )
}
