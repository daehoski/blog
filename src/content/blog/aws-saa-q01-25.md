---
title: "AWS SAA 실전 시나리오 정리: 문제 1~25번 (실제 기출)"
description: "실제 SAA-C03 기출문제 1~25번을 시나리오 형식으로 완벽 해설 - S3, EC2, RDS, SQS, Lambda 핵심 패턴"
pubDate: "Mar 19 2026"
heroImage: '../../assets/blog-placeholder-1.jpg'
---

# AWS SAA 실전 기출문제 정리 (1~25번)

> 실제 Examtopics SAA-C03 기출문제를 **[상황] → [요구사항] → [정답·해설]** 형식으로 정리했습니다.  
> 👇 보기와 정답은 **클릭하면 펼쳐집니다!**

---

## Q1. 글로벌 사이트 데이터 빠르게 S3로 집계

**[상황]** 회사는 여러 대륙에 걸쳐 도시의 온도·습도·대기압 데이터를 수집합니다. 각 사이트에서 하루 평균 500GB를 수집하며, 각 사이트에는 고속 인터넷이 연결되어 있습니다. 모든 글로벌 사이트의 데이터를 **단일 Amazon S3 버킷**에 집계하려 합니다.

**[요구사항]** 최대한 빠르게, 운영 복잡성을 최소화하여 집계해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 대상 S3 버킷에서 **S3 Transfer Acceleration**을 켜고 멀티파트 업로드로 직접 업로드
- **B.** 가까운 리전 S3 버킷에 올린 후 교차 리전 복제(CRR) 사용
- **C.** Snowball Edge로 매일 가장 가까운 리전으로 전송 후 CRR
- **D.** 가까운 리전 EC2에 업로드 → EBS 스냅샷 → 복사

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — S3 Transfer Acceleration + 멀티파트 업로드**

S3 Transfer Acceleration은 CloudFront 엣지 로케이션을 활용합니다. 각 사이트→가까운 엣지→AWS 내부 백본→S3로 전달되어 글로벌 업로드 속도를 크게 높입니다. B는 추가 버킷 및 복제 관리 필요, C는 오프라인 장치라 "매일"이 비효율적, D는 가장 복잡합니다.

</div>
</details>

---

## Q2. S3에 저장된 JSON 로그 SQL 분석

**[상황]** 회사는 독점 애플리케이션의 로그 파일을 분석해야 합니다. 로그는 **Amazon S3 버킷에 JSON 형식**으로 저장되어 있습니다. 쿼리는 간단하고 주문형으로 실행됩니다.

**[요구사항]** 기존 아키텍처 변경을 최소화하고, **운영 오버헤드 최소화**로 분석을 수행해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon Redshift로 모든 콘텐츠를 로드 후 SQL 쿼리
- **B.** CloudWatch Logs에 저장 후 콘솔에서 SQL 쿼리
- **C.** **Amazon Athena**로 S3 직접 쿼리
- **D.** AWS Glue로 분류 후 Amazon EMR Spark 클러스터 사용

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Amazon Athena**

Athena는 서버리스 SQL 서비스로, S3의 JSON 데이터를 그 자리에서 바로 쿼리합니다. 별도 서버 구성 없이 스캔한 데이터량에 따라 비용이 발생합니다. A(Redshift)는 데이터 이전 필요, D(EMR)는 운영 오버헤드가 큽니다.

</div>
</details>

---

## Q3. S3 버킷 접근을 조직 내 계정으로만 제한

**[상황]** 회사는 AWS Organizations로 여러 부서의 AWS 계정을 관리합니다. 관리 계정의 S3 버킷 접근을 **조직 내 계정 사용자로만 제한**하려 합니다.

**[요구사항]** 최소한의 운영 오버헤드로 조직 단위 접근 제어를 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** `aws:PrincipalOrgID` 조건 키를 S3 버킷 정책에 추가
- **B.** `aws:PrincipalOrgPaths` 조건 키를 버킷 정책에 추가
- **C.** CloudTrail로 계정 이벤트 모니터링 후 버킷 정책 업데이트
- **D.** 각 사용자에 태그 → `aws:PrincipalTag` 조건 키 추가

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — `aws:PrincipalOrgID` 전역 조건 키**

