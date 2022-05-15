import CollectionCss from "./CollectionCard.module.css"

let CollectionCard = ({ img, title, places }) => {
    return <div className={CollectionCss.card}>
        <img className={CollectionCss.img} src={img} alt="card image" />
        <div className={CollectionCss.text}>
            <div className={CollectionCss.title}>{title}</div>
            <div className={CollectionCss.places}>{places} Places</div>
        </div>
    </div>
}

export default CollectionCard;