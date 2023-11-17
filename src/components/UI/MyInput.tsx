import MyTitle from "./MyTitle";

const MyInput = ({
  placeholder,
  title,
  isInfo,
}: {
  placeholder: string;
  title?: string;
  isInfo?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col">
      {title && <MyTitle title={title} isInfo={isInfo} />}
      <input
        className="p-3 h-[42px] w-full  border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded"
        placeholder={placeholder}
      />
    </div>
  );
};

export default MyInput;
