import React from 'react'
import './CFooter.css'

//function Cfooter(){
//    let date = new Date();
//    return (
//      <div>
//          <h5>PPFront-end, przykładowy serwis React. Dzisiaj mamy: {date.toDateString()}</h5>;
//      </div>
//}

//export default CFooter

export const CFooter = (props) =>{
   let date = new Date();
    return(
        <div>
            <h5>               
                PPFront-end, przykładowy serwis React. Dzisiaj mamy: {date.toDateString()}
                <br/>
                Stan pogody: {props.weather}, temperatura: {props.temp}.
                <br/>
                {props.children}
            </h5>
        </div>
    );
}


//export const CFooter = () =>{
//   let date = new Date();
//    return React.createElement('div', {className: 'footerDivClass'},
//        React.createElement("h5", {id: 'footerText', className: 'footerTextClass'},
//            'PPFront-end, przykładowy serwis React. Dzisiaj mamy:' + date.toDateString()));    
//}

