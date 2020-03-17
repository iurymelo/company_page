/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Comment } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/sobre"
          color="transparent"
          className={classes.navLink}
        >
          <Comment className={classes.icons} /> Sobre Nós
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Serviços"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
             Desenvolvimento Web e Mobile
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Desenvolvimento Hardware/Software
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Desenvolvimento de Protótipos
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Engenharia de Machine Learning
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Consultoria
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Pesquisa e Desenvolvimento
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
