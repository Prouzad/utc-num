import { IconEn, IconRu, IconUz } from "@/components/res/icons";
import { Select } from "antd";
import { useRouter } from "next/router";

export const LanguageDropdown = () => {
  const router = useRouter();
  const locale = router.locale;

  const selectedLanguage = languageOptions.find((l) => l.value === locale);

  return (
    <Select
      onChange={(value) => {
        if (value) {
          router.replace(
            {
              pathname: router.pathname,
              query: router.query,
            },
            router.asPath,
            {
              locale: value as any,
            }
          );
        }
      }}
      style={{ height: 42, borderRadius: 4, margin: 0, width: "100%" }}
      value={selectedLanguage}
      defaultValue={languageOptions[0]}
      // wrapperClassName="flex-none w-[106px]"
      options={languageOptions}
    />
  );
};

const languageOptions = [
  {
    label: (
      <span className="flex items-center gap-x-2">
        <IconUz />
        O‘z
      </span>
    ),
    value: "uz",
  },
  {
    label: (
      <span className="flex items-center gap-x-2">
        <IconRu />
        Ру
      </span>
    ),
    value: "ru",
  },
  {
    label: (
      <span className="flex items-center gap-x-2">
        <IconEn />
        Eng
      </span>
    ),
    value: "en",
  },
];
