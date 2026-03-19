---
title: "AWS SAA 실전 시나리오 정리: 문제 51~75번 (실제 기출)"
description: "실제 SAA-C03 기출문제 51~75번 완벽 해설 - SES, EFS, S3 Object Lock, FSx, Rekognition, Fargate 등"
pubDate: "Mar 19 2026"
heroImage: '../../assets/blog-placeholder-3.jpg'
---

# AWS SAA 실전 기출문제 정리 (51~75번)

> 실제 Examtopics SAA-C03 기출문제를 **[상황] → [요구사항] → [정답·해설]** 형식으로 정리했습니다.  
> 👇 보기와 정답은 **클릭하면 펼쳐집니다!**

---

## Q51. 매일 아침 배송 통계 이메일 보고서 발송 (2가지 선택)

**[상황]** 회사가 주문 배송 통계를 REST API로 제공하는 앱을 개발 중입니다. **배송 통계를 추출하여 HTML 형식으로 구성하고, 매일 아침 여러 이메일 주소로 보고서**를 보내려 합니다.

**[요구사항]** 매일 아침 자동으로 API 데이터를 쿼리·정형화하여 이메일 보고서를 발송해야 합니다. (2가지 선택)

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Kinesis Data Firehose로 데이터 전송 구성
- **B.** Amazon SES로 데이터 형식 지정 후 이메일 보고서 발송
- **C.** AWS Glue 작업으로 API 쿼리하는 EventBridge 예약 이벤트 생성
- **D.** AWS Lambda 함수를 호출하여 API 쿼리하는 EventBridge 예약 이벤트 생성
- **E.** S3에 앱 데이터 저장 → SNS 주제를 S3 이벤트 대상으로

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B + D**

- **D**: EventBridge 예약 이벤트(cron)로 매일 아침 Lambda를 트리거 → Lambda가 API를 쿼리하여 HTML 형식으로 데이터 정리
- **B**: Amazon SES(Simple Email Service)는 HTML 형식의 이메일을 여러 수신자에게 발송

A(Firehose)는 스트리밍 데이터 전달용, C(Glue)는 ETL용, E(S3+SNS)는 이메일 발송에 부적합합니다.

> 💡 **암기**: 정기 이메일 보고서 = **EventBridge(Cron) + Lambda + Amazon SES**

</div>
</details>

---

## Q52. 표준 파일 시스템 구조, 자동 확장, 고가용성, 최소 오버헤드

**[상황]** 회사가 온프레미스 앱을 AWS로 마이그레이션합니다. 앱은 수십 GB에서 수백 TB까지 다양한 크기의 파일을 생성하며 **표준 파일 시스템 구조**로 저장해야 합니다. 자동 확장, 고가용성, 최소 운영 오버헤드가 필요합니다.

**[요구사항]** 자동 확장하고 고가용성인 표준 파일 시스템 인터페이스를 갖춘 스토리지 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** ECS 컨테이너로 마이그레이션 + S3 스토리지
- **B.** EKS 컨테이너 + EBS 스토리지
- **C.** 멀티 AZ Auto Scaling 그룹의 EC2 + Amazon EFS 파일 시스템
- **D.** 멀티 AZ Auto Scaling 그룹의 EC2 + EBS 스토리지

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — EC2(멀티 AZ) + Amazon EFS**

EFS는 **표준 파일 시스템 인터페이스(NFSv4)**를 지원하며 여러 AZ의 여러 EC2 인스턴스에서 동시 마운트가 가능합니다. 파일 수요에 따라 **자동으로 확장·축소**됩니다. EBS(D)는 여러 EC2 인스턴스가 동시 접근하는 표준 파일 시스템으로 부적합합니다.

</div>
</details>

---

## Q53. 회계 기록 10년 보존 + 누구도 삭제 불가 + 최대 복원력

**[상황]** 회사가 S3에 회계 기록을 저장해야 합니다. **1년 동안 즉시 액세스**, 이후 **추가 9년 보관**이 필요합니다. **관리자·루트 사용자 포함 그 누구도 10년 동안 삭제할 수 없어야** 하며 최대 복원력으로 저장해야 합니다.

