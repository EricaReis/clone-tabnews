function status(request, response) {
  response.status(200).json({ chave: "response from status function" });
}

export default status;
