//Requerimos el paquete
 var nodemailer = require('nodemailer');

 //Creamos el objeto de transporte
 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'tucorreo@gmail.com',
     pass: 'password brindado por gmail en verificación de 2 pasos'
   },
   headers: {
    "x-priority": "1",
    "x-msmail-priority": "High",
    importance: "high"
}
 });
 
 var mensaje = "Prueba para enviar correos desde NodeJS";
 
 var mailOptions = {
   from: 'correo1@gmail.com',
   to: 'correo2@gmail.com, correo3@gmail.com, correo4@gmail.com',
   cc: 'correo5@gmail.com',
   bcc: 'correo6@gmail.com',
   subject: 'Asunto Del Correo de prueba',
   text: mensaje,
   html: "<p>HTML version of the message</p>",
   attachments: [
    {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
    },
    {   // binary buffer as an attachment
        filename: 'text2.txt',
        content: new Buffer('hello world!','utf-8')
    }/*,
    {   // file on disk as an attachment
        filename: 'text3.txt',
        path: '/path/to/file.txt' // stream this file
    },
    {   // filename and content type is derived from path
        path: '/path/to/file.txt'
    },
    {   // stream as an attachment
        filename: 'text4.txt',
        content: fs.createReadStream('file.txt')
    }*/,
    {   // define custom content type for the attachment
        filename: 'text.bin',
        content: 'hello world!',
        contentType: 'text/plain'
    },
    {   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    },
    {   // encoded string as an attachment
        filename: 'text1.txt',
        content: 'aGVsbG8gd29ybGQh',
        encoding: 'base64'
    },
    {   // data uri as an attachment
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    },
    {
        // use pregenerated MIME node
        raw: 'Content-Type: text/plain\r\n' +
             'Content-Disposition: attachment;\r\n' +
             '\r\n' +
             'Hello world!'
    }
]
 };
 
 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email enviado: ' + info.response);
   }
 });
