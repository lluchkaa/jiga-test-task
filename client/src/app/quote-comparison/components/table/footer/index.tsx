import type { QuoteComparison } from "~/repositories/quote-comparison"

import { QuoteComparisonTableFooterRow } from "./row"
import { formatMoney } from "~/utilities/money"

type Props = {
  comparison: QuoteComparison
}

export const QuoteComparisonTableFooter: React.FC<Props> = (props) => {
  const { comparison } = props

  return (
    <tfoot>
      <QuoteComparisonTableFooterRow
        label="Shipping Fee"
        data={comparison.suppliers.map(({ shippingPrice }) =>
          formatMoney(shippingPrice),
        )}
      />
      <QuoteComparisonTableFooterRow
        label="Lead time"
        data={comparison.suppliers.map(({ leadTime }) => leadTime)}
      />
      <QuoteComparisonTableFooterRow
        label="Total"
        data={comparison.suppliers.map(({ totalPrice }) =>
          formatMoney(totalPrice),
        )}
        isBold
      />
    </tfoot>
  )
}
