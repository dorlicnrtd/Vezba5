const knjige = require('@dorlicnrtd/knjige_objekat_modul');

exports.sveKnjige = () => {
    return knjige.listaknjiga;
}
exports.addKnjiga = (id,naziv,autor) => {
    let novaKnjiga = {
        "id": id,
        "naziv": naziv,
        "autor": autor
    };
    knjige.listaknjiga.push(novaKnjiga);
}
exports.getKnjiga = (id) => {
    return knjige.listaknjiga.find(x => x.id == id);
}
exports.postaviAutora = (naziv,autor) => {
    for(let i=0; i<knjige.listaknjiga.length; i++){
        if(knjige.listaknjiga[i].naziv == naziv){
            knjige.listaknjiga[i].autor = autor;
        }
    } 
}
exports.deleteKnjiga = (id) => {
    let pomocna = [];
    for(let knjiga of knjige.listaknjiga){
        if(knjiga.id != id){
            pomocna.push(knjiga);
        }
    }
    knjige.listaknjiga = pomocna;
    return true;
}
exports.getKnjigaByAuthor = (autor) =>{
    let knjigeAutor = [];
    for(let i=0; i<knjige.listaknjiga.length; i++){
        if(knjige.listaknjiga[i].autor == autor){
            knjigeAutor.push(knjige.listaknjiga[i]);
        }
    }
    return knjigeAutor;
}