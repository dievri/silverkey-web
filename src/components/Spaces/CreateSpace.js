import React, { Component } from "react";
import API from "../../config/api";

class CreateSpace extends Component {
  constructor() {
    super();
    this.state = {
      space: "",
      status: null
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await API.post("api/v1/space", {
        space_name: this.state.space
      });
      console.log(response.data);
      if (response.data.status == true) {
        this.setState({
          status: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({
      space: e.target.value
    });
  };

  render() {
    const alert = this.state.status ? (
      <div className="alert alert-success my-5" role="alert">
        Directory successfully set
      </div>
    ) : this.state.status === false ? (
      <div className="alert alert-danger my-5" role="alert">
        Error while trying to create
      </div>
    ) : null;
    return (
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Space name"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Create
              </button>
            </form>
          </div>
        </div>
        {alert}
      </section>
    );
  }
}

export default CreateSpace;
