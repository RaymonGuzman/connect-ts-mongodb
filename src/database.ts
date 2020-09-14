import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
  useNewUrlParser: true,
})
  .then((db) => console.log('Db is Connected'))
  .catch((err) => console.log(err));
