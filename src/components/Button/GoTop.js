import React from "react";
import "./goTop.css";
import GoTopLogo from "../../assets/images/goTop.svg";

class GoTop extends React.Component {
  state = {
    intervalId: 0,
    thePosition: false
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 740) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <span className="go-top zoom">
          <img
            src={GoTopLogo}
            onClick={this.scrollToTop}
            alt="arrow pointing up"
          />
        </span>
      );
    }
  };

  render() {
    return <div>{this.renderGoTopIcon()}</div>;
  }
}

export default GoTop;
