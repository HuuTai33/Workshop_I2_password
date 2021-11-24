export function saveToken(token: any) {
  sessionStorage.setItem('token', JSON.stringify(token));
}

export function getToken(): string {
  let token = sessionStorage.getItem('token');
  if (token != null) {
    token = JSON.parse(token);
  }
  return token;
}

export function logout() {
  sessionStorage.clear();
}
