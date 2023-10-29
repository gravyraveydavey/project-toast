import React from "react";
const useEscape = ( callback ) => {
    React.useEffect(() => {
        function handleKeyDown(event) {
          if (event.code === "Escape") {
            callback();
          }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [callback]);
}
export default useEscape;
