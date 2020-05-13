import React from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";
import IncorrectBinModal from "./IncorrectBinModal";

//dummy trash object for now
const trashApple = {
	id: 1,
	info: "this is why you're wrong blah blah blah blah",
}

const Game = () => {
	return (
	  <GameContainer>
			<GenericPopover popover={HeaderPopover()}>
				<h1>This will be the <em>GAME</em> page eventually</h1>
			</GenericPopover>
			<IncorrectBinModal trashInfo={trashApple.info}/>
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
