import bodyParser from 'src/providers/body-parser';
import cors from 'src/providers/cors';
import morgan from 'src/providers/morgan';

export default [bodyParser, cors, morgan];
