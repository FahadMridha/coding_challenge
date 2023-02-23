import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  // Storage All Submited Data
  const [information, setInformation] = useState([]);

  //Storage Display data
  const [showInformation, setShowInformation] = useState([]);

  //filtaring task status
  const filtaringInformation = (array) => {
    const activeTask = array.filter(
      (task) => task.status.toLowerCase() === "active"
    );
    const completedTask = array.filter(
      (task) => task.status.toLowerCase() === "completed"
    );
    const restTask = array.filter(
      (task) =>
        task.status.toLowerCase() !== "active" &&
        task.status.toLowerCase() !== "completed"
    );
    const filtaredTask = [...activeTask, ...completedTask, ...restTask];
    return filtaredTask;
  };
  const handleClick = (val) => {
    setShow(val);
    //show for all data
    if (val == "all") {
      const filtaredTask = filtaringInformation([...information]);
      setShowInformation([...filtaredTask]);
      return;
    }
    //show active  and completed data
    const filtaringActiveAndCompletedTask = information.filter(
      (info) => info.status.toLowerCase() === val.toLowerCase()
    );
    setShowInformation([...filtaringActiveAndCompletedTask]);
    // console.log(show);
  };

  //form submitation
  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;
    // console.log(name, status);
    setInformation([...information, { name, status }]);
    const filtaredTask = filtaringInformation([
      ...information,
      { name, status },
    ]);
    setShowInformation(filtaredTask);
    // localStorage.setItem("task", JSON.stringify(showInformation));
    // console.log(information);
    form.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handlerSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                required
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                required
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {showInformation.length > 0 &&
                showInformation.map((info, i) => (
                  <tr key={i}>
                    <td>{info.name}</td>
                    <td>{info.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
