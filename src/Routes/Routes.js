import React from "react";
import {Switch, Route} from 'react-router-dom' 

function Routes (){
   
    
    
    return(
        <Switch>
            <Route exact path='/cart'>
            <div>Hello1</div>
            </Route>
            <Route exact path='/'>
            <div>Hello2</div>
            </Route>
            <Route exact path='/favourites'>
                <div>Hello3</div>
            </Route>

        </Switch>
    )
}
export default Routes;