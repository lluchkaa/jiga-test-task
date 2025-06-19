import type { QuoteComparison } from "~/repositories/quote-comparison"

import { QuoteComparisonTableRow } from "./row"

type Props = {
  comparison: QuoteComparison
}

export const QuoteComparisonTableBody: React.FC<Props> = (props) => {
  const { comparison } = props

  return (
    <tbody>
      {comparison.itemOffers.map((itemOffer) => (
        <QuoteComparisonTableRow offer={itemOffer} comparison={comparison} />
      ))}
    </tbody>
  )
}
