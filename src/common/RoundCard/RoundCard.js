import './RoundCard.scss'
export default function RoundCard(
    {
        children,
        className = '',
    }
) {
    return (
        <div className={`round-card__wrap ${className}`}>
            { children }
        </div>
    )
}