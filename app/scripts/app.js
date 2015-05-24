
var React = window.React = require('react'),
// include external components from ui folder like the exmaple blow: 
//  Timer = require("./ui/Timer"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

var catOne =  [
    {name  : 'one', value : 5, key : 1},
    {name  : 'two', value : 2, key : 2},
    {name  : 'three', value : 3, key : 3}
      ]; 

var CalcTable = React.createClass({
  changeHandler: function(){
    console.log('ding');
    this.props.onChange();
  },
  render: function() {
    var rows = [];

    // var myVar = this.props.cat1;     

    this.props.cat1.forEach(function(item){
      rows.push(<CalcRow item={item} ref="row" key={item.key}  onChange={this.changeHandler} />);
    });
    return(
      <table>{rows}</table>
    )
  }
});

var CalcRow = React.createClass({
    changeHandler: function(e) {
      console.log('ping');
        this.props.onChange();
    },
  render: function(){
    return(
        <tr>
          <td>h</td>
          <td>{this.props.item.name}</td>
          <td><input  cat1={this.props.item} value={this.props.item.value} name={this.props.item.key}  onChange={this.changeHandler}  /></td>
        </tr>
      )
  }
});

var AddRowButton = React.createClass({ 
     handleSubmit: function(e) {
      e.preventDefault();
      this.props.onSubmit(this);
  },
  render: function(){
    return(
        <form onSubmit={this.handleSubmit}>
          <input />
          <button>Add</button>
        </form>
      )
  }
});

var SectionSummary = React.createClass({
  render: function(){
  return(
    <div className="summary">
        <div className="table-summary">
        stuff
        </div>

    </div>
    );
  }
});

var CalcApp = React.createClass({
      changeHandler: function(e) {
      console.log('bong');
    },
    getInitialState: function(){
    return {
      cat1: this.props.cat1
      };
     },
    handleSubmit: function() {
        // console.log(this.props.cat1);
        // console.log(this.props.cat1.length+1);
        var newKeyVal = this.props.cat1.length+1;
        c = this.props.cat1; 
        c = c.push({name : "four", value : 4, key : newKeyVal});
        this.setState({
        cat1:c
      });
        // console.log(this.state.cat1);
    },
  render: function() {
    return (
      <div>
          <h3>title</h3>
          <CalcTable  cat1={this.props.cat1} onChange={this.changeHandler}/>
         <div className="stuff"><p>stuff</p></div>
         <div className="stuff">
            <AddRowButton cat1={this.props.cat1} onSubmit={this.handleSubmit}/>
          </div>
            <SectionSummary />
      </div>
    );
  }
});

React.render(<CalcApp cat1={catOne}/>, mountNode);

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



// <table body> 
// > section header = section title and table column headers
//     > section table = function to iterate over data & spit out rows 
//           > section row =  rows to be populated with JS array data 
//           > add new row button == enables addition of new rows 
//           > summary section == sums array values
// </table Body>

// > Summary Area = sums all sum array values 