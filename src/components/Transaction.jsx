import React, { useState } from "react";
import "./Transaction.css";
import { GrFormClose, GrFormEdit } from "react-icons/gr";
import TransactionModal from "./TransactionModal";

import { useListLayerValue } from "../context/ListContext";

function Transaction() {
  const [{ lists }, dispatch] = useListLayerValue();
  const [id, setId] = useState();
  const [name, setName] = useState("1");
  const [description, setDescription] = useState("1");
  const [date, setDate] = useState("1");
  const [amount, setAmount] = useState("1");
  const [currency, setCurrency] = useState("");

  const removeList = (listId) => {
    dispatch({
      type: "REMOVE_LIST",
      payload: listId,
    });
  };

  const handleEvent = (e) => {
    setId(e.id);
    setName(e.name);
    setDescription(e.description);
    setDate(e.date);
    setAmount(e.amount);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    removeList(id);
    const upList = {
      id,
      name,
      description,
      date,
      amount,
      currency,
    };

    dispatch({
      type: "UPDATE_LIST",
      payload: upList,
    });
  };

  return (
    <>
      <div className="row">
        <div className="col banner"></div>
      </div>
      <div className="row">
        <div className="col-2">
          <ul className="list-group">
            <li className="list-group-item list-group-item-light">Dashboard</li>
            <li className="list-group-item list-group-item-dark">
              Transaction
            </li>
            <li className="list-group-item list-group-item-light">Accounts</li>
            <li className="list-group-item list-group-item-light">Settings</li>
          </ul>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-10"></div>
            <div className="col-2">
              <TransactionModal />
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Transaction Date</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list) => (
                <tr key={list.id}>
                  <th scope="row">{list.id}</th>
                  <td>{list.name}</td>
                  <td>{list.description}</td>
                  <td>{list.date}</td>
                  <td>
                    {list.currency} - {list.amount}
                  </td>
                  <td>
                    <div className="list-icons">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-whatever="@mdo"
                      >
                        {" "}
                        <GrFormEdit
                          className="list-icon"
                          onClick={() => handleEvent(list)}
                        />
                      </button>

                      <button type="button" className="btn btn-danger">
                        <GrFormClose
                          className="list-icon"
                          onClick={() => removeList(list.id)}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Transaction
              </h5>
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
              <form onSubmit={handleUpdate} className="mb-4">
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
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
