import React, { useState } from "react";
import CardEvento from "../components/CardEvento";

export default function Evento({ eventos, onRemover }) {
  // Estado para armazenar o texto de busca por título
  const [busca, setBusca] = useState("");
  // Estado para armazenar o texto de busca por local
  const [filtroLocal, setFiltroLocal] = useState("");

  // Função para remover todos os eventos
  function removerEventos() {
    for (let i = 0; i < eventos.length; i++) {
      onRemover(eventos[i].id);
    }
  }

  // Filtra eventos que correspondem ao título E ao local digitados
  const eventosFiltrados = eventos.filter((evento) => {
    // Verifica se o título contém o texto buscado
    const correspondeTitulo = evento.titulo
      .toLowerCase()
      .includes(busca.toLowerCase());
    // Verifica se o local contém o texto buscado
    const correspondeLocal = evento.local
      .toLowerCase()
      .includes(filtroLocal.toLowerCase());
    
    // Retorna true apenas se ambos os filtros corresponderem
    return correspondeTitulo && correspondeLocal;
  });

  return (
    <section className="stack">
      <h2 style={{ textAlign: "center" }}>Eventos</h2>

      {/* Container dos inputs de busca lado a lado */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {/* Input para buscar por título */}
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            flex: 1,
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
        {/* Input para buscar por local */}
        <input
          type="text"
          placeholder="Buscar por local..."
          value={filtroLocal}
          onChange={(e) => setFiltroLocal(e.target.value)}
          style={{
            flex: 1,
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Botão para remover todos os eventos */}
      <button className="btn danger" id="btnD" onClick={removerEventos}>
        Remover Eventos
      </button>

      {/* Renderiza mensagem ou lista de eventos filtrados */}
      {eventosFiltrados.length === 0 ? (
        // Mensagem quando não há eventos (diferencia se está filtrando ou não)
        <p className="muted">
          {busca || filtroLocal
            ? "Nenhum evento encontrado com esses filtros."
            : 'Nenhum evento cadastrado. Vá em "Cadastrar".'}
        </p>
      ) : (
        // Grid com os cards dos eventos filtrados
        <div className="grid">
          {eventosFiltrados.map((e) => (
            <CardEvento key={e.id} evento={e} onRemover={onRemover} />
          ))}
        </div>
      )}
    </section>
  );
}