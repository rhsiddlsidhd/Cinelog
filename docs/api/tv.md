# TV API — Cinelog

Base URL: `https://api.themoviedb.org`
인증: Bearer 토큰 (`TMDB_API_KEY`) 필수

| Endpoint                                                            | Method | 설명                          |
| ------------------------------------------------------------------- | ------ | ----------------------------- |
| `/3/discover/tv`                                                    | GET    | 다양한 필터로 TV 시리즈 탐색  |
| `/3/tv/popular`                                                     | GET    | 인기 TV 시리즈 목록           |
| `/3/tv/top_rated`                                                   | GET    | 평점 상위 TV 시리즈 목록      |
| `/3/tv/on_the_air`                                                  | GET    | 현재 방영 중인 TV 시리즈 목록 |
| `/3/tv/{series_id}`                                                 | GET    | TV 시리즈 상세 정보           |
| `/3/tv/{series_id}/credits`                                         | GET    | 출연진 및 제작진              |
| `/3/tv/{series_id}/videos`                                          | GET    | 트레일러·클립 영상 목록       |
| `/3/tv/{series_id}/images`                                          | GET    | 포스터·배경 이미지 목록       |
| `/3/tv/{series_id}/watch/providers`                                 | GET    | 국가별 스트리밍 플랫폼 정보   |
| `/3/tv/{series_id}/recommendations`                                 | GET    | 추천 TV 시리즈 목록           |
| `/3/tv/{series_id}/similar`                                         | GET    | 유사 TV 시리즈 목록           |
| `/3/tv/{series_id}/season/{season_number}`                          | GET    | 시즌 상세 및 에피소드 목록    |
| `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}` | GET    | 에피소드 상세 정보            |

---

### `GET /3/discover/tv`

| 구분      | 내용                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| Request   | `with_genres`, `first_air_date_year`, `sort_by`, `vote_average.gte`, `language`, `page` 등 다수 |
| Response  | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}`                         |
| 관련 화면 | 탐색 - TV 필터                                                                                  |

### `GET /3/tv/popular`

| 구분      | 내용                                                                    |
| --------- | ----------------------------------------------------------------------- |
| Request   | `language`, `page`                                                      |
| Response  | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 인기 TV                                                            |

### `GET /3/tv/top_rated`

| 구분      | 내용                                                                    |
| --------- | ----------------------------------------------------------------------- |
| Request   | `language`, `page`                                                      |
| Response  | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 평점순 TV                                                          |

### `GET /3/tv/on_the_air`

| 구분      | 내용                                                      |
| --------- | --------------------------------------------------------- |
| Request   | `language`, `page`, `timezone`                            |
| Response  | `results[]: {id, name, first_air_date, poster_path, ...}` |
| 관련 화면 | 홈 - 현재 방영                                            |

### `GET /3/tv/{series_id}`

| 구분      | 내용                                                                               |
| --------- | ---------------------------------------------------------------------------------- |
| Request   | `series_id`(path, 필수), `language`, `append_to_response`                          |
| Response  | `{id, name, overview, first_air_date, genres[], seasons[], episode_run_time, ...}` |
| 관련 화면 | TV 상세                                                                            |
| 에러 응답 | 404 시리즈 없음                                                                    |

### `GET /3/tv/{series_id}/credits`

| 구분      | 내용                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| Request   | `series_id`(path, 필수), `language`                                                  |
| Response  | `{cast[]: {id, name, character, profile_path}, crew[]: {id, name, job, department}}` |
| 관련 화면 | TV 상세 - 출연진                                                                     |
| 에러 응답 | 404 시리즈 없음                                                                      |

### `GET /3/tv/{series_id}/videos`

| 구분      | 내용                                          |
| --------- | --------------------------------------------- |
| Request   | `series_id`(path, 필수), `language`           |
| Response  | `results[]: {id, key, site, type, name, ...}` |
| 관련 화면 | TV 상세 - 트레일러                            |
| 에러 응답 | 404 시리즈 없음                               |

### `GET /3/tv/{series_id}/images`

| 구분      | 내용                                                                    |
| --------- | ----------------------------------------------------------------------- |
| Request   | `series_id`(path, 필수), `language`, `include_image_language`           |
| Response  | `{backdrops[], posters[], logos[]}: 각 {file_path, width, height, ...}` |
| 관련 화면 | TV 상세 - 이미지                                                        |
| 에러 응답 | 404 시리즈 없음                                                         |

### `GET /3/tv/{series_id}/watch/providers`

| 구분      | 내용                                                                      |
| --------- | ------------------------------------------------------------------------- |
| Request   | `series_id`(path, 필수)                                                   |
| Response  | `results: {KR: {flatrate[], rent[], buy[]}, ...}` 국가 코드별 플랫폼 목록 |
| 관련 화면 | TV 상세 - 시청 방법                                                       |
| 에러 응답 | 404 시리즈 없음                                                           |

### `GET /3/tv/{series_id}/recommendations`

| 구분      | 내용                                                                    |
| --------- | ----------------------------------------------------------------------- |
| Request   | `series_id`(path, 필수), `language`, `page`                             |
| Response  | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | TV 상세 - 추천                                                          |
| 에러 응답 | 404 시리즈 없음                                                         |

### `GET /3/tv/{series_id}/similar`

| 구분      | 내용                                                                    |
| --------- | ----------------------------------------------------------------------- |
| Request   | `series_id`(path, 필수), `language`, `page`                             |
| Response  | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | TV 상세 - 유사작                                                        |
| 에러 응답 | 404 시리즈 없음                                                         |

### `GET /3/tv/{series_id}/season/{season_number}`

| 구분      | 내용                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------- |
| Request   | `series_id`, `season_number`(path, 필수), `language`                                           |
| Response  | `{season_number, name, overview, air_date, episodes[]: {episode_number, name, air_date, ...}}` |
| 관련 화면 | TV 상세 - 시즌                                                                                 |
| 에러 응답 | 404 시즌 없음                                                                                  |

### `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}`

| 구분      | 내용                                                                                          |
| --------- | --------------------------------------------------------------------------------------------- |
| Request   | `series_id`, `season_number`, `episode_number`(path, 필수), `language`                        |
| Response  | `{episode_number, name, overview, air_date, runtime, still_path, crew[], guest_stars[], ...}` |
| 관련 화면 | TV 상세 - 에피소드                                                                            |
| 에러 응답 | 404 에피소드 없음                                                                             |
