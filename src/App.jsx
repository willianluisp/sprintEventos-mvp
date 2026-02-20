import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import Evento from "./pages/Evento";
import CadastroEvento from "./pages/CadastroEvento";
import EventoDetalhe from "./pages/EventoDetalhe";

export default function App() {
  // Estado que armazena a lista de eventos
  const [eventos, setEventos] = useState([
    { 
      id: 1, // id do evento
      titulo: "Reunião do Projeto", // Titulo do evento
      data: "2026-02-12", // Data do evento
      local: "Sala 2", // Local do evento
      descricao: "Discussão sobre o andamento do projeto", // Descrição do evento
      editado: false, //mostrar se esta editado ou não
      status: "aberto" // Adicionar status
    },
    { 
      id: 2, // id do evento
      titulo: "Review da Sprint", // Titulo do evento 
      data: "2026-02-13", // Titulo do evento
      local: "Auditório", // Local do evento
      descricao: "Apresentação dos resultados da sprint", // Descrição do evento 
      editado: false, //  mostrar se esta editado ou não
      status: "lotado" // Adicionar status
    },
  ]);

  // Função para adicionar um novo evento
  function adicionarEvento(novo) {
    // Cria um id único usando timestamp e marca como não editado
    const eventoComId = { id: Date.now(), ...novo, editado: false };
    // Adiciona o novo evento no início da lista
    setEventos((lista) => [eventoComId, ...lista]);
  }

  // Função para editar um evento existente
  function editarEvento(eventoEditado) {
    // Atualiza o evento na lista e marca como editado
    setEventos((lista) =>
      lista.map((e) => 
        e.id === eventoEditado.id 
          ? { ...eventoEditado, editado: true } // coloca os novos dados e marca como editado
          : e
      )
    );
  }

  // Função para remover um evento pelo id
  function removerEvento(id) {
    // Filtra a lista removendo o evento com o id correspondente
    setEventos((lista) => lista.filter((e) => e.id !== id)); // mantem apenas os eventos que são diferentes do id passado para remover
  }

  return (
    <div className="app">
      <Header />
      <Menu />

      <main className="conteudo-principal">
        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Home total={eventos.length} primeiroEvento={eventos[eventos.length-1]?.titulo} />} />
          
          {/* Rota da lista de eventos */}
          <Route path="/evento" element={<Evento eventos={eventos} onRemover={removerEvento} />} />
          
          {/* Rota de detalhe do evento - :id é um parâmetro dinâmico */}
          <Route path="/evento/:id" element={<EventoDetalhe eventos={eventos} />} />
          
          {/* Rota de cadastro/edição de evento - passa ambas as funções */}
          <Route path="/cadastrar" element={<CadastroEvento onAdd={adicionarEvento} onEdit={editarEvento} />} />
          
          {/* Rota coringa - redireciona qualquer URL inválida para a home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}