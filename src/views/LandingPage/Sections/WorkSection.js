import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios'
import {minLength, emailValidate, required, phoneValidate} from './Validators/Validators'

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";


const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const WorkSection = (props) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: '',
  });
  const changeHandler = (event, campo) => {
    const novoForm = {
      ...form,
    };
    novoForm[campo] = event.target.value;
    setForm(novoForm);
  };

  const submitHandler = () => {
    axios.post('https://zeta-2f171.firebaseio.com/contato.json', form)
      .then(response => {
        setModal(true)
      })
      .catch(err => {
        alert('Um erro aconteceu. Tente novamente.')
      })
  };

  return (
    <div className={classes.section}>
      {
        //MODAL
      }
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setModal(false)
          window.location.reload();
        }}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={
              () => {
                setModal(false)
                window.location.reload();
              }
            }
          >
            <Close className={classes.modalClose}/>
          </IconButton>
          <h4 className={classes.modalTitle} style={{color:'green'}}>Mensagem enviada com sucesso! <br />
          Em breve iremos lhe retornar!</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
        </DialogActions>
      </Dialog>

      < GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Entre em Contato</h2>
          <h4 className={classes.description}>
            Nos envie uma mensagem com sua dúvida, requisição ou pedido de orçamento sem compromisso. Iremos responder
            o mais breve possível com uma solução que ira melhor atende-lo.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Nome Completo"
                  id="name"
                  error={minLength(form.nome)}
                  changed={(event, campo) => changeHandler(event, 'nome')}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Telefone"
                  id="telefone"
                  error={phoneValidate(form.telefone)}
                  changed={(event, campo) => changeHandler(event, 'telefone')}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="E-mail para contato"
                  id="email"
                  error={emailValidate(form.email)}
                  changed={(event, campo) => changeHandler(event, 'email')}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Empresa"
                  id="empresa"
                  error={minLength(form.empresa)}
                  changed={(event, campo) => changeHandler(event, 'empresa')}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Mensagem"
                id="message"
                changed={(event, campo) => changeHandler(event, 'mensagem')}
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary" onClick={submitHandler}
                          disabled={required(form.nome) || required(form.email)
                          || required(form.mensagem)}>Enviar</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default WorkSection;
