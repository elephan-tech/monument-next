import React, {useEffect} from "react";

const useWindow = () => {
  const [windowObject, setWindow] = React.useState(0);
  useEffect(() => {
    setWindow(window);
  });
  return windowObject;
};

export default useWindow