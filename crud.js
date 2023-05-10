document.querySelector("#salvar").addEventListener("click", cadastrar)

window.onload = function() {
  console.log('start')
};

function cadastrar() {
    const modal = bootstrap.Modal.getInstance(document.querySelector("#cadastrarCompraModal"))
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

    if (compra.titulo.length == 0) {
      document.querySelector("#titulo").classList.add("is-invalid")
      return
    }
    
    document.querySelector("#button-cadastrar").setAttribute("data-bs-target", "#cadastrarCompraModal")
    toastFunction()
    document.querySelector("#compras").innerHTML += gerarCard(compra)

    modal.hide()
}


function apagar(botao) {
  botao.parentNode.parentNode.parentNode.remove()
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
        <a onclick="btnCheck()" class="btn btn-success">
          <i class="bi bi-check-lg"></i>
        </a>
        <a onclick="apagar(this)" class="btn btn-danger">
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

function toastFunction() {
  var x = document.getElementById("toast_add");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function toastFunctionLogin() {
  var x = document.getElementById("toast_login");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function btnCheck() {
  console.log('check')
}

function btnTrash() {
  console.log('trash')
}