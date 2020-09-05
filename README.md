--Descriptionn


--Installation or Dependencies

$ npm i express mongoose 
$ tsc --init
$ npm i @types/express -D

//Monitor for any changes in your source and automatically restart your server
$ npm i nodemon -D
$ npm i @types/mongoose


--To Check After Saving Data
$ mongo
>use ts_crud        --
>show collections   --to see the collections we created
>db.users.find()    --to see the users added
