document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let preco = document.querySelector("#preco").value
    let categoria = document.querySelector("#categoria").value
    let data = document.querySelector("#data").value
    let parcelada = document.querySelector("#parcelada").checked
    let parcelas = document.querySelector("#parcelas").value

    const compra = {
        titulo: titulo,
        descricao: descricao,
        preco: preco,
        categoria: categoria,
        data: data,
        parcelada: parcelada,
        parcelas: parcelas
    }

    document.querySelector("#compras").innerHTML += gerarCard(compra)
}

function gerarCard(compra) {
    return `<div class="col-lg-3 col-md-6 col-12">
    <div class="card">
      <div class="card-header">${compra.titulo}</div>
      <div class="card-body">
        <p class="card-text">${compra.descricao}</p>
        <p class="card-text">Data da compra: ${compra.data ? compra.data : "Sem data"}</p>
        <p class="card-text">Preço R$${compra.preco && compra.preco > 0 ? compra.preco : 0}</span></p>
        <p class="card-text">
          ${compra.parcelada != false && compra.parcelas > 1 ? compra.parcelas + " parcelas" : "Não parcelada"}
        </p>
        <p>
          <span class="badge text-bg-warning">${compra.categoria}</span>
        </p>
        <a href="#" class="btn btn-success">
          <i class="bi bi-check-lg"></i>
        </a>
        <a href="#" class="btn btn-danger">
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
  </div>`
}

document.querySelector('#btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.querySelector('#btnSwitch').innerHTML = '<i class="bi bi-moon-fill"></i>'

    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.querySelector('#btnSwitch').innerHTML = '<i class="bi bi-brightness-high-fill"></i>'
    }
})


document.querySelector('#parcelada').addEventListener('click',()=> {
  if (document.querySelector('#parcelada').checked == false) {
    document.querySelector('#parcelas').setAttribute("disabled","disabled")
  } else {
    document.querySelector('#parcelas').removeAttribute("disabled")
  }
})