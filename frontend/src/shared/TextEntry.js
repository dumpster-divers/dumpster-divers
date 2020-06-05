import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const TextEntry = ({
  value,
  onChange,
  placeholderText,
  isDisabled,
  onSubmit,
  maxLength,
}) => {
  const useStyles = makeStyles(() =>
    createStyles({
      textEntry: {
        minWidth: "200px",
        maxWidth: "400px",
        width: "35%",
        backgroundColor: "white",
        height: "50px",
        borderRadius: "50px",
        padding: "30px",
        outline: 0,
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: "Bold",
        borderWidth: "0px",
        placeholder: "nice",
      },
    })
  );

  let classes = useStyles();

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        className={classes.textEntry}
        disabled={isDisabled}
        maxLength={maxLength}
      />
    </form>
  );
};

export default TextEntry;