**[요구사항]** 10년 절대 삭제 방지 + 1년 즉시 접근 + 이후 최저 비용 보관이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 Glacier에 10년 보관 + 액세스 제어 정책으로 삭제 거부
- **B.** S3 Intelligent-Tiering + IAM 정책으로 삭제 거부 + 10년 후 정책 변경
- **C.** S3 수명 주기 정책(1년 후 S3 Standard → Glacier Deep Archive) + 10년 규정 준수 모드 S3 Object Lock
- **D.** S3 수명 주기(1년 후 S3 Standard → S3 One Zone-IA) + 10년 거버넌스 모드 S3 Object Lock

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — S3 수명 주기 + S3 Object Lock (규정 준수 모드)**

- S3 Standard → 1년간 즉시 접근 가능
- Glacier Deep Archive → 이후 9년 최저 비용 보관 + 최대 복원력(11 9s)
- **Object Lock 규정 준수(Compliance) 모드**: 루트·관리자 포함 **누구도** 지정 기간 내 삭제 불가

D는 One Zone-IA(단일 AZ)라 최대 복원력 불충족, 거버넌스 모드는 관리 권한자가 삭제 가능합니다.

</div>
</details>

---

## Q54. Windows 파일 공유 → 고가용성·내구성 관리형 스토리지

**[상황]** 회사 직원들이 두 개의 EC2 인스턴스에서 호스팅되는 **Windows 파일 공유**를 사용합니다. **고가용성·내구성 스토리지**가 필요합니다.

**[요구사항]** 현재 파일 접근 방식을 보존하는 고가용성·내구성 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 모든 데이터를 S3로 마이그레이션 + IAM 인증 설정
- **B.** Amazon S3 파일 게이트웨이 설정 + 기존 EC2에 마운트
- **C.** 다중 AZ 구성으로 Windows 파일 서버용 Amazon FSx 확장 → 데이터 마이그레이션
- **D.** Amazon EFS 멀티 AZ → 데이터 마이그레이션

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Amazon FSx for Windows File Server (Multi-AZ)**

**Windows 파일 공유**(SMB 프로토콜)를 사용하는 환경에는 **FSx for Windows File Server**가 최적입니다. Linux 기반 EFS(D)는 NFS 프로토콜로 Windows 파일 공유 호환성이 없습니다.

> 💡 **암기**: Windows 파일 공유(SMB) = **FSx for Windows** / Linux 공유(NFS) = **EFS**

</div>
</details>

---

## Q55. 프라이빗 서브넷 EC2만 RDS에 접근하도록 보안 그룹 설정

**[상황]** VPC에 2 AZ에 걸친 6개 서브넷(퍼블릭·프라이빗·DB 전용) 아키텍처가 있습니다. **프라이빗 서브넷의 EC2 인스턴스만 RDS에 접근**할 수 있어야 합니다.

**[요구사항]** 프라이빗 서브넷 EC2만 DB에 접근 가능하도록 보안 그룹을 구성해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 퍼블릭 서브넷 CIDR 제외 라우팅 테이블을 DB 서브넷에 연결
- **B.** 퍼블릭 서브넷 인스턴스 보안 그룹의 인바운드를 거부하는 보안 그룹을 DB 인스턴스에 연결
- **C.** 프라이빗 서브넷 인스턴스에 할당된 보안 그룹의 인바운드를 허용하는 보안 그룹을 DB 인스턴스에 연결
- **D.** 퍼블릭·프라이빗 서브넷 간, 프라이빗·DB 서브넷 간 피어링 연결 생성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — 보안 그룹 참조 방식**

DB 인스턴스의 보안 그룹 인바운드 규칙에 프라이빗 EC2의 **보안 그룹 ID**를 소스로 지정하면, 해당 보안 그룹이 적용된 인스턴스(프라이빗 EC2)만 DB에 접근 가능합니다. 보안 그룹은 Deny 규칙이 없으므로 B처럼 Deny 방식은 불가합니다.

</div>
</details>

---

## Q56. 사용자 정의 도메인 + HTTPS 인증서로 API Gateway 설정

