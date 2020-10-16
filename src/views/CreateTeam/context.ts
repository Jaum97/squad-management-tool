import { createContext } from 'react';

import { Nullable } from '../../shared/interfaces/common';
import { IPlayer } from '../../shared/interfaces/player';

export const CreateTeamContext = createContext<
	Nullable<(player: IPlayer) => void>
>(null)
