import React from 'react';
import './App.css';
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      data: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleChange(e) {
    this.setState({ data: e.target.value })
  }
  handleRemove(index) {
    const removeContent = this.state.list;
    removeContent.splice(index, 1);
    this.setState(removeContent)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.data),
      data: ''
    })
    )
  }
  render() {
    return (
      <div className="main-content">
        <center>
          <h1>ToDo list example</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="first-content">
              <input type="text" onChange={this.handleChange} value={this.state.data} />
              <button className="submit-style">SUBMIT</button>
            </div>
            {this.state.list.map((item, index) => {
              return (
                <div className="data-class" key={index}>{item}
                  <button className="remove-style" onClick={() => this.handleRemove(index)}>DELETE</button>
                </div>
              )
            }
            )
            }
          </form>
        </center>
      </div>
    );
  }
}
export default ToDoList;