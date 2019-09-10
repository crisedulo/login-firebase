import React, { Component } from 'react'
import fire from "./Firebase"
import Navbar from "./componentes/Navbar"
import Bienvenido from "./componentes/Bienvenido"
import Registrarse from './componentes/Registrarse'
import {BrowserRouter, Route, Link} from "react-router-dom"
export default class App extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        this.authListener()
    }
    authListener(){
        
        fire.auth().onAuthStateChanged((user) =>
        {
            if (user)
            {
                this.setState({user})
                localStorage.setItem('user', user.uid)
            }
            else
            {
                this.setState({user})
                localStorage.removeItem('user')
            }
        }
        )}
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
        {this.state.user? (<Bienvenido user = {this.state.user}/>):(<Registrarse/>)}
            </BrowserRouter>
        )
    }
}
