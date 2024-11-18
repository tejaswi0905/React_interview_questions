import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [cost, setCost] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8);
  const [processingFee, setProcessingFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [emiPerMonth, setEmiPerMonth] = useState(0);
  const [tenure, setTenure] = useState(20);

  const calculateEmi = (loanAmount, rate, months) => {
    const monthlyInterest = rate / 12 / 100;

    const numerator =
      loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months);
    const denominator = Math.pow(1 + monthlyInterest, months) - 1;
    return numerator / denominator;
  };

  const calculateLoanFromEMI = (emi, rate, months) => {
    const monthlyInterest = rate / 12 / 100;
    return (
      (emi * (Math.pow(1 + monthlyInterest, months) - 1)) /
      (monthlyInterest * Math.pow(1 + monthlyInterest, months))
    );
  };

  const handleDownPaymentChanges = (e) => {
    const newDownPayment = Number(e.target.value);
    setDownPayment(newDownPayment);

    const loanAmount = cost - newDownPayment;
    const totalMonths = tenure * 12;
    const emi = calculateEmi(loanAmount, interestRate, totalMonths);
    setEmiPerMonth(emi.toFixed(2));
  };

  const handleEMIChange = (e) => {
    const newEMI = Number(e.target.value);
    setEmiPerMonth(newEMI);

    const totalMonths = tenure * 12;
    const loanAmount = calculateLoanFromEMI(newEMI, interestRate, totalMonths);
    const newDownPayment = cost - loanAmount;
    setDownPayment(newDownPayment.toFixed(2));
  };

  useEffect(() => {
    const loanAmount = cost - downPayment; // Loan amount is total cost minus down payment
    if (loanAmount > 0 && tenure > 0 && interestRate > 0) {
      const calculatedEMI = calculateEmi(loanAmount, interestRate, tenure * 12);
      setEmiPerMonth(calculatedEMI.toFixed(2)); // Update EMI value
    }
  }, [cost, interestRate, downPayment, tenure]);

  return (
    <div className="App">
      <span className="title">Total cost of Asset</span>
      <Input title="Total const of assets" value={cost} setValue={setCost} />

      <span className="title">Interest Rate in (in %)</span>
      <Input
        title="Interest Rate in (in %)"
        value={interestRate}
        setValue={setInterestRate}
      />

      <span className="title">Processing Fee in (in %)</span>
      <Input
        title="Processing Fee in (in %)"
        value={processingFee}
        setValue={setProcessingFee}
      />

      <span className="title">Tenure in years</span>
      <Input title="tenure in years" value={tenure} setValue={setTenure} />

      <span className="title">Down Payment</span>
      <div>
        <input
          type="range"
          min={0}
          max={cost}
          className="slider"
          value={downPayment}
          onChange={(e) => {
            handleDownPaymentChanges(e);
          }}
        />
        <div className="labels">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>

      <span className="title">Emi per Month</span>
      <div>
        <input
          type="range"
          min={calculateEmi(0, interestRate, tenure * 12)}
          max={calculateEmi(cost, interestRate, tenure * 12)}
          className="slider"
          value={emiPerMonth}
          onChange={(e) => {
            handleEMIChange(e);
          }}
        />
        <div className="labels-emi">
          <b>{emiPerMonth}</b>
        </div>
      </div>
    </div>
  );
}

export default App;
