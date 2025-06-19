import { cn } from "~/utilities/styles"

type Props = {
  message?: string
  className?: string
}

export const ErrorAlert: React.FC<Props> = (props) => {
  const { className, message = "An error occurred" } = props

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <p className="text-red-300">{message}</p>
    </div>
  )
}
