const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 1
    var b = 2
    var c = a + b
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//ctrl + c để thoát khỏi server thì mới chỉnh sửa đc nội dung code
// sau khi cài nodemon thì ko cần ctrl + c nữa