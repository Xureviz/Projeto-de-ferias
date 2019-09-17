const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const Tarefa = require('./models/Tarefa');



app.engine('handlebars', handlebars({defaultLayout: 'main', 
helpers: {
    formatDate: (date) => {
        return moment(date).format('Do MMMM YYYY, h:mm:ss a') 
    }
}
}))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//localhost
app.listen(3030);

app.get('/', function (req, res){
    res.send('Hi There')
})
//rotas

app.get('/intro', function(req, res){
    res.render('intro');
});

app.get('/edittarefa', function(req,res){
    Tarefa.findAll({order: [['id', 'ASC']]}).then(function(tarefas){
        res.render('edittarefa', {tarefas: tarefas});
    })
}) 

app.get('/Tarefa', function(req, res){
    Tarefa.findAll({order: [['id', 'ASC']]}).then(function(tarefas){
        res.render('tarefa', {tarefas: tarefas}); 
    })
});

app.get('/cadtarefa', function(req, res){
    res.render('cadtarefa');
});

app.post('/addtarefa', function(req, res){
    Tarefa.create({
        id: req.body.id,
        titulo: req.body.titulo,
        comentario: req.body.comentario
    }).then(function(){
        res.redirect('/tarefa')
    }).catch(function(erro){
        res.send('Erro: Tarefa não cadastrada :' + erro)
    })
})
//DELETAR TAREFA
app.get('/deltarefa/:id', function(req, res){
    Tarefa.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/tarefa')
    }).catch(function(erro){
        res.send('Tarefa não foi deletada com sucesso: ' + erro)
    })
})

//Update na tarefa
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