import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
import useTranslation from "next-translate/useTranslation";

const CheckStatement = () => {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-[400px] w-full">
      <div className="w-full p-5 bg-[#F3F7FE] rounded-xl">
        <div className="text-xl font-bold text-[#212F3D]">
          {t("check_status")}
        </div>
        <div className="py-5">
          <MyInput placeholder={t("applacation_number")} />
        </div>

        <MyButton text={t("check")} />
      </div>
    </div>
  );
};

export default CheckStatement;
