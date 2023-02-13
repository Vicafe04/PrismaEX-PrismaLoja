const lista = document.querySelector(".lista")
const itemlista = document.querySelector(".item-lista")
const inpNome = document.querySelector("#inpNome");
const inpComis = document.querySelector("#inpComis");


function carregar() {
    fetch(`http://localhost:3000/setor/read`)
        .then(resp => { return resp.json() })
        .then(setores => {
            // console.log(setores)

            setores.forEach(setor => {
                let item = itemlista.cloneNode(true);
                item.classList.remove("model");
                item.querySelector("#Id").innerHTML = "Id: " + setor.id;
                item.querySelector("#Setor").innerHTML = setor.nome;
                item.querySelector("#Comissao").innerHTML = "Comissão: R$" + setor.comissao;
                item.querySelector("#Vendedor").innerHTML = "Vendedor: " + setor.vendedor[0].nome;
                let div = document.createElement("div")
                div.className = "prods"
                setor.produtos.forEach(prod => {
                    let divUnit = document.createElement("div")
                    divUnit.className = "prodsUnit"
                    let p = document.createElement("p")
                    p.className = "prod"
                    let p2 = document.createElement("p")
                    p2.className = "value"
                    p.innerHTML = "Produto: " + prod.nome;
                    p2.innerHTML = "Valor: R$" + prod.valor + ".00";
                    divUnit.appendChild(p)
                    divUnit.appendChild(p2)
                    div.appendChild(divUnit)
                })

                item.appendChild(div)
                lista.appendChild(item);
                 
            })
        })
}

function Create() {
    var dados = {
        nome: inpNome.value,
        comissao: Number(inpComis.value)
    }

    console.log(dados)

    fetch("http://localhost:3000/setor/create"
        , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }
    )
    
    console.log(inpNome)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data
        })
    
}