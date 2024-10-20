import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = 'production';

const config = {
  target: 'node',
  entry: './src/index',
  mode,
  module: {
    rules: [{ test: /\.ts$/i, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
