// mockData.js
export const mockOrders = [
  {
    id: 100,
    mensageiro: "Henrique",
    cliente: "Enzo Daniel",
    dataPedido: "23-10-2023",
    historicoStatus: [
      {
        status: "PEDIDO_RECEBIDO",
        descricao: "Pedido recebido",
        dataStatus: "23-10-2023",
      },
      {
        status: "EM_ROTA_PARA_COLETA",
        descricao: "Em rota para coleta",
        dataStatus: "23-10-2023",
      },
      {
        status: "PACOTE_COLETADO",
        descricao: "Pacote coletado",
        dataStatus: "23-10-2023",
      },
      {
        status: "EM_ROTA_DE_ENTREGA",
        descricao: "Em rota de entrega",
        dataStatus: "23-10-2023",
      },
      {
        status: "FINALIZADO",
        descricao: "Finalizado",
        dataStatus: "23-10-2023",
      },
    ],
  },
  {
    id: 200,
    mensageiro: "Rafael",
    cliente: "Dani",
    dataPedido: "23-10-2023",
    historicoStatus: [
      {
        status: "PEDIDO_RECEBIDO",
        descricao: "Pedido recebido",
        dataStatus: "23-10-2023",
      },
    ],
  },
  {
    id: 300,
    mensageiro: "Luana",
    cliente: "Jess",
    dataPedido: "23-10-2023",
    historicoStatus: [
      {
        status: "PEDIDO_RECEBIDO",
        descricao: "Pedido recebido",
        dataStatus: "23-10-2023",
      },
      {
        status: "EM_ROTA_PARA_COLETA",
        descricao: "Em rota para coleta",
        dataStatus: "23-10-2023",
      },
    ],
  },
];

export const getOrder = (id) => {
  return Promise.resolve(mockOrders.find((order) => order.id === id));
};
