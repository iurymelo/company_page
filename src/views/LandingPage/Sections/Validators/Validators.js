export const minLength = value => {
  if (value) {
    if (value.length < 4) {
      return 'Mínimo 4 caracteres!';
    }
    if (value.length > 80) {
      return 'Nome muito grande!'
    }
    return undefined;
  }
}

export const phoneValidate = value => {
  if (value) {
    const phone = value;
    if (!phone.match(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/)) {
      return 'Telefone Inválido'
    } else {
      return undefined;
    }
  }
};

export const emailValidate = value => {
  if (value) {
    const email = value;
    email.toLowerCase();
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return 'Email inválido!'
    } else {
      return undefined;
    }
  }
};

export const required = value => {
  if (!value || value.trim() === '') {
    return 'Campo Obrigatório';
  }
  return undefined;
};
