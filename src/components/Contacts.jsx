/* eslint-disable no-unused-vars */
import React , {Component} from 'react';
import AddContacts from './AddContacts';
import SingleContact from './SingleContact';

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts : [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/contacts')
        .then(response => response.json())
        .then(data => this.setState({contacts: data}))
    }

    render(){
        return (
            <div>

                <div className="row">
                    <AddContacts />
                </div>
                    { this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item}/>
                    ))}
                
            </div>
        )
    }
}