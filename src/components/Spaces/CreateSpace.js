import React, { Component } from "react";
import API from "../../config/api";

class CreateSpace extends Component {
  constructor() {
    super();
    this.state = {
      space: "",
      status: null,
      waiting: null,
      exists: null
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ waiting: true });
    try {
      const response = await API.post("api/v1/space", {
        space_name: this.state.space
      });
      console.log(response.data);
      if (response.data.status === true) {
        this.setState({
          waiting: false,
          status: true,
          space: ""
        });
      } else if (response.data.status === false) {
        this.setState({
          waiting: false,
          status: false,
          exists: response.data.exists
        });
      }
    } catch (error) {
      this.setState({
        waiting: false,
        status: false,
        space: ""
      });
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({
      space: e.target.value
    });
  };

  render() {
    const exists = this.state.exists ? (
      <button className="btn btn-info btn-block">Join</button>
    ) : null;
    const waiting = this.state.waiting ? (
      <div className="alert alert-warning my-5" role="alert">
        <div class="fa mr-2">
          <i class="fas fa-spinner fa-spin" />
        </div>
        Waiting for response
      </div>
    ) : this.state.status ? (
      <div className="alert alert-success my-5" role="alert">
        Directory successfully set
      </div>
    ) : this.state.status === false && this.state.exists ? (
      <div>
        <div className="alert alert-info mt-5 mb-1" role="alert">
          Space already exists.
        </div>
        {exists}
      </div>
    ) : this.state.status === false ? (
      <div className="alert alert-danger my-5" role="alert">
        Error while creating
      </div>
    ) : null;

    let classes = "row";
    if (this.state.waiting) {
      classes += " invisible";
    }
    return (
      <section className="container py-5">
        <div className={classes}>
          <div className="col-md-6 offset-md-3">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Space name"
                  onChange={e => this.handleChange(e)}
                  value={this.state.space}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Create
              </button>
            </form>
          </div>
        </div>
        {waiting}
      </section>
    );
  }
}

export default CreateSpace;
