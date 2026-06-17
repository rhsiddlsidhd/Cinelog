# TMDB API 명세서 — Cinelog

Base URL: `https://api.themoviedb.org`
인증: 모든 엔드포인트에 Bearer 토큰 (`TMDB_API_KEY`) 필수

---

## 검색

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/search/multi` | GET | 영화·TV·인물 통합 검색 |
| `/3/search/movie` | GET | 영화 검색 |
| `/3/search/tv` | GET | TV 프로그램 검색 |
| `/3/search/person` | GET | 배우·감독 등 인물 검색 |
| `/3/search/keyword` | GET | 키워드 검색 (장르 태그 등) |

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

---

## 트렌딩

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/trending/all/{time_window}` | GET | 영화·TV·인물 전체 트렌딩 목록 |
| `/3/trending/movie/{time_window}` | GET | 트렌딩 영화 목록 |
| `/3/trending/tv/{time_window}` | GET | 트렌딩 TV 프로그램 목록 |
| `/3/trending/person/{time_window}` | GET | 트렌딩 인물 목록 |

`time_window`: `day` | `week` (path 파라미터, 필수)

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

---

## 영화

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

---

## TV

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/discover/tv` | GET | 다양한 필터로 TV 시리즈 탐색 |
| `/3/tv/popular` | GET | 인기 TV 시리즈 목록 |
| `/3/tv/top_rated` | GET | 평점 상위 TV 시리즈 목록 |
| `/3/tv/on_the_air` | GET | 현재 방영 중인 TV 시리즈 목록 |
| `/3/tv/{series_id}` | GET | TV 시리즈 상세 정보 |
| `/3/tv/{series_id}/credits` | GET | 출연진 및 제작진 |
| `/3/tv/{series_id}/videos` | GET | 트레일러·클립 영상 목록 |
| `/3/tv/{series_id}/images` | GET | 포스터·배경 이미지 목록 |
| `/3/tv/{series_id}/watch/providers` | GET | 국가별 스트리밍 플랫폼 정보 |
| `/3/tv/{series_id}/recommendations` | GET | 추천 TV 시리즈 목록 |
| `/3/tv/{series_id}/similar` | GET | 유사 TV 시리즈 목록 |
| `/3/tv/{series_id}/season/{season_number}` | GET | 시즌 상세 및 에피소드 목록 |
| `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}` | GET | 에피소드 상세 정보 |

### `GET /3/discover/tv`

| 구분 | 내용 |
| --- | --- |
| Request | `with_genres`, `first_air_date_year`, `sort_by`, `vote_average.gte`, `language`, `page` 등 다수 |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 탐색 - TV 필터 |

### `GET /3/tv/popular`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page` |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 인기 TV |

### `GET /3/tv/top_rated`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page` |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | 홈 - 평점순 TV |

### `GET /3/tv/on_the_air`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page`, `timezone` |
| Response | `results[]: {id, name, first_air_date, poster_path, ...}` |
| 관련 화면 | 홈 - 현재 방영 |

### `GET /3/tv/{series_id}`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language`, `append_to_response` |
| Response | `{id, name, overview, first_air_date, genres[], seasons[], episode_run_time, ...}` |
| 관련 화면 | TV 상세 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/credits`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language` |
| Response | `{cast[]: {id, name, character, profile_path}, crew[]: {id, name, job, department}}` |
| 관련 화면 | TV 상세 - 출연진 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/videos`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language` |
| Response | `results[]: {id, key, site, type, name, ...}` |
| 관련 화면 | TV 상세 - 트레일러 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/images`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language`, `include_image_language` |
| Response | `{backdrops[], posters[], logos[]}: 각 {file_path, width, height, ...}` |
| 관련 화면 | TV 상세 - 이미지 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/watch/providers`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수) |
| Response | `results: {KR: {flatrate[], rent[], buy[]}, ...}` 국가 코드별 플랫폼 목록 |
| 관련 화면 | TV 상세 - 시청 방법 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/recommendations`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language`, `page` |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | TV 상세 - 추천 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/similar`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`(path, 필수), `language`, `page` |
| Response | `results[]: {id, name, first_air_date, poster_path, vote_average, ...}` |
| 관련 화면 | TV 상세 - 유사작 |
| 에러 응답 | 404 시리즈 없음 |

### `GET /3/tv/{series_id}/season/{season_number}`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`, `season_number`(path, 필수), `language` |
| Response | `{season_number, name, overview, air_date, episodes[]: {episode_number, name, air_date, ...}}` |
| 관련 화면 | TV 상세 - 시즌 |
| 에러 응답 | 404 시즌 없음 |

