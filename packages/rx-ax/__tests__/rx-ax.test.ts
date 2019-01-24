// tslint:disable:no-console
import { expect } from 'chai';
import { catchError, map, tap } from 'rxjs/operators';

import { IRxAx, RxAxInstance } from '../src';

const mock = {
  body: { title: 'foo', body: 'bar', userId: 1 },
};

describe('Test RxAxInstance', () => {
  const http$: IRxAx = RxAxInstance;
  const config = http$.config({ baseURL: 'https://jsonplaceholder.typicode.com' });

  it('should return 200', () => {
    http$.request(config).subscribe(d => expect(d.status === 200));
  });

  it('should return 200 and result should be equal to the object', () => {
    http$.get<any>(`/todos/1`, config).subscribe(d => {
      expect(d.status === 200);
      expect(typeof d).to.equal('object');
    });
  });

  it('should return 200 and result === object, result.title === string', () => {
    http$.get<any>('/todos/1', config).subscribe(d => {
      expect(d.status === 200);
      expect(typeof d).to.equal('object');
      expect(typeof d.data.title).to.equal('string');
    });
  });

  it('post', () => {
    http$
      .post<any>(
        `/posts`,
        { ...mock },
        {
          ...config,
          method: 'post',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        },
      )
      .subscribe(d => {
        console.info(d.data);
      });
  });
});
