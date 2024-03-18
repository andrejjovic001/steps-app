import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>Read children prop</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  // useState funkcija vraca niz, zbog toga odmah radimo destructing
  // arr je prvi element niza (1), a setStep je drugi el koji je funkcija
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Jonas" });

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);

    // Ovo nece raditi zato sto to direktno samnjuje step
    // if (step > 1) setStep(step--);
  }

  function handleNext() {
    if (step < 3) {
      // s predstavlja trenutno stanje koje je 1 i vraca funkciju koja uvecava to stanje za 1 i ono postaje 2
      setStep((s) => s + 1);

      // setStep(step + 1);  // Ovo nece uzrokovati da se pomjeri za dva koraka
      // setStep(step + 1);  // vec samo za jedan jer step nije trenutno stanje vec samo vrijednost trenutnog stanja
    }

    // setTest({ name: "Fred" });
    // setStep(step < 3 ? step + 1 : step); // Moze i ovako
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? <>&times;</> : <>&#9776;</>}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
