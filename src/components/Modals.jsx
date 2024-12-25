import openScroll from '../assets/scroll-full.png';

import { useEffect, useRef } from "react";





export const ScrollModal = () => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.showModal();

    }, [])

    return (
        <dialog className="scroll-view" ref={ref}>
            <div className="fw" style={{aspectRatio: "466/277" }}>
                <img className="max" src={openScroll} style={{objectFit: "contain"}}  />

                <div className='abs content flex-col'>
                    <h3 className='center-text'>
                        Verse of the Day
                    </h3>
                    <p className='grow'>
                        <span>
                            { txt }
                        </span>
                    </p>
                    <div className='flex verse' style={{justifyContent: "flex-end"}}>
                        { loc }
                    </div>
                </div>
            </div>
        </dialog>
    )
}
