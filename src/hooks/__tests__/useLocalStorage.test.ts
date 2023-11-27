import useLocalStorage from "hooks/useLocalStorage";

describe('useLocalStorage', () => {
    const listaValores = [0, 1, '0', '1', 'testando', true, false, { a: 1, b: { c: 2 } }];

    listaValores.forEach(valor => {
        it(`Valor '${valor}' do tipo ${typeof valor} está sendo guardado corretamente`, () => {
            const valorInicial = valor;
            const [valorRecuperado] = useLocalStorage('teste', valorInicial);
            expect(valorRecuperado).toBe(valorInicial);
        })
    })
})