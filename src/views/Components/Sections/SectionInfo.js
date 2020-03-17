import React from "react";
// plugin that creates slider

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";



const useStyles = makeStyles(styles);

export default function SectionBasics(props) {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{paddingTop: '50px'}}>
      <GridContainer className={classes.textCenter}>
        <GridItem xs={12} sm={12} md={12}>
          <h2>Desenvolvimento Inteligente</h2>
          <h4>
            Somos uma empresa que preza pela qualidade e satisfação do cliente. Desenvolvemos projetos de Engenharia da
            Informação para empresas, industrias e pessoas físicas. Aplicações web, mobile, inteligência artificial ou
            internet das coisas. Não importa sua demanda, fale com a gente e iremos lhe entregar a solução ideal.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Button
            color="primary"
            size="lg"
            href="/sobre"
          >
            Saiba Mais
          </Button>
        </GridItem>
      </GridContainer>
    <br />
    <br />
    <br />
    </div>

  );
}
