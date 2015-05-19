
var React = window.React = require('react'),
// include external components from ui folder like the exmaple blow: 
//  Timer = require("./ui/Timer"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

    var items = {
      'row1' : {
        'item1' : 1,
        'item2' : 2 ,
        'item3' : 3
      },
      'row2' : {
        'item1' : 4,
        'item2' : 5 ,
        'item3' : 6
      },
      'row3' : {
        'item1' : 7,
        'item2' : 8 ,
        'item3' : 9
      }
    };

var TodoList = React.createClass({
  render: function() {
    return(
<table>
<tr>
<td>{items.row1.item1}</td>
<td>{items.row1.item2}</td>
<td>{items.row1.item2}</td>
</tr>
<tr>
<td>{items.row2.item1}</td>
<td>{items.row2.item2}</td>
<td>{items.row2.item3}</td>
</tr>
<tr>
<td>{items.row3.item1}</td>
<td>{items.row3.item2}</td>
<td>{items.row3.item3}</td>
</tr>
</table>
)
  }
});
var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: items};
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
       <div className="stuff"><p>stuff</p></div>
       <div className="stuff">
        </div>
      </div>
    );
  }
});


React.render(<TodoApp data={items}/>, mountNode);






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

