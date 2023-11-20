---
tags:
  - Backend
  - Server
  - Oracle
title: 오라클 클라우드 무료쿠버네티스 (K3S) 서버에 인증서 달기
created_dt: 2023-11-20
image: "[[oracle-cloud-with-k3s-tls.png]]"
view: true
---
이전 포스팅에서 서버를 구축하는 것에는 성공했으나 대부분의 페이지는 도메인 인증을 받고 https 로 접속하게 된다.

그렇기 때문에 이번 포스팅에서는 무료 인증서를 3개월마다 자동 갱신해주도록 인증서 시스템을 구축할 것이다.

물론 아이피 주소는 특별한 설정을 하지 않으면, https를 지원하지 않기 때문에 도메인을 구매하여 내 소유의 도메인이 있다는 전재하에 아래 내용을 진행하면 된다.

# 자동 인증서 구축하기

---

## CloudFlare 설정하기

cloudflare에 회원가입을 하고, 사이트를 추가한다.

도메인 추가 및 기본적인 설정은 다른 블로그를 참고하여 진행하면 된다.

## Cert-Manager 설치하기

이제 모든 준비가 끝났으니 Kubernetes에서 인증서 발급 애플리케이션을 생성하면 된다.

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

## 인증서 발급기 Issuer 생성하기

인증서를 자동으로 발급 / 갱신 해주는 애플리케이션 cert-manager를 설치하였으니 사용을 할 시간이다.

인증서를 발급하기 위해서는 도메인이 내 것이라는 인증을 해주어야 하는데, 이를 CloudFlare의 API를 통해 간편하게 할 수 있다.

CloudFlare에서 사용자 API 토큰을 가져온다.

[사용자 API토큰](https://dash.cloudflare.com/profile/api-tokens)

아래 yaml 파일을 적용하여 cloudflare의 API Token과 Issuer를 kubernetes에 올린다.

```yaml
apiVersion: v1
kind: Secret
metadata: 
  name: cloudflare-api-token-secret
type: Opaque
stringData: 
  api-token: <API Token>
```

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata: 
  name: tls-issuer
spec:
  acme:
    email: hbnation.it@gmail.com
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: tls-key
    solvers:
    - dns01:
        cloudflare:
          apiTokenSecretRef:
            name: cloudflare-api-token-secret #위 secret의 name과 동일
            key: api-token #위 stringData 아래 키와 동일
```

## 내 서버를 외부로 노출하기

Issuer까지 생성하였다면 이제 내 서버를 외부로 노출하기 위한 ingress를 설정하면 된다.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: master-ing
spec:
  ingressClassName: traefik
  tls:
  - hosts:
    - "*.temp.com" # 내 도메인을 입력해주면 된다.
    secretName: tls-key # 위 issuer에서 설정한 privateKeySecretRef의 name과 동일
  rules:
    - host: temp.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: {내 애플리케이션 서비스 이름}
                port:
                  number: {내 애플리케이션 서비스 포트}
    - host: test.temp.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: {내 애플리케이션 서비스 이름}
                post:
                  number: {내 애플리케이션 서비스 포트}
```

## 도메인과 서비스 연결하기

이제부터는 서브도메인을 내가 원하는 만큼 추가할 수 있다.

![image1](oracle-cloud-with-k3s-tls-1.png)

유형은 A, 아이피에는 본인 오라클 서버의 외부 아이피를, 이름에는 서브 도메인을 입력하면 된다.

위 ingress 설정과 같이 레코드를 추가한다면 아래와 같이 추가하면 된다.

|이름|주소|
|---|---|
|@|내 서버 아이피|
|test|내 서버 아이피|

이제 아이피 하나로 여러 도메인으로 애플리케이션을 추가할 수 있게 되었다.

## 마치며

서버 생성부터 K3S 설치, 외부 접속하기, 자동인증서 구축하기 정말 다사다난 하였지만, 이제 인증서 걱정 없이 원하는 서비스를 서브도메인으로 마음것 추가할 수 있게 되었다.

모두 오라클 클라우드로 나만의 무료 웹서버를 실컷 즐길 수 있길 바라며 K3S에 대한 포스팅을 마친다.

*잘못된 정보의 비판은 언제든 환영입니다.*