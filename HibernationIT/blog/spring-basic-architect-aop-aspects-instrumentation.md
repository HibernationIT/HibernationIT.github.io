---
tags:
  - Backend
  - SpringBoot
  - Java
title: "[3] 스프링의 기본 아키텍트 (AOP & Aspects & Instrumentation)"
created_dt: 2023-06-24
image: "[[spring-basic-architect-aop-aspects-instrumentation.png]]"
view: true
---
스프링과 스프링 부트에 대해 천천히 개념 정리하며 공부하기 위한 포스팅입니다.

![image1](spring-basic-architect-aop-aspects-instrumentation-1.png)

# Spring Architect - Aspects

---

## Aspect 란?

> 관점을 뜻하는 단어로, 비즈니스 로직 ( 비즈니스 관점 )과 관계가 없지만, 반복적으로 사용되는 로직을 하나로 모은 것.

### 주요 사용 위치

- 로깅
	
- 트랜잭션
	
- 보안
	
- 인증
	
- 캐싱
	
- 반복되고 공통적인 로직

# Spring Architect - AOP

---

## AOP ( Aspect-Oriented Programming )이란?

> **관점 지향 프로그래밍**
> 
> 핵심 로직과 부과 기능을 분리하여 애플리케이션 전체에 사용되는 부가 기능을 모듈화하여 재사용할 수 있도록 하는 것.

### AOP 주요 개념

- **Aspect**
	
	반복되는 코드 ( 로직 )을 모듈화 한 것.
	
- **Target**
	
	Aspect를 적용하는 곳
	
- **Advice**
	
	실질적으로 어떤 일을 해야할 지에 대한 것
	
- **JointPoint**
	
	Advice가 적용될 위치
	
	생성자 호출 시점
	
- **PointCut**
	
	JointPoint의 상세한 스펙을 정의한 것
	
	특정 메서드의 진입 시 호출 또는 메서드 종료 시 호출과 같은 더 구체적인 실행 시점 정의

### AOP의 장점

- 각 문제에 대한 논리가 소스코드 전체에 흩어지지 않고 한 곳에 존재한다.
	
- 비즈니스 모듈에는 비즈니스에 필요한 로직만 포함된다.
	
- 비즈니스 코드를 수정하지 않고 공통적인 내용에 대한 수정이 가능하다.

# Spring Architect - Instrumentation

---

## Instrumentation 이란?

> 오류를 진단하거나 추적 정보를 쓰기 위해 성능 정도를 모니터링 하거나 측정하는 기능

## Spring-instrument 란?

- instrumentation을 지원하는 클래스와 특정 WAS에서 사용하는 클래스
    
- 구현체를 제공
    
- BCI(Byte Code Instrumenation)를 통한 기능 제공
    
    BCI : 자바의 Byte Code에 대해 직접 수정을 거쳐서 소스 파일의 수정 없이 기능을 부여하는 기법
    
- 톰캣용 위빙 에이전트 제공