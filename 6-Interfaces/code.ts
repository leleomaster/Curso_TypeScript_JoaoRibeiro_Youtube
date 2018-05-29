function Executar(): void {
    interface IPessoa {
        nome: string;
        apelido: string;
    }

    interface ICoordenadas {
        x: number;
        y: number;
        readonly z: number;// Só posso alterar/colocar valor no construtor
    }

    function pessoa(dados: IPessoa) {
        let resultado: string;
        if (dados.nome) {
            resultado = dados.nome;
        }
        else if (dados.apelido) {
            resultado += dados.apelido;
        }

        return `${dados.nome} ${dados.apelido}`;
    }

    let d = { nome: "leo" };

    document.getElementById("info").innerHTML = pessoa(d);

    let d2 = { nome: "leo", apelido: "leleo" };

    document.getElementById("info").innerHTML = pessoa(d2);

    let posicao: ICoordenadas = { x: 100, y: 200 };

    document.write(posicao.y + " - " + posicao.y);


}