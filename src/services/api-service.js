export default class ApiService {

  _apiBase = 'https://rocketstars.ru/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getNewTask() {
    const res = await this.getResource(`new-tasks.json`);
    return res.new_tasks[3];
  }
}