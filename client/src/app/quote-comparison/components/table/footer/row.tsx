import React from "react"
import { cn } from "~/utilities/styles"

type Props = {
  label: React.ReactNode
  data: React.ReactNode[]

  isBold?: boolean
}

export const QuoteComparisonTableFooterRow: React.FC<Props> = (props) => {
  const { label, data, isBold } = props

  return (
    <tr className={cn(isBold && "font-bold")}>
      <td>{label}</td>
      <td />
      {data.map((cell, index) => (
        <React.Fragment key={index}>
          <td />
          <td key={index}>{cell}</td>
        </React.Fragment>
      ))}
    </tr>
  )
}
