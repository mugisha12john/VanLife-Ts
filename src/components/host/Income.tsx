import income from "../../assets/income.png";
export default function Income() {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-137">
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
    </div>
  );
}