**[상황]** 회사가 Route 53에 도메인을 등록하고 ca-central-1 리전의 API Gateway를 백엔드로 사용합니다. **회사 도메인 이름과 인증서**로 API Gateway URL을 설계하여 **HTTPS를 활성화**하려 합니다.

**[요구사항]** 커스텀 도메인 + HTTPS 인증서로 API Gateway를 설정해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** API Gateway 스테이지 변수로 URL → ACM에서 인증서 가져오기(us-east-1)
- **B.** Route 53 별칭 레코드 → API Gateway 단계 엔드포인트 → ACM 인증서(us-east-1)
- **C.** 리전 API Gateway 엔드포인트 생성 → 도메인 연결 → 동일 리전 ACM 인증서 → Route 53 구성
- **D.** 리전 API Gateway 엔드포인트 → 도메인 연결 → ACM 인증서(us-east-1) → Route 53 A 레코드

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — 리전 API Gateway + 같은 리전 ACM 인증서**

**리전 API Gateway 커스텀 도메인**은 API와 **동일한 리전**의 ACM 인증서를 사용해야 합니다. ca-central-1의 API Gateway에는 ca-central-1의 ACM 인증서가 필요합니다. (엣지 최적화 API는 us-east-1 인증서 필요)

</div>
</details>

---

## Q57. 업로드된 이미지의 부적절한 콘텐츠 자동 감지

**[상황]** 소셜 미디어 회사가 사용자가 이미지를 업로드하고 공유하는 서비스를 운영합니다. **이미지에 부적절한 콘텐츠가 없는지 자동으로 확인**해야 합니다. **개발 노력을 최소화**하는 솔루션이 필요합니다.

**[요구사항]** 이미지에서 부적절한 콘텐츠를 자동으로 감지하고, 신뢰도 낮은 예측은 인적 검토를 사용해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon Comprehend로 부적절한 콘텐츠 감지 + 신뢰도 낮음 → 인적 검토
- **B.** Amazon Rekognition으로 부적절한 콘텐츠 감지 + 신뢰도 낮음 → 인적 검토
- **C.** Amazon SageMaker로 부적절한 콘텐츠 감지 + 신뢰도 낮음 → 정답 레이블링
- **D.** Fargate에 사용자 지정 ML 모델 배포 → 부적절한 콘텐츠 감지

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon Rekognition**

Amazon Rekognition은 이미지·비디오에서 부적절하거나 원치 않거나 불쾌감을 주는 콘텐츠를 **자동으로 감지**하는 전용 기능을 제공합니다. Comprehend(A)는 텍스트 분석, SageMaker(C)는 커스텀 ML 모델 훈련·배포 용도입니다.

> 💡 **이미지·영상 분석** (얼굴, 부적절 콘텐츠, 사물 감지) = **Amazon Rekognition**

</div>
</details>

---

## Q58. 컨테이너 인프라 관리 안 하고 확장성·가용성 확보

**[상황]** 회사가 확장성·가용성을 위해 **컨테이너에서 중요한 앱**을 실행하려 합니다. 회사는 **컨테이너화된 워크로드를 실행하는 기본 인프라 프로비저닝·관리 책임을 원하지 않습니다**.

**[요구사항]** 기본 인프라 없이 컨테이너를 실행해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** EC2에 Docker 설치
- **B.** EC2 워커 노드에서 Amazon ECS 사용
- **C.** AWS Fargate에서 Amazon ECS 사용
- **D.** ECS 최적화 AMI의 EC2 인스턴스 사용

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — ECS + AWS Fargate**

AWS Fargate는 EC2 인스턴스의 서버·클러스터를 관리할 필요 없이 컨테이너를 실행하는 **서버리스 컨테이너 엔진**입니다. A·B·D는 모두 EC2 인스턴스(기본 인프라)를 직접 관리해야 합니다.

> 💡 **인프라 관리 없이 컨테이너 실행** = **ECS + Fargate**

</div>
</details>

---

## Q59. 하루 30TB 클릭스트림 데이터 실시간 수집·저장·분석

**[상황]** 회사가 300개 이상의 글로벌 웹사이트에서 **하루 30TB 이상의 클릭스트림 데이터**를 분석해야 합니다.

