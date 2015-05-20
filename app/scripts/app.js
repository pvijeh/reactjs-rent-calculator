
var React = window.React = require('react'),
// include external components from ui folder like the exmaple blow: 
//  Timer = require("./ui/Timer"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");


var cat1 =  [
    {name  : 'one', value : 1},
    {name  : 'two', value : 2}
      ]; 

var cat2 =  [
    {name  : 'three', value : 3},
    {name  : 'four', value : 4}
      ];


// <table body> 
// > section header = section title and table column headers
//     > section table = function to iterate over data & spit out rows 
//           > section row =  rows to be populated with JS array data 
//           > add new row button == enables addition of new rows 
//           > summary section == sums array values
// </table Body>

// > Summary Area = sums all sum array values 




var CalcTable = React.createClass({
  render: function() {
    return(
<table>
<CalcRow />
</table>
)
  }
});

var CalcRow = React.createClass({
  render: function(){
    return(
        <tr>
          <td>X</td>
          <td>{cat2[0].name}</td>
          <td><input value={cat2[0].value}/></td>
        </tr>
      )
  }
});

var AddRowButton = React.createClass({
    handleSubmit: function(e) {

  },
  render: function(){
    return(
        <form onSubmit={this.props.cat1}>
        <input onChange={this.handleSubmit} value="" />
        <button>Add</button>
        </form>
      )
  }
});


var SectionSummary = React.createClass({
  render: function(){
  return(
    <div className="summary"></div>
    );
  }
});



var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      cat1: cat1,
      cat2: cat2
    };
  },
  render: function() {
    return (
      <div>
          <h3>title</h3>
          <CalcTable />
         <div className="stuff"><p>stuff</p></div>
         <div className="stuff">
            <AddRowButton />
          </div>
            <SectionSummary />
      </div>
    );
  }
});


React.render(<TodoApp />, mountNode);






// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(itemText) {
//       return <li>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });
// var TodoApp = React.createClass({
//   getInitialState: function() {
//     return {items: [{thing: "stuff" , stuff: "100"},{thing: "stuff" , stuff: "100"}], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render: function() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>Add</button>
//         </form>
//         <Timer />
//       </div>
//     );
//   }
// });

