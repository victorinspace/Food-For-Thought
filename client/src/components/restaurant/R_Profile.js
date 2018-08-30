import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import {changeUserInfo} from '../../actions/loginActions'
import { Button, Form, Modal } from 'semantic-ui-react'

class R_Profile extends Component {
	state = {
		show: false,
		email: api.getProfile().email,
		address: api.getProfile().address,
		phone: api.getProfile().phone,
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		changeUserInfo({
			id: api.getProfile().id,
			email: this.state.email,
			address: this.state.address,
			phone: this.state.phone
		})
	}

	render() {
		return (
			<div>
				<div>
					<div>{api.getProfile().email}</div>
					<div>{api.getProfile().address}</div>
					<div>{api.getProfile().phone}</div>
				</div>
				<Modal trigger={<Button>
					<div>Edit Profile</div>
					<i className="fa fa-edit"/>
				</Button>}>
			    <Modal.Header>Edit Profile</Modal.Header>
			      <Modal.Content>
			        <Form className="loginForm" onSubmit={this.handleSubmit}>
			 					<Form.Field className="loginInputField">
			 						<i className="fa fa-user" />
				 					<input className="loginInputBox" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
				 				</Form.Field>
			 					<Form.Field className="loginInputField">
			 						<i className="fa fa-home" />
			 						<input className="loginInputBox" type="text" name="address" onChange={this.handleChange} value={this.state.address} placeholder="Address" />
			 					</Form.Field>
			 					<Form.Field className="loginInputField">
			 						<i className="fa fa-mobile" />
			 						<input className="loginInputBox" type="tel" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone #" />
			 					</Form.Field>
			 						<Button className="loginSubmit" type="submit">Change Info</Button>
			 				</Form>
			      </Modal.Content>
			  </Modal>
			</div>
		)
	}
}

export default withAuth(R_Profile)