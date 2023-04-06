import { useEffect, useState } from "react";

const GlideModal = ({ children, onClickBG }) => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimate(true);
    }, 300);
  }, []);
  return (
    <div className="inset-0 h-screen z-[99] fixed">
      <div
        className=" bg-[#000000af] inset-0 absolute"
        onClick={() => {
          if (onClickBG) {
            onClickBG();
          }
        }}
      />
      {isAnimate && <div className="glide-down w-full z-[100]">{children}</div>}
    </div>
  );
};

export default GlideModal;
