import { compose } from 'ramda';

import Container from './container';
import View from './view';

const MyTeams = compose(Container, () => View)

export default MyTeams
