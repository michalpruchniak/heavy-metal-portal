import { Link } from "@inertiajs/react"
import buttonTypes from "./__partials/constants/buttonTypes"

interface ButtonProps {
    children: string
    url: string
    type?: keyof typeof buttonTypes;
}
const ButtonLink = ({ children, url, type='primary' } :ButtonProps) => {
    const className = buttonTypes[type].className;

    return <Link className={`px-3 py-2 rounded-xl hover:no-underline ${className}`} href={url}>{children}</Link>
}

export default ButtonLink