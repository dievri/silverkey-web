import React, { Component } from "react";
import API from "../../config/api";

class CreateSpace extends Component {
  constructor() {
    super();
    this.state = {
      space: ""
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    console.log("prevented");
    try {
      const response = await API.post("api/v1/space", {
        space_name: this.state.space
      });
      console.log(response);
      console.log(response.data);
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
      </section>
    );
  }
}

export default CreateSpace;
