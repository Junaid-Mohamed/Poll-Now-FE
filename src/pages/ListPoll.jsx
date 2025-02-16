import axios from "axios";
import { useEffect, useState } from "react";

const ListPoll = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await axios.get("http://localhost:8080/api/polls");
      setPolls(response.data);
    };

    fetchPolls();
    const interval = setInterval(fetchPolls, 5000); // Auto-refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-4" >
      <h2>Poll Results</h2>
      {polls.map((poll) => (
        <div key={poll._id} className="border p-4 my-2">
          <h3>{poll.question}</h3>
          <ul>
            {poll.options.map((option, idx) => (
              <li key={idx}>
                {option.option} - {option.votes} votes
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListPoll;
