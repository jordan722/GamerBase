import React, {Component} from 'react'
import Rawger, { games } from 'rawger'




class APItest extends Component{
    constructor(props){
        super(props);
        this.state = {
            result: ""
        }
    }

    async componentDidMount(){
        ///const Rawger = require('rawger')
        const {games} = await Rawger({});
        const result = await games.get('witcher').then( (obj) => obj.raw())
        this.setState({
            result: result
        })
    }

    render(){
        return(
            <div>
                {
                console.log(this.state.result)
                }
            </div>
        )
    }
}

export default APItest;