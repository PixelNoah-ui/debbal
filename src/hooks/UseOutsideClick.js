import { useEffect } from "react";

function UseOutsideClick(ref, close) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.curerent && !ref.curerent.contains(e.target)) {
          close;
        }
      }
      document.addEventListener("click", handleClick, true);

      return () => document.addEventListener("click", handleClick, true);
    },
    [close, ref.curerent]
  );
}

export default UseOutsideClick;
