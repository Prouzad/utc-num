import TinPopup from "@/components/UI/Popup/TinPopup";
import { InfoCircleFilled } from "@ant-design/icons";
import { Space } from "antd";

const MyTitle = ({ title, isInfo }: { title: string; isInfo?: boolean }) => {
  return (
    <div className="text-[#212F3D] text-base font-medium mb-[10px] flex">
      {title}
      {isInfo && (
        <Space wrap>
          <button
            onClick={() => TinPopup()}
            className="text-[#228BD6] ml-[7px]"
          >
            <InfoCircleFilled className="cursor-pointer" />
          </button>
        </Space>
      )}
    </div>
  );
};

export default MyTitle;
