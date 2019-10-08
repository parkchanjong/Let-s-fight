import './env';
import app from './app';

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log('Fight server is listening to port', PORT);
});
