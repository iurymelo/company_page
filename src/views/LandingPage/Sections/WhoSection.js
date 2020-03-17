import React from "react";
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Muted from "components/Typography/Muted.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";


const useStyles = makeStyles(styles);

export default function WhoSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{paddingTop: '50px'}}>
      <GridContainer className={classes.textCenter}>
        <GridItem xs={12} sm={12} md={12}>
          <h2 style={{color: 'black'}}>Quem Somos?</h2>
          <Muted><h4>
            Somos um grupo de mestres e engenheiros de computação que percebeu que a falta de mão de obra qualificada
            está afetando o desenvolvimento de grandes projetos no Brasil. Por essa razão nos juntamos para formar a
            Zeta Sistemas. Queremos oferecer nossa expertise para que empresas possam entrar no mundo 4.0 sem ter que
            contratar grandes equipes. Trabalhe com um time reduzido ou deixe tudo nas nossas mãos. Nossos profissionais
            irão tirar do papel aquele tão sonhado projeto.
          </h4></Muted>
        </GridItem>
      </GridContainer>
      <br/>
      <br/>
    </div>

  );
}
