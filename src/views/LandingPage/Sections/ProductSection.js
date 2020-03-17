import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InsertChart from "@material-ui/icons/InsertChart";
import TrackChanges from "@material-ui/icons/TrackChanges";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Produza com a gente!</h2>
          <h5 className={classes.description}>
            Projetamos sob a sua demanda. Acompanhe o ciclo de desenvolvimento, fale conosco, faça pagamentos ou de sua
            opnião através do nosso sistema web e para smartphones.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Startups"
              description="Crie um MVP enxuto e com métricas que irão fazer sua start up crescer. Desenvolva o necessário
              para diminuir custos sem sacrificar a qualidade."
              icon={TrendingUp}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Projetos Sob Demanda"
              description="Não importa o tamanho do seu projeto, nossa equipe ira lhe entregar a solução ideal.
              Diminua os custos com equipes e pessoal qualificado contratando especialistas. Nossa solução inclui todo o
              ciclo de desenvolvimento, da análise até a produção, do treinamento a manutenção."
              icon={InsertChart}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Estado da Arte"
              description="Trabalhamos com as melhores técnologias disponíveis. Adicionar apredizado de máquina,
              inteligência artificial, internet das coisas, ciência de dados ou lançar seu produto nunca foi tão simples.
              Fale conosco e agendaremos uma conversa, sem compromisso."
              icon={TrackChanges}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
