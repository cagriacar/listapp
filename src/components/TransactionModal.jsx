import React, { useState } from "react";
import { useListLayerValue } from "../context/ListContext";

function TransactionModal() {
  // eslint-disable-next-line no-unused-vars
  const [{ lists }, dispatch] = useListLayerValue();
  const [id, setID] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("TRY");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newList = {
        id,
        name,
        description,
        date,
        amount,
        currency,
      };

      dispatch({
        type: "ADD_LIST",
        payload: newList,
      });
      setID(id + 1);
      setName("");
      setDescription("");
      setDate("");
      setAmount("");
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-success mt-2 mb-2"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        + New Transaction
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Transaction</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group row align-items-center mb-2">
                  <label className="col-sm-3 text-left text-sm-right mb-0">
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={(event) => setName(event.target.value)}
                      value={name}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center mb-2">
                  <label className="col-sm-3 text-left text-sm-right mb-0">
                    Description
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      onChange={(event) => setDescription(event.target.value)}
                      value={description}
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center mb-2">
                  <label className="col-sm-3 text-left text-sm-right mb-0">
                    Transaction Date
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="date"
                      className="form-control"
                      placeholder="Date"
                      onChange={(event) => setDate(event.target.value)}
                      value={date}
                    />
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <label className="col-sm-3 text-left text-sm-right mb-0">
                    Amount
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="amount"
                      className="form-control"
                      placeholder="Amount"
                      onChange={(event) => setAmount(event.target.value)}
                      value={amount}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 text-left text-sm-right mb-0">
                    Currency
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                    >
                      <option value="TRY">TRY</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionModal;
