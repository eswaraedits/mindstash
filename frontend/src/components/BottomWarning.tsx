import { Link } from "react-router-dom"

export function BottomWarning({label,buttonText,to}) {
  return (
    <div className="text-gray-200 flex gap-1">
        <div>
            {label}
        </div>
        <Link to={to} className="underline">
            {buttonText}
        </Link>
    </div>
  )
}
