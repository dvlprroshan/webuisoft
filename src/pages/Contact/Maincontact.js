import Heading from "../../Components/Heading";

const MainContact = () => {
  return (
    <div className="main-ser">
      <div className="heading">
        <Heading
          firstHeading="contact us"
          secondHeading="Any question or remark? Just write us a message"
        />
      </div>
      <div className="form-con">
        <form action="contact" method="post">
          <div className="name">
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <input type="text" placeholder="Enter your email ID" name="email" />
          <input type="text" placeholder="Phone No" name="phoneNo" />
          <textarea
            placeholder="Type your message here"
            name="message"
            cols="30"
            rows="10"
            className="massage"
          ></textarea>
          <button className="send-massage-btn" type="submit">
            Get a call back
          </button>
        </form>
      </div>
      <style jsx>{`
        .main-ser {
          width: 100%;
          height: 800px;
        }
        .heading {
          width: 100%;
          background-color: #71abe011;
          padding: 20px 0;
        }
        .form-con {
          width: 100%;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .form-con form {
          width: 600px;
          height: 500px;
          box-shadow: 0 0 35px 0 #71abe022;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 0 3%;
        }
        input,
        textarea {
          border: none;
          background-color: #71abe011;
          height: 50px;
          border-radius: 5px;
          padding: 2% 3% 2% 3%;
          font-size: 1.1rem;
        }
        input:focus {
          outline: none;
          background-color: transparent;
          border-radius: 0;
          box-shadow: inset 0 -10px 0 0 white, inset 0 -12px 0 0 #09569e;
        }
        textarea.massage {
          outline: none;
          height: auto;
          max-height: 200px;
        }
        .name {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .send-massage-btn {
          background: linear-gradient(45deg, #3a24ff, #7f9bf8);
          height: 50px;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: bold;
        }
        .send-massage-btn:active {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
};

export default MainContact;
