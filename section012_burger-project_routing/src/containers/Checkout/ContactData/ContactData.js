import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Max",
                address: {
                street: "TestStreet",
                zipCode: "343",
                country: "Canada"
                },
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        };

        axios
        .post(`/orders.json`, order)
        .then(response => {
            console.log(response);
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            this.setState({ loading: false });
        });
    }

    render() {

        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input type="text" name="street" placeholder="Street"/>
                <input type="text" name="postal" placeholder="Postal Code"/>
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;