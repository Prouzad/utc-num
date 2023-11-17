import { InfoCircleFilled } from "@ant-design/icons";

const MyTitle = ({ title, isInfo }: { title: string; isInfo?: boolean }) => {
  return (
    <div className="text-[#212F3D] text-base font-medium mb-[10px] mt-[20px] flex">
      {title}
      {isInfo && (
        <div className="text-[#228BD6]  ml-[7px]">
          <InfoCircleFilled className="cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default MyTitle;
