import { DatePicker } from "antd";
import useTranslation from "next-translate/useTranslation";

const MyDataPricker = () => {
  const { t } = useTranslation("common");
  return (
    <DatePicker
      placeholder={t("select_date")}
      className="!p-3 !h-[42px] !w-full !border !border-[#D3E8F7] !bg-[#FFF] !focus:border-[#D3E8F7] !focus:outline-none !rounded"
    />
  );
};

export default MyDataPricker;
