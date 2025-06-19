import { api } from "~/services/api"

import { QuoteComparisonSchema, type QuoteComparison } from "./types"

class _QuoteComparisonService {
  get = async (quoteId: string) =>
    QuoteComparisonSchema.parse(
      (
        await api.get<QuoteComparison>(`/quote-comparison`, {
          params: { quoteId },
        })
      ).data,
    )
}

export const QuoteComparisonService = new _QuoteComparisonService()
