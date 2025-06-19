type Props = {
  suppliersCount: number
}

export const QuoteComparisonHeader: React.FC<Props> = (props) => {
  const { suppliersCount } = props

  return (
    <header>
      <p className="text-3xl">
        Detailed quotes comparison{" "}
        <span className="text-base text-gray-400">
          ({suppliersCount} supplier{suppliersCount > 1 ? "s" : ""})
        </span>
      </p>
    </header>
  )
}
