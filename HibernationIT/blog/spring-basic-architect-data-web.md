---
tags:
  - Backend
  - SpringBoot
  - Java
title: "[2] 스프링의 기본 아키텍트 (Data & Web)"
crated_dt: 2023-06-13
image: "[[spring-basic-architect-data-web.png]]"
view: false
---
스프링과 스프링 부트에 대해 천천히 개념 정리하며 공부하기 위한 포스팅입니다.

![image1](spring-basic-architect-data-web-1.png)

# Spring Architect - Data Acess / Intergretion

---


![image2](spring-basic-architect-data-web-2.png)

> Java Spring with Data

## JDBC

![image3](spring-basic-architect-data-web-3.png)

> 자바에서 데이터베이스에 접속할 수 있도록하는 자바 API

- 특징
	- **자바 표준 데이터 제어 인터페이스**
	- 각 **DBMS에 맞는 Driver 와 Java**를 연결
		→ DBMS 종류와 상관 없이 동일한 코드를 사용

## ORM

> 객체와 관계형 데이터베이스의 데이터를 자동으로 연결해주는 것

### JPA

> 자바의 ORM 기술 표준 인터페이스

- DB 제어를 도와주는 자바 인터페이스
- 테이브로가 자바 객체를 매핑하여 객체지향적 관리에 사용
- JDBC와 애플리케이션 사이에서 동작
### Hibernate?

![image4](spring-basic-architect-data-web-4.png)

> JPA의 구현체

### Spring Data JPA

> JPA 기반 리포지토리를 쉽게 구현할 수 있도록 해주는 모듈

- JPA를 추상화 시킨 것
- Repository 를 제공

## Transactions

> 데이터 베이스의 상태를 변화시키기 위해 수행되는 작업의 단위

- 특징
	- 원자성
		
		한 트랜젝션 = 한 작업 ( ex. 모두 성공 or 모두 실패 )
	- 일관성
		
		일관성 있는 데이터베이스 상태 유지
	- 격리성
		
		트랜잭션 별 영향의 분리
	- 지속성
		  
		트랜잭션 성공 = 결과의 저장

# Spring Architect - Web

---

## Web Socket

- Web 통신 프로토콜 중 하나
- 서버와 브라우저 ( 클라이언트 ) 간 연결을 유지한 상태로 데이터를 교환
- 데이터는 '패킷 (packet)' 형태로 전달

## Servlet

- 웹 프로그래밍에서 클라이언트 요청을 