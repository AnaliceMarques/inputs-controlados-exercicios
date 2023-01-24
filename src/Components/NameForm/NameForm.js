import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = ({
  name,
  age,
  email,
  emailConfirm,
  onChangeName,
  onChangeAge,
  onChangeEmail,
  onChangeEmailConfirm,
  sendData,
}) => {
  return (
    <Form>
      <label>
        Nome:
        <Input placeholder="Nome" value={name} onChange={onChangeName} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" value={age} onChange={onChangeAge} />
      </label>
      <label>
        E-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={email}
          onChange={onChangeEmail}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={emailConfirm}
          onChange={onChangeEmailConfirm}
        />
      </label>
      <button onClick={sendData}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;
