import { compose } from 'ramda';

import Container from './container';
import View from './view';

const CreateTeam = compose(Container, () => View)

export default CreateTeam
