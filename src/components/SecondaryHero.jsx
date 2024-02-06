const SecondaryHero = (props) => {
  const { text, bgColor, color, absoluteValue } = props;

  const bgStyle = {
    backgroundColor: bgColor,
  };

  const SecondaryHeroStyle = {
    position: absoluteValue ? "absolute" : "relative",
    ...absoluteValue //use the provided absolute value if available
  }

  return (
    <>
      <div className="absolute flex flex-row pt-2" style={SecondaryHeroStyle}>
        <span
          className="inline-block h-2 w-[31.05] mt-[12px]"
          style={{
            display: "inline-block",
            height: "2px",
            width: "31.05px",
           backgroundColor: bgColor
          }}
        ></span>
        <h5 className="font-bold pl-[20px] leading-6" style={{ color: color }}>
        {text}
        </h5>
      </div>
    </>
  );
};

export default SecondaryHero;
