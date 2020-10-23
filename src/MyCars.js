import  React,{ Component } from 'react'
import Car from './Cars';

export default class MyCars extends Component {
    noCopy = () => {
        alert("merci de ne pas copier le text");
    }
/*     addStyle = (e) => {
        let target = e.target.classList;
        if (target.contains("styled")) {
            target.remove("styled");
        } else {
            target.add("styled");
        }
    } */

    render() {
        const { title } = this.props;
        return (
            <div>
                <h1>{title}</h1>

                <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias saepe velit nesciunt voluptas iusto officiis ratione. Veniam facere, blanditiis non quidem maiores mollitia vitae autem vel culpa odit? Maiores?</p>
                <Car color='red'>ford</Car>
                <Car >mercedes</Car>
                <Car />

            </div>
        )
    }
}
