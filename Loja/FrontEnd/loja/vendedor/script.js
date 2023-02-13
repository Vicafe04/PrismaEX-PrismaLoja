const lista = document.querySelector(".lista")
const itemlista = document.querySelector(".item-lista")
const inpNome = document.querySelector("#inpNome");
const inpSalario = document.querySelector("#inpSalario");
const inpSetor = document.querySelector("#inpSetor")
function carregar() {
    fetch(`http://localhost:3000/setor/read`)
        .then(resp => { return resp.json() })
        .then(setores => {
            // console.log(setores)

            setores.forEach(setor => {
                if (setor.vendedor.length > 0) {
                    let item = itemlista.cloneNode(true);
                    item.classList.remove("model");
                    item.querySelector("#Id").innerHTML = "Id: " + setor.id;
                    item.querySelector("#Setor").innerHTML = setor.nome;
                    item.querySelector("#Comissao").innerHTML = "Comissão: R$" + setor.comissao;
                    item.querySelector("#Vendedor").innerHTML = "Vendedor: " + setor.vendedor[0].nome;

                    lista.appendChild(item);
                } else {
                    let item = itemlista.cloneNode(true);
                    item.classList.remove("model");
                    item.querySelector("#Id").innerHTML = "Id: " + setor.id;
                    item.querySelector("#Setor").innerHTML = setor.nome;
                    item.querySelector("#Comissao").innerHTML = "Comissão: R$" + setor.comissao;
                    // item.querySelector("#Vendedor").innerHTML = "Vendedor: " + setor.vendedor[0].nome;
                    lista.appendChild(item);

                }
            })
        })
}

function Create() {
    var dados = {
        nome: inpNome.value,
        salario: Number(inpSalario.value),
        setorId: Number(inpSetor.value)
    }

    console.log(dados)

    fetch("http://localhost:3000/vendedores/create"
        , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }
    ).then(res => {
        return window.location.reload()
    })
        .then(data => {
            return data
        })

}