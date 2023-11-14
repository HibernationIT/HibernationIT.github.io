---
tags:
  - Backend
  - Server
  - Oracle
title: 오라클 클라우드 무료쿠버네티스 (K3S) 서버에 인증서 달기
created_dt: 2023-11-12
image: "[[oracle-cloud-with-k3s-tls.png]]"
view: false
---

이전 포스팅에서 서버를 구축하는 것에는 성공했으나 대부분의 페이지는 도메인 인증을 받고 https 로 접속하게 된다.

그렇기 때문에 이번 포스팅에서는 무료 인증서를 3개월마다 자동 갱신해주도록 인증서 시스템을 구축할 것이다.

# 자동 인증서 구축하기

---

## Cert-Manager 설치하기

cert-manager를 설치하는 방법은 이전 포스팅의 K3S 설치하는 것과 같이 단 한줄의 명령어로 쉽게 가능하다.

[cert-manager kubectl apply](https://cert-manager.io/docs/installation/kubectl/)

cert-manager의 문서에 kubectl apply를 참고하여 실행하였다.

```shell
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.yaml
```

위 명령어를 실행하면 엄청나게 많은 양의 파일을 자동으로 import 해준다.

아래 명령어를 실행하여 잘 설치 되었는지 확인할 수 있다.

```shell
kubectl get pods -n cert-manager
```

## CloudFlare 설정하기

cloudflare에 회원가입을 하고, 