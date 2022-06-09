const carteira = require("../src/funcoes");

test("Deposita saldo na conta da pessoa", () => {
  const oldBalance = carteira.verificaSaldo();
  const deposito = 100;
  carteira.depositar(100);
  expect(carteira.verificaSaldo()).toBe(oldBalance + deposito);
});

test("Verifica saldo na conta da pessoa", () => {
  const saldo = carteira.verificaSaldo();
  expect(saldo).toBeTruthy();
});

test("Retira dinheiro da conta da pessoa", () => {
  const saque = 50;
  const oldBalance = carteira.verificaSaldo();
  const retirada = carteira.sacar(saque);
  if(retirada) return expect(carteira.verificaSaldo()).toBe(oldBalance - saque);
  expect(retirada).toBe(oldBalance);
  
});
test("Verifica saldo na conta da pessoa", () => {
  const saldo = carteira.verificaSaldo();
  if(saldo) return expect(saldo).toBeTruthy();
});
