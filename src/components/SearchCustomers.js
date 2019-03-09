import React, { Component } from 'react'

export default class SearchCustomers extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
      <div className="col-md-6">
        <div className="input-group">
          <input
            id="SearchApts"
            type="text"
            className="form-control"
            aria-label="Search Appointments"
            onChange={e=> this.props.searchCustomers(e.target.value)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by: <span className="caret" />
            </button>

            <div className="sort-menu dropdown-menu dropdown-menu-right">
              <button 
                className={
                  'sort-by dropdown-item' + 
                  (this.props.orderBy === 'carModel' ? 'active': '')
                } 
                onClick={ e=> this.props.changeOrder('carModel', this.props.orderDir)}
                href="#"
              >
                Car Model
              </button>
              <button 
                className={
                  'sort-by dropdown-item' + 
                  (this.props.orderBy === 'srvsDate' ? 'active': '')
                } 
                onClick={ e=> this.props.changeOrder('srvsDate', this.props.orderDir)}
                href="#"
              >
                Date
              </button>
              <button 
                className={
                  'sort-by dropdown-item' + 
                  (this.props.orderBy === 'carOwner' ? 'active': '')
                } 
                onClick={ e=> this.props.changeOrder('carOwner', this.props.orderDir)}
                href="#"
              >
                Car Owner
              </button>
              <div role="separator" className="dropdown-divider" />
              <button 
                className={
                  'sort-by dropdown-item' + 
                  (this.props.orderDir === 'asc' ? 'active': '')
                }
                onClick={ e=> this.props.changeOrder(this.props.orderBy, 'asc')}
                href="#"
              >
                Asc
              </button>
              <button  
                className={
                  'sort-by dropdown-item' + 
                  (this.props.orderDir === 'desc' ? 'active': '')
                } 
                onClick={ e=> this.props.changeOrder(this.props.orderBy, 'desc')}
                href="#"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}
