import { Observable } from 'rxjs';

export interface Food {
  name: string;
  cal: number;
  url: Observable<string>;
}
