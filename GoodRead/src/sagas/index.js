import { goodreadsWatchers } from './Goodreads';

export default function* rootWatchers() {
  yield [
    goodreadsWatchers(),
  ];
}
