import PhoneInput from "react-phone-input-2";
import MyButton from "../MyButton";
import MySelect from "../MySelect";
import MyTitle from "../MyTitle";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

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
  const { t } = useTranslation("common");

  return (
    <div className="mt-5">
      <div className="flex items-center flex-wrap md:gap-10 gap-3 ">
        <div className="">
          <MyTitle title="Nomeringizni kiriting" />
          <div className="flex sm:gap-5 gap-2 items-center">
            <div className="max-w-[60px]">
              <MySelect option={numCode} />
            </div>

            <PhoneInput
              specialLabel=""
              alwaysDefaultMask
              disableCountryCode={true}
              country="uz"
              inputProps={{
                placeholder: "---  --  --",
                required: true,
              }}
              value={""}
              defaultMask="... - .. - .."
              inputClass={`p-3 sm:max-w-[190px] max-w-[135px] h-[42px] w-full border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded`}
            />

            <MyButton text="Kodni yuborish" />
          </div>
        </div>
        <div className="w-full sm:max-w-[329px]">
          <MyTitle title={"Xujjat turi"} />
          <MySelect option={docType} />
        </div>
      </div>
    </div>
  );
};

export default VerifySection;
