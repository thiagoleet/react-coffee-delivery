const API_URL = "https://brasilapi.com.br/api/cep/v1";

export const findAddressByCEP = async (cep: string) => {
  return fetch(`${API_URL}/${cep}`);
};
