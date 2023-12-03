---
tags:
  - Backend
  - SpringBoot
  - Java
  - Programing
title: "[SpringBoot] JPA 기본키 매핑 @GeneratedValue 종류와 사용"
created_dt: 2023-12-03
image: "[[springboot-jpa-generated-value.png]]"
view: true
---
JPA를 사용할 때, 데이터베이스의 테이블과 엔티티를 맵핑할 때, Key로 사용할 필드 위에 `@Id` 어노테이션을 사용하여 테이블의 Primary Key와 연결할 수 있다.

하지만 이렇게 만든 Primary Key는 데이터베이스에서 DML을 사용하여 값을 넣을 때 처럼 꼭 키에도 값을 넣어줘야 한다.

이런 불편함을 해결하기 위해 데이터베이스는 시퀀스(Sequence)를 만들어서 사용하는데, `@GeneratedValue`를 사용하면 JPA에서 시퀀스를 만들거나 시퀀스와 같은 기능을 구현할 수 있다.

JPA에서는 시퀀스와 같은 기능을 구현하기 위한 방법으로 대략 4가지를 지원하는데, 이를 하나하나 알아볼 시간을 가질 것이다.

# GenerationType.AUTO 옵션

---

`Hibernate.dialect`에 **설정된 DB 종류**에 따라 자동으로 `IDNTITY`, `SEQUENCE`, `TABLE` 중 하나로 선택하여준다.

```java
@Id @GeneratedValue(strategy = GenergationType.AUTO)
private Long id;
```

말 그대로 자동으로 선택해주기 때문에 어떤 방식을 선택할지는 모르기 때문에 주의하여 사용해야한다.

# GenerationType.IDENTITY 옵션

---

```java
@Id @GeneratedValue(strategy = GenergationType.IDENTITY)
private Long id;
```

`IDENTITY` 방식은 기본 키 생성을 데이터베이스에 위임하는 방식이다.

데이터베이스에서 테이블을 생성할 때 Primary Key에 `AUTO_INCREMENT` 속성을 추가하여 자동으로 증가시키는 기능을 사용하는 것이다.

# GenerationType.SEQUENCE 옵션

---

```java
@Entity
@SequenceGenerator(
	name = “ENTITY_SEQ_GENERATOR",
	sequenceName = “ENTITY_SEQ",
	initialValue = 1,
	allocationSize = 50
)
public class EntityName {

	@Id @GeneratedValue(strategy = GenergationType.SEQUENCE)
	private Long id;

}
```

`SEQUENCE` 방식은 Database에서 `AUTO_INCREMENT`를 사용하는 것이 아닌 `Sequence`를 생성하여 사용하는 방식이다.

이렇게만 본다면 방식의 차이일 뿐, `IDENTITY`와 동일하게 데이터베이스에 기본 키 생성을 위임하는 것인데, 큰 차이가 있다면 JPA의 로직이 다르다.

## SEQUENCE와 IDENTITY 방식 차이

`SEQUENCE` 방식은 엔티티 저장을 위해 `EntityManager`의 `persist()` 함수가 실행되기 전에 데이터베이스 시퀀스를 조회하여 식별자를 먼저 조회하고 조회한 식별자를 엔티티에 할당한 후 영속성 컨텍스트에 저장한다.

이후 트랜잭션 커밋 시점에 엔티티를 데이터베이스에 저장하는 방식이다.

`IDENTITY` 방식은 `EntityManager`의 `persist()` 함수로 객체를 영속화 시키는 시점에 바로 insert 쿼리가 DB로 전송되고 거기서 받은 식별자 값을 엔티티에 할당한 후 영속성 컨텍스트에 저장한다.

위와 같이 데이터베이스에 저장하는 시점과 방식이 다르다.

# GenerationType.TABLE 옵션

---

```java
@Entity
@SequenceGenerator(
	name = “ENTITY_SEQ_GENERATOR",
	table = “SEQUENCES_TBL",
	pkColumnValue = "ENTITY_SEQ",
	allocationSize = 50
)
public class EntityName {

	@Id @GeneratedValue(strategy = GenergationType.TABLE)
	private Long id;

}
```

이는 키 생성 전용 테이블을 생성하여 데이터베이스 시퀀스 역할을 하는 것이다.

모든 데이터베이스에서 사용할 수 있으나, 성능적으로 다른 방식에 비해 손해가 있기 때문에 많이 사용하지 않는 편이 좋다.

## 마치며

이렇게 JPA를 사용할 때 거의 필수적으로 사용하는 `@GeneratedValue` 의 방식 4가지에 대해 알아보았다.

데이터베이스 종류에 따라 지원하지 않는 종류가 있을 수 있으니, 사용시에는 데이터베이스가 `AUTO_INCREMENT`를 지원하는지, `Sequence`를 지원하는지 잘 확인한 후에 사용해야한다.