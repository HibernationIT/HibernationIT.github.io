---
tags:
  - Backend
  - SpringBoot
  - Java
title: "[1] 스프링? 스프링 부트? 개념 정리"
created_dt: 2023-04-28
image: "[[spring-springboot.png]]"
view: true
---
스프링과 스프링 부트에 대해 천천히 개념 정리하며 공부하기 위한 포스팅입니다.

# What is Spring?

---

## 1. 스프링이란?

![image1](spring-springboot-1.png)

### Spring?

- 자바 기반의 웹 어플리케이션을 만들 수 있는 **프레임 워크(Framework)**이다.
	- 프레임워크에 대해 모르겠다면?
	  
		[프레임워크, 라이브러리, 모듈, 패키지 개념 정리](https://hibernationit.github.io/blog/framework-library-module-package/)

## 2. 스프링의 특징

1. 자바 객체 & 라이브러리의 관리가 편리하다.
2. WAS ( ex. Tomcat )가 내장되어 있다.
3. 기존 웹 서버 개발에 필요한 코드 양에 비해 적은 코드를 가지고 만들 수 있다.
4. **IOC ( Inversion Of Control )** 을 지원한다.
	- 객체의 생성 & 소멸을 스프링이 제어 → 생성된 객체를 스프링이 관리
5. **DI ( Dependency Injection )** 을 기반으로 작동한다.
	- 객체를 외부에서 생성하여 사용하려는 객체에게 제공

# What is Spring Boot?

---

## 1. 스프링 부트란?

![image2](spring-springboot-2.png)

### Spring Boot?

- **스프링** 을 더 쉽게 사용하기 위한 **도구** 이다.

### Why use it?

- 기존 스프링의 경우, 처음 프로젝트 사용을 위한 **기본 설정을 직접 진행한다**.
	→ Spring 의 많은 부분을 자동화 하여 **비즈니스 부분에 집중**하기 위해 사용한다.

# Spring Modules

---

![image3](spring-springboot-3.png)

### Spring 모듈 종류?

- Data Access / Integration
	
	데이터 통합 접근 관련 모듈
- Web
	
	웹 통신 모듈
- AOP & Aspects
  
	AOP ( Aspect-Oriented Programing ):
	
	핵심 로직을 포함하여 기능들을 분리하여 모듈화 하여 재사용할 수 있게 해주는 모듈
	
	Aspects:
	
	AOP의 기본 모듈로, 부가 기능을 정의한 코드와 정의한 코드를 어디에 적용할 지를 결정하는 포인트를 합친 개념
- Instrumentation
	
	JVM ( Java Vertual Machine )에 사용자 입력에 따른 서비스를 수행하는 프로그램을 추가하는 모듈
- Messaging
	
	메시지라는 개념 기반 애플리케이션을 작성할 수 있도록 도와주는 모듈
- Core Container
	
	스프링 프레임워크의 핵심인 빈(객체) 생명주기와 설정, 처리를 관리하는 컨테이너(모듈)
- Test
	
	테스트를 진행할 수 있도록 해주는 모듈