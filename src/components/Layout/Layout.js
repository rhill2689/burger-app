import  React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'; //Not working right TODO

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideBar, Backdrop</div>
        <i className={classes.Content}/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;