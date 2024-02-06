import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import tw from "tailwind-styled-components";

const StyledLottie = tw(Lottie)`
w-[128px]
h-[145px]
`;

const StyledDiv = tw.div`
flex
flex-col
items-center
p-[30px]
`;

const LoadingComp = () => {
  return (
    <StyledDiv>
      <StyledLottie animationData={loading} />
    </StyledDiv>
  );
};

export default LoadingComp;
