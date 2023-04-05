
import { useEffect, useState } from 'react';

const GlideModal = ({children,onClickBG})=> {

    const [isAnimate,setIsAnimate] = useState(false); 

    useEffect(()=>{
        setTimeout(() => {
            setIsAnimate(true)
        }, 300);
    },[])
    return <div className="inset-0 h-screen bg-[#000000af] z-[99] fixed" onClick={()=>{
        if (onClickBG) {
            onClickBG()
        }
    }}>
        {
            isAnimate &&
            <div className="glide-down w-full">
                {children}
            </div>
        }
    </div>;
}

export default GlideModal;