import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import {Launch, Mood, School, StayCurrentPortrait, Wifi} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function SectionProcesso() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Conheça nossas áreas de atuação</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>
                <small></small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Web e Mobile",
                    tabIcon: StayCurrentPortrait,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Trabalhamos com desenvolvimento web e mobile utilizando servidores Google e AWS que garantem a
                        segurança e disponibilidade dos dados. Utilizamos tecnologias de ponta já consolidadas no mercado,
                        acelerando o desenvolvimento mantendo uma qualidade impecável. Entre as ferramentas utilizadas
                        estão React, NodeJS, Bancos de Dados SQL e NoSQL, Next.js e Firebase. Faça um orçamento hoje mesmo.
                      </p>
                    )
                  },
                  {
                    tabName: "IoT",
                    tabIcon: Wifi,
                    tabContent: (
                      <p className={classes.textCenter}>
                        O futuro é conectado. Veículos, prédios, processos industriais, agronegócio, não importa. Tudo
                        está gerando dados que são essenciais nas tomadas de decisão. Pode ser o consumo de uma máquina,
                        a temperatura de uma sala, o controle de estoque ou a localização e temperatura do gado. Essas
                        métricas podem ser lidas em qualquer lugar do mundo na palma da sua mão graças a Internet das Coisas
                        (IoT na sigla inglesa). Fale conosco e iremos lhe mostrar como essa tecnologia pode reduzir custos,
                        melhorar a segurança ou até mesmo aumentar o lucro de seu negócio. Entre na era 4.0.
                      </p>
                    )
                  },
                  {
                    tabName: "Inteligência Artificial",
                    tabIcon: Mood,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Seja um veículo autônomo, um controle de processo ou uma previsão. A inteligência artificial
                        age de forma muito mais rápida e eficaz que um ser humano, sem cansar e sem fadiga. Integrada
                        com os dados gerados pela sua empresa ela é muito eficiente na ajuda de tomada de decisões
                        estratégicas. Trabalhamos com visão computacional, detecção de padrões, sistemas de controle,
                        detecção de objetos e predições. Nossos algortimos podem ajudar a detectar padrões de consumo ou
                        até mesmo condições médicas. Tenha relatórios e gráficos em um centro de controle web que pode
                        ser acessado de qualquer lugar, sem nenhuma instalação. <a href={'/sobre'}>Entre em contato </a>
                        e saiba mais.
                      </p>
                    )
                  },
                  {
                    tabName: "MVP",
                    tabIcon: Launch,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Sabemos que abrir uma startup não é fácil. É muito trabalho e o processo de desenvolvimento deve
                        ser mais rápido e enxuto. Eficiência é a chave.  Sabemos disso e por isso criamos um modelo de
                        desenvolvimento pensando especialmente nas startups. Iremos lhe auxiliar e entregar somente o
                        necessário. O desenvolvimento é mais rápido e o preço mais conta, tudo para seu projeto sair do
                        papel e crescer. <a href={'/sobre'}>Entre em contato </a>e nossa equipe irá lhe auxiliar a criar
                        um MVP de verdade.

                      </p>
                    )
                  },
                  {
                    tabName: "P&D",
                    tabIcon: School,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Terceirize sua equipe de Pesquisa e Desenvolvimento ou parte dela. Possuimos mais de 5 anos de experiência com projetos
                        de pesquisa além de parcerias com laboratórios das melhores universidades do país. Trabalhamos
                        nas áreas de: hardware, programação embarcada, inteligência artificial, redes, sensores e
                        computação aplicada.
                      </p>
                    )
                  },
                ]}
              />
            </GridItem>

          </GridContainer>
        </div>
      </div>
    </div>
  );
}
