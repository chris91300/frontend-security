import './loading.css'

type Props = {
    size: "small" | "medium" | "big"
}
export default function Loading({ size }: Props) {

    return <div className={`loading ${size}`}></div>
}