`aws:PrincipalOrgID`를 버킷 정책 조건에 추가하면 해당 Organizations ID에 속한 모든 계정의 IAM 주체만 접근할 수 있습니다. 새 계정 추가 시 자동 적용되어 운영이 가장 단순합니다. B는 OU 경로 지정용으로 더 복잡하고, D는 사용자마다 태그를 달아야 해 오버헤드가 큽니다.

</div>
</details>

---

## Q4. VPC의 EC2가 인터넷 없이 S3 접근

**[상황]** 애플리케이션이 VPC의 Amazon EC2 인스턴스에서 실행되며 Amazon S3 버킷에 저장된 로그를 처리합니다. **EC2는 인터넷 연결 없이 S3에 접근**해야 합니다.

**[요구사항]** S3에 대한 프라이빗 네트워크 연결을 제공해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **S3 버킷에 대한 게이트웨이 VPC 엔드포인트** 생성
- **B.** CloudWatch Logs로 로그를 스트리밍 후 S3로 내보내기
- **C.** EC2에 인스턴스 프로파일(IAM 역할) 생성
- **D.** PrivateLink가 있는 API Gateway API 생성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — S3 게이트웨이 VPC 엔드포인트**

S3 게이트웨이 VPC 엔드포인트는 VPC 라우팅 테이블에 S3 경로를 추가하여 인터넷 없이 AWS 내부망으로 S3에 접근하게 합니다. **추가 비용 없음**이 큰 장점입니다. C(IAM 역할)는 권한이지 네트워크 경로가 아닙니다.

> 💡 **암기**: VPC → S3 프라이빗 접근 = **S3 게이트웨이 엔드포인트 (무료!)**

</div>
</details>

---

## Q5. 멀티 AZ EC2에서 파일 공유 문제

**[상황]** 회사가 웹 애플리케이션을 EBS 볼륨을 사용하는 단일 EC2에서 운영하다가, 2개의 AZ에 EC2+EBS를 각각 배포하고 ALB를 붙였습니다. 그런데 **사용자가 페이지 새로고침마다 다른 일부 문서만 보인다**고 합니다.

**[요구사항]** 사용자가 모든 문서를 항상 볼 수 있어야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 두 EBS 볼륨에 모두 데이터 복사
- **B.** ALB가 문서가 있는 서버로 사용자를 안내하도록 구성
- **C.** 두 EBS 데이터를 Amazon EFS로 복사 → 새 문서는 EFS에 저장하도록 앱 수정
- **D.** ALB가 두 서버 모두에 요청 전송, 올바른 서버에서 각 문서 반환

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Amazon EFS로 마이그레이션**

문제의 원인은 AZ별 EBS 볼륨이 서로 분리되어 있기 때문입니다. EC2-1에서 업로드한 파일은 EBS-1에만 있고 EC2-2는 모릅니다. EFS(Elastic File System)는 여러 AZ의 여러 EC2가 동시에 마운트하여 읽고 쓸 수 있는 **공유 파일 시스템**입니다.

> 💡 **EBS**: 단일 AZ, 단일 EC2 연결 → **EFS**: 멀티 AZ, 다수 EC2 공유

</div>
</details>

---

## Q6. 70TB 비디오 파일 최소 대역폭으로 S3 마이그레이션

**[상황]** 회사가 NFS로 온프레미스 스토리지에 대용량 비디오 파일을 저장합니다. 총 스토리지 **70TB**이며 더 이상 증가하지 않습니다. S3로 마이그레이션하려 합니다.

**[요구사항]** **가능한 한 최소한의 네트워크 대역폭**을 사용하면서 최대한 빠르게 마이그레이션해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** IAM 역할 생성 후 AWS CLI로 모든 파일 S3에 복사
- **B.** **AWS Snowball Edge 작업 생성 → 로컬에서 데이터 전송 → AWS 반송**
- **C.** S3 파일 게이트웨이 배포 + 퍼블릭 엔드포인트
- **D.** Direct Connect 연결 + S3 파일 게이트웨이 + 퍼블릭 VIF

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — AWS Snowball Edge**

"최소한의 네트워크 대역폭"이 핵심 조건입니다. Snowball Edge는 물리 장치를 배송받아 로컬에서 데이터 복사 후 반송하면 AWS가 S3에 올려줍니다. 완전히 오프라인으로 동작하므로 네트워크 대역폭을 전혀 사용하지 않습니다.

> 💡 **암기**: "네트워크 대역폭 최소화 + 대용량" = **Snowball**

