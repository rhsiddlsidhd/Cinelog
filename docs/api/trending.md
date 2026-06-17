# 트렌딩 API — Cinelog

Base URL: `https://api.themoviedb.org`
인증: Bearer 토큰 (`TMDB_API_KEY`) 필수

`time_window`: `day` | `week` (path 파라미터, 필수)

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/trending/all/{time_window}` | GET | 영화·TV·인물 전체 트렌딩 목록 |
| `/3/trending/movie/{time_window}` | GET | 트렌딩 영화 목록 |
| `/3/trending/tv/{time_window}` | GET | 트렌딩 TV 프로그램 목록 |
| `/3/trending/person/{time_window}` | GET | 트렌딩 인물 목록 |

---

### `GET /3/trending/all/{time_window}`

| 구분 | 내용 |
| --- | --- |
| Request | `time_window`(path, 필수), `language` |
| Response | `results[]: {id, media_type, title/name, ...}` |
| 관련 화면 | 홈 - 트렌딩 |
| 에러 응답 | 404 잘못된 time_window |

### `GET /3/trending/movie/{time_window}`

| 구분 | 내용 |
| --- | --- |
| Request | `time_window`(path, 필수), `language` |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 트렌딩 영화 |
| 에러 응답 | 404 잘못된 time_window |

### `GET /3/trending/tv/{time_window}`

| 구분 | 내용 |
| --- | --- |
| Request | `time_window`(path, 필수), `language` |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 트렌딩 TV |
| 에러 응답 | 404 잘못된 time_window |

### `GET /3/trending/person/{time_window}`

| 구분 | 내용 |
| --- | --- |
| Request | `time_window`(path, 필수), `language` |
| Response | `results[]: {id, name, known_for_department, profile_path, known_for[], ...}` |
| 관련 화면 | 홈 - 트렌딩 인물 |
| 에러 응답 | 404 잘못된 time_window |
