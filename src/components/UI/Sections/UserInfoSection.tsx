import useTranslation from "next-translate/useTranslation";
import MyDataPricker from "../MyDataPricker";
import MyInput from "../MyInput";
import MySelect from "../MySelect";
import MyTitle from "../MyTitle";
import SecondTitle from "../SecondTitle";

const UserInfoSection = () => {
  const { t } = useTranslation("common");
  return (
    <div className="md:mt-10 mt-5">
      <SecondTitle>{t("enter_passport_info")}</SecondTitle>
      <div className="flex justify-between md:gap-10 gap-5 sm:flex-row flex-col">
        <div className="w-full">
          <MyInput placeholder={t("surname")} title={t("surname")} />
          <MyInput placeholder={t("name")} title={t("name")} />
          <MyInput placeholder={t("middle_name")} title={t("middle_name")} />
          <div className="w-full grid grid-cols-2 gap-5 mt-5">
            <div>
              <MyTitle title={t("birthday")} />
              <MyDataPricker />
            </div>
            <div>
              <MyTitle title={t("gender")} />
              <MySelect
                option={[
                  { value: "man", label: t("man") },
                  { value: "woman", label: t("woman") },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center flex-wrap">
            <div className="sm:max-w-[187px] w-full">
              <MyInput placeholder="AA1234567" title={t("series_and_number")} />
            </div>
            <div className="flex gap-2 items-center mt-5 w-full">
              <div className="w-full">
                <MyTitle title={t("given_date")} />
                <MyDataPricker />
              </div>
              <div className="w-full">
                <MyTitle title={t("end_date")} />
                <MyDataPricker />
              </div>
            </div>
          </div>
          <MyInput
            title={t("by_whom_given")}
            placeholder="Toshkent shahar Yunusobod tumani IIB"
          />
          <MyInput
            title={t("tin")}
            placeholder="3 010180 005 001 4"
            isInfo={true}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSection;