</div>
</details>

---

## Q7. 초당 100,000건 메시지 분리 확장 아키텍처

**[상황]** 회사에 들어오는 메시지를 수집하는 앱이 있으며, **수십 개의 다른 앱과 마이크로서비스가 빠르게 소비**합니다. 메시지 수가 급격히 변하며 때로는 **초당 100,000개**로 갑자기 증가합니다.

**[요구사항]** 솔루션을 **분리(decouple)**하고 확장성을 높여야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon Kinesis Data Analytics로 메시지 유지
- **B.** Auto Scaling 그룹 EC2에 수집 앱 배포 (CPU 기반 확장)
- **C.** Kinesis Data Streams 단일 샤드 → Lambda → DynamoDB
- **D.** **여러 SQS 구독이 있는 Amazon SNS 토픽에 게시 → SQS 대기열에서 소비자 앱 처리**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — SNS + SQS 팬아웃 패턴**

SNS 토픽에 메시지를 한 번 게시하면 여러 SQS 큐로 동시에 전달됩니다(Fan-out). 각 소비자 앱은 자신의 SQS 큐에서 독립적으로 처리합니다. SQS가 버퍼 역할을 하므로 메시지 폭증 시에도 소비자를 보호하고 시스템이 분리됩니다.

> 💡 **SNS+SQS 팬아웃** = 1개 이벤트를 여러 시스템에 동시 전달

</div>
</details>

---

## Q8. SQS + Auto Scaling으로 탄력적 분산 처리

**[상황]** 회사가 분산 앱을 AWS로 마이그레이션합니다. 레거시는 **기본 서버**가 여러 **컴퓨팅 노드**에서 작업을 조정합니다. **탄력성과 확장성을 극대화**하는 솔루션을 원합니다.

**[요구사항]** 탄력성과 확장성을 극대화하는 아키텍처를 설계해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** SQS 대기열 + Auto Scaling EC2 (예약된 조정 사용)
- **B.** **SQS 대기열 + Auto Scaling EC2 (대기열 크기 기반 확장)**
- **C.** Auto Scaling EC2 + **CloudTrail**을 작업 대상으로
- **D.** Auto Scaling EC2 + **EventBridge**를 작업 대상으로, 노드 부하 기반 확장

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — SQS + 대기열 크기 기반 Auto Scaling**

A는 예약된 조정(Scheduled Scaling)이라 실시간 부하에 맞는 탄력성 부족. B는 SQS 큐 길이(`ApproximateNumberOfMessagesVisible`)를 기준으로 EC2를 자동 확장·축소합니다. 실제 워크로드를 가장 잘 반영하는 지표입니다.

</div>
</details>

---

## Q9. SMB 파일서버 용량 확장 + 수명 주기 관리

**[상황]** 회사가 데이터센터에서 SMB 파일 서버를 운영합니다. 파일 생성 후 처음 며칠은 자주 접근하고 **7일 이후에는 거의 접근하지 않습니다**. 총 데이터 크기가 증가하여 스토리지 용량에 근접했습니다.

**[요구사항]** 최근 파일에 대한 **저지연 접근**을 유지하면서 스토리지를 늘리고, 파일 수명 주기 관리도 제공해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS DataSync로 7일 지난 데이터를 AWS로 복사
- **B.** **Amazon S3 파일 게이트웨이 생성 + S3 수명 주기 정책 (7일 후 Glacier Deep Archive 전환)**
- **C.** Windows 파일 서버용 Amazon FSx 생성
- **D.** 각 사용자 PC에 유틸리티 설치하여 S3 접근 + Glacier Flexible 수명 주기

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — S3 파일 게이트웨이 + S3 수명 주기 정책**

S3 파일 게이트웨이는 온프레미스에서 SMB/NFS로 연결하면서 데이터는 S3에 저장합니다. **로컬 캐시**로 자주 쓰는 파일에 저지연 접근을 유지합니다. S3 수명 주기 정책으로 7일 후 자동으로 Glacier Deep Archive로 이동하여 비용을 절감합니다.

</div>
</details>

---

## Q10. 주문 순서대로 처리 보장

**[상황]** 전자상거래 앱이 Amazon API Gateway를 통해 새 주문 정보를 받습니다. 회사는 **주문이 접수된 순서대로 처리**되기를 원합니다.

