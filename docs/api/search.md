# 검색 API — Cinelog

Base URL: `https://api.themoviedb.org`
인증: Bearer 토큰 (`TMDB_API_KEY`) 필수

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/search/multi` | GET | 영화·TV·인물 통합 검색 |
| `/3/search/movie` | GET | 영화 검색 |
| `/3/search/tv` | GET | TV 프로그램 검색 |
| `/3/search/person` | GET | 배우·감독 등 인물 검색 |
| `/3/search/keyword` | GET | 키워드 검색 (장르 태그 등) |

---

### `GET /3/search/multi`

| 구분 | 내용 |
| --- | --- |
| Request | `query`(필수), `language`, `page`, `include_adult` |
| Response | `results[]: {id, media_type, title/name, ...}` |
| 관련 화면 | 검색 결과 |
| 에러 응답 | 422 query 누락 |

### `GET /3/search/movie`

| 구분 | 내용 |
| --- | --- |
| Request | `query`(필수), `language`, `page`, `year`, `include_adult` |
| Response | `results[]: {id, title, release_date, overview, poster_path, ...}` |
| 관련 화면 | 검색 결과 |
| 에러 응답 | 422 query 누락 |

### `GET /3/search/tv`

| 구분 | 내용 |
| --- | --- |
| Request | `query`(필수), `language`, `page`, `first_air_date_year`, `include_adult` |
| Response | `results[]: {id, name, first_air_date, overview, poster_path, ...}` |
| 관련 화면 | 검색 결과 |
| 에러 응답 | 422 query 누락 |

### `GET /3/search/person`

| 구분 | 내용 |
| --- | --- |
| Request | `query`(필수), `language`, `page`, `include_adult` |
| Response | `results[]: {id, name, known_for_department, profile_path, known_for[], ...}` |
| 관련 화면 | 검색 결과 |
| 에러 응답 | 422 query 누락 |

### `GET /3/search/keyword`

| 구분 | 내용 |
| --- | --- |
| Request | `query`(필수), `page` |
| Response | `results[]: {id, name}` |
| 관련 화면 | 검색 결과 |
| 에러 응답 | 422 query 누락 |
