import React, { ReactElement, ReactText } from "react";
import Prism from "prismjs/prism.js";
import Jsx from "prismjs/components/prism-jsx";
import Bash from "prismjs/components/prism-bash";
import { useState } from "react";

interface Props {
  language: string;
  children: ReactText;
  title?: string;
}

export default function CodeHighlighter({
  language,
  children,
  title = "",
}: Props): ReactElement {
  // use state
  const [isExpanded, setIsExpanded] = useState(!1);
  const [isCopied, setIsCopied] = useState(!1);
  const [isFolded, setIsFolded] = useState(!1);
  // exntending prism
  Prism.languages.extend("jsx", Jsx);
  Prism.languages.extend("bash", Bash);

  // for copy to clipboard
  function copyToClipboard(text) {
    if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  // get language grammer for prismjs
  const getGrammer = () => {
    let availableGrammer =
      "atom,clike,css,html,javascript,js,markup,mathml,plain,plaintext,bash,rss,ssml,svg,text,txt,xml,jsx".split(
        ","
      );
    let indexOfGrammer = availableGrammer.indexOf(
      language.toLowerCase().trim()
    );
    return indexOfGrammer == -1 ? "plain" : availableGrammer[indexOfGrammer];
  };
  return (
    <div
      className={`codeRender ${isExpanded ? "expandWindow" : ""} ${
        isFolded ? "foldedWindow" : ""
      }`}
    >
      <div className="window">
        <div className="title">{title}</div>
        <div className="icons">
          <div
            className="btn-red"
            onClick={() => {
              copyToClipboard(children);
              !isCopied ? setIsCopied(true) : "";
            }}
          >
            <div className="tooltip">
              {!isCopied ? "📄 Copy" : "Copied Again"}
            </div>
          </div>
          <div
            className="btn-orange"
            onClick={() => {
              window.document.body.style.overflow =
                !isExpanded && !isFolded ? "hidden" : "";
              !isFolded ? setIsExpanded(!isExpanded) : "";
            }}
          >
            <div className="tooltip">{isExpanded ? "Normal" : "Maximize"}</div>
          </div>
          <div
            className="btn-green"
            onClick={() => {
              !isExpanded ? setIsFolded(!isFolded) : "";
            }}
          >
            <div className="tooltip">
              {isFolded
                ? "Unfold"
                : ((_) => (isExpanded ? "Make Normal First" : "Fold"))()}
            </div>
          </div>
        </div>
      </div>
      <pre className="CodeHighlighter">
        <code
          className="CodeHighlighter"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[getGrammer()],
              language
            ),
          }}
        ></code>
        <style global jsx>
          {`
            .CodeHighlighter {
              font-family: "Fira Code", monospace;
              transition: all 1s linear;
            }

            code.CodeHighlighter,
            pre.CodeHighlighter {
              color: #abb2bf;
              background: none;
              text-align: left;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              word-wrap: normal;
              line-height: 1.5;
              -moz-tab-size: 4;
              -o-tab-size: 4;
              tab-size: 4;
              -webkit-hyphens: none;
              -moz-hyphens: none;
              -ms-hyphens: none;
              hyphens: none;
              max-height: 80vh;
            }
            pre.CodeHighlighter::-webkit-scrollbar{
              background: #2a3140;
            }
            pre.CodeHighlighter::-webkit-scrollbar-thumb{
              background: #404857;
              border-radius: 5px;
             
            }

            pre.CodeHighlighter::selection,
            pre.CodeHighlighter ::selection,
            code.CodeHighlighter::selection,
            code.CodeHighlighter ::selection {
              text-shadow: none;
              background: #3a404b;
            }
            pre.CodeHighlighter span::selection,
            pre.CodeHighlighter span ::selection,
            code.CodeHighlighter span::selection,
            code.CodeHighlighter span ::selection {
              text-shadow: none;
              background: #3a404b;
            }

            @media print {
              code.CodeHighlighter,
              pre.CodeHighlighter {
                text-shadow: none;
              }
            }

            /* Code blocks */

            pre.CodeHighlighter {
              padding: 1em;
              overflow: auto;
            }

            :not(pre) > code.CodeHighlighter,
            pre.CodeHighlighter {
              background: #2a3140;
            }

            /* Inline code */

            :not(pre) > code.CodeHighlighter {
              padding: 0.1em;
              border-radius: 0.3em;
              white-space: normal;
            }

            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #5c6370;
            }

            .token.punctuation {
              color: #abb2bf;
            }

            .token.selector,
            .token.tag {
              color: #e06c75;
            }

            .token.property,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.attr-name,
            .token.deleted {
              color: #d19a66;
            }

            .token.string,
            .token.char,
            .token.attr-value,
            .token.builtin,
            .token.inserted {
              color: #98c379;
            }

            .token.operator,
            .token.entity,
            .token.url,
            .CodeHighlightercss .token.string,
            .style .token.string {
              color: #56b6c2;
            }

            .token.atrule,
            .token.keyword {
              color: #c678dd;
            }

            .token.function {
              color: #61afef;
            }

            .token.regex,
            .token.important,
            .token.variable {
              color: #c678dd;
            }

            .token.important,
            .token.bold {
              font-weight: bold;
            }

            .token.italic {
              font-style: italic;
            }

            .token.entity {
              cursor: help;
            }

            pre.line-numbers {
              position: relative;
              padding-left: 3.8em;
              counter-reset: linenumber;
            }

            pre.line-numbers > code {
              position: relative;
            }

            .line-numbers .line-numbers-rows {
              position: absolute;
              pointer-events: none;
              top: 0;
              font-size: 100%;
              left: -3.8em;
              width: 3em;
              /* works for line-numbers below 1000 lines */
              letter-spacing: -1px;
              border-right: 0;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .line-numbers-rows > span {
              pointer-events: none;
              display: block;
              counter-increment: linenumber;
            }

            .line-numbers-rows > span:before {
              content: counter(linenumber);
              color: #5c6370;
              display: block;
              padding-right: 0.8em;
              text-align: right;
            }
            .window.window {
              width: 100%;
              background-color: #1c2833;
              height: 30px;
            }
            .CodeHighlighter.CodeHighlighter {
              margin-top: 0px;
            }
            .codeRender {
              border-radius: 10px;
              overflow: hidden;
              margin: 1rem 0;
            }
            .window {
              padding: 7.5px 10px;
              display: flex;
              align-items: space-between;
            }
            .window .icons {
              display: flex;
              column-gap: 5px;
              flex: 1;
            }
            .window .title {
              flex: 10;
              text-align: center;
              color: rgb(161, 168, 173);
            }
            .window .icons div[class*="btn-"] {
              height: 15px;
              width: 15px;
              background-color: red;
              border-radius: 50%;
              cursor: pointer;
              position: relative;
            
            }
            }
            .window .icons .btn-red.btn-red {
              background-color: rgb(252, 63, 63);
            }
            .window .icons .btn-orange.btn-orange {
              background-color: rgb(255, 131, 59);
            }
            .window .icons .btn-green.btn-green {
              background-color: rgb(59, 255, 59);
            }

            .expandWindow {
              position: fixed;
              margin: auto;
              top: 0;
              left: 0;
              right: 0;
              height: calc(100% - 30px);
              z-index: 9999991;
              background-color: rgba(255, 0, 0, 0.164);
              margin:20px;
            }
            .expandWindow pre,
            .expandWindow code {
              min-height: calc(100% - 30px);
            }
            .expandWindow .icons {
              justify-content: center;
            }

            
            .tooltip::before{
              position: absolute;
              content:"";
              width:30px;
              height:30px;
              background-color:#5c6370;
              transform: rotate(45deg);
              left:35px;
              margin-top: -10px;
              border-radius: 5px;
              z-index:-1;
            }
            .tooltip {
              position: relative;
              left: calc(-50px + 7.5px);
              min-width: 100px;
              margin-top: 30px;
              background-color: #5c6370;
              padding: 5px 10px;
              border-radius: 5px;
              color: white;
              z-index:1;
              text-align:center;
              display:none;
              transition: all .5s linear;
              opacity: 0;

            }
            .window .icons div[class*="btn-"]:hover > .tooltip{
              display:block;
              opacity: .5;
              animation:glow 2s linear 1; 
            }
            @keyframes glow{
              0%{
                opacity:0;
              }
              30%{
                opacity:0;
              }
              70%{
                opacity:.5;
              }
            }
            .foldedWindow{
              max-height:40px;
            }
            .foldedWindow span{
              display:none;
            }
            .foldedWindow pre{
              overflow:hidden;
            }
          `}
        </style>
      </pre>
    </div>
  );
}
