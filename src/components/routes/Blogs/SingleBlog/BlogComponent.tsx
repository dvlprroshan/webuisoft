import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// paragraph
export const Paragraph = ({ children }: Props): ReactElement => (
  <div className="para">
    {children}
    <style jsx>{`
      .para {
        color: gray;
      }
    `}</style>
  </div>
);
