import React, { Component } from 'react';
import '../styles/App.css';
import { without } from 'lodash';

import AddCustomers from './AddCustomers';
import SearchCustomers from './SearchCustomers';
import ListCustomers from './ListCustomers';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      carApts: [],
      formDisplay: false,
      lastIndex: 0,
      orderBy: 'carModel',
      orderDir: 'asc',
      searchText: ''
    };

    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchCustomers = this.searchCustomers.bind(this);
  }

  searchCustomers(search) {
    this.setState({
      searchText:search
    });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    })
  }

  addCustomer(apt) {
    let tempCarApts = this.state.carApts;
    apt.id = this.state.lastIndex;
    tempCarApts.unshift(apt);

    this.setState({
      carApts: tempCarApts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  deleteCustomer(apt) {
    let tempCarApts = this.state.carApts; 
    tempCarApts = without(tempCarApts, apt);

    this.setState({
      carApts: tempCarApts
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.id = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1})
          return item;
        })
        this.setState({
          carApts: apts
        });
      });
  }

  render() {
    let order;
    let filteredApts = this.state.carApts;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() < 
          b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })
    .filter(item => {
      return(
        item['carModel']
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase()) ||
        item['carOwner']
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase()) ||
        item['carSummary']
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase()) 
      );
    });

    return (
      <main className="page bg-white" id="carShop">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddCustomers 
                  formDisplay = {this.state.formDisplay} 
                  toggleForm = {this.toggleForm}
                  addCustomer = {this.addCustomer} 
                />
                <SearchCustomers
                  orderBy = {this.state.orderBy}
                  orderDir = {this.state.orderDir}
                  changeOrder = {this.changeOrder}
                  searchCustomers = {this.searchCustomers}
                />
                <ListCustomers 
                  customers = {filteredApts}
                  deleteCustomer = {this.deleteCustomer}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
