import {Link} from "react-router-dom"
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import fire from '../Firebase';

import React, { Component } from 'react'

class Navbar extends Component {
    
    render() {
        const {user,signOut} = this.props;
        return (
            <div>
                <div>
                <nav className="flex items-center justify-between flex-wrap bg-teal-900 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/" className="font-semibold text-xl tracking-tight">Colab</Link>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">               
                    <div>
                        {
                            user? <a onClick={signOut} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Out</a>
                            :<a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Welcome</a>
                        }
                    </div>
                    </div>
                </div>
                </nav>
            </div>  
            </div>
        )
    }
}
const firebaseAppAuth = fire.auth();
export default withFirebaseAuth({
    firebaseAppAuth,
  })(Navbar);