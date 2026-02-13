import React from "react";

export default function Home({ total, primeiroEvento }) {
  return (
    <section className="stack">
      <div className="centralizar">
      <h2 style={{textAlign: "center"}}>Bem-vindos </h2>
      <p>Hoje vamos montar um mini sistema real usando componentes, rotas e estado.</p>
      <div className="box">
        Total de eventos cadastrados: <strong>{total}</strong>
      </div>
      <div className="box">
        <p id="1">Próximo evento: <strong>{primeiroEvento}</strong></p>
      </div>
      </div>
    </section>
  );
}
