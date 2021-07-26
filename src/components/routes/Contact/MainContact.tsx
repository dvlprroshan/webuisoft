import Heading from "../../global/Heading";
import Input from "../../global/Input";

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
            <Input placeholder="First Name" name="firstName" />
            <Input type="text" placeholder="Last Name" name="lastName" />
          </div>
          <Input type="text" placeholder="Email ID" name="email" />
          <Input type="text" placeholder="Phone No" name="phoneNo" />
          <textarea
            placeholder="Message..."
            name="message"
            cols={30}
            rows={10}
            className="message"
          ></textarea>
          <button className="send-message-btn" type="submit">
            Get a call back
          </button>
        </form>
      </div>

      {/* style of this component */}
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
          height: auto;
          box-shadow: 0 0 35px 0 #497eaf3a;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 40px 20px;
          row-gap: 20px;
        }
        textarea {
          border: none;
          border: 2px solid rgb(185, 197, 250);
          height: 50px;
          border-radius: 5px;
          padding: 2% 3% 2% 3%;
          font-size: 1.1rem;
        }
        textarea:focus {
          border: 2px solid rgb(77, 109, 250);
        }

        textarea.message {
          outline: none;
          height: auto;
          max-height: 200px;
          resize: none;
        }
        textarea::placeholder {
          color: #b0bcca;
        }
        .name {
          width: 100%;
          display: grid;
          grid-template: "a a";
          column-gap: 5%;
        }
        .send-message-btn {
          background: linear-gradient(45deg, #3a24ff, #7f9bf8);
          height: 50px;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.5s linear;
        }

        .send-message-btn:focus,
        .send-message-btn:hover {
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default MainContact;
