const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     //criar tabela com comandos SQL
//     db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//       );
//     `)

//     //Inserir dados
//     const query = `
// INSERT INTO places  (
//     image,
//     name, 
//     address,
//     address2,
//     state,
//     city,
//     items
// ) VALUES (?,?,?,?,?,?,?);
// `

//     const values = [
//         "https://images.unsplash.com/photo-1533626904905-cc52fd99285e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônucis, Lâmpadas"

//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(query, values, afterInsertData ) 

    

  // Consultar dados da tabela

  //db.all(`SELECT * FROM places`, function(err, rows){
  //    if(err) {
  //        return console.log(err)
  //    }
  //    console.log("aqui estão os seus registros:")
  //    console.log(rows)
  //})


//Deletar dado da tabela
// db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
//    if(err) {
//        return console.log(err)
//     }

//     console.log("Registro deletado com sucesso!")
// })



// })