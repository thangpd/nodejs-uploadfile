const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var cors = require('cors')
const app = express()
var formidable = require('formidable');
app.use(cors())
app.get('/',function(req,res,next){

  console.log('ok')
  res.send('ok')

})
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/fileupload-ajax', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // console.log(req)
  // console.log('file',req.body.file)
  
  // console.log('test',req.body.file[0])
  
  // console.log(req.body.file[0])
  
  
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})

app.listen(8080);