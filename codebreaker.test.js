const code = require('./codebreaker'); //Arrange

describe('cuatro xxxx', () => {
    const codigo = '1536';
    test('número correcto', () => {
        var value = code.codeBreaker(codigo, '1536'); //ACT
        // hacer una aserción
        expect(value).toBe('xxxx'); //ASSERT
    });

    test('número correcto en desorden', () => {
        var value = code.codeBreaker(codigo,'5163'); //ACT
        // hacer una aserción
        expect(value).toBe('____'); //ASSERT
    });

    test('ningun número', () => {
        var value = code.codeBreaker(codigo, '0000'); //ACT
        // hacer una aserción
        expect(value).toBe(''); //ASSERT
    });

    test('acerto un solo número', () => {
        var value = code.codeBreaker(codigo, '1000'); //ACT
        // hacer una aserción
        expect(value).toBe('x'); //ASSERT
    });

    // prueba 5
    test('acerto dos número', () => {
        var value = code.codeBreaker(codigo, "1500"); //ACT
        // hacer una aserción
        expect(value).toBe('xx'); //ASSERT
    });

    test('acerto tres números', () => {
        var value = code.codeBreaker(codigo, "1530"); //ACT
        // hacer una aserción
        expect(value).toBe('xxx'); //ASSERT
    });

        // prueba 7
    test('acerto un solo número en otra posición', () => {
        var value = code.codeBreaker(codigo, '6000'); //ACT
        // hacer una aserción
        expect(value).toBe('_'); //ASSERT
    });

    test('acerto dos números en otra posición', () => {
        var value = code.codeBreaker(codigo, '6300'); //ACT
        // hacer una aserción
        expect(value).toBe('__'); //ASSERT
    });
    
});