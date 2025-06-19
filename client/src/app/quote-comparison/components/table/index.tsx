import type { QuoteComparison } from "~/repositories/quote-comparison"
import { cn } from "~/utilities/styles"

import { QuoteComparisonTableHeader } from "./header"
import { QuoteComparisonTableBody } from "./body"
import { QuoteComparisonTableFooter } from "./footer"

type Props = {
  comparison: QuoteComparison

  className?: string
}

export const QuoteComparisonTable: React.FC<Props> = (props) => {
  const { comparison, className } = props

  return (
    <div className="overflow-x-auto">
      <table className={cn("whitespace-nowrap", className)}>
        <QuoteComparisonTableHeader comparison={comparison} />
        <QuoteComparisonTableBody comparison={comparison} />
        <QuoteComparisonTableFooter comparison={comparison} />
      </table>
    </div>
  )
}
