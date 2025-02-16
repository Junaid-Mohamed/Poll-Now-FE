import axios from "axios";
import { useState } from "react";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]); // Start with two options
  
  const handleAddOption = () => {
    setOptions([...options, ""]); // Add an empty option field
  };

  const handleRemoveOption = (index) => {
    if (options.length > 2) { // Ensure at least 2 options remain
      setOptions(options.filter((_, idx) => idx !== index));
    }
  };

  const handleCreate = async () => {

    const resp = await axios.post("https://poll-now-be.vercel.app/api/create", { question, options });
    if(resp.status == 201){
      setQuestion("");
      setOptions(["",""])
      alert("Poll created successfully")
    }
    
  };

  return (
    <div className="container my-4">
      <textarea
      className="form-control"
        rows={3}
        cols={50}
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Poll question"
      />
      {options.map((opt, idx) => (
        <div key={idx}>
          <input
          className="form-control my-2"
            type="text"
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[idx] = e.target.value;
              setOptions(newOptions);
            }}
            placeholder={`Option ${idx + 1}`}
          />
          {options.length > 2 && (
            <button className="btn btn-danger" onClick={() => handleRemoveOption(idx)}>Remove</button>
          )}
        </div>
      ))}
      <br />
      <button className="btn btn-primary" onClick={handleAddOption}>Add Option</button>
      <button className="btn btn-success mx-2" onClick={handleCreate}>Create Poll</button> <br />
    </div>
  );
};

export default CreatePoll;