**[요구사항]** 주문 처리 순서를 보장해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** SNS 토픽에 게시 → Lambda 구독하여 처리
- **B.** **SQS FIFO 대기열**에 메시지 전송 → Lambda로 처리
- **C.** API Gateway 권한 부여자로 모든 요청 차단
- **D.** SQS **표준** 대기열에 메시지 전송 → Lambda로 처리

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon SQS FIFO 대기열**

FIFO(First In First Out)는 메시지를 보낸 **정확한 순서대로** 수신하도록 보장합니다. 표준 SQS는 대략적인 순서만 유지하며 순서 보장이 없습니다. SNS는 순서 보장을 지원하지 않습니다.

> 💡 순서 보장 필요 = **SQS FIFO** / 순서 불필요·높은 처리량 = **SQS Standard**

</div>
</details>

---

## Q11. Aurora DB 자격증명 파일 없이 관리

**[상황]** EC2 인스턴스가 Amazon Aurora 데이터베이스를 사용합니다. EC2 인스턴스는 **파일에 로컬로 저장된 사용자 이름과 암호**로 DB에 연결합니다. 회사는 자격증명 관리의 **운영 오버헤드를 최소화**하려 합니다.

**[요구사항]** 코드/파일에 하드코딩된 자격증명을 없애고 자동 관리해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **AWS Secrets Manager** 사용, 자동 교체(Automatic Rotation) 활성화
- **B.** AWS Systems Manager Parameter Store 사용, 자동 교체 활성화
- **C.** KMS 키로 암호화된 S3 버킷에 자격증명 파일 저장
- **D.** 각 EC2에 암호화된 EBS 볼륨 → 자격증명 파일 마이그레이션

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — AWS Secrets Manager + 자동 교체**

Secrets Manager는 DB 자격증명을 안전하게 저장하고 **자동으로 주기적 교체(Rotation)**를 지원합니다. 앱은 파일 대신 Secrets Manager API를 호출해 최신 자격증명을 가져옵니다. Parameter Store(B)는 자동 교체 기능이 없습니다.

</div>
</details>

---

## Q12. 정적+동적 콘텐츠 글로벌 성능 개선

**[상황]** 글로벌 회사가 ALB 뒤의 EC2에서 웹 앱을 호스팅합니다. **정적 데이터는 S3**, **동적 데이터는 EC2**(ALB 경유)에 있습니다. 두 가지 모두 성능을 개선하고 지연 시간을 줄이려 합니다.

**[요구사항]** 정적·동적 데이터 모두 성능 개선 및 지연 시간 감소가 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **S3 버킷과 ALB를 오리진으로 하는 CloudFront 배포 생성 → Route 53을 CloudFront로 라우팅**
- **B.** ALB 오리진 CloudFront + S3 엔드포인트로 Global Accelerator 생성
- **C.** S3 오리진 CloudFront + ALB·CloudFront를 Global Accelerator 엔드포인트로 사용
- **D.** ALB 오리진 CloudFront + S3 엔드포인트 Global Accelerator + 두 도메인 이름 사용

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — CloudFront 다중 오리진 (S3 + ALB)**

CloudFront 배포를 만들 때 여러 오리진을 지정할 수 있습니다. S3(정적)와 ALB(동적) 두 오리진을 경로별로 연결하면 CloudFront가 정적 파일은 캐시에서, 동적 요청은 ALB로 전달합니다. Global Accelerator(B·C·D)는 TCP/UDP 레벨 가속으로 이 시나리오에 부적절합니다.

</div>
</details>

---

## Q13. 멀티 리전 DB 자격증명 자동 교체

**[상황]** 회사는 AWS 인프라 월별 유지 관리 시 **여러 AWS 리전에서 MySQL RDS DB 자격증명을 교체**해야 합니다.

**[요구사항]** 최소한의 운영 오버헤드로 멀티 리전 자격증명 자동 교체를 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **Secrets Manager에 자격증명 저장 + 멀티 리전 비밀 복제 + 일정에 따라 자동 교체**
- **B.** SSM Parameter Store에 저장 + 멀티 리전 복제 + 일정에 따라 교체
- **C.** S3 버킷에 SSE 암호화로 저장 + EventBridge → Lambda로 교체
- **D.** KMS 멀티 리전 키로 암호화 → DynamoDB 글로벌 테이블에 저장 → Lambda로 교체

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — AWS Secrets Manager 멀티 리전 복제 + 자동 교체**

