export function authHeaders(token) {
  const header = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': token || null
    }
  };
  return header;
}
