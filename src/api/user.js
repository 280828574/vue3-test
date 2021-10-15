import request from './request';

export function fetchUsers(id) {
  return request({
    url: `/users`,
    header: {
      'Content-Type': 'application/json',
    },
    method: 'get',
  });
}
