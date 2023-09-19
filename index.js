const express = require('express')
const calculator = require('./calculator')

const app = express();
const port = process.env.PORT || 3000;

app.get('/:n1?/:n2?', (req, res) => {
  let n1=null;
  let n2=null;
  if(req.params.n1) {
    n1=parseInt(req.params.n1);
    if(req.params.n2)
      n2=parseInt(req.params.n2);
    let sum=calculator.calculateSum(n1,n2);
    console.log("result="+sum);
    res.send("result="+sum);
  }
  else {
    res.send("Give me two numbers in the URL separated by /");
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})