//Edit na tarefa
app.put('/addterefa', (req, res) =>{
    let trf = req.body;
    var sql = 'SET @id = ?; SET @titulo = ?; SET @comentario = ?; SET @createdAt = ?; \
    CALL new_procedure(@id,@titulo,@comentario,@createdAt);';
    mysqlConnection.query(sql,[trf.id, trf.titulo, trf.comentario, trf.createdAt], (err, rows, fields) =>{
        if (!err)
            res.send('Tarefa atualizada');
        else
            console.log('Tarefa não atualizada com sucesso: ' + err)
    })
})
/*checkbox
app.get('/cadterefa', function myFunction() {
    var checkBox = document.getElementById("myCheck");

    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
})*/