Secrets Manager는 **멀티 리전 복제** 기능으로 기본 리전의 비밀을 다른 리전에 자동 동기화합니다. 일정 기반 자동 교체도 기본 제공됩니다. SSM Parameter Store(B)는 멀티 리전 복제와 자동 교체를 기본 지원하지 않습니다.

</div>
</details>

---

## Q14. DB 읽기 부하 자동 확장 + 고가용성

**[상황]** 전자상거래 앱이 ALB 뒤의 EC2 Auto Scaling 그룹과 대형 EC2의 MySQL 8.0 DB로 구성됩니다. 앱 로드 증가 시 **DB 성능이 빠르게 저하**됩니다. **쓰기보다 읽기 요청이 훨씬 많습니다**.

**[요구사항]** 고가용성을 유지하면서 예측할 수 없는 **읽기 워크로드 수요를 자동 확장**해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon Redshift 단일 노드 사용
- **B.** RDS 단일 AZ 배포 + 다른 AZ에 리더 인스턴스 추가
- **C.** **Amazon Aurora 멀티 AZ 배포 + Aurora 복제본으로 Aurora Auto Scaling 구성**
- **D.** ElastiCache Memcached + EC2 스팟 인스턴스

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Aurora Multi-AZ + Aurora Auto Scaling**

Aurora는 자동으로 3개 AZ에 6개 복제본을 생성하여 고가용성을 보장합니다. Aurora 복제본(읽기 전용)을 `Aurora Auto Scaling`으로 설정하면 읽기 부하에 따라 복제본 수가 자동 증가·감소합니다.

</div>
</details>

---

## Q15. VPC 트래픽 검사 및 필터링 (가상 방화벽)

**[상황]** 회사가 AWS로 마이그레이션하면서 프로덕션 VPC로 들어오고 나가는 트래픽을 **검사(inspection)**하고 **필터링(filtering)**하는 솔루션이 필요합니다.

**[요구사항]** AWS 클라우드에서 트래픽 흐름 검사 및 필터링 기능을 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon GuardDuty 사용
- **B.** VPC 트래픽 미러링 사용
- **C.** **AWS Network Firewall** 사용하여 필요한 규칙 생성
- **D.** AWS Firewall Manager 사용하여 규칙 생성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — AWS Network Firewall**

AWS Network Firewall은 VPC 경계에서 네트워크 트래픽을 필터링하는 관리형 서비스입니다. GuardDuty(A)는 위협 탐지(모니터링)만 하고 차단하지 않습니다. 트래픽 미러링(B)은 복사만 합니다. Firewall Manager(D)는 방화벽 규칙을 중앙에서 관리하는 서비스이지 직접 검사하지 않습니다.

</div>
</details>

---

## Q16. 데이터 레이크 시각화 + 접근 제어

**[상황]** 회사가 **S3 및 PostgreSQL RDS** 데이터로 구성된 데이터 레이크를 호스팅합니다. **관리팀만 전체 접근**, 나머지 직원은 제한된 접근이 필요합니다.

**[요구사항]** 두 데이터 소스 모두 포함하는 시각화 솔루션과 접근 제어가 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** QuickSight에서 분석 생성 → 적절한 **IAM 역할**과 대시보드 공유
- **B.** **QuickSight에서 분석 생성 → 적절한 사용자 및 그룹과 대시보드 공유**
- **C.** Glue 테이블/크롤러 → Glue ETL → S3에 보고서 → S3 버킷 정책으로 접근 제한
- **D.** Glue + Athena 연합 쿼리 → S3 → 버킷 정책 접근 제한

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon QuickSight + 사용자/그룹 공유**

QuickSight는 S3와 RDS PostgreSQL 등 다양한 데이터 소스를 연결하여 대화형 대시보드를 제공합니다. 대시보드를 게시한 후 **특정 사용자 및 그룹** 단위로 공유할 수 있어 접근 제어가 가능합니다.

</div>
</details>

---

## Q17. EC2가 S3에 접근하는 올바른 방법

**[상황]** 앱이 **두 개의 EC2 인스턴스**에서 실행되며 문서 저장을 위해 **S3 버킷**을 사용합니다.