### `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}`

| 구분 | 내용 |
| --- | --- |
| Request | `series_id`, `season_number`, `episode_number`(path, 필수), `language` |
| Response | `{episode_number, name, overview, air_date, runtime, still_path, crew[], guest_stars[], ...}` |
| 관련 화면 | TV 상세 - 에피소드 |
| 에러 응답 | 404 에피소드 없음 |

---

## 인물

| Endpoint | Method | 설명 |
| --- | --- | --- |
| `/3/person/popular` | GET | 인기 인물 목록 |
| `/3/person/{person_id}` | GET | 인물 상세 정보 |
| `/3/person/{person_id}/images` | GET | 인물 프로필 이미지 목록 |
| `/3/person/{person_id}/movie_credits` | GET | 영화 출연·제작 필모그래피 |
| `/3/person/{person_id}/tv_credits` | GET | TV 출연·제작 필모그래피 |
| `/3/person/{person_id}/combined_credits` | GET | 영화·TV 출연작 통합 조회 |

### `GET /3/person/popular`

| 구분 | 내용 |
| --- | --- |
| Request | `language`, `page` |
| Response | `results[]: {id, name, known_for_department, profile_path, popularity, known_for[], ...}` |
| 관련 화면 | 인물 목록 |

### `GET /3/person/{person_id}`

| 구분 | 내용 |
| --- | --- |
| Request | `person_id`(path, 필수), `language`, `append_to_response` |
| Response | `{id, name, biography, birthday, gender, place_of_birth, profile_path, ...}` |
| 관련 화면 | 인물 상세 |
| 에러 응답 | 404 인물 없음 |

### `GET /3/person/{person_id}/images`

| 구분 | 내용 |
| --- | --- |
| Request | `person_id`(path, 필수) |
| Response | `profiles[]: {file_path, width, height, aspect_ratio, ...}` |
| 관련 화면 | 인물 상세 - 이미지 |
| 에러 응답 | 404 인물 없음 |

### `GET /3/person/{person_id}/movie_credits`

| 구분 | 내용 |
| --- | --- |
| Request | `person_id`(path, 필수), `language` |
| Response | `{cast[]: {id, title, character, release_date, ...}, crew[]: {id, title, job, ...}}` |
| 관련 화면 | 인물 상세 - 영화 필모그래피 |
| 에러 응답 | 404 인물 없음 |

### `GET /3/person/{person_id}/tv_credits`

| 구분 | 내용 |
| --- | --- |
| Request | `person_id`(path, 필수), `language` |
| Response | `{cast[]: {id, name, character, first_air_date, ...}, crew[]: {id, name, job, ...}}` |
| 관련 화면 | 인물 상세 - TV 필모그래피 |
| 에러 응답 | 404 인물 없음 |

### `GET /3/person/{person_id}/combined_credits`

| 구분 | 내용 |
| --- | --- |
| Request | `person_id`(path, 필수), `language` |
| Response | `{cast[]: {id, title/name, media_type, character, ...}, crew[]: {id, title/name, media_type, job, ...}}` |
| 관련 화면 | 인물 상세 - 출연작 |
| 에러 응답 | 404 인물 없음 |
