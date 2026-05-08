import income from "../../assets/income.png";
import g1 from "../../assets/image/g1.png";
import g2 from "../../assets/image/g2.png";
import g3 from "../../assets/image/g3.png";
import transaction from "../../assets/image/transaction.png";
export default function Income() {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-full max-w-2xl px-4 mx-auto mt-10">
        <h1 className="text-4xl font-bold m-4">Income</h1>
        <div className="text-lg m-4 flex justify-between">
          <p>
            Income last{" "}
            <u>
              <b>30 days</b>
            </u>
          </p>
        </div>
        <h2 className="text-5xl font-black m-4">$ 2,230</h2>
      </div>
      <img src={income} alt="income graph" />
      <div className="mt-4">
        <img src={transaction} alt="transaction image" />
        <img src={g1} alt="transaction 1" />
        <img src={g2} alt="transaction 2" />
        <img src={g3} alt="transaction 3" />
      </div>
    </div>
  );
}
