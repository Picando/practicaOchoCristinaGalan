const inmueble = require("../mongo/schemaInmueble");

const createInmueble = async () => {
  const db = require("../dbConfig");
  const inm = new inmueble();

  inm.piso = "pb";
  inm.letra = "A";
  inm.extension = 150;
  inm.habitaciones = "1 salon, dos dos dormitorios, un baño";
  inm.alquilado = false;
  inm.nombrePropietario = "Josefa Rodriguez";
  inm.mailContacto = "jr@gmail.com";

  await inmueble.create(inm);

  db.close();
};

module.exports = {
  createInmueble,
};

/* const getAllAuthors = () => {
  return db.query("select * from Autores;");
};

const getAuthorByid = (idAuthor) => {
  return db.query("select * from Autores where idAutor = ?;", [idAuthor]);
};

const getAuthorByEmail = (emailAuthor) => {
  return db.query("select * from Autores where email = ?;", [emailAuthor]);
};

const createAuthor = ({ nombre, email }) => {
  let imagen = "localhost:3000/public/imagen/" + email;
  return db.query(
    "insert into Autores (nombre, email, imagen) values (?, ?, ?)",
    [nombre, email, imagen]
  );
};

const updateAuthor = ({ nombre, email, imagen }) => {
  return db.query("UPDATE Autores SET nombre= ?, imagen= ? where email =?", [
    nombre,
    imagen,
    email,
  ]);
};

const deleteAuthor = ({ email }) => {
  return db.query("DELETE from Autores where email =?", [email]);
};

module.exports = {
  getAllAuthors,
  getAuthorByid,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
 */