**[요구사항]** 대량 스트리밍 데이터를 효율적으로 전송·처리해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS Data Pipeline → S3 보관 → EMR 클러스터로 분석
- **B.** Auto Scaling EC2로 처리 → S3 데이터 레이크 → Redshift 분석
- **C.** CloudFront에 데이터 캐시 → S3 저장 → S3 이벤트로 Lambda 분석
- **D.** Kinesis Data Streams로 데이터 수집 → Kinesis Data Firehose로 S3 전송 → Redshift로 분석

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — Kinesis Data Streams + Firehose → S3 → Redshift**

대량 스트리밍 데이터 수집에는 **Kinesis Data Streams**가 최적입니다. Kinesis Firehose가 Streams에서 데이터를 받아 S3 데이터 레이크로 자동 전달하고, Redshift에서 복잡한 분석 쿼리를 실행합니다.

</div>
</details>

---

## Q60. ALB에서 HTTP → HTTPS 리디렉션

**[상황]** 회사 웹사이트가 HTTP와 HTTPS를 별도 처리하는 ALB 뒤에 있습니다. **모든 HTTP 요청을 HTTPS로 리디렉션**해야 합니다.

**[요구사항]** HTTP → HTTPS 자동 리디렉션을 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** HTTPS 트래픽만 허용하도록 ALB의 네트워크 ACL 업데이트
- **B.** URL의 HTTP를 HTTPS로 바꾸는 규칙 생성 (수동 방식)
- **C.** ALB에서 리스너 규칙을 생성하여 HTTP 트래픽을 HTTPS로 리디렉션
- **D.** ALB를 SNI를 사용하는 NLB로 교체

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — ALB 리스너 규칙으로 HTTP→HTTPS 리디렉션**

ALB의 80(HTTP) 리스너에 리디렉션 규칙을 추가하면 HTTP로 들어오는 모든 요청을 자동으로 443(HTTPS)으로 리디렉션합니다. NACL(A)은 트래픽을 차단할 뿐 리디렉션하지 않습니다. NLB(D)는 HTTP 레벨 리스너 규칙을 지원하지 않습니다.

</div>
</details>

---

## Q61. DB 자격증명 하드코딩 없이 자동 교체 (운영 오버헤드 최소화)

**[상황]** 회사가 EC2와 RDS를 사용하는 2계층 웹 앱을 개발합니다. **앱에 데이터베이스 자격증명을 하드코딩해서는 안 되며**, 정기적으로 자격증명을 **자동 교체**해야 합니다.

**[요구사항]** 최소 운영 오버헤드로 자격증명 하드코딩 제거 + 자동 교체가 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 인스턴스 메타데이터에 자격증명 저장 + EventBridge → Lambda로 RDS·메타데이터 동시 업데이트
- **B.** 암호화된 S3 구성 파일 + EventBridge → Lambda로 RDS·구성 파일 동시 업데이트
- **C.** AWS Secrets Manager에 자격증명 저장 + 자동 교체 활성화 + EC2 역할에 접근 권한
- **D.** SSM Parameter Store에 암호화 파라미터 저장 + 자동 교체 + EC2 역할에 접근 권한

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — AWS Secrets Manager + 자동 교체**

Secrets Manager는 앱 소스 코드에서 하드코딩된 자격증명을 제거할 수 있습니다. **자동 교체**를 설정하면 Lambda 함수를 통해 지정된 일정에 따라 RDS 자격증명을 자동으로 갱신합니다. SSM Parameter Store(D)는 자동 교체 기능이 없습니다.

</div>
</details>

---

## Q62. 외부 CA 발급 SSL 인증서를 ALB에 적용하고 연간 교체

**[상황]** 회사가 새 공개 웹 앱을 배포합니다. ALB에서 **외부 CA(인증 기관)가 발급한 SSL/TLS 인증서**를 사용해야 하며, **만료 전 매년 교체**해야 합니다.

