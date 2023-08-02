import { Link } from "@remix-run/react"
import { type ReactNode } from "react"

interface CardProps {
    children: ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <Link to={`/ddd/${children}`}>
            <div className='m-1 w-52 flex items-center justify-center bg-purple-100 text-purple-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
                {children}
            </div>
        </Link>
    )
}

export default Card
