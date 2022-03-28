import './card.css'
function Card({children,className}) {
    const cssClasses = 'card ' + className;
    return <div className={cssClasses}>{children}</div>
}

export default Card;