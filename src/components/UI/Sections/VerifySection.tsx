import PhoneInput from "react-phone-input-2";
import MyButton from "../MyButton";
import MySelect from "../MySelect";
import MyTitle from "../MyTitle";

const numCode = [
  {
    value: "99",
    label: "99",
  },
  { value: "77", label: "77" },
  { value: "95", label: "95" },
];

const docType = [
  {
    value: "passport",
    label: "passport",
  },
  {
    value: "id-card",
    label: "ID-Card",
  },
  {
    value: "driver-license",
    label: "Haydovchilik guvohnomasi",
  },
];

const VerifySection = () => {
  return (
    <>
      <h1 className="text-[#212F3D] font-medium text-[30px] mb-[5px]">
        Passport ma’lumotlarni yangilash uchun ariza
      </h1>
      <div className="flex justify-between">
        <div className="">
          <MyTitle title="Nomeringizni kiriting" />
          <div className="flex">
            <div className="max-w-[72px]">
              <MySelect option={numCode} />
            </div>
            <div className="px-5">
              <PhoneInput
                specialLabel=""
                alwaysDefaultMask
                disableCountryCode={true}
                inputProps={{
                  placeholder: "---  --  --",
                  required: true,
                }}
                value={""}
                defaultMask="... - .. - .."
                inputClass={`p-3 max-w-[190px]  h-[42px] w-full  border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded`}
              />
            </div>
            <MyButton text="Kodni yuborish" />
          </div>
        </div>
        <div className="w-[329px]">
          <MyTitle title={"Xujjat turi"} />
          <MySelect option={docType} />
        </div>
      </div>
    </>
  );
};

export default VerifySection;
