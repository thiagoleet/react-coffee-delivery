const API_URL = "https://brasilapi.com.br/api/cep/v1";

const findAddressByCEP = async (cep: string) => {
  return fetch(`${API_URL}/${cep}`);
};

export default findAddressByCEP;
