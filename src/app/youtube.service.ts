import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'knW7-x7Y7RE', song: 'SƠN TÙNG M-TP | HÃY TRAO CHO ANH ft. Snoop Dogg | Official MV'},
    {id: '32sYGCOYJUM', song: 'CHẠY NGAY ĐI | RUN NOW | SƠN TÙNG M-TP | Official Music Video'},
    {id: 'FN7ALfpGxiI', song: 'NƠI NÀY CÓ ANH | OFFICIAL MUSIC VIDEO | SƠN TÙNG M-TP'},
    {id: '30KI5SuECuc', song: 'Âm Thầm Bên Em | OFFICIAL MUSIC VIDEO | Sơn Tùng M-TP'},
    {id: 'PdbsnGuduvo', song: 'Sơn Tùng M-TP - Chắc Ai Đó Sẽ Về'}
];

  constructor() { }
  find(id:string) {
    return this.playlist.find(item => item.id === id);
  }
}
