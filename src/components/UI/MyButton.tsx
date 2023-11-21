const MyButton = ({ text }: { text: string }) => {
  return (
    <div className="py-[10px] text-center sm:px-4 px-3 cursor-pointer bg-[#228BD6] rounded-[7px]">
      <div className="select-none text-sm capitalize font-bold inter text-white text-center">
        {text}
      </div>
    </div>
  );
};

export default MyButton;
