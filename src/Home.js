import React, { useContext, createContext } from 'react';
import { UserContext } from './index.js';
const Home = () => {

    const user = useContext(UserContext)

    return (
        <div>
            <h1> Welcome to our official site {user}</h1>

        </div>
    )
}
export default React.memo(Home);
