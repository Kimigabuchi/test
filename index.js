import express from 'express';
export const app = express();
app.set('port', process.env.PORT || 30000);

import cookieParser from 'cookie-parser';
app.use(express.static('./'));
app.use(express.static('public/plan'));
app.use(express.static('public'));
app.use(express.static('lib'));


// Установка механизма представления handlebars
import handlebars from 'express-handlebars';
const engine = handlebars.create({ defaultLayout:'main' }).engine;
//handlebars.create({ defaultLayout:'main' });
app.engine('handlebars', engine);
app.set('view engine', 'handlebars');

app.disable('x-powered-by');
//////////////////////////////////////////////////////////////////////////////////////////

app.get('/plan', function(req, res) {
  res.render('plan',{layout:null});
});









app.use(function(req, res, next){
  res.status(404);
  res.render('404');
  //next();
});
// Обработчик ошибки 500 (промежуточное ПО)
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(30000, '0.0.0.0', function(){
  console.log( 'Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.' );
});