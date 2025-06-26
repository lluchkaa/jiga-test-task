import type { QuoteComparison } from "~/repositories/quote-comparison"

import { QuoteComparisonTableRow } from "./row"

type Props = {
  comparison: QuoteComparison

  removeItem: (itemId: string) => void
}

export const QuoteComparisonTableBody: React.FC<Props> = (props) => {
  const { comparison, removeItem } = props

  const onCheckChangeCallback = (itemId: string) => (checked: boolean) => {
    if (!checked) {
      removeItem(itemId)
    }
  }

  return (
    <tbody>
      {comparison.itemOffers.map((itemOffer) => (
        <QuoteComparisonTableRow
          key={itemOffer.itemId}
          offer={itemOffer}
          comparison={comparison}
          onCheckChange={onCheckChangeCallback(itemOffer.itemId)}
        />
      ))}
    </tbody>
  )
}
