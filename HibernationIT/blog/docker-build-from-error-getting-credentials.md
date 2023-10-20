---
tags:
  - docker
  - bug
  - develop
title: "Docker Error : docker build from error getting credentials"
created_dt: 2023-06-13
image: "[[docker-build-from-error-getting-credentials.png]]"
view: true
---
## 에러 내용
---
```shell
[+] Building 5.3s (3/3) FINISHED
  => [internal] load build definition from Dockerfile                                                               0.1s
  => => transferring dockerfile: 55B                                                                                0.0s
  => [internal] load .dockerignore                                                                                  0.0s
  => => transferring context: 2B                                                                                    0.0s
  => ERROR [internal] load metadata for docker.io/library/alpine:3.13.2                                             5.2s 
------ 
> [internal] load metadata for docker.io/library/alpine:3.13.2: 
------
failed to solve with frontend dockerfile.v0: failed to create LLB definition: rpc error: code = Unknown desc = error getting credentials - err: exit status 1, out: `error getting credentials - err: exit status 1, out: `Element nicht gefunden.``
```

## 해결 방안
---
### 도커 로그인하기
#### 원인
도커 허브에서 `FROM ~~-alpine:X.X.X`를 불러와야 하는데, 로그인이 되어있지 않아 발생하는 문제이다.

#### 해결
`docker login`을 통해 허브에 로그인하면 빌드 에러가 나지 않는다.

## 도커 로그인 실패 시
#### 원인
이미 도커 인증 관련 정보가 남아있어, 로그인이 도지 않는 경우가 있기도 하다.

#### 해결
이럴 경우에는 도커가 설치된 폴더에 `config.json`파일을 수정하여 `auths`내용과 `credsStore`내용을 지워주면 된다.
```json
{
	"auths": {},
	"credsStore": ""
}
```
위와 같이 `auths`에 빈 오브젝트를, `credsStore`에 빈 문자열을 넣어주면 된다.

### 도커 로그인을 해도 안되는 경우
#### 원인
내가 겪은 문제가 바로 이 문제였다.
도커 로그인을 했음에도 docker build 만 하면 자격 증명을 가져오지 못한다는 에러를 뱉어냈다.

구글에 검색 시 가장 먼저 나오는 깃허브 내용에서 해결책을 알려주었다.
[WSL2: docker build - error getting credentials](https://github.com/docker/for-win/issues/11261)

처음에는 WSL2 (Windows Subsystem For Linux2), 윈도우 리눅스에서만 발생하는 문제인줄 알고 그냥 넘어갔는데, 자세히 읽어보니 나와 동일한 문제를 가지고 있었다.
단순한 내 추측으로는 Mac도 리눅스 기반이다보니, 맥의 특정 버전에서 이와 같은 문제가 발생한다고 생각한다.

#### 해결
해결 방안으로는 내 도커에 **미리 사용할 이미지를 불러오는 것이다**.
`docker pull ~~-alpine:X.X.X`을 진행한 후 다시 빌드를 시도하면 정상적으로 실행되는 것을 볼 수 있다.