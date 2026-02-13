import React from "react";

export default function CardEvento({ evento, onRemover }) {
  return (
    <article className="card">
      <div>
        <h3>{evento.titulo}</h3>
        <p className="muted">
          {evento.data} • {evento.local}
        </p>
        <h4>{evento.descricao}</h4>
      </div>

      <button className="btn danger" onClick={() => onRemover(evento.id)}>
        Remover
      </button>
    </article>
  );
}