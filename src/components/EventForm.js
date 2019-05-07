import React, {Component} from 'react';

class EventForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        date: '',
        description: ''
    }

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

      handleNameChange(event){
        this.setState({name: event.target.value})
      }

      handleDateChange(event){
        this.setState({date: event.target.value})
      }

      handleDescriptionChange(event){
        this.setState({description: event.target.value})
      }

      handleSubmit(event){
        event.preventDefault();
        const name = this.state.name;
        const date = this.state.date;
        const description = this.state.description;
        console.log(name, date, description);
        const newEvent = {name: name, date: date, description: description};
        this.props.handleEventSubmit(newEvent);
        this.setState({name: '', date: '', description: ''})
      }

  render() {

  return (
    <form onSubmit={this.handleSubmit}>
      <input
       type="text"
       placeholder="Name"
       value = {this.state.name}
       onChange={this.handleNameChange}
      />
      <input
       type="text"
       placeholder="Date"
       value = {this.state.date}
       onChange={this.handleDateChange}
      />
      <input
       type="text"
       placeholder="description"
       value = {this.state.description}
       onChange={this.handleDescriptionChange}
      />
      <input type="submit" value="Post Event"/>
    </form>
  )
  }
}

export default EventForm;
