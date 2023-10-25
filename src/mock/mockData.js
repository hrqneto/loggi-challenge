// mockData.js
export const mockOrder = {
  id: 100,
  mensageiro: "Henrique",
  cliente: "Enzo Daniel",
  dataPedido: "23-10-2023",
  localEntrega: {
    logradouro: "Rua Herculano de Freitas",
    numero: "222",
    bairro: "Bela Vista",
    complemento: "AP x",
    cep: "88102500",
    cidade: "São Paulo",
    estado: "Sao Paulo",
  },
  localOrigem: {
    logradouro: "Rua Herculano de Freitas",
    numero: "222",
    bairro: "Bela Vista",
    complemento: "AP x",
    cep: "88102500",
    cidade: "São Paulo",
    estado: "Sao Paulo",
  },
  dataPedido: "23-10-2023",
  dataPrevistaEntrega: "23-10-2023",
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
};

export const getOrder = (id) => {
  if (id === 100) {
    return Promise.resolve(mockOrder);
  } else if (id === 200) {
    return Promise.resolve({
      ...mockOrder,
      id: 200,
      cliente: "Dani",
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
    });
  } else if (id === 300) {
    return Promise.resolve({
      ...mockOrder,
      id: 300,
      cliente: "jess",
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
    });
  }
};
