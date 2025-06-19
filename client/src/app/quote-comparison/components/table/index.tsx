import type { QuoteComparison } from "~/repositories/quote-comparison"
import { cn } from "~/utilities/styles"

import { QuoteComparisonTableHeader } from "./header"
import { QuoteComparisonTableBody } from "./body"

type Props = {
  comparison: QuoteComparison

  className?: string
}

export const QuoteComparisonTable: React.FC<Props> = (props) => {
  const { comparison, className } = props

  return (
    <table className={cn("w-auto", className)}>
      <QuoteComparisonTableHeader comparison={comparison} />
      <QuoteComparisonTableBody comparison={comparison} />
    </table>
  )
}
