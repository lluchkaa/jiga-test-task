import type { QuoteComparison } from "~/repositories/quote-comparison"
import { SupplierCell } from "./supplier-cell"
import React from "react"

type Props = {
  comparison: QuoteComparison
}

export const QuoteComparisonTableHeader: React.FC<Props> = (props) => {
  const { comparison } = props

  const supplierNodes = comparison.suppliers.map((supplier) => (
    <SupplierCell key={supplier.id} supplier={supplier} />
  ))

  const supplierSubGroups = comparison.suppliers.map((supplier) => (
    <React.Fragment key={supplier.id}>
      <th>Unit Price</th>
      <th>Price</th>
    </React.Fragment>
  ))

  return (
    <thead className="[&_th]:bg-gray-200">
      <tr>
        <th rowSpan={2}>Part Name</th>
        <th rowSpan={2}>Qty</th>
        {supplierNodes}
      </tr>
      <tr>{supplierSubGroups}</tr>
    </thead>
  )
}
