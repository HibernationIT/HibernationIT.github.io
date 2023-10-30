---
tags:
  - Backend
  - SpringBoot
  - Java
  - Programing
title: "[SpringBoot] Request Body와 DTO의 맵핑 원리"
created_dt: 2023-07-05
image: "[[springboot-requestbody-dto-mapping.png]]"
view: true
---
Spring Boot를 사용하여 REST API를 개발할 때, Body의 값을 가져올 때마다 한번씩 값이 `null`로 나온 경험은 누구나 한번씩은 있을 것이다.

그렇기 때문에 Spring Boot에서 Request Body를 맵핑할 때, 어떤 방식으로 DTO에 맵핑이 되는지에 대해 정리하여 기억하기 위해 정리한 포스팅 입니다.

# @RequestBody는 Setter를 사용하지 않는다

---

## 실제로 그런가?

간단하게 Post Controller를 만들어서 확인해 보자.

### 코드 작성

#### Dto 생성

```java
@Getter
@ToString
@NoArgsConstructor
public class RequestDto { 
	private String name; 
	private int age;
}
```

#### Controller 생성

```java
@RestController
public class DtoTestController {
	@PostMapping("/dto-test")
	public Object requestPost(@RequestBody RequestDto request) {
		System.out.println(request);
		return request;
	}
}
```

### 실행 결과

위와 같이 코드를 작성한 후 실행해 보면 예상과는 다르게 값이 들어가서 출력이 되는 것을 볼 수 있다.

## 왜 작동이 될까?

Spring 에서 Json 데이터의 형변환을 시켜주는 것은 `Jackson2HttpMessageConverter`를 사용한다.

때문에 실제로 변환을 진행하는 것은 `ObjectMapper` class의 함수인 `readValue`를 사용하기 때문에 `Setter`가 없더라도 정상적으로 값을 가져와서 반환하는 것이다.

# @RequestBody 없이 Body를 가져온다면?

---

## 확인해보자

이번에는 @RequestBody를 사용하지 않고 코드를 작성해보자.

### 코드 작성

#### Dto 생성

```java
@Getter
@ToString
@NoArgsConstructor
public class RequestDto {
	private String name;
	private int age;
}
```

#### Controller 생성

```java
@RestController
public class DtoTestController {
	@PostMapping("/dto-test")
	public Object requestPost(RequestDto request) {
		System.out.println(request);
		return request;
	}
}
```

### 실행 결과

위와 같은 방식으로 코드를 작성하게 된다면 `application/json` 타입이 아닌 `application/x-www-form-data` 형태로 요청이 들어오게 된다.

타입을 고려하지 않고 우선 호출 결과를 보게 된다면 Body의 값은 `null`이 들어가 있다.

## 왜 그럴까?

기본적으로 `@PostMapping`과 같은 어노테이션이 붙은 함수의 파라미터는 `@RequestParam`이 붙어 있다고 보면 되는데, 이 `@RequestParam`이 붙은 인자의 타입이 String이 아닐 경우 `Type Conversion`이 자동으로 적용된다.

그런데 이 `Type Conversion`이 타입을 변환하는 방법이 `DataBinder`이다.

이 `DataBinder`는 **Java Bean Spec**을 따르기 때문에 `Setter`가 필요한 것이다.

> **Java Bean Spec**
> 
> 1. 기본 생성자를 가지고 있어야 한다.
> 2. 인스턴스 변수는 private 접근 지정자여야 한다.
> 3. public의 `getter`와 `setter`를 가지고 있어야 한다.

생성자를 통해 새로운 `instance`를 만들고, `Setter`를 통해 값을 넣어주기 때문에 `@RequestParam`에서는 기본 생성자와 `Setter`가 필요한 것이다.