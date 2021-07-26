const TopCon = () => (
  <div className="top-con">
    <h4>
      “We’re Here to Help Your business <br /> Succeed Online”
    </h4>
    <style jsx>{`
      .top-con {
        height: 300px;
        width: 100%;
        background-image: url("/assets/images/pricing/background-img.svg");
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
      }
      .top-con h4 {
        text-align: center;
        width: 100%;
        font-size: 2rem;
        text-transform: uppercase;
        color: #ffa57f;
      }
      @media screen and (max-width: 770px) {
        .top-con {
          height: 400px;
        }
      }
      @media screen and (max-width: 410px) {
        .top-con {
          height: 300px;
        }
      }
    `}</style>
  </div>
);

export default TopCon;
