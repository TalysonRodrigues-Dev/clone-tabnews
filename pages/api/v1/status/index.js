function status(request, response) {
  response.status(200).json({ chave: "Deu tudo certo" });
}

export default status;
