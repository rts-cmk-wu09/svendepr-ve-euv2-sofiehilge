import { useLottie } from "lottie-react";
import loading from "../assets/loading.json";

const LoadingComp = () => {
  const options = {
    animationData: loading,
    loop: true,
  };

  const { view } = useLottie(options);

  return <>{view}</>;
};

export default LoadingComp;
