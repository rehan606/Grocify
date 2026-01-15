import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className=" bg-gray-50 py-16 px-10 mt-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Write Your Feedback
        </h2>
        <p className="text-center text-gray-500 mb-8">
          We value your feedback. Please share your experience.
        </p>

        {/* Rating */}
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl cursor-pointer transition ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Write your feedback..."
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
