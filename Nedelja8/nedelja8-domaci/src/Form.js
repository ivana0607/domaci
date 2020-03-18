import React from 'react';
import './form.css';

class Form extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            number: "",
            contacts: [
                { name: "Marko", number: "+3818378532" }
            ],
            filterName: "",
            nameExist: false,
            fields: false,
            startPlus: false
        }

        this.handleInputChangeName = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        this.handleInputChangeNumber = (event) => {
            this.setState({
                number: event.target.value
            })
        }
        this.handleInputFilter = (event) => {
            this.setState({
                filterName: event.target.value
            })
        }

        this.addContact = () => {

            const newContact = {
                name: this.state.name,
                number: this.state.number
            }

            if (this.state.name === "" || this.state.number === "") {
                this.setState(
                    { fields: !this.state.fields }
                )

                // alert('Both fields are required.');
                return;
            }
            if (!this.state.number.startsWith("+")) {
                this.setState(
                    { startPlus: !this.state.startPlus }
                )
                // alert('Number starts with +')
                return
            }
            if (this.state.contacts.find(el => el.name === this.state.name)) {
                this.setState(
                    { nameExist: !this.state.nameExist }
                )
                this.changeName = () => {
                    this.setState({
                        name: this.name,
                        number: this.number
                    })
                }
                return
            }



            this.setState((prevState) => ({
                contacts: prevState.contacts.concat(newContact),
                name: "",
                number: "",

            }))

        }

        this.filterListName = (e) => {
            e.preventDefault();

            const filteredList = this.state.list.filter(con => { return con.name.toLowerCase().includes(this.state.filterName.toLocaleLowerCase()) })

            this.setState({
                list: filteredList
            })
        }
    }

    render() {
        let form =
            (
                <div className="container">
                    <form className="form">
                        <div>
                            <input type="text" className="form-input" onChange={this.handleInputChangeName} value={this.state.name} placeholder=" Name..." />
                        </div>
                        <div>
                            <input type="text" className="form-input" onChange={this.handleInputChangeNumber} value={this.state.number} placeholder=" Number..." />
                        </div>
                        <button type="button" className="btn" onClick={this.addContact}>Add</button>
                        <div>
                            <input type="text" className="form-input" onChange={this.handleInputFilter} value={this.state.filterName} placeholder=" Filter" />
                        </div>
                    </form>

                </div>
            )

        let nameExists = null;
        if (this.state.nameExist) {
            nameExists = (
                <div className="filed">
                    <h4>Contact {this.state.name} already exists. Do you want to change number?</h4>
                </div>
            )
        }
        let emptyField = null;
        if (this.state.fields) {
            emptyField = (
                <div className="filed">
                    <h4>Both fields are required.</h4>
                </div>
            )
        }
        let mustStartPlus = null;
        if (this.state.startPlus) {
            mustStartPlus = (
                <div className="filed">
                    <h4>Number  pattern +ххх ххххххххх</h4>
                </div>
            )
        }


        return (

            <div className="form">
                <h2 className="header">PhoneBook</h2>

                {form}
                {emptyField}
                {mustStartPlus}
                {nameExists}

                {this.state.contacts.map(contact =>
                    <div className="contacts">
                        <h4>{contact.name}</h4>
                        <p>{contact.number}</p>
                        <hr />
                    </div>
                )}
            </div>

        );
    }
}

export default Form;