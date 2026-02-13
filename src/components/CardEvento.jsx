import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CardEvento({ evento, onRemover }) {
  // Hook para navegar programaticamente
  const navigate = useNavigate();

  // Função para navegar para a página de cadastro com os dados do evento
  function editarEvento() {
    // Navega para /cadastrar passando os dados do evento via state
    navigate("/cadastrar", { state: { eventoParaEditar: evento } });
  }

  return (
    <article className="card">
      {/* Informações do evento */}
      <div>
        {/* Container do título com badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          {/* Título do evento */}
          <h3 style={{ margin: 0 }}>{evento.titulo}</h3>
          
          {/* Badge de status - sempre aparece */}
          <span 
            style={{
              fontSize: "0.75rem",
              backgroundColor: evento.status === "aberto" ? "#28a745" : "#dc3545",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold"
            }}
          >
            {evento.status === "aberto" ? "✓ Aberto" : "✕ Lotado"}
          </span>
          
          {/* Badge "Editado" - só aparece se o evento foi editado */}
          {evento.editado && (
            <span 
              style={{
                fontSize: "0.75rem",
                backgroundColor: "#ffc107",
                color: "#000",
                padding: "0.2rem 0.5rem",
                borderRadius: "4px",
                fontWeight: "bold"
              }}
            >
              ✏️ Editado
            </span>
          )}
        </div>
        
        {/* Data e local na mesma linha, com estilo muted */}
        <p className="muted">
          {evento.data} • {evento.local}
        </p>
        
        {/* Descrição do evento */}
        <h4>{evento.descricao}</h4>
      </div>

      {/* Container para os botões lado a lado */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {/* Link que leva para a página de detalhe do evento */}
        <Link 
          to={`/evento/${evento.id}`} 
          className="btn"
          style={{ textDecoration: "none" }}
        >
          Ver Detalhes
        </Link>
        
        {/* Botão para editar o evento - com fundo laranja */}
        <button 
          className="btn" 
          onClick={editarEvento}
          style={{
            backgroundColor: "#ffc107",
            color: "#000",
            border: "none"
          }}
        >
          Editar
        </button>
        
        {/* Botão para remover o evento */}
        <button className="btn danger" onClick={() => onRemover(evento.id)}>
          Remover
        </button>
      </div>
    </article>
  );
}