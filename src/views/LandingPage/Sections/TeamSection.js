import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Especialidades</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Pesquisa e Desenvolvimento
                <br />
                <small className={classes.smallTitle}></small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desenvolva ou melhore o seu produto de software e/ou hardware. Além de profissionais com vasta
                  experiência em pesquisa e desenvolvimento, possuimos parceria com laboratórios das melhores
                  universidades do pais.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Internet da Coisas e Inteligência Artificial
                <br />
                <small className={classes.smallTitle}></small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Entre na era 4.0. Desenvolvemos sistemas de monitoramento para prédios, shoppings, aeroportos,
                  industrias, comércios e residências. Tenha o controle da tempetarura, umidade, controle de acesso,
                  quantidade de pessoas, controle de estoque e muito mais na palma da sua mão utilizando nosso sistema
                  para smartphones ou internet. Utilize esses dados e realize previsões utilizando inteligência articial.
                  As possibilidades são virtualmente ilimitadas, entre em contato e saiba mais.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Desenvolvimento Web e Mobile
                <br />
                <small className={classes.smallTitle}></small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Desenvolvemos com base no que você precisa. Tire seu aplicativo, site ou projeto do papel.
                  Utilizamos servidores na nuvem que garantem a disponibilidade e a segurança.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
