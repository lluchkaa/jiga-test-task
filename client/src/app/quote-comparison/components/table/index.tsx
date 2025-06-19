import type { QuoteComparison } from "~/repositories/quote-comparison"
import { QuoteComparisonTableHeader } from "./header"
import { cn } from "~/services/styles"

type Props = {
  comparison: QuoteComparison

  className?: string
}

export const QuoteComparisonTable: React.FC<Props> = (props) => {
  const { comparison, className } = props

  return (
    <table className={cn("w-auto", className)}>
      <QuoteComparisonTableHeader comparison={comparison} />
    </table>
  )
}
