import { useState } from "react";

function App() {
  let [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //Pega o nome do campo e o valor e adiciona ao setData.
    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  //Validação dos campos
  //verifica se os campos foram preenchidos para ser mostrado na barra de status
  //Cada campo preenchido é somado o valor de 25 para preencher a barra de status
  const calculateProgress = () => {
    let valueProgress = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const explodeStrig = data.fullName.split(" ");
      if (explodeStrig[1]) {
        valueProgress += amountToAdd;
      }
    }
    //validação do campo email
    //verifica se o email está de de acordo com a regex
    if (data.email) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (pattern.test(data.email)) {
        valueProgress += amountToAdd;
      }
    }
    if (data.maritalStatus) {
      valueProgress += amountToAdd;
    }
    if (data.genre) {
      valueProgress += amountToAdd;
    }
    return valueProgress;
  };
  calculateProgress();

  //Faz o envio do formulário, e em seguida limpas os campos preenchidos
  const handleClick = () => {
    alert('Formulário enviado com sucesso"');

    setData({
      fullName: "",
      email: "",
      maritalStatus: "",
      genre: "",
    });
  };
  return (
    <div className="App">
      <h1>Formulário</h1>
      <main>
        <div className="bar-container">
          <div
            className="bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        {/*------------------------Nome---------------------- */}

        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/*-------------------------Email--------------------- */}

        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>

        {/*----------------------Estado cívil------------------------ */}

        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>

        {/*--------------------------Gênero--------------------------- */}

        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="genre"
                value="masculino"
                onChange={handleChange}
                checked={data.genre === "masculino"}
              />{" "}
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="genre"
                value="feminino"
                onChange={handleChange}
                checked={data.genre === "feminino"}
              />{" "}
              Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== 100}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
