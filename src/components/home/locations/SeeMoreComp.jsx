import './SeeMoreComp.css'

let SeeMoreComp = ({ handleLocations }) => {
    return <div className='seeMoreCard' onClick={() => handleLocations(5)}>
        <span className='seeMoreCardInner'>
            <span className='seeMoreName'>see more</span>
        </span>
        <span className='seeMoreRightArrow'>&#709;</span >
    </div >
}

export default SeeMoreComp;