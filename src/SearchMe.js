import React from "react";
import firebase from "firebase";

class SearchMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtxt : "",
            // filtered: ["some", "thing", "new"],
            list: [
            "Go to the store",
            "Wash the dishes",
            "Learn some code"
          ]
        }
        // this.handleChange = this.handleChange.bind(this);
    }
  //   componentDidMount() {
  //     this.setState({
  //       filtered: this.props.items
  //     });
  //   }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     filtered: nextProps.items
  //   });
  // }
  // handleChange(e) {
  //   let currentList = [];
  //   let newList = [];
  //   console.log(currentList)
  //   if (e.target.value !== "") {
  //     currentList = this.props.items;
  //     console.log(currentList)
  //     newList = currentList.filter(item => {
  //       const lc = item.toLowerCase();
  //       const filter = e.target.value.toLowerCase();
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     newList = this.props.items;
  //   }
  //   this.setState({
  //     list: newList
  //   });
  // }

  onChange_ = e => {
    this.setState( {searchtxt : e.target.value } );
  }

  render() {
      const {searchtxt} = this.state;
      const filterMed = this.state.list.filter( item => {
        return item.toLowerCase().indexOf(searchtxt.toLowerCase() ) !== -1
      })
      return (
      <React.Fragment>
      <div>
          <input type="text" className="input" onChange={this.onChange_} placeholder="Search...;)" />
          <ul>
            {filterMed.map(item => (
            <li key={item}>
              {item} &nbsp;
            </li>
          ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchMe
// <span
//   className="delete"
//   onClick={() => this.removeItem(item)}
// />