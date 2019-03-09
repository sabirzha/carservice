import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

export default class ListCustomers extends Component {
  render() {
    return (
      <div className="apt-list item-list mb-3">
        {this.props.customers.map( item => (
          <div className="car-item col media py-3" key={item.id}>
            <div className="mr-3">
              <button className="car-delete btn btn-sm btn-danger"
                onClick={()=> this.props.deleteCustomer(item)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="car-info media-body">
              <div className="car-head d-flex">
                <span className="car-model">{item.carModel}</span>
                <span className="srvs-date ml-auto">
                  <Moment 
                    date={item.srvsDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="MMM-D, h:mma"
                  />
                </span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span>{item.carOwner}</span>
              </div>
              <div className="car-summary">
                <span className="label-item">Info: </span>
                <span>{item.carSummary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
