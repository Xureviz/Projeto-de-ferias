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

    /*
    let trf = req.body;
    var sql = 'SET @id = ?; SET @titulo = ?; SET @comentario = ?; SET @createdAt = ?; \
    CALL new_procedure(@id,@titulo,@comentario,@createdAt);';
    debugger;
    mysqlConnection.query(sql,[trf.id, trf.titulo, trf.comentario, trf.createdAt], (err, rows, fields) =>{
        if(!err)
            res.send('Tarefa atualizada com sucesso');
        else   
            console.log(err);
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
})*/
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

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>



    /*
//Update na tarefa
app.put('/tarefa/:id', function (req, res) {
    var tarefa = new Tarefa({
        id: req.body.id,
        titulo: req.body.titulo,
        comentario: req.body.comentario
    });
    var upsertData = tarefa.toObject();
    delete upsertData.id;
    return Tarefa.update({id: req.params.id}, upsertData, {upsert: true}, function(err){
        if(!err){
            return res.send('Updated');
        } else {
            return Response.send('Erro, tarefa nao cadastrada: ' + err)
        }
    })
})*/

//Update na tarefa2
app.put('/tarefa', (req, res) =>{
    
    let trf = req.body;
    var sql = 'SET @id = ?; SET @titulo = ?; SET @comentario = ?; SET @createdAt = ?; \
    CALL new_procedure(@id,@titulo,@comentario,@createdAt);';
    debugger;
    mysqlConnection.query(sql,[trf.id, trf.titulo, trf.comentario, trf.createdAt], (err, rows, fields) =>{
        if(!err)
            res.send('Tarefa atualizada com sucesso');
        else   
            console.log(err);
    })
})
