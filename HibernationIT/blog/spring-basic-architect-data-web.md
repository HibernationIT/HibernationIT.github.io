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


## JPA

> 자바의 ORM 기술 표준 인터페이스

- DB 제어를 도와주는 자바 인터페이ㅅ