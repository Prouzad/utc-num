import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";

const CheckStatement = () => {
  return (
    <>
      <div className=" w-full p-5 bg-[#F3F7FE] rounded-xl">
        <div className="text-xl font-bold text-[#212F3D]">
          Ariza xolatini tekshirish
        </div>
        <div className="py-5">
          <MyInput placeholder="Ariza raqami" />
        </div>
        <div className="">
          <MyButton text="Tekshirish" />
        </div>
      </div>
    </>
  );
};

export default CheckStatement;
