// tslint:disable:no-console
import { expect } from 'chai';

import { IRxAx, RxAxInstance } from '../src';

describe('Test RxAxInstance', () => {
  const BASE_URI: string = 'https://jsonplaceholder.typicode.com';
  const http$: IRxAx = RxAxInstance;

  it('should return 200', () => {
    http$.request({ baseURL: BASE_URI }).subscribe(d => expect(d.status === 200));
  });

  it('should return 200 and result should be equal to the object', () => {
    http$.get<any>(`${BASE_URI}/todos/1`).subscribe(d => {
      expect(d.status === 200);
      expect(typeof d).to.equal('object');
    });
  });

  it('should return 200 and result === object, result.title === string', () => {
    http$
      .get<any>('/todos/1', {
        baseURL: BASE_URI,
      })
      .subscribe(d => {
        expect(d.status === 200);
        expect(typeof d).to.equal('object');
        expect(typeof d.data.title).to.equal('string');
      });
  });
});
