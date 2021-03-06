import React, { Component } from 'react';
import LoginForm from './LoginForm'
import ChatContainer from './chat/ChatContainer'
import { USER_CONNECTED, LOGOUT } from '../Constants'

var serverURI = "http://10.1.21.216:3231/"
var io = require('socket.io-client')

export default class Layout extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  		socket:null,
	  		user:null,
				college:''
		};
	  this.setUser = this.setUser.bind(this)
	  this.logout = this.logout.bind(this)
	  this.reconnectUserInfo = this.reconnectUserInfo.bind(this)
	}

	componentWillMount() {

		var socket = io(serverURI)
		this.setState({ socket })
		this.initSocket(socket)
	}

	/*
	*	Initializes socket event callbacks
	*/
	initSocket(socket){
		socket.on('connect', (value)=>{
			console.log("Connected");
		})
		socket.on('disconnect', this.reconnectUserInfo)
	}

	/*
	*	Connectes user info back to the server.
	*	If the user name is already logged in.
	*/
	reconnectUserInfo(){
		const { socket, user } = this.state

		if(this.state.user != null){

			socket.emit(USER_CONNECTED, user)
		}

	}

	/*
	*	Sets the current user logged in
	*	@param user an object {id:number, name:string}
	*/
	setUser(user){
		const { socket } = this.state
		this.setState({user});
		socket.emit(USER_CONNECTED, user)
	}

	/*
	*	Sets the user to null.
	*/
	logout(){
		const { socket } = this.state
		socket.emit(LOGOUT)
		this.setState({user:null})
	}

	handleSelectChange = (e) => {
		this.setState({
			college:e.target.value
		})
	}

	render() {
		const { user, socket } = this.state
		console.log(this.state.college)
		return (
			<div className="container">

				{
					!user ?
					<div className="container">
						<LoginForm socket={socket} setUser={this.setUser} verified={ this.setUser }/>
						<form className="login-form" style={{marginTop:'650px',align:'left',marginLeft:'-450px',color:'black'}}>
						Select College:
						<select onChange={this.handleSelectChange}>
								<option value=""></option>
								<option value="CET">CET</option>
								<option value="VSSUT">VSSUT</option>
								<option value="IGIET">IGIET</option>
						</select>
						</form>
					</div>
					:
					<ChatContainer socket={socket} college={this.state.college} logout={this.logout} user={user}/>
				}

			</div>
		);
	}
}
