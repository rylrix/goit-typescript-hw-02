import { RotatingLines } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        width="32"
        strokeColor="gray"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