**[요구사항]** EC2 인스턴스가 S3 버킷에 접근할 수 있도록 해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 접근 권한을 부여하는 **IAM 역할(Role)**을 생성하여 EC2에 연결
- **B.** S3 접근 권한을 부여하는 **IAM 정책(Policy)**을 생성하여 EC2에 연결
- **C.** S3 접근 권한을 부여하는 **IAM 그룹(Group)**을 생성하여 EC2에 연결
- **D.** S3 접근 권한을 부여하는 **IAM 사용자(User)**를 생성하여 EC2에 연결

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — IAM 역할(Role)을 EC2에 연결**

EC2에 AWS 서비스 접근 권한을 부여할 때는 **IAM 역할**을 사용합니다. 역할을 인스턴스 프로파일로 연결하면 임시 자격증명이 자동 제공됩니다. IAM 정책(B)은 역할·사용자에 연결하는 것이지 EC2에 직접 연결할 수 없습니다. 사용자(D)는 장기 액세스 키 노출 위험이 있습니다.

</div>
</details>

---

## Q18. 이미지 업로드 → S3 → Lambda 자동 처리 (2개 선택)

**[상황]** 팀이 큰 이미지를 작은 압축 이미지로 변환하는 마이크로서비스를 설계합니다. 사용자가 이미지를 업로드하면 S3에 저장, Lambda로 처리 및 압축, 다른 S3에 압축본 저장이 필요합니다.

**[요구사항]** **내구성이 있는 상태 비저장(stateless)** 구성 요소를 사용하여 자동으로 처리해야 합니다. (2가지 선택)

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **SQS 대기열 생성 → S3 버킷에 이미지 업로드 시 SQS에 알림 전송 구성**
- **B.** **SQS 대기열을 호출 소스로 Lambda 구성 → 성공 처리 시 메시지 삭제**
- **C.** Lambda가 S3 버킷에서 새 업로드 모니터링 → 파일 이름을 메모리의 텍스트 파일에 기록
- **D.** EC2 인스턴스 시작 → SQS 모니터링 → 항목 추가 시 텍스트 파일에 기록 → Lambda 호출
- **E.** EventBridge로 S3 모니터링 → 이미지 업로드 시 SNS 토픽에 소유자 이메일로 알림

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A + B**

S3에 이미지가 업로드되면 → **S3 이벤트 알림**이 SQS 큐에 메시지를 보내고(A) → Lambda가 SQS를 이벤트 소스로 메시지를 받아 처리 후 성공 시 삭제합니다(B). 완전 서버리스이며 상태 비저장입니다. C는 메모리에 상태 저장(비내구성), D는 EC2 필요(복잡), E는 이메일 알림만 합니다.

</div>
</details>

---

## Q19. 가상 방화벽 어플라이언스로 트래픽 검사

**[상황]** 회사의 3계층 웹 앱에서 웹 서버는 퍼블릭 서브넷, 앱·DB 서버는 프라이빗 서브넷에 있습니다. AWS Marketplace의 **타사 가상 방화벽 어플라이언스**를 검사 VPC에 배포했습니다. 어플라이언스는 IP 패킷을 수락할 수 있는 IP 인터페이스로 구성됩니다.

**[요구사항]** 트래픽이 웹 서버에 도달하기 전에 모든 트래픽을 어플라이언스로 검사해야 합니다. **최소한의 운영 오버헤드**로 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 애플리케이션 VPC 퍼블릭 서브넷에 NLB → 어플라이언스로 라우팅
- **B.** 애플리케이션 VPC 퍼블릭 서브넷에 ALB → 어플라이언스로 라우팅
- **C.** 검사 VPC에 Transit Gateway 배포 → 라우팅 테이블로 패킷 라우팅
- **D.** **검사 VPC에 Gateway Load Balancer 배포 → GWLB 엔드포인트 생성하여 패킷 어플라이언스로 전달**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — Gateway Load Balancer(GWLB)**

GWLB는 타사 가상 어플라이언스(방화벽, IDS/IPS, 패킷 검사 시스템)를 투명하게 배포·확장·관리하기 위한 전용 서비스입니다. GENEVE 프로토콜(6081 포트)을 사용하여 L3 수준에서 패킷을 어플라이언스로 전달하고 처리 후 반환합니다.

</div>
</details>

---

## Q20. EBS 스냅샷으로 테스트 환경 복제 (최소 시간)

**[상황]** 회사가 동일 리전 테스트 환경에 **대량의 프로덕션 데이터를 복제**하려 합니다. 데이터는 EBS 볼륨의 EC2에 저장됩니다. 소프트웨어는 **일관되게 높은 I/O 성능**을 요구합니다.

