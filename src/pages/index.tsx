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
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const { t } = useTranslation("common");

  const [checked, setChecked] = useState(false);

  const methods = useForm();
  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
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
                <SecondTitle>{t("documents")}</SecondTitle>
                <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-5">
                  <FileUpload
                    Icon={IconIdCard}
                    title={t("passport_main_page")}
                    placeholder={t("file_not_selected")}
                  />
                  <FileUpload
                    Icon={IconSelfie}
                    title={t("send_foto_selfie")}
                    placeholder={t("file_not_selected")}
                  />
                  <FileUpload
                    Icon={IconIdCard}
                    title={t("passport_back_page")}
                    placeholder={t("file_not_selected")}
                  />
                  <FileUpload
                    Icon={IconIdCard}
                    title={t("if_info_changed")}
                    placeholder={t("file_not_selected")}
                  />
                </div>
              </div>
              <div className="mt-10">
                <Checkbox
                  {...register}
                  onChange={(e) => setChecked(e.target.checked)}
                >
                  {t("agreement")}{" "}
                  <Link
                    target="_blank"
                    className="text-[#228BD6]"
                    href="https://uztelecom.uz/uz/kompaniya-haqida-1/ommaviy-oferta-1"
                  >
                    {t("i_agree")}
                  </Link>
                </Checkbox>
              </div>
              <button
                disabled={!checked}
                className="bg-[#228BD6] mt-5 text-white font-medium px-7 py-[10px] rounded-lg hover:bg-[#228BD6]/80 transition-all disabled:bg-[#C0C0C0]"
              >
                {t("send")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
