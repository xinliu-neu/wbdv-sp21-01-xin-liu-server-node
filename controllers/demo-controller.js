// module.exports = (app) => {
//
//   const add = (rq, rs) => {
//     const a = rq.params['paramA'];
//     const b = rq.params['paramB'];
//     // const aa = parseInt(a);
//     // const bb = parseInt(b);
//     rs.send(a + b);
//   }
//
//   const subtract = (req, res) => {
//     const x = parseInt(req.query['x']);
//     const y = parseInt(req.query['y']);
//     const z = x - y;
//     res.send(`${z}`);
//   }
//
//   app.get('/subtract', subtract)
//   app.get('/add/:paramA/:paramB', add)
//
//   app.get('/can/be/anything', function (req, res) {
//     res.send('Hello World')
//   })
//
// }
//
//
