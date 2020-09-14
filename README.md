--Descriptionn


--Installation or Dependencies

$ npm i express mongoose 
$ tsc --init
$ npm i @types/express -D

//Monitor for any changes in your source and automatically restart your server
$ npm i nodemon -D
$ npm i @types/mongoose

--Eslint Configuration
$ npm i -D eslint-config-airbnb-typescript@7 eslint-plugin-import@2
$ npm install eslint-plugin-react@latest --save-dev
$ npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.0.1 \
            --save-dev

--To Check After Saving Data
$ mongo
>use ts_crud        --
>show collections   --to see the collections we created
>db.users.find()    --to see the users added
