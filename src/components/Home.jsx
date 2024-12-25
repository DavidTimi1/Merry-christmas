import './Home.css';
import './gift.css';
import '../css packages/animate.css';

import santaVid from "../assets/santa.mp4";
import santaGIF from "../assets/santa1.gif";
import scrollImg from '../assets/scroll-folded.png';

import day1Gift from '../assets/day1.png';
import day2Gift from '../assets/day2.png';
import day3Gift from '../assets/day3.png';
import day4Gift from '../assets/day4.png';
import day5Gift from '../assets/day5.png';
import day6Gift from '../assets/day6.png';
import day7Gift from '../assets/day7.png';
import day8Gift from '../assets/day8.png';
import day9Gift from '../assets/day9.png';
import day10Gift from '../assets/day10.png';
import day11Gift from '../assets/day11.png';
import day12Gift from '../assets/day12.png';

import { GiftContext } from './context.jsx';
import giftImg from "../assets/giftbox-close.png";
import openedGift from "../assets/giftbox-open2.png";
import { forwardRef, useEffect, useRef, useState, useContext } from 'react';
import Floor from './Floor';
import SnowBox from './snowing/Snowing';
import { ScrollModal } from './Modals';

import { christmasDay } from '../App';


const Home = () => {
    const santaRef = useRef(null);
    const [showGift, setShowGift] = useState(true);

    useEffect(() => {

    })

    return (
        <div className="max">
            <div className="max abs-top">
                <Santa ref={santaRef} />
                <Floor />
                <SnowBox />
            </div>

            <GiftContext.Provider value={{hideGift: () => setShowGift(false)}}>
                { showGift && <GiftBox /> }
            </GiftContext.Provider>
        </div>
    )
}


const Santa = forwardRef((props,ref) => {

    return (
        <div className='fw pad'>
            <h1>
                Merry Christmas
            </h1>
            <h3 className='hny'>
                and a Happy New Year
            </h3>
            <div className="abs-top santa" style={{width: "min(480px, 90%)"}}>
                <img ref={ref} className="fw" src={santaGIF} alt="" style={{objectFit: "cover"}} />
            </div>
        </div>
    )
})

const GiftBox = () => {
    const ref = useRef(null), contentRef = useRef(null);
    const [opened, setOpened] = useState(false);
    const [info, setInfo] = useState("");
    const [openScroll, setOpenScroll] = useState(false);
    
    const daysPack = daysOfChristmas[christmasDay];

    useEffect(() => {
        setTimeout(() => {
            ref.current.classList.remove("hide");
            showMessage("Click to Open Gift");
        }, 4000)
        
    }, []);

    
    useEffect(() => {
        if (opened){
            setTimeout(() => {
                const openBox = document.getElementById("open-box");
                openBox.classList.add("obscure");
            }, 1000)
        }
        
    }, [opened]);


    return (
        <label className='overlay'>
            <div className='info'>
                <h2 className='pad center-text'>
                    { info }
                </h2>
            </div>
            <div className='abs-mid'>
                {
                    opened ?
                    
                    <div id="open-box" className='img-trans' style={{width: "250px"}}>
                        <img src={openedGift} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>
                    :
                    <div ref={ref} className='hide gift-box img-trans animated zoomInDown_' style={{width: "200px"}}>
                        <img src={giftImg} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>

                }
            </div>
            
                <GiftContent ref={contentRef} openScroll={openScroll}} gift={daysPack.gift} />

                { openScroll && <ScrollModal /> }

            <div className='sr-only hide'>
                    
                <button onClick={handleClick}>
                    open gift
                </button>
            </div>

        </label>
    )

    function handleClick(){
        if (opened){
            if (openScroll === undefined){
                setOpenScroll(true)
                setInfo('')
            }

        } else {
            if (ref.current?.classList?.contains("hide") ) return 

            setOpened(true);
            animations();
        }
    }

    function showMessage(message){
        setInfo(message);
    }

    function animations(){
        // JavaScript logic for animations
        const giftBox = document.querySelector(".gift-cont");

        const scroll = giftBox.querySelector('.scroll');
        const dayCard = giftBox.querySelector('.day-gift');
        

        // setTimeout(() => {
        //     giftBox.style.display = 'none';
        //     openBox.classList.remove('will-trans');
        // }, 500); // Matches the CSS transition duration
        
        // Step 2: Animate the scroll emerging from the box
        setTimeout(() => {
            scroll.classList.remove('will-trans');
            scroll.classList.add('glow', "emerge");
            scroll.style.opacity = 1;

            setOpenScroll(undefined);
            showMessage("Click to read scroll");
            
        }, 3000);
        
        // Step 3: Animate the pigeon card emerging after the scroll
        setTimeout(() => {
            dayCard.classList.remove('will-trans');
            dayCard.classList.add('glow', "emerge");

        }, 1000); // Delays the pigeon animation to start after the scroll
        
    }
}

const GiftContent = forwardRef( ({gift}, ref) => {
    const giftOverlayClose = useContext(GiftContext).hideGift

    return (
    <div className='abs-mid gift-cont' ref={ref} >

        {/* <div className='flex mid-align even-space'> */}
            <div className="abs-mid day-gift animated img-trans will-trans" style={{width: "min(30vw, 100px)"}}>

                <div className='flex-col fw' style={{gap: "10px"}}>
                    <img className="fw" src={gift.src} alt="" style={{objectFit: "contain"}} />
                    <small className='center-text'>
                        {gift.descr}
                    </small>
                </div>
            </div>

            <div className="abs-mid will-trans animated img-trans scroll" style={{width: "min(40vw, 150px)"}}>
                <div className='flex-col fw' style={{gap: "10px"}}>
                    <img className="fw" src={scrollImg} alt="" style={{objectFit: "contain"}} />
                    <small className='center-text'>
                        Verse of the day
                    </small>
                </div>
            </div>
        {/* </div> */}

        <div className='abs' style={{bottom: "20%"}}>
            <button onClick={handleClose}>
                Close
            </button>
        </div>
    </div>
)

function handleClose(e){
    e.stopPropagation()
    giftOverlayClose();
}
})

export default Home





const daysOfChristmas = [

    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day1Gift
        },
        verse: {
            txt: "Therefore the Lord Himself will give you a sign: Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel..",
            loc: "Isaiah 7 : 14"
        }
    },
    {
        gift: {
            descr: <>2 Turtle Doves</>,
            src: day2Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>3 French Hens </>,
            src: day3Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>4 Calling Birds</>,
            src: day4Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>5 Golden Rings</>,
            src: day5Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>6 Geese a-Laying</>,
            src: day6Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day7Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day8Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day9Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day10Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day11Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
    {
        gift: {
            descr: <>A partridge <br></br> in a Pear Tree</>,
            src: day12Gift
        },
        verse: {
            txt: "In everthing, give thanks for this is the Will of God in Christ Jesus for you.",
            loc: "1 Thessalonians 5 : 18"
        }
    },
]
