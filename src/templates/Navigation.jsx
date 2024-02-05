import ArrowBack from "../components/ArrowBack";
const Navigation = ({ text }) => {
  return (
    <>
      <div className="pl-[21px] pt-[58px] flex flex-row">
        <div style={{marginTop: "5px", marginRight: "24px"}}>
          <ArrowBack color="#898989" className="w-[14px] h-[14px]" />
        </div>
        <h3 className="text-left font-normal leading-normal tracking-normal">{text}</h3>
      </div>
    </>
  );
};

export default Navigation;
