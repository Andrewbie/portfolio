import React from "react";
export default function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d448ab8e-a335-4f9e-a371-8b6208786441");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-5 w-full justify-center items-center pl-[2.2rem]">
          {/* <input type="text"  /> */}
          <div className="group w-[85%]">
            <input required type="text" class="input" name="name"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>
          <div className="group w-[85%]">
            <input required type="text" class="input" name="name"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>E-Mail</label>
          </div>
          <div className="group w-[85%]">
            <input required type="text" class="input" name="name"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Contact no.</label>
          </div>
          <div className="group w-[85%]">
            <input required type="text" class="input" name="name"/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Talking About</label>
          </div>
          
        </div>

        <button type="submit" className="border-2 p-2 w-[55%] md:w-[200px]">Submit Form</button>
      </form>
      <div className="text-center mt-4">{result}</div>
    </div>
  );
}
