import { Select } from "antd";

const MySelect = ({
  option,
}: {
  option: { value: string; label: string }[];
}) => {
  return (
    <Select
      defaultValue={option[0].label}
      style={{ height: 42, borderRadius: 4, margin: 0, width: "100%" }}
      dropdownStyle={{
        borderRadius: 4,
        margin: 0,
        border: "1px solid #D3E8F7",
      }}
      options={option}
    />
  );
};

export default MySelect;
