import type { QuoteComparison } from "~/repositories/quote-comparison"

import { QuoteComparisonTableFooterRow } from "./row"
import { createColorPicker, formatMoney } from "~/utilities/number"

type Props = {
  comparison: QuoteComparison
}

export const QuoteComparisonTableFooter: React.FC<Props> = (props) => {
  const { comparison } = props

  const shippingPriceColorPicker = createColorPicker(
    Math.min(...comparison.suppliers.map((s) => s.shippingPrice)),
    Math.max(...comparison.suppliers.map((s) => s.shippingPrice)),
  )

  const leadTimeColorPicker = createColorPicker(
    Math.min(...comparison.suppliers.map((s) => s.leadTime)),
    Math.max(...comparison.suppliers.map((s) => s.leadTime)),
  )

  const totalPriceColorPicker = createColorPicker(
    Math.min(...comparison.suppliers.map((s) => s.totalPrice)),
    Math.max(...comparison.suppliers.map((s) => s.totalPrice)),
  )

  return (
    <tfoot>
      <QuoteComparisonTableFooterRow
        label="Shipping Fee"
        data={comparison.suppliers.map(({ shippingPrice }) => ({
          value: formatMoney(shippingPrice),
          color: shippingPriceColorPicker(shippingPrice),
        }))}
      />
      <QuoteComparisonTableFooterRow
        label="Lead time"
        data={comparison.suppliers.map(({ leadTime }) => ({
          value: leadTime,
          color: leadTimeColorPicker(leadTime),
        }))}
      />
      <QuoteComparisonTableFooterRow
        label="Total"
        data={comparison.suppliers.map(({ totalPrice }) => ({
          value: formatMoney(totalPrice),
          color: totalPriceColorPicker(totalPrice),
        }))}
        isBold
      />
    </tfoot>
  )
}
