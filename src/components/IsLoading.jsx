import React from "react";
import { Oval } from "react-loader-spinner";

export const IsLoading = () => {
  return (
    <div className="flex justify-center">
      <Oval
        height={20}
        width={20}
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#000000"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
