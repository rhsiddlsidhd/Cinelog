# 인물 API — Cinelog

Base URL: `https://api.themoviedb.org`
인증: Bearer 토큰 (`TMDB_API_KEY`) 필수

| Endpoint                                 | Method | 설명                      |
| ---------------------------------------- | ------ | ------------------------- |
| `/3/person/popular`                      | GET    | 인기 인물 목록            |
| `/3/person/{person_id}`                  | GET    | 인물 상세 정보            |
| `/3/person/{person_id}/images`           | GET    | 인물 프로필 이미지 목록   |
| `/3/person/{person_id}/movie_credits`    | GET    | 영화 출연·제작 필모그래피 |
| `/3/person/{person_id}/tv_credits`       | GET    | TV 출연·제작 필모그래피   |
| `/3/person/{person_id}/combined_credits` | GET    | 영화·TV 출연작 통합 조회  |

---

### `GET /3/person/popular`

| 구분      | 내용                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| Request   | `language`, `page`                                                                        |
| Response  | `results[]: {id, name, known_for_department, profile_path, popularity, known_for[], ...}` |
| 관련 화면 | 인물 목록                                                                                 |

### `GET /3/person/{person_id}`

| 구분      | 내용                                                                         |
| --------- | ---------------------------------------------------------------------------- |
| Request   | `person_id`(path, 필수), `language`, `append_to_response`                    |
| Response  | `{id, name, biography, birthday, gender, place_of_birth, profile_path, ...}` |
| 관련 화면 | 인물 상세                                                                    |
| 에러 응답 | 404 인물 없음                                                                |

### `GET /3/person/{person_id}/images`

| 구분      | 내용                                                        |
| --------- | ----------------------------------------------------------- |
| Request   | `person_id`(path, 필수)                                     |
| Response  | `profiles[]: {file_path, width, height, aspect_ratio, ...}` |
| 관련 화면 | 인물 상세 - 이미지                                          |
| 에러 응답 | 404 인물 없음                                               |

### `GET /3/person/{person_id}/movie_credits`

| 구분      | 내용                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| Request   | `person_id`(path, 필수), `language`                                                  |
| Response  | `{cast[]: {id, title, character, release_date, ...}, crew[]: {id, title, job, ...}}` |
| 관련 화면 | 인물 상세 - 영화 필모그래피                                                          |
| 에러 응답 | 404 인물 없음                                                                        |

### `GET /3/person/{person_id}/tv_credits`

| 구분      | 내용                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| Request   | `person_id`(path, 필수), `language`                                                  |
| Response  | `{cast[]: {id, name, character, first_air_date, ...}, crew[]: {id, name, job, ...}}` |
| 관련 화면 | 인물 상세 - TV 필모그래피                                                            |
| 에러 응답 | 404 인물 없음                                                                        |

### `GET /3/person/{person_id}/combined_credits`

| 구분      | 내용                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------- |
| Request   | `person_id`(path, 필수), `language`                                                                      |
| Response  | `{cast[]: {id, title/name, media_type, character, ...}, crew[]: {id, title/name, media_type, job, ...}}` |
| 관련 화면 | 인물 상세 - 출연작                                                                                       |
| 에러 응답 | 404 인물 없음                                                                                            |
