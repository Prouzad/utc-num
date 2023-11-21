import Header from "@/components/Header";
import FileUpload from "@/components/UI/FileUpload";
import SecondTitle from "@/components/UI/SecondTitle";
import CheckStatement from "@/components/UI/Sections/CheckStatement";
import ForContact from "@/components/UI/Sections/ForContact";
import UserInfoSection from "@/components/UI/Sections/UserInfoSection";
import VerifySection from "@/components/UI/Sections/VerifySection";
import { IconIdCard, IconSelfie } from "@/components/res/icons";
import { Checkbox } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Header />
      <div className="lg:p-5 py-5 px-4 mt-6 flex max-w-[1400px] gap-5 lg:flex-row flex-col">
        <CheckStatement />
        <div className="w-full">
          <p className="text-[#212F3D] font-medium md:text-3xl text-2xl mb-[5px]">
            {t("app_for_updating_data")}
          </p>
          <VerifySection />

          <UserInfoSection />

          <ForContact />

          <div className="md:mt-10: mt-5">
            <SecondTitle>Xujjatlar</SecondTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-5">
              <FileUpload
                Icon={IconIdCard}
                title="Passportingiz yoki ID kartangizni asosiy saxifasini yuklang"
                placeholder="Fayl tanlanmagan"
              />
              <FileUpload
                Icon={IconSelfie}
                title="Passportingiz bilan rasmga tushib yuboring (selfi)"
                placeholder="Fayl tanlanmagan"
              />
              <FileUpload
                Icon={IconIdCard}
                title="Passportingiz yoki ID kartangizni orqa saxifasini yuklang"
                placeholder="Fayl tanlanmagan"
              />
              <FileUpload
                Icon={IconIdCard}
                title="Passportingiz yoki ID kartangizni orqa saxifasini yuklang"
                placeholder="Fayl tanlanmagan"
              />
            </div>
          </div>
          <div className="mt-10">
            <Checkbox>
              Shaxsiy ma`lumotlarimni qayta ishlanishiga{" "}
              <Link
                className="text-[#228BD6]"
                href="https://uztelecom.uz/uz/kompaniya-haqida-1/ommaviy-oferta-1"
              >
                roziman
              </Link>
            </Checkbox>
          </div>
          <button
            disabled
            className="bg-[#228BD6] mt-5 text-white font-medium px-7 py-[10px] rounded-lg hover:bg-[#228BD6]/80 transition-all disabled:bg-[#C0C0C0]"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
