import  React,{ Component } from 'react'
import Car from './Cars';

export default class MyCars extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title} </h1>

                <Car color='red'>ford</Car>
                <Car >mercedes</Car>
                <Car />

            </div>
        )
    }
}
