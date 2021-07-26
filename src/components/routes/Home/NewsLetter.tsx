const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="text-data">
        <div className="title">NEWSLETTER</div>
        <div className="dec">
          Please Enter your Email Address and Get New Updates
        </div>
      </div>
      <div className="news-input">
        <form method="post">
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
          />
          <input type="submit" value="SUBSCRIBE" />
        </form>
      </div>
      <style jsx>{`
        .news-letter {
          height: 220px;
          width: 100%;
          background-image: url("/assets/icons/newsletter.png");
          background-repeat: no-repeat;
          background-position: -30px 100px;
          display: flex;
          flex-direction: row;
        }
        .text-data {
          width: 50%;
          padding-left: 100px;
          padding-top: 60px;
        }
        .text-data .title {
          font-size: 40px;
          font-weight: bold;
          color: #213e6e;
        }
        .dec {
          color: #3b68b1;
        }

        .news-input {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .news-input form {
          width: 550px;
          height: 70px;
          border-radius: 35px;
          box-shadow: 0 0 35px 0 #71abe044;
          overflow: hidden;
        }
        form input[type="text"] {
          border: none;
          width: 400px;
          height: 100%;
          padding-left: 25px;
          font-size: 1.1rem;
          color: gray;
        }

        form input[type="submit"] {
          border: none;
          width: 170px;
          height: 55px;
          border-radius: 50px;
          background: linear-gradient(45deg, #ff3030, #ff7e30);
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 20px;
          text-align: center;
          line-height: 55px;
          box-shadow: 0 8px 10px 0 #94c1ea77;
          position: absolute;
          right: 5%;
          margin-top: 5px;
        }

        form input:focus {
          outline: none;
        }
        @media screen and (max-width: 1250px) {
          form input[type="submit"] {
            transform: translateX(40px);
          }
        }
        @media screen and (max-width: 900px) {
          .news-letter {
            flex-direction: column;
            height: 330px;
          }
          .news-input {
            width: 100%;
            margin-top: 50px;
          }
          form input[type="text"] {
            width: 80%;
          }
          form input[type="submit"] {
            transform: translateX(-70%);
            right: 0;
          }
          .text-data {
            width: 100%;
          }

        }
        @media screen and (max-width:760px){
          .text-data {
            text-align: center;
            padding-left: 0;
          }
          form input[type="submit"]{
            position: absolute;
            margin:auto;
            left:0;right:0;
            margin-top:80px;
            transform: translateX(0px);
          }
          form{
            width:100%;
          }
        }
        @media screen and (max-width:350px){
          .news-input{
            transform:scale(.8);
          }
          
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;
