import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 1,
            meat: 2
        }
    }

    // state = {
    //     ingredients: [
    //         {name: 'salad', num: 2},
    //         {name: 'bacon', num: 2},
    //         {name: 'cheese', num: 2},
    //         {name: 'meat', num: 2},
    //     ]
    // }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;