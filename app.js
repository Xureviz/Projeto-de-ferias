const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const Tarefa = require('./models/Tarefa');

app.engine('handlebars', handlebars({defaultLayout: 'main', 
helpers: {
    formatDate: () => {
        return moment().format('Do MMMM YYYY, h:mm:ss a') 
    }
}
}))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//localhost
app.listen(3030);

//rotas

app.get('/intro', function(req, res){
    res.render('intro');
});

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
        titulo: req.body.titulo,
        comentario: req.body.comentario
    }).then(function(){
        res.redirect('/tarefa')
    }).catch(function(erro){
        res.send('Erro: Tarefa não cadastrada :' + erro)
    })
})

app.get('/deltarefa/:id', function(req, res){
    Tarefa.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/tarefa')
    }).catch(function(erro){
        res.send('Tarefa não foi deletada com sucesso')
    })
})

/*app.get('/update/:id', function(req, res){
    Tarefa.put({
        where: {'id' : req.params.id}
    }).then(function(){
        res.redirect('/tarefa')
    }).catch(function(erro){
        res.send('Não foi possivel atualizar os dados')
    })
})*/
/*app.put('/update/update/:id', (req, res, next) => {
    let id = {
      _id: ObjectID(req.params.id)
    };

    dbase.collection("name").update({_id: id}, {$set:{'first_name': req.body.first_name, 'last_name': req.body.last_name}}, (err, result) => {
      if(err) {
        throw err;
      }
      res.send('user updated sucessfully');
    });
});*/