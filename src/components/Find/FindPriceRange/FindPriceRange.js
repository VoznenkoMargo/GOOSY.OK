// import React from "react";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";


// class FindPriceRange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//   }

//   onSliderChange = value => {
//     this.setState({
//       value
//     });
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div>
//         <div>
//           <Slider
//           marks={{
//             1: `$ ${value}`,
//             500: `$ 500`
//           }}
//           min={0}
//           max={500}
//           defaultValue={[200, 300]}
//           tipFormatter={value => `$ ${value}`}
//           onChange={this.onSliderChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }


// export default FindPriceRange;
