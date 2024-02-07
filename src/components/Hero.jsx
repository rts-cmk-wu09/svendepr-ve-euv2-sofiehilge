const Hero = (props) => {
  const { text, absoluteValue, size } = props;

  const heroStyle = {
    position: absoluteValue ? "absolute": "relative",
    ...absoluteValue, //use the provided absolute value if avaliable
  }
  return (
    <>
        <h1 className="absolute font-bold pl-[46px] leading-none tracking-tight capitalize" style={heroStyle}>
          <span style={{ whiteSpace: "wrap", display: "inline-block" }}>
            {text}
          </span>
        </h1>
        
    </>
  );
};

export default Hero;
