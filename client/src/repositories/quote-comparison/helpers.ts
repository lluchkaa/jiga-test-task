import type { Supplier } from "./types"

class _QuoteComparisonHelpers {
  getTopSupplier = (suppliers: Supplier[]) =>
    suppliers.reduce((top, supplier) => {
      if (supplier.score < top.score) {
        return supplier
      }
      return top
    })
}

export const QuoteComparisonHelpers = new _QuoteComparisonHelpers()
