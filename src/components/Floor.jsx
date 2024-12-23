import snowFloor from '../assets/snow-ground.svg';
import snowFloor2 from '../assets/snow-ground2.svg';


const Floor = () => {

    return (
        <div className="abs fw" style={{bottom: 0, left: 0}}>
            <div className="abs fw" style={{bottom: 0, left: 0}}>
                <div className="fw" style={{fontSize: 0, height: "80vh"}}>
                    <img src={snowFloor} className='max' alt=""  />
                </div>
            </div>
            <div className='fw'>

            </div>
            <div className="abs fw" style={{bottom: 0, left: 0}}>
                <div className="fw" style={{fontSize: 0, height: "80vh"}}>
                    <img src={snowFloor2} className='max' alt=""  />
                </div>
            </div>
        </div>
    )
}

export default Floor;