import React, { Component } from "react";

class TargetIdentifier extends Component {
  constructor(props) {
    super(props);

    // Here we can handle the generation of lists through api calls, inputs, etc.
    // and render the functionality to display that list, target items, etc.
    // This is hard coded, so not very flexible, but could become flexible with
    // just a couple dynamic requests.
    this.state = {
      targeted: "",
      imgs: [
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQifWvTdiTPMjapkdfIhLD5o2_Mjcjx5niwCzQuL6CVMtBXgkEXA`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvdQBsxzL5kSG5EGRixKx7wa7QwQZFHSsfYFJXFMWDRn2TVTldA`,
        `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrDONE5Ij9rZvMT01B8I0YE-qpJSSTjhceQlU-SEw-D8VXBgW`,
        `http://media.comicbook.com/2018/03/avengers-infinity-war-fan-poster-hawkeye-daredevil-header-1090269-1280x0.jpeg`,
        `https://cdn.movieweb.com/img.news.tops/NEP64iSkQhyFSX_1_b/Black-Widow-Movie-Stand-Lee-Confirms.jpg`
      ]
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(event) {
    console.log(event.target.src);
    this.setState({ targeted: event.target.src });
  }
  render() {
    return (
      <div onMouseDown={this.handleSelect}>{this.props.render(this.state)}</div>
    );
  }
}

export default TargetIdentifier;
