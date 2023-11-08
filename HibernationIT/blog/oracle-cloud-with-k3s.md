---
tags:
  - Backend
  - Server
  - Oracle
title: 오라클 클라우드에 무료로 쿠버네티스 (K3S) 서버 구축하기
created_dt: 2023-11-08
image: "[[oracle-cloud-with-k3s.png]]"
view: false
---
오라클 **Free tier**를 사용하여 도커로 웹서버를 올리다가 리소스 낭비가 큰 것 같아, 쿠버네티스를 활용하여 서버를 구축하기로 했다.

아주 많은 시행착오를 통해 다른 사람들은 보다 쉽게 무료 서버를 구축하길 바라며 포스팅을 작성한다.

# K3S 설치하기

---

## 인스턴스 준비

**Ubuntu 22.04** 버전을 사용하여 인스턴스를 만들었다는 가정 하에 포스팅을 작성하였다.

본인이 마스터 노드와 워커 노드로 분리하고 싶다면 `2Core 12GB`의 사양으로 인스턴스 두개를 만들면 된다.

나는 아이피가 두개로 나뉘는 것이 싫어서 그냥 하나의 인스턴스로 만들었다.

ssh 클라이언트를 사용하여 인스턴스에 접속한다.

현재 포스팅은 23년 11월에 진행한 내용이다. 나중에 이 포스팅을 보고 따라한다면 K3S 버전 이나 우분투 버전 등의 문제가 많을 수 있으니 참고만 하길 바란다.

## K3S 설치하기

K3S의 설치는 정말 정말 간단하다.

~~이후의 설정이나 인증서가 문제가 많을 뿐..~~

아래 명령어를 입력하고 기다려 준다.

```shell
curl -sfL https://get.k3s.io | sh -
```

아래와 같은 출력이 생기면서 마지막에 `systemd: Starting k3s`라는 문구를 본다면 잘 설치가 된 것이다.

```shell
[INFO] Finding release for channel stable
[INFO] Using v1.27.7+k3s1 as release
...
[INFO] systemd: Starting k3s
```

출력 문구에도 보이듯, 현재 설치된 쿠버네티스 버전은 `1.27.7+k3s1` 버전이다.

## K3S 설치 확인하기

위 명령어를 통해 설치된 쿠버네티스는 service로 실행이 된다.

아래 명령어를 통해 실행 여부를 확인할 수 있다.

```shell
sudo systemctl status k3s
```

## 외부에서 접속하기 위한 설정

`kubectl`의 경우 6443 포트를 사용하기 때문에 오라클 서브넷에서 해당 포트를 열어주도록 하자.

위 명령어를 통해 k3s를 설치하게 되면 자동으로 `kubectl`도 같이 설치 된다.

하지만 인스턴스에 설치된 것이지, 외부에서 쿠버네티스 관리가 불가능하다.

때문에 외부에서도 접속할 수 있도록 K3S에서 제공하는 설정파일을 가져오도록 하자.

```shell
sudo cat /etc/rancher/k3s/k3s.yaml
```

출력 결과

```yml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ~
    server: https://127.0.0.1:6443
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name:
  user:
    client-certificate-data: ~
    client-key-data: ~
```

위 명령어를 통해 출력된 내용이 필요한 것이기 때문에 출력 내용을 복사해오거나, scp를 통해 내 PC에 다운로드 받아서 보관한다.

이제 이 파일을 ~/.kube 폴더 안에 원하는 이름의 파일을 생성하여 위에서 가져온 내용을 붙여넣는다.

다만 이 파일의 내용을 보면 이름이 default로 되어있으며, 아이피가 로컬 아이피로 되어있다.

아이피를 해당 인스턴스의 외부 아이피로 설정하고, 클러스터를 하나만 관리한다면 상관이 없지만 여러개를 관리할 경우 default로 되어있으면 이게 어떤 클러스터인지 알 수 없기 때문에 이름을 변경하여 저장해준다.

마지막으로 아래의 명령어를 통해 환경 변수에 내가 만든 config 파일을 추가해준다.

```shell
export KUBECONFIG=$HOME/.kube/{내가만든 파일명}:$KUBECONFIG
```

## 외부에서 접속하기

환경 변수만 수정했으니, context를 선택하여 주도록 한다.

```shell
kubectl config use-context {위에서 설정한 이름}
```

이제 외부에서 접속할 수 있도록 설정이 끝났다.

아래 명령어를 통해 서버의 노드를 확인해보자

```shell
kubectl get node
```

아마 `:6443 was refused - did you specify the right host or port?`라는 에러가 나면서 에러가 날 것이다.

이것이 내가 겪은 첫번째 문제다.

## 방화벽 제거하기

우선 먼저 결론을 말하자면 인스턴스의 방화벽이 살아있어서 생긴 문제다.

K3S를 설치하면 자동으로 iptables 방화벽을 세팅해주는데 이것으로 인해 발생한 접속 문제이다.

분명 `service iptables status`명령어를 확인해보면 꺼져있었기에 대체 무엇이 문제인지 꽤 오래 헤맸다.

나는 Oracle Cloud 외 다른 대부분의 클라우드 플랫폼은 따로 서버에 대한 서브넷 관리가 가능하니

인스턴스 내부의 방화벽은 오히려 시스템 구축에 방해가 된다고 생각하여 방화벽에 포트를 열어주는 것이 아닌 방화벽을 제거해줬다.

```shell
sudo iptables -F
```

위 명령어를 통해 iptables에 설정된 값을 초기화 하여 해결해 주었다.

자 다시 노드를 확인해보자

```shell
kubectl get node
```

방화벽 문제를 해결하자마자 다음 문제가 터졌다.

`x509: certificate is valid for 127.0.0.1` 이번엔 인증서가 127.0.0.1 에서만 유효하다고 한다.

## 인증서 오류 수정

