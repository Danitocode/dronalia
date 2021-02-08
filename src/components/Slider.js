import React from "react";
import PropTypes from "prop-types";



class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      currentImage: this.props.images[0],
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.onChangePosition(null, 1), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  onChangePosition(e, value) {
    const maxValue = this.props.images.length;
    let current = this.state.selected;
    current = (current + value) % maxValue;
    if (current < 0) {
      current = maxValue - 1;
    }
    this.setState({
      selected: current,
      currentImage: this.props.images[current],
    });
  }

  render() {
    const { currentImage } = this.state;
    return (
		<div>
        <div
          class="jumbotron jumbotron-image color-grey-light"
          style={{ backgroundImage: `url('${currentImage}')` }}
        >
          <div class="mask rgba-black-strong d-flex align-items-center h-100">
            <div class="container text-center white-text py-5">
              <h1 class="mb-6">The best drone shop</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
Slider.propTypes = {
  images: PropTypes.array,
};
Slider.defaultProps = {
  images: [
    "../images/drone1.jpg",
    "https://i.picsum.photos/id/859/1900/250.jpg?hmac=-qp63LmIlFnEi-PAzNbLJ6rxB_glW9hP1zzBrHnVvL0",
  ],
};
