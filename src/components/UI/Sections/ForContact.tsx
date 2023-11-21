import PhoneInput from "react-phone-input-2";
import MyTitle from "../MyTitle";
import SecondTitle from "../SecondTitle";

const ForContact = () => {
  return (
    <div className="md:mt-10 mt-5">
      <SecondTitle>Aloqa uchun ma’lumotlar</SecondTitle>
      <div className="flex justify-between md:gap-10 sm:gap-5 sm:flex-row flex-col">
        <div className="w-full mt-5">
          <MyTitle title="Telefon raqamingiz" />
          <PhoneInput
            specialLabel=""
            alwaysDefaultMask
            country="uz"
            inputProps={{
              placeholder: "+998 --  ---  --  --",
              required: true,
            }}
            value={""}
            defaultMask=".. ... - .. - .."
            inputClass={`p-3  h-[42px] w-full  border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded`}
          />
        </div>
        <div className="w-full mt-5">
          <MyTitle title="Kommentariya" />
          <textarea className="p-3 min-h-[155px] w-full border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded" />
        </div>
      </div>
    </div>
  );
};

export default ForContact;
