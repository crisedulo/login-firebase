import React, { Component } from 'react';
import fire from '../Firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

class Registrarse extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        email: '',
        password: ''
      };
    }
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
          console.log(error)
          });
      }
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
          return(
            <div>{console.log(error)}</div>
          )
          })
      }
    render() {
        const {signInWithGoogle,signInWithFacebook} = this.props;
        return (
            <div className = "m-4">
                <form className ="bg-white shadow-xl mb-4 flex flex-wrap justify-center">
                <div className ="w-full md:w-1/3 bg-blue-600 p-6 text-white">
                  <p className ="mb-8 text-3xl flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                      className="inline-block fill-current h-8 w-8 mr-2"
                    >
                      <path
                        d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z"
                      />
                    </svg>
                    Login Now
                  </p>
                  <div className ="mb-4">
                    <input
                      className ="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      value={this.state.email} onChange ={(e) => this.setState({email: e.target.value})}
                      placeholder="Email"
                    />
                  </div>
                  <div className ="mb-6">
                    <input
                      className ="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Password"
                      value={this.state.password} onChange ={(e) => this.setState({password: e.target.value})}
                    />
                  </div>
                  <button
                    className ="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={this.login}
                  >Login</button>
                  <button
                    className ="mt-4 block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={this.signup}
                  >Sing Up</button>
                </div>
                <div className ="w-full md:w-2/3 p-6 flex flex-col justify-between">
                  <p
                    className ="text-gray-700 mb-8"
                  >Bienvenido al sistema de login.</p>
                  <a
                    className ="block w-full mb-8 text-sm text-center text-black "
                  >Ten acceso a la aplicacion mas facilmente</a>

                  <p className ="mb-4 text-center ">Usa tus redes sociales</p>
                  <hr className ="block w-full mb-4 border-0 border-t border-gray-300"/>

                  <div className ="flex flex-wrap justify-center">
                    <div className ="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                      <button
                        className ="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={signInWithFacebook}
                      >Login Con Facebook</button>
                    </div>
                    <div className ="w-full sm:w-1/2 sm:pl-2">
                      <button
                        className ="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={signInWithGoogle}
                      >Login Con Google</button>
                    </div>
                  </div>
                </div>
              </form>
              </div>                        
        )
    }
}
const firebaseAppAuth = fire.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Registrarse);