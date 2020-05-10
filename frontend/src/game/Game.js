import React          from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";

const Game = () => {
	return (
	  <GameContainer>
			<GenericPopover popover={HeaderPopover()}>
				<h1>This will be the <em>GAME</em> page eventually</h1>
			</GenericPopover>
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