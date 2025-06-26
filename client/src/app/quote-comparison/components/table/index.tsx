import type { QuoteComparison } from "~/repositories/quote-comparison"
import { cn } from "~/utilities/styles"

import { QuoteComparisonTableHeader } from "./header"
import { QuoteComparisonTableBody } from "./body"
import { QuoteComparisonTableFooter } from "./footer"

type Props = {
  comparison: QuoteComparison
  removeItem: (itemId: string) => void

  className?: string
}

export const QuoteComparisonTable: React.FC<Props> = (props) => {
  const { comparison, removeItem, className } = props

  return (
    <div className="overflow-x-auto">
      <table className={cn("w-full whitespace-nowrap", className)}>
        <QuoteComparisonTableHeader comparison={comparison} />
        <QuoteComparisonTableBody
          comparison={comparison}
          removeItem={removeItem}
        />
        <QuoteComparisonTableFooter comparison={comparison} />
      </table>
    </div>
  )
}
