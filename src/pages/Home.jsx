import React from "react";

export default function Home({ total, primeiroEvento }) {
  return (
    <section className="stack">
      <div className="centralizar">
      <h2 style={{textAlign: "center"}}>Bem-vindos </h2>
      <p>Hoje vamos montar um mini sistema real usando componentes, rotas e estado.</p>
      <div className="box">
        Total de eventos cadastrados: <strong>{total}</strong> {/*caixinha que mostra o total de eventos cadastrados, usando a prop total passada do App.jsx*/}
      </div>
      <div className="box">
        <p id="1">Próximo evento: <strong>{primeiroEvento}</strong></p> {/*caixinha que mostra o título do próximo evento, usando a prop primeiroEvento passada do App.jsx*/}
      </div>
      </div>
    </section>
  );
}
