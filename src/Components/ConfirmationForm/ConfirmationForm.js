import React from "react";
import { Form, Input } from "../MainPage/styles";

const ConfirmationForm = ({
  birthDate,
  telephone,
  idRacial,
  onChangeBirthDate,
  onChangeTelephone,
  onChangeIdRacial,
  sendData2,
  setFormFlow,
}) => {
  return (
    <Form>
      <label>
        Data de Nascimento:
        <Input value={birthDate} onChange={onChangeBirthDate} type="date" />
      </label>
      <label>
        Telefone:
        <Input
          placeholder="(xx) xxxx-xxxx"
          value={telephone}
          onChange={onChangeTelephone}
        />
      </label>
      <label>
        Autodeclaração Racial:
        <select>
          value={idRacial}
          onChange={onChangeIdRacial}
          <option value="Escolher" selected disabled>
            -Escolha uma opção-
          </option>
          <option value="Negro">Negro</option>
          <option value="Branco">Branco</option>
          <option value="Pardo">Pardo</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Indígena">Indígena</option>
          <option value="Não informar">Prefiro não informar</option>
        </select>
      </label>
      <button onClick={sendData2}>Enviar dados</button>
      <button onClick={() => setFormFlow(1)}>Voltar</button>
    </Form>
  );
};

export default ConfirmationForm;
