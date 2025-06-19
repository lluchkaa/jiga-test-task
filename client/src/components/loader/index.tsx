import { cn } from "~/services/styles"

type Props = {
  className?: string
}

export const Loader: React.FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn("flex items-center justify-center", className)}>
      Loading...
    </div>
  )
}
