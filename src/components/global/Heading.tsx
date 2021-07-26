const Heading = ({ firstHeading, secondHeading }) => {
  return (
    <div className="heading">
      <div className="first-heading">{firstHeading}</div>
      <div className="second-heading">{secondHeading}</div>
      <style jsx>{`
        .heading {
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .first-heading {
          font-size: 1.2rem;
          font-weight: bold;
          color: #6488df;
        }
        .second-heading {
          font-size: 2.5rem;
          font-weight: bold;
          text-transform: capitalize;
          max-width: 700px;
          color: #415e8d;
          margin-bottom: 30px;
        }
        .second-heading::after {
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='52'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8 4.6C10.6 2.4 2.4-2 1 1 1 1-.5 2.5.2 5 .9 8 5.8 17.4 15.4 21.3c10.2 4 26.4.6 32.7-8.2 6.5-9.2 4-12.4-1-11.5-6 1.1-7.8 2.2-14.8 4-6.2 1.5-13.9 0-17.5-1z' fill='%23BAC3F6'/%3E%3C/svg%3E")
            no-repeat;
          position: absolute;
          content: "";
          height: 30px;
          width: 55px;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
};
export default Heading;
