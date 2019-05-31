import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients)].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    });

    // const transformedIngredients = () => {
    //     console.log(props);
    //     props.ingredients.map(ingredient => {
    //         return  <BurgerIngredient type={ingredient.name}/>
    //     })
    // }

    return(
        <div className="Burger">
            <i className={classes.Burger}></i>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;