**[요구사항]** 외부 CA 인증서를 ALB에 적용하고 만료 알림을 받아 교체해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** ACM에서 SSL 인증서 발급 + ALB에 적용 + 관리형 갱신으로 자동 교체
- **B.** ACM에서 SSL 인증서 발급 + 키 자료 가져오기 + ALB 적용 + 관리형 갱신
- **C.** ACM 사설 CA로 루트 CA에서 SSL 인증서 발급 + ALB 적용 + 관리형 갱신
- **D.** ACM에서 SSL 인증서 가져오기(Import) + ALB 적용 + EventBridge로 만료 알림 → 수동 교체

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — ACM에 기존 인증서 가져오기 + 만료 알림 + 수동 교체**

이미 **외부 CA에서 발급한 인증서**를 ACM의 Import 기능으로 가져와 ALB에 적용합니다. ACM에서 발급한 인증서는 자동 갱신이 되지만, **가져온 인증서는 자동 갱신이 되지 않아** EventBridge로 만료 알림을 받아 수동 교체해야 합니다.

</div>
</details>

---

## Q63. PDF → JPG 변환 서버리스 파이프라인

**[상황]** 회사가 **큰 .pdf 파일을 .jpg 이미지로 변환**하는 제품을 만들려 합니다. PDF 평균 크기는 5MB이며, 원본과 변환 파일 모두 보관해야 합니다. **빠르게 증가할 수요**를 수용할 수 있어야 합니다.

**[요구사항]** 가장 비용 효율적으로 확장 가능한 PDF→JPG 변환 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3에 PDF 저장 → S3 PUT 이벤트로 Lambda 트리거 → JPG 변환 후 S3에 저장
- **B.** DynamoDB에 PDF 저장 → DynamoDB 스트림으로 Lambda 호출 → 변환 후 DynamoDB 저장
- **C.** Elastic Beanstalk + EC2 + EBS 스토리지
- **D.** Elastic Beanstalk + EC2 + EFS 스토리지

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — S3 + Lambda**

S3에 PDF를 업로드하면 S3 이벤트 알림이 Lambda를 트리거하여 PDF를 변환 후 결과를 다른 S3 버킷에 저장합니다. **완전 서버리스**로 인프라 관리가 없고, S3는 무제한 저장, Lambda는 자동 확장됩니다.

</div>
</details>

---

## Q64. Windows 파일 서버를 하이브리드 클라우드로 이전 + 최소 지연

**[상황]** 회사가 온프레미스 Windows 파일 서버에 5TB 이상의 데이터를 보유합니다. **AWS와 온프레미스 파일 스토리지 모두에 최소 지연 시간으로 접근**해야 합니다. AWS Site-to-Site VPN을 사용합니다.

**[요구사항]** AWS와 온프레미스 양측에서 최소 지연 시간으로 파일에 액세스할 수 있어야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS에 FSx for Windows 배포 → 온프레미스 데이터 FSx로 이동 → 클라우드 워크로드만 FSx 사용
- **B.** 온프레미스에 S3 파일 게이트웨이 배포 → 온프레미스 데이터 S3로 이동
- **C.** 온프레미스에 S3 파일 게이트웨이 → S3로 이동 → 워크로드 위치에 따라 S3 직접/FGW 사용
- **D.** AWS에 FSx for Windows 배포 + 온프레미스에 FSx 파일 게이트웨이 배포 → 클라우드는 FSx, 온프레미스는 FSx FGW 사용

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — FSx for Windows + FSx 파일 게이트웨이**

Amazon FSx 파일 게이트웨이는 온프레미스에서 FSx for Windows 데이터에 **로컬 캐시**를 통해 낮은 지연 시간으로 접근합니다. AWS의 클라우드 워크로드는 FSx for Windows에 직접 접근하고, 온프레미스 워크로드는 FSx 파일 게이트웨이를 통해 접근합니다.

</div>
</details>

---

## Q65. PDF/JPEG 의료 보고서에서 PHI 자동 감지

**[상황]** 병원이 API Gateway + Lambda를 통해 **PDF·JPEG 형식의 보고서**를 업로드합니다. Lambda 코드가 **보고서에서 보호되는 건강 정보(PHI)**를 식별해야 합니다.