**[요구사항]** 프로덕션 데이터 복제 시간을 최소화해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** EBS 스냅샷 생성 → EC2 인스턴스 스토어 볼륨에 복원
- **B.** EBS Multi-Attach 구성 + 스냅샷 생성 → 테스트 EC2에 동일 볼륨 연결
- **C.** EBS 스냅샷 생성 → 새 EBS 볼륨 생성 및 초기화 → 스냅샷 복원 전에 EC2에 연결
- **D.** **EBS 스냅샷 생성 → EBS 빠른 스냅샷 복원(Fast Snapshot Restore) 활성화 → 스냅샷을 새 EBS 볼륨으로 복원 → 테스트 EC2에 연결**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — EBS 빠른 스냅샷 복원(Fast Snapshot Restore)**

일반 EBS 스냅샷으로 만든 볼륨은 처음 사용 시 I/O 성능이 낮습니다(lazy loading). **Fast Snapshot Restore**를 활성화하면 스냅샷에서 복원된 볼륨이 즉시 **완전한 I/O 성능**을 제공합니다.

</div>
</details>

---

## Q21. 하루 한 번 판매 서비스 + 수백만 요청 처리

**[상황]** 전자상거래 회사가 하루 1회 정확히 하나의 제품을 24시간 판매합니다. 피크 시간에 **초당 수백만 건 요청**을 밀리초 지연으로 처리해야 합니다.

**[요구사항]** 최소한의 운영 오버헤드로 대용량 트래픽을 밀리초 지연으로 처리해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 + CloudFront로 전체 웹사이트 호스팅 → S3에 주문 데이터 저장
- **B.** Auto Scaling EC2 + ALB + MySQL RDS
- **C.** EKS 컨테이너 + Kubernetes Auto Scaling + MySQL RDS
- **D.** **S3 + CloudFront(정적) + API Gateway + Lambda(API) + DynamoDB(데이터 저장)**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — 서버리스 아키텍처 (S3+CloudFront+API GW+Lambda+DynamoDB)**

S3+CloudFront로 정적 콘텐츠를 캐싱·배포하고, API Gateway+Lambda로 주문 처리 API를 서버리스로 운영하며, DynamoDB로 밀리초 단위 데이터 저장이 가능합니다. DynamoDB는 자동 확장으로 초당 수백만 요청도 처리합니다.

</div>
</details>

---

## Q22. 예측 불가 접근 패턴의 미디어 파일 최저 비용 저장

**[상황]** 디지털 미디어 앱의 미디어 파일은 **AZ 손실에 대한 복원력**이 있어야 합니다. 일부 파일은 자주 접근하고, 나머지는 **예측할 수 없는 패턴**으로 거의 접근하지 않습니다.

**[요구사항]** 미디어 파일 저장과 검색 비용을 최소화해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 Standard
- **B.** **S3 Intelligent-Tiering**
- **C.** S3 Standard-IA
- **D.** S3 One Zone-IA

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — S3 Intelligent-Tiering**

접근 패턴을 알 수 없거나 불규칙한 데이터에는 S3 Intelligent-Tiering이 최적입니다. 자동으로 자주 접근 계층↔드물게 접근 계층 사이를 이동하여 비용을 최적화합니다. One Zone-IA(D)는 단일 AZ라 복원력 요건 불충족입니다.

> 💡 **암기**: "접근 패턴 예측 불가" = **S3 Intelligent-Tiering**

</div>
</details>

---

## Q23. 1개월 후 접근 없는 백업 파일 최저 비용 보관

**[상황]** 회사가 S3 Standard에 백업 파일을 저장합니다. **1개월 동안은 자주 접근**하지만, **1개월 이후에는 접근하지 않습니다**. 파일을 **무기한 보관**해야 합니다.

**[요구사항]** 가장 비용 효율적인 스토리지 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 Intelligent-Tiering 구성
- **B.** **S3 수명 주기 정책: 1개월 후 S3 Standard → S3 Glacier Deep Archive 전환**
- **C.** S3 수명 주기 정책: 1개월 후 S3 Standard → S3 Standard-IA
- **D.** S3 수명 주기 정책: 1개월 후 S3 Standard → S3 One Zone-IA

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — S3 Glacier Deep Archive로 수명 주기 전환**

