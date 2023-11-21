import PhoneInput from "react-phone-input-2";
import MyTitle from "../MyTitle";
import SecondTitle from "../SecondTitle";
import useTranslation from "next-translate/useTranslation";

const ForContact = () => {
  const { t } = useTranslation("common");
  return (
    <div className="md:mt-10 mt-5">
      <SecondTitle>{t("contact_info")}</SecondTitle>
      <div className="flex justify-between md:gap-10 sm:gap-5 sm:flex-row flex-col">
        <div className="w-full mt-5">
          <MyTitle title={t("phone_number")} />
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
          <MyTitle title={t("comment")} />
          <textarea className="p-3 min-h-[155px] w-full border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded" />
        </div>
      </div>
    </div>
  );
};

export default ForContact;
