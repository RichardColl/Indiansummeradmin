import * as R from 'ramda';

import { catchError, map, tap} from 'rxjs/operators';

export const cloneData = () => map(R.clone) as any;
