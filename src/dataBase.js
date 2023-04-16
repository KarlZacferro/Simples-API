const sequece = {
    _id: 1,
    get id() {return this._id++}
}


const produts = {}

function safeProdut(produt){
    if(!produt.id) produts.id = sequece.id
    produt[produt.id] = produt

    return produt
}

function getProdut(id) {
    return produts[id] || {}
}

function getProduts() {
    return Object.values(produts)
}

function excluirProdut(id){
    const produt= produts
    delete produts[id]
    return produt 
}


module.exports =  {safeProdut, getProdut, getProduts}