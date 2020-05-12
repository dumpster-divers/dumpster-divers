import React from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";
import IncorrectBin from "./IncorrectBin";


const Game = () => {
	return (
	  <GameContainer>
		<div className="yellow-part" id="yellow-part">
			<GenericPopover popover={HeaderPopover()}>
				<h1>This will be the <em>GAME</em> page eventually</h1>
			</GenericPopover>
			<div>
			  <IncorrectBin/>
			</div>
		</div>
		</GameContainer>
	);
}

const HeaderPopover = () => {
	const useStyles = makeStyles((theme) => ({
		popover: {
			margin: "20px"
		}
	}));

	const classes = useStyles();

	 return (
		<div className={classes.popover}>
			<h1>Hey this is the popover</h1>
			<p>And this is the paragraph below!</p>
		</div>
	);
}

export default Game;
