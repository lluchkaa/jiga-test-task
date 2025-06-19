import React from "react"

import type {
  ItemOffer,
  QuoteComparison,
} from "~/repositories/quote-comparison"
import { createColorPicker, formatMoney } from "~/utilities/number"

type Props = {
  offer: ItemOffer
  comparison: QuoteComparison
}

export const QuoteComparisonTableRow: React.FC<Props> = (props) => {
  const { offer: itemOffer, comparison } = props

  const item = comparison.items.find((i) => i.id === itemOffer.itemId)

  const quantity = Object.values(itemOffer.offers)[0]?.quantity

  const colorPicker = createColorPicker(itemOffer.minPrice, itemOffer.maxPrice)

  const priceNodes = comparison.suppliers.map((supplier) => {
    const offer = itemOffer.offers[supplier.id]

    const price = offer?.unitPrice
    const color = price ? colorPicker(price) : undefined

    return (
      <React.Fragment key={supplier.id}>
        <td style={{backgroundColor: color}}>{price ? formatMoney(price) : null}</td>
        <td style={{backgroundColor: color}}>{price ? formatMoney(price * offer.quantity) : null}</td>
      </React.Fragment>
    )
  })

  return (
    <tr>
      <td>{item?.name}</td>
      <td>{quantity}</td>
      {priceNodes}
    </tr>
  )
}