**[요구사항]** 최소 운영 오버헤드로 PDF/이미지에서 텍스트를 추출하고 PHI를 식별해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Python 라이브러리로 텍스트 추출 + PHI 식별
- **B.** Amazon Textract로 텍스트 추출 + Amazon SageMaker로 PHI 식별
- **C.** Amazon Textract로 텍스트 추출 + Amazon Comprehend Medical로 PHI 식별
- **D.** Amazon Rekognition으로 텍스트 추출 + Comprehend Medical로 PHI 식별

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Amazon Textract + Comprehend Medical**

- **Amazon Textract**: 스캔 문서·이미지·PDF에서 텍스트와 데이터를 자동으로 추출
- **Amazon Comprehend Medical**: 의료 텍스트에서 처방전, 처치, 진단, PHI 등을 자동 감지

Rekognition(D)은 이미지·비디오 분석 서비스로 문서 텍스트 추출에 부적합합니다.

</div>
</details>

---

## Q66. 30일 자주 접근 + 이후 즉시 접근 필요 + 4년 후 삭제

**[상황]** 앱이 약 5MB 파일을 생성하여 S3에 저장합니다. **4년간 보관**, 파일에는 **즉각적인 액세스가 항상 필요**하며 **첫 30일은 자주**, **30일 이후는 거의 접근하지 않습니다**. 가장 비용 효율적이어야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 수명 주기: 30일 후 S3 Standard → S3 Glacier → 4년 후 삭제
- **B.** 수명 주기: 30일 후 S3 Standard → S3 One Zone-IA → 4년 후 삭제
- **C.** 수명 주기: 30일 후 S3 Standard → S3 Standard-IA → 4년 후 삭제
- **D.** 수명 주기: 30일 후 S3 Standard → S3 Standard-IA → 4년 후 Glacier 이동

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Standard→Standard-IA→삭제**

- **즉각적인 액세스가 항상 필요** → Glacier 불가(A)
- **재생산하기 쉽지 않은 중요 데이터** → 단일 AZ인 One Zone-IA 불가(B)
- **4년 보관 후 삭제** → 추가로 Glacier 이동 불필요(D)
- **정답**: 30일 Standard → Standard-IA (즉시 접근 가능 + 저렴) → 4년 후 삭제

</div>
</details>

---

## Q67. SQS 메시지 중복 처리 방지

**[상황]** 여러 EC2가 SQS 대기열 메시지를 처리하고 RDS에 쓴 후 메시지를 삭제합니다. **SQS에는 중복 메시지가 없는데 RDS 테이블에 중복 레코드**가 발견됩니다.

**[요구사항]** 메시지가 한 번만 처리되도록 해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** CreateQueue API로 새 대기열 생성
- **B.** AddPermission API로 권한 추가
- **C.** ReceiveMessage API로 적절한 대기 시간 설정
- **D.** ChangeMessageVisibility API로 가시성 타임아웃(Visibility Timeout) 증가

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — 가시성 타임아웃(Visibility Timeout) 증가**

처리 시간이 가시성 타임아웃보다 길면 메시지가 다시 보여 다른 소비자가 중복 처리합니다. **ChangeMessageVisibility API**로 처리 중 타임아웃을 늘리면 중복 처리를 방지합니다.

</div>
</details>

---

## Q68. Direct Connect + VPN 백업으로 하이브리드 아키텍처

**[상황]** 솔루션 설계자가 온프레미스를 AWS로 확장하는 하이브리드 아키텍처를 설계합니다. **일관되게 짧은 지연 시간과 고가용성 연결**이 필요합니다. **비용을 최소화**해야 하며 기본 연결 실패 시 **느린 트래픽을 허용**합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Direct Connect(주 연결) + Site-to-Site VPN(백업)
- **B.** 첫 번째 VPN 터널(주) + 두 번째 VPN 터널(백업)
- **C.** Direct Connect(주) + 두 번째 Direct Connect(백업)
- **D.** Direct Connect + CLI에서 자동 장애 조치 속성 설정

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — Direct Connect + VPN 백업**

Direct Connect는 전용선으로 **일관된 낮은 지연 시간**을 제공합니다. 기본 연결 실패 시 Site-to-Site VPN으로 폴백합니다. VPN은 인터넷을 경유해 Direct Connect보다 느리지만 "허용 가능"합니다. C(두 번째 Direct Connect)는 더 높은 비용이 발생합니다.