1개월 이후 접근이 없고 무기한 보관만 필요하다면 가장 저렴한 **S3 Glacier Deep Archive**가 정답입니다($0.00099/GB/월). Glacier Deep Archive보다 비싼 Standard-IA(C), One Zone-IA(D), Intelligent-Tiering(A) 모두 오답입니다.

</div>
</details>

---

## Q24. EC2 비용 증가 원인 심층 분석

**[상황]** 회사의 최근 청구서에서 **EC2 비용이 증가**했습니다. 일부 EC2 인스턴스에 대해 **원치 않는 수직 확장**(인스턴스 유형 변경)을 발견했습니다. 지난 2개월간의 EC2 비용을 비교하는 그래프 생성과 **인스턴스 유형 기반 심층 분석**이 필요합니다.

**[요구사항]** 운영 오버헤드가 가장 적은 방법으로 인스턴스 유형 기반 비용 분석을 수행해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS 예산으로 예산 보고서 생성 + 인스턴스 유형별 EC2 비용 비교
- **B.** **Cost Explorer의 세분화된 필터링 기능**으로 인스턴스 유형 기반 심층 분석
- **C.** AWS Billing and Cost Management 대시보드 그래프로 2개월 비교
- **D.** AWS CUR → S3 → QuickSight로 대화형 그래프 생성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — AWS Cost Explorer**

Cost Explorer는 최대 12개월 비용 데이터를 조회하고, **인스턴스 유형**을 포함한 다양한 기준으로 **필터링 및 그룹화**할 수 있습니다. 추가 설정 없이 즉시 사용 가능하여 운영 오버헤드가 최소입니다.

</div>
</details>

---

## Q25. Lambda 할당량 없이 대용량 데이터 Aurora 로드

**[상황]** 앱이 Lambda+API Gateway를 통해 정보를 수신하고 **Aurora PostgreSQL DB에 저장**합니다. 개념 증명에서 **대용량 데이터 처리를 위해 Lambda 할당량을 크게 늘려야 하는 문제**가 발생했습니다.

**[요구사항]** 확장성을 개선하고 구성 노력을 최소화하는 새로운 설계가 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Lambda 코드를 EC2의 Apache Tomcat으로 리팩터링 + JDBC 드라이버 사용
- **B.** DynamoDB + DAX 클러스터로 플랫폼 변경
- **C.** Lambda 2개 (수신·로드) + SNS로 통합
- **D.** **Lambda 2개 (수신·로드 분리) + SQS 대기열로 통합**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — Lambda 두 개 + SQS 분리**

Lambda 할당량 초과 문제는 수신과 DB 로드를 하나의 함수로 처리하기 때문입니다. **SQS 대기열**을 중간에 두면 수신 Lambda는 빠르게 메시지를 SQS에 저장하고 종료합니다. DB 로드 Lambda는 SQS에서 배치로 메시지를 꺼내 처리합니다. DB 로드 속도에 맞춰 독립적으로 확장할 수 있어 병목 현상이 해소됩니다.

</div>
</details>

---

## 📊 Q1~25 핵심 패턴 정리

| 상황 키워드 | 정답 서비스 |
|------------|------------|
| 글로벌 업로드 가속 | **S3 Transfer Acceleration** |
| S3 JSON 로그 SQL 분석 | **Amazon Athena** |
| 조직 단위 S3 접근 제어 | **`aws:PrincipalOrgID`** |
| 인터넷 없이 S3 접근 | **S3 Gateway VPC Endpoint** |
| 멀티 AZ EC2 파일 공유 | **Amazon EFS** |
| 최소 대역폭 대용량 이전 | **AWS Snowball Edge** |
| 1:N 메시지 분배 | **SNS + SQS 팬아웃** |
| 큐 기반 자동 확장 | **SQS + Auto Scaling** |
| 온프레미스 용량 확장 | **S3 File Gateway** |
| 주문 순서 보장 | **SQS FIFO** |
| DB 자격증명 자동 교체 | **Secrets Manager** |
| 정적+동적 글로벌 성능 | **CloudFront 다중 오리진** |
| 가상 방화벽 어플라이언스 | **Gateway Load Balancer** |
| 예측 불가 접근 패턴 | **S3 Intelligent-Tiering** |
| 접근 없는 장기 보관 | **Glacier Deep Archive** |
| EC2 비용 인스턴스 분석 | **Cost Explorer** |
