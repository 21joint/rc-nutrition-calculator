import React, { Component } from "react";

class AppLoader extends Component {
  render() {
    return (
      <div>
        <section className={"app-section app-loader"}>
          <div className="app-loading-container">
            <div className="app-loading-animation" />
            <h3>Loading</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default AppLoader;
