import './Home.css';
import '../css packages/animate.css';

import santaVid from "../assets/santa.mp4";
import santaGIF from "../assets/santa1.gif";
import giftImg from "../assets/giftbox-close.png";
import openedGift from "../assets/giftbox-open1.png";
import { forwardRef, useEffect, useRef, useState } from 'react';
import Floor from './Floor';
import SnowBox from './snowing/Snowing';

const Home = () => {
    const santaRef = useRef(null);

    useEffect(() => {

    })

    return (
        <div className="max">
            <div className="max abs-top">
                <Santa ref={santaRef} />
                <Floor />
                <SnowBox />
            </div>
            <GiftBox />
        </div>
    )
}


const Santa = forwardRef((props,ref) => {

    return (
        <div className="mx-auto" style={{width: "min(556px, 100%)"}}>
            <img ref={ref} className="fw" src={santaGIF} alt="" style={{objectFit: "cover"}} />
            <div className="fw abs santa-blur"></div>
        </div>
    )
})

const GiftBox = ({santaRef}) => {
    const ref = useRef(null);
    const [opened, setOpened] = useState(false);

    useEffect(() => {

    }, [santaRef])

    useState(() => {

    }, [opened])

    return (
        <label className='overlay'>
            <div className='abs-mid gift-box'>
                {
                    opened ?
                    
                    <div className='' style={{width: "300px"}}>
                        <img src={openedGift} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>
                    :
                    <div className='animated zoomInDown_' style={{width: "200px"}}>
                        <img src={giftImg} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>

                }
            </div>

            <div className='sr-only hide'>
                <button onClick={openGift}>
                    open gift
                </button>
            </div>

        </label>
    )

    function openGift(){
        setOpened(true);
    }
}


export default Home