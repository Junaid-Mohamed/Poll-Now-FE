import axios from "axios";
import { useEffect, useState } from "react";

const Vote = () => {
  const [polls, setPolls] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await axios.get("https://poll-now-be.vercel.app/api/polls");
      setPolls(response.data);
    };

    fetchPolls();
  }, []);

  // Handle option selection
  const handleOptionChange = (pollId, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [pollId]: optionIndex, // Store selected option index for each poll
    }));
  };

  // Submit all votes in one API call
  const handleSubmitVotes = async () => {
    try {
        if(polls.length !== Object.keys(selectedOptions).length){
            alert("please vote all the polls to submit!!")
            return;
        }
      await axios.post("https://poll-now-be.vercel.app/api/vote", { votes: selectedOptions });
      alert("Votes submitted successfully!");
    } catch (error) {
      console.error("Error submitting votes:", error);
    }
  };

  return (
    <div className="container py-4">
      <h2>Vote on Polls</h2>
      {polls.map((poll) => (
        <div key={poll._id} className="border p-4 my-2">
          <h3>{poll.question}</h3>
          {poll.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`${poll._id}-${index}`}
                name={poll._id} // Group radio buttons per poll
                value={index}
                checked={selectedOptions[poll._id] === index}
                onChange={() => handleOptionChange(poll._id, index)}
              />
              <label htmlFor={`${poll._id}-${index}`} className="mx-2">{option.option}</label>
            </div>
          ))}
        </div>
      ))}
      <button className="btn btn-success mt-3" onClick={handleSubmitVotes}>
        Submit Votes
      </button>
    </div>
  );
};

export default Vote;
