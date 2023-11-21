import { LanguageDropdown } from "@/components/UI/LanguageDropdown";
import { IconLogo } from "@/components/res/icons";
import { HeaderBgImage } from "@/components/res/images";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="lg:px-[75px] md:px-10 px-4 flex items-center justify-between py-4">
        <IconLogo />

        <div className="w-[100px]">
          <LanguageDropdown />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url('${HeaderBgImage.src}')` }}
        className="lg:px-[75px] md:px-10 px-[30px] lg:py-[35px] md:py-[30] py-6 bg-no-repeat bg-cover"
      >
        <p className="text-xs font-normal leading-4 text-white/50 mb-2 uppercase md:flex hidden">
          {t("updating_passport_info")}
        </p>
        <p className="lg:text-5xl md:text-3xl text-2xl lg:leading-10 text-white font-bold">
          {t("updating_passport_info")}
        </p>
      </div>
    </div>
  );
};

export default Header;
