import rating from "../../assets/rating.png";
export default function Review() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="flex gap-5 items-center">
        <h1 className="font-bold text-3xl">Your reviews</h1>
        <p>
          last <u>30 days</u>
        </p>
      </div>
      <img src={rating} alt="review ratings" className="max-w-2xl h-137" />
    </div>
  );
}
