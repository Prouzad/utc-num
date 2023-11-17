import MyDataPricker from "../MyDataPricker";
import MyInput from "../MyInput";
import MySelect from "../MySelect";
import MyTitle from "../MyTitle";
import SecondTitle from "../SecondTitle";

const UserInfoSection = () => {
  return (
    <>
      <SecondTitle>
        Shaxsni tasdiqlovchi xujjat ma’lumotlarini kiriting
      </SecondTitle>
      <div className="flex justify-between">
        <div className="w-1/2 max-w-[467px]">
          <MyInput placeholder="Familiya" title="Familiya" />
          <MyInput placeholder="Ism" title="Ism" />
          <MyInput placeholder="Sharif" title="Sharif" />
          <div className="flex w-full items-end">
            <div className="mr-5">
              <MyTitle title="Tug’ilgan kun" />
              <MyDataPricker />
            </div>
            <div className="w-full">
              <MyTitle title="Jins" />
              <MySelect
                option={[
                  { value: "man", label: "Erkak" },
                  { value: "woman", label: "Ayol" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-[467px]">
          <div className="flex">
            <div className="max-w-[187px]">
              <MyInput placeholder="AA1234567" title="Seriya va raqam" />
            </div>
            <div className="mx-5">
              <MyTitle title="Berilgan sanasi" />
              <MyDataPricker />
            </div>
            <div className="">
              <MyTitle title="Tugash sanasi" />
              <MyDataPricker />
            </div>
          </div>
          <MyInput
            title="Kim tomondan berilgan"
            placeholder="Toshkent shahar Yunusobod tumani IIB"
          />
          <MyInput
            title="JShShIR"
            placeholder="3 010180 005 001 4"
            isInfo={true}
          />
        </div>
      </div>
    </>
  );
};

export default UserInfoSection