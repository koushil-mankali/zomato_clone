import './SeeMoreComp.css'

let SeeMoreComp = () => {
    return <div className='seeMoreCard' onClick={console.log('load more...')}>
        <span className='seeMoreCardInner'>
            <span className='seeMoreName'>see more</span>
        </span>
        <span className='seeMoreRightArrow'>&#709;</span >
    </div >
}

export default SeeMoreComp;