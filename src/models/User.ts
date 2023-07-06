import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  public events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // Object.assign(this.data, update);
    this.data = { ...this.data, ...update };
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get('id');
    // axios({
    //   url: `http://localhost:3000/users/${id ? id : ''}`,
    //   method: id ? 'PUT' : 'POST',
    //   data: this.data,
    // });
    id
      ? axios.put(`http://localhost:3000/users/${id}`, this.data)
      : axios.post(`http://localhost:3000/users`, this.data);
  }
}
