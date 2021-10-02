import React, { Component } from 'react'

export default class MyClass extends Component {


    constructor()
    {
        super();
        console.log("Constructor  of Class gets Called")

        this.state={
            name:"Somthing"
        }
    }

     /// lifecycle method
    componentDidMount()
    {
        console.log("Class Compinent did mount gets callled")

    }

    componentDidUpdate(){

        ///
        console.log("Class Compinent did update gets callled")


    }

    something=()=>{
        this.setState({name:"HEllo"});

    }


    componentWillUnmount()
    {
        // end of the componnet
        console.log("Class Compinent did unmount gets callled")

    }

    // Mounting phase

    // Updation phase -->

    // Unmounting phase


    render() {

        console.log("Render of class MEthod gets called")

     
        return (
            <div>
                I am a class componnet

                <button onClick={this.something}>
                    Modify the state
            
            </button>
            </div>
        )
    }
}
