let saldo = 0;

const funcoesCarteira = {
  depositar: (valor) => {
    saldo = saldo + valor;
  },
  sacar: (valor) => {
    if(valor > saldo) {
      return 0;
    }
    saldo = saldo - valor;
    return valor;
  },
  verificaSaldo: () => {
    return saldo;
  }
};

module.exports = funcoesCarteira;

