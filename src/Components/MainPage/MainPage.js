import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  //NameForm

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setConfirmEmail] = useState("");
  const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeEmailConfirm = (event) => {
    setConfirmEmail(event.target.value);
  };

  const sendData = () => {
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos

    // - A pessoa estudante só pode se inscrever na Labenu se for maior de idade
    // (age >= 18)

    // - O input de nome precisa ter no mínimo 10 caracteres e no máximo 30.
    // (name.length >= 10 && name.length <= 30)

    // - Verifique se o e-mail está no formato correto: usuario@usuario.com
    // (email.includes(`${name}@${name}.com`)
    // (email.includes("@")&&(email.includes(".")
    // email.substring(email.length - 10) === "@gmail.com"

    // - Caso os dois inputs de email estejam com conteúdo iguais, o usuário pode seguir pra próxima etapa. (implemente o input controlado para a confirmação de email)
    // (email === emailConfirm)

    // - Todos os campos são obrigatórios.
    // (name !== "" && age !== "" && email !== "")

    if (
      age >= 18 &&
      name.length >= 10 &&
      name.length <= 30 &&
      email.includes("@") &&
      email.includes(".") &&
      email === emailConfirm &&
      name !== "" &&
      age !== "" &&
      email !== ""
    ) {
      setFormFlow(2);
    } else {
      alert(`O formulário não foi respondido corretamente`);
    }
  };

  //ConfirmationForm

  const [birthDate, setBirthDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [idRacial, setIdRacial] = useState("");

  const onChangeBirthDate = (event) => {
    setBirthDate(event.target.value);
  };

  const onChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const onChangeIdRacial = (event) => {
    setIdRacial(event.target.value);
  };

  const sendData2 = () => {
    if (
      birthDate !== "" &&
      telephone !== "" &&
      idRacial.valueOf !== "Escolher"
    ) {
      alert("Cadastro concluído com sucesso");
      setBirthDate("");
      setTelephone("");
    } else {
      alert(`O formulário não foi respondido corretamente`);
    }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          // insira aqui suas props
          name={name}
          age={age}
          email={email}
          emailConfirm={emailConfirm}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeEmailConfirm={onChangeEmailConfirm}
          sendData={sendData}
        />
      ) : (
        <ConfirmationForm
          birthDate={birthDate}
          telephone={telephone}
          idRacial={idRacial}
          onChangeBirthDate={onChangeBirthDate}
          onChangeTelephone={onChangeTelephone}
          onChangeIdRacial={onChangeIdRacial}
          sendData2={sendData2}
          setFormFlow={setFormFlow}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
