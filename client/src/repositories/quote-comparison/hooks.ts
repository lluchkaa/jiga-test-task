import { useQuery } from "@tanstack/react-query"

import { QuoteComparisonService } from "./service"

export const useQuoteComparison = (quoteId: string) =>
  useQuery({
    queryKey: ["quote-comparison", quoteId],
    queryFn: () => QuoteComparisonService.get(quoteId),
    enabled: !!quoteId,
  })
