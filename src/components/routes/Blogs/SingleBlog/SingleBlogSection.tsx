import React from "react";
import BlogCatLabel from "../../../global/BlogCatLabel";
import CodeHighlighter from "./CodeHighlighter";

export default function SingleBlogSection() {
  return (
    <div className="singleBlogSection">
      <div className="publishingDate">Publishing January 13, 2019</div>
      <h1 className="blogHeading">
        7 Rules of Making Perfect Blog Design in 2021
      </h1>
      <div className="labels">
        <BlogCatLabel theme="orange" text="Technical" size="medium" />
        <BlogCatLabel theme="blue" text="Technical" size="medium" />
        <BlogCatLabel theme="green" text="Technical" size="medium" />
      </div>
      <div className="headerImg">
        <img src="/assets/images/feature-main.jpg" alt="" />
      </div>
      <div className="content">
        <div className="readingTime">4 min read</div>
        <h2>Introduction</h2>
        <p>
          One of the many selling points of React is that users can build
          components and reuse them repeatedly within a specific codebase. You
          can take this feature further with the help of the React Cosmos
          developer tool.
        </p>
        <p>
          React Cosmos is used for building isolated and scalable React
          components. It lets you create a sole component for your React
          application. You can consider different use cases as well as different
          design patterns when making use of React Cosmos, which will allow you
          to create very versatile, isolated components that fit many other
          conditions.
        </p>
        <h2>Benefits of using React Cosmos</h2>
        <p>
          React Cosmos works by making use of component features. The sum of
          these component features is what makes up your component library. This
          is then rendered on a UI for easy tracking. A major benefit of using
          <a href="https://google.com/">React Cosmos </a>is that it can scan any
          of your React projects and let you render the components within each
          of them, with any combination of props or in any state. In this
          section, we’ll go over some of the many benefits of using React
          Cosmos.
        </p>
        <p>
          In this section, we’ll go over some of the many benefits of using
          React Cosmos.
        </p>
        <h3>Reusable component creation</h3>
        <p>
          As stated earlier, React Cosmos takes the reusability benefits of
          React to the next level, allowing for the creation of isolated and
          reusable components. This gives you more room to create a robust
          architecture while preventing you from having to rewrite an already
          defined UI.
        </p>
        <h2>Installing React Cosmos</h2>
        <p>
          React Cosmos can be used on any React or React Native project, but for
          this article, we will focus on React. Make sure that you’ve installed
          your React project beforehand with the use of
          <span className="highlight">npx create-react-app</span>.
        </p>
        <p>
          Now, let’s install React Cosmos in our React project using either npm
          (Node Package Manager):
        </p>
        <CodeHighlighter language="javascript">
          {`let studentName = "Roshan Kumar";\nconst getStudentName = () => studentName;\nconsole.log(getStudentName());`}
        </CodeHighlighter>
        <CodeHighlighter title="index.html" language="html">{`<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`}</CodeHighlighter>
        <CodeHighlighter language="jsx">{`yling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if the element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a
  // flash, so some of these are just precautions. However in
  // Internet Explorer the element is visible whilst the popup
  // box asking the user for permission for the web page to
  // copy to the clipboard.
  //

  // Place in the top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of the white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}


var copyBobBtn = document.querySelector('.js-copy-bob-btn'),
  copyJaneBtn = document.querySelector('.js-copy-jane-btn');

copyBobBtn.addEventListener('click', function(event) {
  copyTextToClipboard('Bob');
});


copyJaneBtn.addEventListener('click', function(event) {
  copyTextToClipboard('Jane');
});`}</CodeHighlighter>
        <CodeHighlighter language="css">
          {`.roshn{text-align:center;}`}
        </CodeHighlighter>
        <CodeHighlighter language="bash">{`npm run dev`}</CodeHighlighter>
      </div>
      <style jsx>{`
        .singleBlogSection {
          padding-top: 50px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .publishingDate {
          color: #c3c7ca;
        }
        .blogHeading {
          margin: 15px 0;
          color: #000930;
          font-size: 1.5em;
          text-align: center;
        }
        .labels {
          margin-bottom: 50px;
        }
        .headerImg {
          max-width: 1000px;
          overflow: hidden;
          border-radius: 10px;
          max-height: 500px;
        }
        .headerImg img {
          width: 100%;
        }
        .content {
          display: flex;
          margin-top: 30px;
          flex-direction: column;
          width: 800px;
        }

        .readingTime {
          text-align: left;
          color: #c3c7ca;
        }
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 10px;
          font-weight: 700;
          font-family: "PT sans";
          margin-bottom: 1.5rem;
          color: #000c42;
        }
        h2 {
          font-size: 2rem;
        }
        h3 {
          font-size: 1.8rem;
        }
        p {
          margin-bottom: 2rem;
          line-height: 1.8;
          font-size: 1.125rem;
          color: #303030;
          font-weight: 400;
          font-family: "Merriweather";
        }
        p a {
          margin: 0 5px;
        }
        p a:hover {
          text-decoration: underline;
        }
        .highlight {
          background-color: rgb(42 49 64);
          margin: 0 5px;
          padding: 0 5px;
          border-radius: 0.2rem;
          color: #c3c7ca;
          font-weight: 100;
        }
        .hljs {
          font-size: 1rem;
          font-family: "Fira Code", monospace;
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
