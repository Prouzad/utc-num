"use client";

import MyInput from "@/components/UI/MyInput";
import MyTitle from "@/components/UI/MyTitle";
import SecondTitle from "@/components/UI/SecondTitle";
import CheckStatement from "@/components/UI/Sections/CheckStatement";
import ForContact from "@/components/UI/Sections/ForContact";
import UserInfoSection from "@/components/UI/Sections/UserInfoSection";
import VerifySection from "@/components/UI/Sections/VerifySection";
import { Upload } from "antd";
import PhoneInput from "react-phone-input-2";

export default function Home() {
  return (
    <div className="p-5 pt-[100px] flex">
      <div className="max-w-[408px] min-w-[360px]">
        <CheckStatement />
      </div>
      <div className="ml-[20px] w-full">
        <VerifySection />
        <div className="">
          <UserInfoSection />
        </div>
        <div className="">
          <ForContact />
        </div>
        <div className="">
          <SecondTitle>Xujjatlar</SecondTitle>
          <div className="">
            <Upload className="h-[42px] w-full  border border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded">
              <button>Click to Upload</button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
}
