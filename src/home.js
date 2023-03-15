import React from "react";
import Login from './login';
import Options from './options';
import Announcment from './announcment';
import Feed from "./feed";
import Mobileapp from './mobileapp';
import Help from './help';
function Home () {
    return(
        <div className="home">
            <Login/>
   <Options/>
   <Announcment />
   <Feed />
   <Mobileapp/>
   <Help/>
        </div>
    )
}
export default Home;