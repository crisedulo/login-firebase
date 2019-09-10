import React, { Component } from 'react'

export default class Bienvenido extends Component {
    
    render() {
        return (
            <div>
              { this.props.user?
                <div className = "pl-8 pr-8 w-full content-center sm:text-center md:text-right lg:text-justify xl:text-center">
                <div className="max-w-sm ml-auto mr-auto rounded overflow-hidden shadow-lg">
                <img className="w-full" src={this.props.user.photoURL} alt={""} />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{this.props.user.displayName}</div>
                <p className="text-gray-700 text-base">	
                    {this.props.user.email}<br></br>
                </p>
                </div>
                </div>
                </div>
                : <p></p>
              }
            </div>
        )
    }
}
