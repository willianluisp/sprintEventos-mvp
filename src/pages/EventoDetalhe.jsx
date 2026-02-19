import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventoDetalhe({ eventos }) {
  // useParams pega os parâmetros da URL (neste caso, o :id)
  const { id } = useParams();
  
  // useNavigate permite navegar programaticamente entre páginas
  const navigate = useNavigate();

  // Procura o evento no array pelo id
  // parseInt converte o id da URL (string) para número
  const evento = eventos.find((e) => e.id === parseInt(id));

  // Se não encontrar o evento (id inválido), mostra mensagem de erro
  if (!evento) {
    return (
      <section className="stack">
        <h2>Evento não encontrado</h2>
        {/* Botão que volta para a página de eventos */}
        <button className="btn" onClick={() => navigate("/evento")}>
          Voltar para Eventos
        </button>
      </section>
    );
  }

  // Se encontrou o evento, mostra os detalhes
  return (
    <section className="stack">
      {/* Botão para voltar à lista de eventos */}
      <button className="btn" onClick={() => navigate("/evento")}>
        ← Voltar
      </button>

      {/* Exibe o título do evento centralizado */}
      <h2 style={{ textAlign: "center" }}>{evento.titulo}</h2>

      {/* Container com os detalhes do evento */}
      <div className="stack" style={{ gap: "1.5rem", maxWidth: "600px", margin: "0 auto" }}>
        {/* Data do evento */}
        <div>
          <strong><span className="material-symbols-outlined">calendar_today</span> Data:</strong>
          <p>{evento.data}</p>
        </div>
        
        {/* Local do evento */}
        <div>
          <strong><span className="material-symbols-outlined">location_on</span> Local:</strong>
          <p>{evento.local}</p>
        </div>
        
        {/* Descrição do evento (com fallback se não houver descrição) */}
        <div>
          <strong><span className="material-symbols-outlined">book_2</span> Descrição:</strong>
          <p>{evento.descricao || "Sem descrição disponível."}</p>
        </div>
      </div>
    </section>
  );
}