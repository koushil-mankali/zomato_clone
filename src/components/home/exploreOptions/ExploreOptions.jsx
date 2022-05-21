import exploreCss from './ExploreOptions.module.css';

let ExploreOptions = () => {
    return <div className={exploreCss.outerDiv}>
        <div className={exploreCss.innerDiv}>
            <div className={exploreCss.title}>Explore other options for you here</div>
            <div className={exploreCss.options}>
                <div className={exploreCss.option}>
                    <div className={exploreCss.box}>
                        <span className={exploreCss.ttle}>Cities We Deliver To</span>
                        <span className={exploreCss.arrow}>&#709;</span>
                    </div>
                    <div className={exploreCss.body}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat, laudantium dolor magnam officia architecto impedit illum reprehenderit alias tempore facilis odio libero eaque minima quos pariatur sunt officiis corrupti eum accusamus rerum adipisci laboriosam inventore vitae! Rem iste quasi laudantium est vel beatae possimus nemo. Tempore sequi ducimus facilis.
                    </div>
                </div>
                <div className={exploreCss.option}>
                    <div className={exploreCss.box}>
                        <span className={exploreCss.ttle}>Cities We Deliver To</span>
                        <span className={exploreCss.arrow}>&#709;</span>
                    </div>
                    <div className={exploreCss.body}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat, laudantium dolor magnam officia architecto impedit illum reprehenderit alias tempore facilis odio libero eaque minima quos pariatur sunt officiis corrupti eum accusamus rerum adipisci laboriosam inventore vitae! Rem iste quasi laudantium est vel beatae possimus nemo. Tempore sequi ducimus facilis.
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ExploreOptions;