const lista = document.querySelector(".lista")
const itemlista = document.querySelector(".item-lista")


function enviar() {
    const inpSetor = document.querySelector("#inpSetor").value;
    fetch("http://localhost:3000/setor/read/" + inpSetor)
        .then(resp => { return resp.json() })
        .then(setor => {
            console.log(setor)
            
            setor.forEach(e => {
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#Setor").innerHTML = setor.nome;
                item.querySelector("#Comissao").innerHTML = "R$" + setor.comissao;
                item.querySelector("#Vendedor").innerHTML = setor.vendedor[0].nome;
                e.produtos.forEach(produto => {
                    
                    item.querySelector("#Produto").innerHTML = produto.nome;
                    item.querySelector("#Valor").innerHTML = "R$" + produto.valor + ".00";
                    lista.appendChild(item);
                })
            })
        })
}