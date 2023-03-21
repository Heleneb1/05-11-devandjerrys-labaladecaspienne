import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LineTop from "../assets/Images/head_line.png"
import Paypal from "../assets/Images/paypal.png"
import Visa from "../assets/Images/visa.png"
import VirB from "../assets/Images/virement.png"

function Payment() {
  const [showFormPayment, setShowFormPayment] = useState(false)
  const [paymentReceived, setPaymentReceived] = useState(false)

  const toggleFormPayment = () => {
    setShowFormPayment(!showFormPayment)
    setPaymentReceived(false)
  }

  const handlePayment = () => {
    setPaymentReceived(true)
  }

  return (
    <div className="mainDivPayment">
      <Header />
      <div>
        <p className="titleHeadPayment">LA BALADE CASPIENNE</p>
      </div>
      <div>
        <img className="lineTitlePayment" src={LineTop} alt="image" />
      </div>
      <div className="divTitlePayment">
        <p className="titlePayment">Paiement en ligne</p>
      </div>
      <p className="pPayment">Montant total de votre commande :</p>
      <p className="pCost">(value) €</p>
      <p className="pPayment">Veuillez choisir un mode de paiement</p>
      <div className="divPayment">
        <div className="divPaypal">
          <img className="imgPaypal" src={Paypal} alt="image" />
        </div>
        <div className="divVisa" onClick={toggleFormPayment}>
          <img className="imgVisa" src={Visa} alt="image" />
        </div>
        <div className="divVirement">
          <img className="imgVirement" src={VirB} alt="image" />
        </div>
      </div>
      {/* ***** Formulaire de paiement ***** */}
      <div className={`formPayment ${showFormPayment ? "visible" : ""}`}>
        <div className="secondDivForm">
          <p className="pTPayment">
            Veuillez saisir vos informations de paiement
          </p>
          <label htmlFor="nomCB">Nom sur la carte</label>
          <input type="text" id="nomCB" placeholder="Prénom Nom"></input>
          <label htmlFor="numCB">N° de carte</label>
          <input
            type="text"
            id="numCB"
            placeholder="....  ....  ....  ...."
          ></input>
          <div className="thirdDivForm">
            <div className="fourDiv">
              <label htmlFor="expCB">Date d'expiration</label>
              <input type="text" id="expCB" placeholder="MM/AA"></input>
            </div>
            <div className="fourDiv">
              <label htmlFor="crypCB">Cryptogramme visuel</label>
              <input type="text" id="crypCB" placeholder="..."></input>
            </div>
          </div>
          <button onClick={handlePayment}>Payer</button>
        </div>
      </div>
      {paymentReceived ? (
        <div className="divConfirmPayment">
          Paiement reçu.
          <br />
          <span className="spanConfirm">
            Vous recevrez bientôt votre commande !
          </span>
        </div>
      ) : null}{" "}
      <Footer />
    </div>
  )
}

export default Payment