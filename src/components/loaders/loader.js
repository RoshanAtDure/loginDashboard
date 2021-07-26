import React  from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RecLoader from "react-loader-spinner";

const Loader = (props) => {
  return (
    <div className="loading">
      <RecLoader visible={props.isLoading} type="ThreeDots" color={'#000'} height={80} width={80} />
    </div>
  );
}

export default Loader;
