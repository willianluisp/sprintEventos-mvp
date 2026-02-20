import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CadastroEvento({ onAdd, onEdit }) {
  const navigate = useNavigate();
  // Pega os dados passados via navegação (state)
  const location = useLocation();
  
  // Verifica se há um evento para editar
  const eventoParaEditar = location.state?.eventoParaEditar;
  
  // Estados do formulário
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("aberto"); // Estado para o status do evento

  // useEffect para preencher o formulário quando for edição
  useEffect(() => {
    if (eventoParaEditar) {
      setTitulo(eventoParaEditar.titulo);
      setData(eventoParaEditar.data);
      setLocal(eventoParaEditar.local);
      setDescricao(eventoParaEditar.descricao || ""); // se descrição existir coloca ela, ou coloca string vazia
      setStatus(eventoParaEditar.status || "aberto"); // se status existir coloca ele, ou coloca aberto como padrão'
    }
  }, [eventoParaEditar]); // só roda quando eventoParaEditar mudar

  // Função para limpar o formulário
  function limparFormulario() {
    setTitulo("");
    setData("");
    setLocal("");
    setDescricao("");
    setStatus("aberto");
  }

  // Função chamada ao submeter o formulário
  function handleSubmit(e) {
    e.preventDefault();

    // Valida se todos os campos estão preenchidos
    if (!titulo || !data || !local || !descricao) {
      alert("Preencha todos os campos.");
      return;
    }

    // Cria objeto com os dados do formulário (incluindo status)
    const evento = { titulo, data, local, descricao, status };

    // se está editando, chama onEdit mantendo o id
    if (eventoParaEditar) {
      onEdit({ ...evento, id: eventoParaEditar.id }); // mantém o id original para edição
    } else {
      // se é novo, chama onAdd
      onAdd(evento);
    }

    // Navega de volta para a lista de eventos
    navigate("/evento"); // quando for editado 
  }

  return (
    <section className="stack">
      <div className="centralizar">
        {/* Título dinâmico - muda se está editando ou cadastrando */}
        <h2 style={{textAlign: "center"}}>
          {eventoParaEditar ? "Editar Evento" : "Cadastrar Evento"}
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Campo de título */}
          <label>
            Título
            <input 
            type="title"
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)} 
              placeholder="Ex: Demo do sistema" // oque fica de sombra na caixa de texto para dar um exemplo do que deve ser preenchido
            />
          </label>

          {/* Campo de data */}
          <label>
            Data
            <input 
              type="date" 
              value={data} 
              onChange={(e) => setData(e.target.value)} 
            />
          </label>

          {/* Campo de local */}
          <label>
            Local
            <input 
              value={local} 
              onChange={(e) => setLocal(e.target.value)} 
              placeholder="Ex: Laboratório" 
            />
          </label>

          {/* Campo de descrição */}
          <label>
            Descrição
            <input 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)}  // quando mudar o valor do input, atualiza o estado da descrição
              placeholder="Ex: Evento para apresentação do MVP"  // oque fica de sombra na caixa de texto para dar um exemplo do que deve ser preenchido
            />
          </label>

          {/* Campo de status - NOVO */}
          <label>
            Status
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="aberto">Aberto</option>
              <option value="lotado">Lotado</option>
            </select>
          </label>

          {/* Botões do formulário */}
          <div className="row">
            {/* Botão de salvar - texto dinâmico */}
            <button className="btn" type="submit">
              {eventoParaEditar ? "Salvar Alterações" : "Salvar"}
            </button>
            
            {/* Botão de cancelar */}
            <button 
              className="btn ghost" 
              type="button" 
              onClick={() => navigate("/evento")}
            >
              Cancelar
            </button>
            
            {/* Botão de limpar formulário */}
            <button 
              className="btn danger" 
              type="button" 
              onClick={limparFormulario}
            >
              Limpar Formulário
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}