import { Fragment } from "react";

export default function JsMain(props) {
  ;typeof window !== "undefined"
    ? (() => {
        //   run when rendering on client machine
      })()
    : (() => {
        // rendring in server machine
      })();

  return <Fragment></Fragment>;
}
