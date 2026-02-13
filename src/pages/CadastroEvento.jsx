import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroEvento({ onAdd }) {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  //questao 1
  const [descricao, setDescricao] = useState("");

  function limparFormulario() {
    setTitulo("");
    setData("");
    setLocal("");
    setDescricao("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !data || !local || !descricao) {
      alert("Preencha todos os campos.");
      return;
    }

    onAdd({ titulo, data, local, descricao });
    navigate("/evento");
  }

  return (
    <section className="stack">
      <div className="centralizar">
      <h2 style={{textAlign: "center"}}>Cadastrar Evento</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Título
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ex: Demo do sistema" />
        </label>

        <label>
          Data
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </label>

        <label>
          Local
          <input value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Ex: Laboratório" />
        </label>

        <label>
          Descrição
          <input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Ex: Evento para apresentação do MVP" />
        </label>

        <div className="row">
          <button className="btn" type="submit">Salvar</button>
          <button className="btn ghost" type="button" onClick={() => navigate("/evento")}>
            Cancelar
          </button>
          <button className="btn danger" type="button" onClick={limparFormulario}>
            Limpar Formulário
          </button>
        </div>
      </form>

      <p className="muted">
        Macete: input controlado = valor vem do state e muda no onChange.
      </p>
      </div>
    </section>
  );
}