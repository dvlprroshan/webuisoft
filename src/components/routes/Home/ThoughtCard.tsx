export default function ThpoughtCard() {
  return (
    <section>
      <div className="thought-card">
        <p>
          We don't want to push our ideas on to customers, we simply want to
          make what they want.
        </p>
      </div>
      <style jsx>{`
        .thought-card {
          width: 100%;
          height: 230px; 
          background:#00052ee6;
          display: flex;
          align-items: center;
        }
       
        .thought-card p {
          padding: 0 15%;
          color: #ffffffcc;
          text-align: center;
          font-size: 30px;
          font-weight: bold;
          text-shadow: 0 4px 4px #c2c1c144;
          opacity:.5;
          z-index:2;
        }
        .thought-card p::after {
          position: absolute;
          content: "";
          width: 60px;
          height: 30px;
          z-index:2;
          left: calc(50% - 30px);
          margin-top: 45px;
          background-image: url("assets/icons/heading-smile.svg");
          background-size: cover;
        }
        @media screen and (max-width: 1000px) {
          .thought-card{
            height:190px;
          }
          .thought-card p{
            font-size:25px;
            padding:0;
          }
        }
        @media screen and (max-width:550px){
          .thought-card{
            margin-top:80px;
          }
        }
        @media screen and (max-width:375px){
          .thought-card p{
            font-size:18px;
          }
        }
      `}</style>
    </section>
  );
}
