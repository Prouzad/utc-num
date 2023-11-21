import MyDataPricker from "../MyDataPricker";
import MyInput from "../MyInput";
import MySelect from "../MySelect";
import MyTitle from "../MyTitle";
import SecondTitle from "../SecondTitle";

const UserInfoSection = () => {
  return (
    <div className="md:mt-10 mt-5">
      <SecondTitle>
        Shaxsni tasdiqlovchi xujjat ma’lumotlarini kiriting
      </SecondTitle>
      <div className="flex justify-between md:gap-10 gap-5 sm:flex-row flex-col">
        <div className="w-full">
          <MyInput placeholder="Familiya" title="Familiya" />
          <MyInput placeholder="Ism" title="Ism" />
          <MyInput placeholder="Sharif" title="Sharif" />
          <div className="w-full grid grid-cols-2 gap-5 mt-5">
            <div>
              <MyTitle title="Tug’ilgan kun" />
              <MyDataPricker />
            </div>
            <div>
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
        <div className="w-full">
          <div className="flex items-center flex-wrap">
            <div className="sm:max-w-[187px] w-full">
              <MyInput placeholder="AA1234567" title="Seriya va raqam" />
            </div>
            <div className="flex gap-2 items-center mt-5 w-full">
              <div className="w-full">
                <MyTitle title="Berilgan sanasi" />
                <MyDataPricker />
              </div>
              <div className="w-full">
                <MyTitle title="Tugash sanasi" />
                <MyDataPricker />
              </div>
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
    </div>
  );
};

export default UserInfoSection;
