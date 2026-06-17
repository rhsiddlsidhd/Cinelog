# 영화 API — Cinelog

Base URL: `https://api.themoviedb.org`
인증: Bearer 토큰 (`TMDB_API_KEY`) 필수

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/discover/movie` | GET | 다양한 필터로 영화 탐색 |
| `/3/movie/popular` | GET | 인기 영화 목록 |
| `/3/movie/top_rated` | GET | 평점 상위 영화 목록 |
| `/3/movie/now_playing` | GET | 현재 상영 중인 영화 목록 |
| `/3/movie/upcoming` | GET | 개봉 예정 영화 목록 |
| `/3/movie/{movie_id}` | GET | 영화 상세 정보 |
| `/3/movie/{movie_id}/credits` | GET | 출연진 및 제작진 |
| `/3/movie/{movie_id}/videos` | GET | 트레일러·클립 영상 목록 |
| `/3/movie/{movie_id}/images` | GET | 포스터·배경 이미지 목록 |
| `/3/movie/{movie_id}/watch/providers` | GET | 국가별 스트리밍 플랫폼 정보 |
| `/3/movie/{movie_id}/recommendations` | GET | 추천 영화 목록 |
| `/3/movie/{movie_id}/similar` | GET | 유사 영화 목록 |

---

### `GET /3/discover/movie`

| 구분 | 내용 |
| --- | --- |
| Request | `with_genres`, `primary_release_year`, `sort_by`, `vote_average.gte`, `language`, `page` 등 다수 |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 탐색 - 영화 필터 |

### `GET /3/movie/popular`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page`, `region` |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 인기 영화 |

### `GET /3/movie/top_rated`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page`, `region` |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 평점순 |

### `GET /3/movie/now_playing`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page`, `region` |
| Response | `results[]: {id, title, release_date, poster_path, ...}, dates: {maximum, minimum}` |
| 관련 화면 | 홈 - 현재 상영 |

### `GET /3/movie/upcoming`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page`, `region` |
| Response | `results[]: {id, title, release_date, poster_path, ...}, dates: {maximum, minimum}` |
| 관련 화면 | 홈 - 개봉 예정 |

### `GET /3/movie/{movie_id}`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language`, `append_to_response` |
| Response | `{id, title, overview, release_date, genres[], runtime, vote_average, poster_path, ...}` |
| 관련 화면 | 영화 상세 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/credits`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language` |
| Response | `{cast[]: {id, name, character, profile_path}, crew[]: {id, name, job, department}}` |
| 관련 화면 | 영화 상세 - 출연진 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/videos`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language` |
| Response | `results[]: {id, key, site, type, name, ...}` (site: YouTube 등) |
| 관련 화면 | 영화 상세 - 트레일러 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/images`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language`, `include_image_language` |
| Response | `{backdrops[], posters[], logos[]}: 각 {file_path, width, height, ...}` |
| 관련 화면 | 영화 상세 - 이미지 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/watch/providers`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수) |
| Response | `results: {KR: {flatrate[], rent[], buy[]}, ...}` 국가 코드별 플랫폼 목록 |
| 관련 화면 | 영화 상세 - 시청 방법 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/recommendations`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language`, `page` |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 영화 상세 - 추천 |
| 에러 응답 | 404 영화 없음 |

### `GET /3/movie/{movie_id}/similar`

| 구분 | 내용 |
| --- | --- |
| Request | `movie_id`(path, 필수), `language`, `page` |
| Response | `results[]: {id, title, release_date, poster_path, vote_average, ...}` |
| 관련 화면 | 영화 상세 - 유사작 |
| 에러 응답 | 404 영화 없음 |
