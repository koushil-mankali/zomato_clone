import './SmallCard.css'

let SmallCard = ({ imgSrc, text }) => {
    return <div className="card">
        <div className='imgDiv'>
            <img className='img' src={imgSrc} alt="card image" />
        </div>
        <div className='txtDiv'>
            <p className='text'>{text}</p>
        </div>
    </div>
}

export default SmallCard;