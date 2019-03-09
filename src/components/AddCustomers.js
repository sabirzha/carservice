import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

export default class AddCustomers extends Component {
  constructor() {
    super();
    this.state = {
      carModel: '',
      carOwner: '',
      srvsDate: '',
      srvsTime: '',
      carSummary: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempCarApt = {
      carModel: this.state.carModel,
      carOwner: this.state.carOwner,
      srvsDate: this.state.srvsDate + ' ' + this.state.srvsTime,
      carSummary: this.state.carSummary
    };

    this.props.addCustomer(tempCarApt);

    this.setState({
      carModel: '',
      carOwner: '',
      srvsDate: '',
      srvsTime: '',
      carSummary: ''
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className={
        'card textcenter mt-3 ' +
        (this.props.formDisplay ? '' : 'add-customer')
      }>
        <div 
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Customers
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate
            onSubmit={this.handleAdd}
          >
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="carModel"
                readOnly
              >
                Car Model
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="carModel"
                  placeholder="Car Model"
                  value={this.state.carModel}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="carOwner"
              >
                Car Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="carOwner"
                  placeholder="Owner's Name"
                  value={this.state.carOwner}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="srvsDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="srvsDate"
                  id="srvsDate"
                  value={this.state.srvsDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="srvsDate"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="srvsTime"
                  id="srvsTime"
                  value={this.state.srvsTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="carSummary">
                Car Summary
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="carSummary"
                  id="carSummary"
                  placeholder="Car Summary"
                  value={this.state.carSummary}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Customer
                </button>
              </div>
            </div>
          </form>
        </div>
    </div>

    )
  }
}
