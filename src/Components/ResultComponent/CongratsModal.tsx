import "./CongratsModal.css";
import Won from "../../Assets/won.svg";
import loss from "../../Assets/loss.svg";
import Confetti from "../../Assets/Confetti";
import { Dispatch, SetStateAction } from "react";
type iCongratsModalProps = {
  result?: string;
  message?: string;
  setModal?: Dispatch<SetStateAction<boolean>>;
};
const CongratsModal: React.FC<iCongratsModalProps> = ({
  result,
  setModal,
  message,
}) => {
  const modalHandler = (e: any) => {
    if (e.target.classList.contains("modal-container")) {
      if (setModal) {
        setModal(false);
      }
    }
  };

  return (
    <>
      <div className="modal-container" onClick={(e) => modalHandler(e)}>
        <div className="modal-cta">
          <div className="confetti">
            {result && result == "positive" && <Confetti />}
          </div>
          <div className="modal-heading">
            <h2>
              {" "}
              <span style={{ color: "blue" }}>Fit</span>.Sharkk
            </h2>
            <img
              style={{ width: "10%" }}
              src="https://i.ibb.co/XJG7hZG/letter-g-logo-vector-831342-1.jpg"
              alt=""
            />
          </div>
          <div className="modal-sub-heading">
            {message && result == "positive" ? (
              <h3 style={{ color: "green" }}>Congradulations...</h3>
            ) : (
              <h3 style={{ color: "red" }}>Better luck next time</h3>
            )}
          </div>
          <div className="modal-img">
            {result && result == "positive" ? (
              <img src={Won} alt="" />
            ) : (
              <img className="modal-img-loss" src={loss} alt="" />
            )}
          </div>
          {message && result == "positive" ? (
            <div className="modal-text">
              <p
                style={{
                  textAlign: "center",
                  padding: "1.5rem 0rem 0rem 0rem",
                  color: "green",
                }}
              >
                {message}
              </p>
            </div>
          ) : (
            <div className="modal-text">
              <p
                style={{
                  textAlign: "center",
                  padding: "1.5rem 0rem 0rem 0rem",
                  color: "red",
                }}
              >
                {message}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CongratsModal;
