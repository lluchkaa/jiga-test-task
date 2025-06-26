import { useQuery } from "@tanstack/react-query"

import { QuoteComparisonService } from "./service"

export const useQuoteComparison = (
  quoteId: string,
  removedItemIds: string[] = [],
) =>
  useQuery({
    queryKey: ["quote-comparison", quoteId, removedItemIds],
    queryFn: () => QuoteComparisonService.get(quoteId, removedItemIds),
    enabled: !!quoteId,
  })
