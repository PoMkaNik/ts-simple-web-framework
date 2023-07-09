import axios, { AxiosPromise } from 'axios';

// constraint
interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  // http://localshost:3000/users <- expected format
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    // axios({
    //   url: `${this.rootUrl}/${id ? id : ''}`,
    //   method: id ? 'PUT' : 'POST',
    //   data: data,
    // });
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
