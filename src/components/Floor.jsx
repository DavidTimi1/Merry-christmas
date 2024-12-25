import snowFloor from '../assets/snow-ground.svg';
import snowFloor2 from '../assets/snow-ground2.svg';
import snowMan from '../assets/snowman.png';

import tree from '../assets/christmas-tree-less.png';


const Floor = () => {

    return (
        <div className="abs fw floor" style={{bottom: 0, left: 0}}>
            <div className="abs fw" style={{bottom: 0, left: 0}}>
                <div className="fw" style={{fontSize: 0}}>
                    <img src={snowFloor} className='max' alt="" style={{objectFit: "cover"}}  />
                </div>
            </div>
            <div className='abs trees fw flex' style={{justifyContent: "space-between"}}>
                <div className='tree1' style={{width: "150px"}}>
                    <img src={tree} className='fw' alt="" style={{objectFit: "contain"}}  />
                </div>
                <div className='tree2' style={{width: "150px"}}>
                    <img src={tree} className='fw' alt="" style={{objectFit: "contain"}}  />
                </div>
            </div>
            <div className="abs fw" style={{bottom: 0, left: 0}}>
                <div className="fw" style={{fontSize: 0}}>
                    <img src={snowFloor2} className='max' alt="" style={{objectFit: "cover"}}  />
                </div>
            </div>
            <div className='abs trees fw flex even-space'>
                <div className='tree3' style={{width: "150px"}}>
                    <img src={tree} className='fw' alt="" style={{objectFit: "contain"}}  />
                </div>
                <div className='tree4' style={{width: "120px"}}>
                    <img src={tree} className='fw' alt="" style={{objectFit: "contain"}}  />
                </div>
            </div>
            <div className="abs trees fw">
                <div className='mx-auto' style={{width: "150px"}}>
                    <img src={snowMan} className='fw' style={{objectFit: "contain"}} />
                    <Credit />
                </div>
            </div>
        </div>
    )
}


const Credit = () => (
    <footer className='mx-auto'>
        <span>Created with </span> <span style={{ color: 'red' }}> ❤ </span> <span> 
            by

            <a href="https://github.com/DavidTimi1">
                TimiDev
            </a>
        </span>
    </footer>
)
export default Floor;