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

app.use(express.static(__dirname + '/views'));

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

//UPDATE 
app.post('/edtarefa', function(req, res){
    const id = req.body.id;
    const titulo = req.body.titulo;
    const comentario = req.body.comentario;
    Tarefa.update({
        id: id,
        titulo : titulo,
        comentario : comentario
    },
        {returning: true, where:{id:id}}
    ).then(function(){
        res.redirect('/tarefa')
    }).catch(function(err){
        res.send('erro: ' + err)
    })
})

