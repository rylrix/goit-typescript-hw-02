import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="32"
        width="32"
        strokeColor="gray"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
