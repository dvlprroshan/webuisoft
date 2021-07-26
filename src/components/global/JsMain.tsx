// import { Fragment } from "react";
// author: @dvlprroshan

export default function JsMain(_props: any) {
  ;typeof window !== "undefined"
    ? (() => {
        //   run when rendering on client machine
      })()
    : (() => {
        // rendring in server machine
      })();

  return <></>;
}
