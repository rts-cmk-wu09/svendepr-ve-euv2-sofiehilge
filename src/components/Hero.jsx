const Hero = (props) => {
  const { text } = props;
  return (
    <>
        <h1 className="absolute font-bold pl-[70px] leading-none tracking-tight capitalize">
          <span style={{ whiteSpace: "wrap", display: "inline-block" }}>
            {text}
          </span>
        </h1>
        
    </>
  );
};

export default Hero;
