import { Character, WorldRule, Location } from './types';
import content from './content.json';

export const characters: Character[] = content.characters as Character[];
export const worldRules: WorldRule[] = content.worldRules as WorldRule[];
export const locations: Location[] = content.locations as Location[];
