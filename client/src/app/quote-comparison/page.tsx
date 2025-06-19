import { ErrorAlert, Loader } from "~/components"
import { useQuoteComparison } from "~/repositories/quote-comparison/hooks"
import { QuoteComparisonHeader, QuoteComparisonTable } from "./components"

export const QuoteComparisonPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search)

  const {
    data: quoteComparison,
    isLoading: isQuoteComparisonLoading,
    error: quoteComparisonError,
  } = useQuoteComparison(params.get("quoteId") ?? "")

  if (isQuoteComparisonLoading) {
    return <Loader className="grow" />
  }

  if (quoteComparisonError) {
    return (
      <ErrorAlert className="grow" message={quoteComparisonError.message} />
    )
  }

  if (!quoteComparison?.itemOffers.length) {
    return <ErrorAlert className="grow" message="Quote comparison not found." />
  }

  return (
    <div className="flex grow flex-col justify-center gap-4 p-2 sm:p-8">
      <QuoteComparisonHeader
        suppliersCount={quoteComparison.suppliers.length}
      />
      <QuoteComparisonTable comparison={quoteComparison} />
    </div>
  )
}
