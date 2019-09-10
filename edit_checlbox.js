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
checkbox
app.get('/cadterefa', function myFunction() {
    var checkBox = document.getElementById("myCheck");

    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
})*/<p><b>Marque a caixa caso queira editar uma tarefa</b></p>
<input type='checkbox' id='myCheck' onclick='myFunction()'><input type='text' name='id'><br><br>
<p id="text" style="display:none">Checkbox is CHECKED!</p><br>

<div>
        Marque a caixa caso queira editar uma tarefa <input type="checkbox" id="trigger" name="question">
    </div><br>
    <div id="hidden_fields">Digite o numero da tarefa: <input type="text" id="hidden_field" name="hidden">
    </div><br>