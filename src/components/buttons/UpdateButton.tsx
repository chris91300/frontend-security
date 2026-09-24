import { Link } from "react-router"


type Props = {
    id: string
}

export default function UpdateButton({ id }: Props) {

    return <Link to={`/updateBook/${id}`}>modifier</Link>
}