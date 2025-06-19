import { useEffect } from "react"
import { QuoteComparisonService } from "~/repositories/quote-comparison"

export const App: React.FC = () => {
  useEffect(() => {
    QuoteComparisonService.get("q1").then(console.log).catch(console.error)
  })

  return null
}
