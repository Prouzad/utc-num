import { Select } from "antd";

const MySelect = ({ option }: { option: IOption[] }) => {
  return (
    <Select
      defaultValue={option[0]}
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
