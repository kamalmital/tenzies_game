import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    // var loc=`../images/${props.value}.png`;
    // console.log(loc);
    return ( 
        <div 
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            <img className="die-face" src={require(`../images/${props.value}.png`)} alt={props.value} />
        </div>
    )
}