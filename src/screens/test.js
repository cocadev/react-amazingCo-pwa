import * as React from "react";

export default class App extends React.Component {
  state = { active: 0, height:350 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {


    const { pageYOffset } = window;
    const { active } = this.state;
    const { animation } = this.state.height - pageYOffset

    // console.log('event', event)

    if (pageYOffset >= 200 ) {
      this.setState({ active: 0, height: 350 - pageYOffset });
    } else if (pageYOffset < 200 ) {
      this.setState({ active: 1, height: 350 - pageYOffset });
    }

    console.log('pageYOffset', pageYOffset)
    console.log('height', this.state.height)

  };

  render() {
    const { active } = this.state;
    return (
      <div style={{height:900}}>
        <img src="https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg" style={{width:370, height: this.state.height, resize:'cover'}}/>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>
        <h1> {active} </h1>

      </div>
    );
  }
}

