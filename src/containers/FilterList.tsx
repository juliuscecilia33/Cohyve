import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem } from "@mui/material";
import { withStyles } from "@material-ui/core";

interface ListProps {
  options?: Array<string>;
  placeholder?: string;
  setState?: React.Dispatch<React.SetStateAction<string[]>>;
}

export function FilterListContainer({
  setState,
  options,
  placeholder,
}: ListProps) {
  const useStyles = makeStyles({
    option: {
      "&:hover": {
        backgroundColor: "rgba(175, 213, 170, 0.24) !important",
        transition: "0.3s",
        fontWeight: 600,
      },
      "&.Mui-selected": {
        backgroundColor: "red",
      },
      fontFamily: "Work Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: "#153243",
    },
  });

  const StyledListItem = withStyles({
    root: {
      backgroundColor: "blue",
      "&.Mui-selected": {
        backgroundColor: "red",
      },
    },
  })(ListItem);

  const styles = useStyles();
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags"
      options={options}
      disableCloseOnSelect
      classes={{
        option: styles.option,
      }}
      getOptionLabel={(option: any) => option}
      renderOption={(props: any, option: any, { selected }: any) => (
        <ListItem {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            sx={{
              color: "#AFD5AA",
              "&.Mui-checked": {
                color: "#AFD5AA",
              },
            }}
            checked={selected}
          />
          {option}
        </ListItem>
      )}
      style={{ width: "100%" }}
      onChange={(event, value) => setState(value)}
      renderInput={(params: any) => (
        <TextField
          {...params}
          id="Text_Field_Input"
          placeholder={placeholder}
        />
      )}
    />
  );
}