> 💡 **주 연결** = **Direct Connect** / **저비용 백업** = **Site-to-Site VPN**

</div>
</details>

---

## Q69. Aurora PostgreSQL 단일 AZ → 고가용성 (최소 운영 노력)

**[상황]** 회사가 ALB 뒤 EC2(Auto Scaling) + **단일 AZ Aurora PostgreSQL**로 비즈니스 크리티컬 앱을 운영합니다. **다운타임과 데이터 손실을 최소화**하는 고가용성을 원합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** EC2를 다른 리전에 배치 + Route 53 상태 확인 + Aurora 교차 리전 복제
- **B.** 멀티 AZ Auto Scaling 그룹 구성 + DB를 멀티 AZ + Amazon RDS Proxy 구성
- **C.** 단일 AZ Auto Scaling + 시간별 DB 스냅샷 + 장애 시 복구
- **D.** 멀티 리전 Auto Scaling + S3에 데이터 쓰기 + S3 이벤트 → Lambda → DB

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — 멀티 AZ Auto Scaling + Aurora 멀티 AZ + RDS Proxy**

- 멀티 AZ Auto Scaling: 단일 AZ 장애 시 자동으로 다른 AZ 인스턴스로 트래픽 전달
- Aurora 멀티 AZ: 자동 데이터 복제 및 장애 조치
- **RDS Proxy**: 연결 풀링을 통해 장애 조치 시간을 단축하고 DB 부하 감소

</div>
</details>

---

## Q70. NLB가 HTTP 오류 감지 못함 → ALB로 교체

**[상황]** HTTP 앱이 NLB 뒤에 EC2 Auto Scaling 그룹으로 실행됩니다. **NLB가 애플리케이션의 HTTP 오류를 감지하지 못하여** 오류 발생 시 EC2를 수동으로 재시작해야 합니다. 사용자 정의 스크립트 없이 가용성을 개선해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** NLB에서 HTTP 상태 확인 활성화 + URL 제공
- **B.** EC2에 cron으로 로컬 앱 로그 확인 + HTTP 오류 감지 시 재시작
- **C.** NLB를 ALB로 교체 → HTTP 상태 확인 활성화 → Auto Scaling이 비정상 인스턴스 교체
- **D.** CloudWatch 경보로 UnhealthyHostCount 모니터링 → Auto Scaling으로 비정상 교체

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — NLB → ALB로 교체**

NLB는 TCP 수준(L4)에서만 동작하여 HTTP 오류를 감지할 수 없습니다. **ALB(L7)**는 HTTP/HTTPS 프로토콜을 이해하며, 특정 URL에 GET 요청을 보내 응답 코드로 인스턴스 상태를 판단합니다. Auto Scaling과 연계하여 비정상 인스턴스를 자동으로 교체합니다.

> 💡 **HTTP 헬스체크 + 앱 수준 라우팅** = **ALB** / **TCP/UDP 고성능** = **NLB**

</div>
</details>

---

## 📊 Q51~70 핵심 패턴 정리

| 상황 키워드 | 정답 서비스 |
|------------|------------|
| 이메일 보고서 발송 | **Amazon SES** |
| 표준 파일 시스템 + 멀티 AZ 공유 | **Amazon EFS** |
| 누구도 삭제 불가 (루트 포함) | **S3 Object Lock 규정 준수 모드** |
| Windows 파일 공유 (SMB) | **FSx for Windows** |
| 이미지 부적절 콘텐츠 감지 | **Amazon Rekognition** |
| 컨테이너 인프라 없이 실행 | **ECS + Fargate** |
| 클릭스트림 대량 실시간 수집 | **Kinesis Data Streams** |
| HTTP → HTTPS 리디렉션 | **ALB 리스너 규칙** |
| DB 자격증명 자동 교체 | **AWS Secrets Manager** |
| 의료 문서 PHI 감지 | **Textract + Comprehend Medical** |
| SQS 중복 처리 방지 | **가시성 타임아웃 증가** |
| 전용선 주 + 저비용 백업 | **Direct Connect + VPN** |
| HTTP 오류 감지 헬스체크 | **ALB (NLB는 L4만 가능)** |
