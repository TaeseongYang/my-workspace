# Context
사용자가 워크스페이스 루트에 빈 `test.txt` 파일 생성을 요청했습니다.

# Plan

## 작업
- `C:\Users\user\my-workspace\test.txt` 빈 파일 생성

## 구현
Write 도구를 사용해 내용이 없는 `test.txt` 파일을 루트 경로에 생성합니다.

## 검증
- 파일이 `C:\Users\user\my-workspace\test.txt` 경로에 존재하는지 Glob으로 확인
