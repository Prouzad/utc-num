import { Modal } from "antd";
import TinImage from "@/assets/images/tin-image.png";

const TinPopup = () => {
  Modal.info({
    // title: <p className="w-full text-center">Yo‘riqnoma</p>
    title: "Yo‘riqnoma",
    wrapClassName: "bg-black/10",
    className: "w-full",
    okButtonProps: { style: { backgroundColor: "#1677ff" } },
    width: 700,
    content: (
      <div className="w-full">
        <img src={TinImage.src} alt="Tin Image" />
      </div>
    ),
    onOk() {},
  });
};

export default TinPopup;
