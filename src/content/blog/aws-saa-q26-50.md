---
title: "AWS SAA 실전 시나리오 정리: 문제 26~50번 (실제 기출)"
description: "실제 SAA-C03 기출문제 26~50번 완벽 해설 - S3 보안, SSO, Global Accelerator, SQS, EC2 패치 등"
pubDate: "Mar 19 2026"
heroImage: '../../assets/blog-placeholder-2.jpg'
---

# AWS SAA 실전 기출문제 정리 (26~50번)

> 실제 Examtopics SAA-C03 기출문제를 **[상황] → [요구사항] → [정답·해설]** 형식으로 정리했습니다.  
> 👇 보기와 정답은 **클릭하면 펼쳐집니다!**

---

## Q26. S3 버킷 무단 구성 변경 감지

**[상황]** 회사가 AWS 클라우드 배포를 검토하여 **Amazon S3 버킷에 무단 구성 변경이 없는지 확인**해야 합니다.

**[요구사항]** S3 버킷의 구성 변경을 지속적으로 감지하고 평가해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **AWS Config**를 적절한 규칙으로 활성화
- **B.** AWS Trusted Advisor를 적절한 검사로 활성화
- **C.** Amazon Inspector를 적절한 평가 템플릿으로 활성화
- **D.** S3 서버 액세스 로깅 활성화 + Amazon EventBridge 구성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — AWS Config**

AWS Config는 AWS 리소스 구성을 지속적으로 모니터링하고 기록하며, 원하는 구성을 기준으로 자동 평가합니다. Trusted Advisor(B)는 일회성 점검, Inspector(C)는 취약점 스캔, 서버 액세스 로깅(D)은 요청 로그 수집 목적입니다.

> 💡 **리소스 구성 변경 추적** = **AWS Config** / **API 호출 기록** = **CloudTrail**

</div>
</details>

---

## Q27. AWS 계정 없는 외부 사람과 CloudWatch 대시보드 공유

**[상황]** 회사가 새 앱을 시작하고 CloudWatch 대시보드에 지표를 표시합니다. **제품 관리자가 이 대시보드에 주기적으로 접근**해야 하는데, **AWS 계정이 없습니다**.

**[요구사항]** AWS 계정 없이 최소 권한으로 대시보드에 접근할 수 있어야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **CloudWatch 콘솔에서 대시보드를 공유하고 제품 관리자의 이메일 주소를 지정하여 공유 링크 제공**
- **B.** IAM 사용자 생성 + CloudWatchReadOnlyAccess 정책 연결 + 자격증명 공유
- **C.** IAM 사용자 생성 + ViewOnlyAccess 정책 연결 + 자격증명 공유
- **D.** 퍼블릭 서브넷에 배스천 서버 배포 + RDP 자격증명 공유

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — CloudWatch 대시보드 직접 공유**

CloudWatch 대시보드는 AWS 계정 없이도 공유할 수 있습니다. 이메일로 공유 시 해당 사람은 고유 암호를 설정하여 대시보드만 조회합니다. B·C는 AWS 계정 생성이 필요하고 과도한 권한이 부여됩니다.

</div>
</details>

---

## Q28. 온프레미스 Active Directory로 AWS SSO

**[상황]** 회사가 AWS Organizations로 여러 계정을 관리하며 **온프레미스 자체 관리 Microsoft Active Directory**에서 사용자를 계속 관리해야 합니다. 회사의 모든 계정에 **SSO 솔루션**이 필요합니다.

**[요구사항]** 온프레미스 AD 자격증명으로 여러 AWS 계정에 SSO 접근을 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS SSO 활성화 + 단방향 신뢰로 AWS Directory Service 연결
- **B.** **AWS SSO 활성화 + 양방향 포리스트 신뢰로 AWS Managed Microsoft AD를 사내 AD와 연결**
- **C.** AWS Directory Service + 양방향 신뢰 관계만 생성
- **D.** 온프레미스에 IdP 배포 + AWS SSO 활성화

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — AWS SSO + 양방향 포리스트 신뢰**

AWS Management Console 등 AWS 엔터프라이즈 앱에는 **양방향 신뢰**가 필요합니다. IAM Identity Center(AWS SSO)를 활성화하고 AWS Managed Microsoft AD를 온프레미스 AD와 양방향 신뢰로 연결하면, 기존 AD 자격증명으로 AWS 콘솔에 접근이 가능합니다.

</div>
</details>

---

## Q29. UDP 기반 VoIP 서비스 글로벌 저지연 라우팅 + 자동 장애 조치

**[상황]** 회사가 **UDP 연결을 사용하는 VoIP 서비스**를 여러 AWS 리전에 배포합니다. Auto Scaling 그룹 EC2로 구성됩니다.

**[요구사항]** 지연 시간이 가장 짧은 리전으로 사용자를 라우팅하고, **리전 간 자동 장애 조치**가 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **NLB + Auto Scaling 그룹 연결 → 각 리전 NLB를 AWS Global Accelerator 엔드포인트로 사용**
- **B.** ALB + Auto Scaling 그룹 → 각 리전 ALB를 Global Accelerator 엔드포인트로 사용
- **C.** NLB + Auto Scaling → Route 53 지연 시간 레코드 → CloudFront 배포
- **D.** ALB + Auto Scaling → Route 53 가중치 레코드 → CloudFront 배포

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — NLB + AWS Global Accelerator**

UDP를 사용하므로 ALB(HTTP/HTTPS 전용)가 아닌 **NLB(TCP/UDP 지원)**가 필요합니다. AWS Global Accelerator는 Anycast IP를 통해 사용자를 가장 가까운 엣지로 연결한 뒤 AWS 백본망을 통해 최적 리전으로 라우팅합니다. 자동 헬스체크로 장애 발생 리전을 즉시 제외합니다.

> 💡 **UDP + 글로벌 저지연 + 자동 장애조치** = **Global Accelerator + NLB**

</div>
</details>

---

## Q30. 월 48시간만 사용하는 RDS 비용 최적화

**[상황]** 개발팀이 **성능 개선 도우미가 활성화된 RDS MySQL**을 사용합니다. 테스트는 **한 달에 한 번 48시간** 동안만 실행됩니다. DB 인스턴스의 컴퓨팅/메모리 속성을 줄이지 않고 비용을 줄이려 합니다.

**[요구사항]** 컴퓨팅/메모리 스펙 유지하면서 테스트 실행 비용을 가장 효율적으로 낮춰야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 테스트 완료 후 DB 인스턴스를 중지(Stop)
- **B.** Auto Scaling 정책으로 테스트 완료 시 자동 축소
- **C.** **테스트 완료 후 스냅샷 생성 → DB 인스턴스 종료 → 필요 시 스냅샷에서 복원**
- **D.** 테스트 완료 후 저용량 인스턴스로 수정 → 필요 시 재수정

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — 스냅샷 생성 후 인스턴스 종료**

A(인스턴스 중지)는 EBS 볼륨 비용이 계속 발생합니다. C(스냅샷 후 종료)는 스냅샷 저장 비용만 발생하여 가장 저렴합니다. 한 달에 48시간만 사용하는 테스트 DB는 나머지 696시간의 인스턴스 비용을 완전히 없앨 수 있습니다.

</div>
</details>

---

## Q31. EC2/RDS/Redshift 태그 누락 자동 감지

**[상황]** 회사가 모든 **Amazon EC2, RDS, Redshift**가 적절히 태그로 구성되어 있는지 확인해야 합니다.

**[요구사항]** 태그 미설정 리소스를 자동으로 감지하는 노력을 최소화해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **AWS Config 규칙**으로 적절히 태그가 지정되지 않은 리소스를 정의하고 감지
- **B.** Cost Explorer로 태그 미설정 리소스 표시 → 수동으로 태그 지정
- **C.** 모든 리소스 태그 확인하는 API 호출 코드 작성 → EC2에서 주기적 실행
- **D.** 모든 리소스 태그 확인하는 API 호출 코드 작성 → CloudWatch 통해 Lambda 예약 실행

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — AWS Config 규칙**

AWS Config의 `required-tags` 관리형 규칙을 사용하면 태그 미설정 리소스를 **자동으로 지속 감지**합니다. B는 수동 태그 지정이 필요하고, C·D는 커스텀 코드 작성 및 유지보수가 필요합니다.

</div>
</details>

---

## Q32. HTML/CSS/JS 정적 웹사이트 가장 비용 효율적 호스팅

**[상황]** 개발팀이 다른 팀이 접근할 웹사이트를 호스팅해야 합니다. 웹사이트 콘텐츠는 **HTML, CSS, 클라이언트 측 JavaScript, 이미지**로만 구성됩니다.

**[요구사항]** 웹사이트 호스팅 방법 중 **가장 비용 효율적인** 방법을 선택해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 컨테이너화 후 AWS Fargate에서 호스팅
- **B.** **Amazon S3 버킷 생성 후 정적 웹사이트 호스팅**
- **C.** EC2 인스턴스에 웹 서버 배포
- **D.** ALB + Lambda(Express.js) 구성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon S3 정적 웹사이트 호스팅**

완전히 **정적인 웹사이트**입니다. S3 정적 웹사이트 호스팅을 사용하면 서버 구성 없이 가장 저렴하게 호스팅할 수 있습니다. EC2(C)는 서버 운영 비용이 지속 발생하고, Fargate(A)와 ALB+Lambda(D)는 불필요한 오버헤드입니다.

</div>
</details>

---

## Q33. 금융 거래 실시간 스트리밍 + 민감 데이터 제거 + 다중 앱 공유

**[상황]** 온라인 마켓플레이스에서 수백만 건의 금융 거래를 **여러 내부 앱과 실시간으로 공유**해야 합니다. DynamoDB에 저장하기 전에 **민감한 데이터를 제거**해야 합니다.

**[요구사항]** 실시간·확장 가능한 솔루션으로 민감 데이터 제거 후 여러 앱에서 데이터를 소비할 수 있어야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** DynamoDB → DynamoDB 규칙으로 민감 데이터 제거 → DynamoDB 스트림으로 공유
- **B.** Kinesis Data **Firehose** → S3/DynamoDB + Lambda로 민감 데이터 제거 → S3에서 소비
- **C.** **Kinesis Data Streams → Lambda로 민감 데이터 제거 → DynamoDB 저장 → Kinesis 스트림에서 소비**
- **D.** S3에 일괄 저장 → Lambda로 민감 데이터 제거 → DynamoDB 저장 → S3에서 소비

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — Kinesis Data Streams + Lambda**

실시간 데이터 수집·소비에는 **Kinesis Data Streams**가 적합합니다. Lambda와 통합하여 민감 데이터를 실시간으로 제거하고 DynamoDB에 저장합니다. 다른 앱들은 동일 Kinesis 스트림에서 독립적으로 데이터를 소비합니다. **Firehose(B)는** 배치 전송 서비스로 여러 앱이 실시간 소비하는 용도와 맞지 않습니다.

</div>
</details>

---

## Q34. 구성 변경 추적 + API 호출 기록 둘 다 필요

**[상황]** 회사가 규정 준수, 거버넌스, 감사, 보안을 위해 **AWS 리소스의 구성 변경 사항 추적**과 **API 호출 기록** 모두가 필요합니다.

**[요구사항]** 두 가지 기능을 모두 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** CloudTrail로 구성 변경 추적 + Config로 API 호출 기록
- **B.** **AWS Config로 구성 변경 추적 + AWS CloudTrail로 API 호출 기록**
- **C.** Config로 구성 변경 추적 + CloudWatch로 API 호출 기록
- **D.** CloudTrail로 구성 변경 추적 + CloudWatch로 API 호출 기록

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Config(구성 변경) + CloudTrail(API 호출)**

역할 구분:
- **AWS Config**: 리소스 구성 인벤토리·변경 이력·컴플라이언스 평가
- **AWS CloudTrail**: 누가 언제 무엇을 어떤 API로 호출했는지 기록

시험에서 자주 혼동하는 포인트이므로 반드시 암기하세요!

</div>
</details>

---

## Q35. ELB 앞 대규모 DDoS 방어

**[상황]** 회사가 공개 웹 앱 출시를 준비합니다. ELB 뒤의 VPC 내 EC2 인스턴스로 구성됩니다. DNS는 타사 서비스를 사용합니다. **대규모 DDoS 공격**을 감지하고 보호해야 합니다.

**[요구사항]** 대규모 DDoS 공격에 대한 탐지 및 보호 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon GuardDuty 활성화
- **B.** EC2 인스턴스에 Amazon Inspector 활성화
- **C.** AWS Shield 활성화 + Amazon Route 53 할당
- **D.** **AWS Shield Advanced 활성화 + ELB 할당**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — AWS Shield Advanced + ELB**

Shield Advanced는 정교한 대규모 DDoS 공격에 대한 추가 보호 및 실시간 가시성을 제공합니다. ELB, CloudFront, Route 53, EC2 EIP에 할당하여 보호합니다. **DDoS 관련 비용 급증 시 요금 보호**도 적용됩니다. GuardDuty(A)는 위협 탐지(차단 불가), Inspector(B)는 취약점 스캔, Shield Standard(C)는 기본 L3/L4 보호만 제공합니다.

</div>
</details>

---

## Q36. 두 리전 S3를 동일 KMS 키로 암호화

**[상황]** 앱이 **두 AWS 리전의 S3 버킷**에 데이터를 저장합니다. **두 버킷의 데이터는 동일한 KMS 키**로 암호화·복호화해야 합니다. 데이터와 키 모두 두 리전 각각에 저장되어야 합니다.

**[요구사항]** 최소 운영 오버헤드로 두 리전에서 동일 KMS 키 사용이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** SSE-S3(S3 관리형 키)로 서버 측 암호화 + CRR 구성
- **B.** **고객 관리형 다중 리전 KMS 키 생성 + 각 리전 S3 버킷 생성 + CRR + 클라이언트 측 암호화**
- **C.** 각 리전에 고객 관리 KMS 키 + SSE-S3 + CRR
- **D.** 각 리전에 고객 관리 KMS 키 + SSE-KMS + CRR

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — KMS 다중 리전 키**

KMS **멀티 리전 키**는 동일한 키 소재를 여러 리전에 복제합니다. 한 리전에서 암호화한 데이터를 다른 리전에서 동일한 키 ID로 복호화할 수 있습니다. D는 리전별로 다른 키를 만들므로 "동일 키" 요건 불충족입니다.

</div>
</details>

---

## Q37. EC2 원격 접근 운영 오버헤드 최소화

**[상황]** 회사가 AWS 계정의 EC2 인스턴스에서 여러 새 워크로드를 출시했습니다. 인스턴스에 **원격으로 안전하게 접근하고 관리**하는 전략이 필요합니다. AWS Well-Architected 프레임워크를 따르는 반복 가능한 프로세스를 구현해야 합니다.

**[요구사항]** 최소한의 운영 오버헤드와 Well-Architected 원칙을 준수하여 EC2에 원격 접근해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** EC2 시리얼 콘솔로 직접 액세스
- **B.** **각 인스턴스에 IAM 역할 연결 + AWS Systems Manager Session Manager로 원격 SSH 세션**
- **C.** SSH 키 쌍 생성 → 배스천 호스트를 퍼블릭 서브넷에 배포
- **D.** Site-to-Site VPN 설정 + VPN 터널에서 SSH로 직접 연결

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — AWS Systems Manager Session Manager**

Session Manager는 SSH 키 관리, 인바운드 포트 오픈, 배스천 호스트 없이 EC2에 안전하게 접근합니다. IAM으로 중앙 접근 제어, CloudTrail로 모든 세션 감사, 실행된 명령을 S3/CloudWatch Logs에 기록합니다.

</div>
</details>

---

## Q38. S3 정적 웹사이트 전 세계 지연 시간 최소화 (비용 효율적)

**[상황]** 회사가 **S3에 정적 웹사이트를 호스팅**하고 Route 53을 사용합니다. 웹사이트는 전 세계적으로 수요가 증가하여 접근 사용자의 **대기 시간을 줄여야** 합니다.

**[요구사항]** 가장 비용 효율적으로 전 세계 사용자의 지연 시간을 줄여야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 모든 AWS 리전에 S3 버킷 복제 + Route 53 지리적 위치 라우팅
- **B.** Global Accelerator 프로비저닝 + S3 버킷과 연결 + Route 53 업데이트
- **C.** **S3 버킷 앞에 Amazon CloudFront 배포 추가 + Route 53이 CloudFront를 가리키도록 수정**
- **D.** S3 버킷에서 S3 Transfer Acceleration 활성화 + Route 53 업데이트

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — CloudFront + Route 53**

CloudFront는 전 세계 엣지 로케이션에서 정적 콘텐츠를 캐싱하여 지연 시간을 줄입니다. A는 관리 복잡도가 높고, B는 S3와 직접 연결할 수 없으며, D는 업로드 가속 서비스로 다운로드(사용자 접근)와 무관합니다.

</div>
</details>

---

## Q39. RDS 삽입 작업 10초 이상 걸리는 I/O 성능 문제

**[상황]** 회사 웹사이트가 **RDS MySQL 테이블**을 사용합니다. DB에는 **2TB 범용 SSD 스토리지**가 있습니다. 일부 **삽입 작업이 10초 이상 걸리는** 문제가 있으며 **데이터베이스 스토리지 성능이 문제**라고 판단했습니다.

**[요구사항]** 데이터베이스 스토리지 성능 문제를 해결해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **스토리지 유형을 프로비저닝된 IOPS SSD로 변경**
- **B.** DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경
- **C.** DB 인스턴스를 버스트 가능한 성능 인스턴스 클래스로 변경
- **D.** Multi-AZ RDS 읽기 전용 복제본 활성화

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — 프로비저닝된 IOPS SSD**

문제가 **스토리지 성능**(I/O)이라고 명시되어 있습니다. 범용 SSD(gp2/gp3)에서 **프로비저닝된 IOPS SSD(io1/io2)**로 변경하면 지속적으로 높은 IOPS를 보장합니다. D(Read Replica)는 읽기 분산용이며 쓰기(삽입) 성능에는 영향 없습니다.

</div>
</details>

---

## Q40. 수천 개 IoT 기기 경고 수집·14일 즉시 접근·이후 보관

**[상황]** 수천 개의 에지 장치가 매일 **1TB의 상태 알림(각 ~2KB)**을 생성합니다. **고가용성**으로 수집·저장해야 하고, **14일 동안은 즉시 분석**, **14일 이후에는 보관**해야 합니다.

**[요구사항]** 가장 운영 효율적인 방법으로 대량 데이터 수집·분류·보관을 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **Kinesis Data Firehose → S3 → S3 수명 주기 정책(14일 후 Glacier 전환)**
- **B.** 2 AZ에서 EC2 + ELB → S3 → S3 수명 주기로 Glacier 전환
- **C.** Kinesis Data Firehose → OpenSearch Service + 매일 수동 스냅샷 + 14일 후 데이터 삭제
- **D.** SQS 표준 큐(보존 기간 14일) → 소비자가 메시지 수명 확인 → S3 복사 후 삭제

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A — Kinesis Data Firehose → S3 → 수명 주기 정책**

Kinesis Data Firehose는 서버리스로 대량 데이터를 수집하여 S3에 자동 전달합니다. S3 수명 주기 정책으로 14일 후 자동으로 Glacier로 이전합니다. C(OpenSearch)는 14일 후 삭제하므로 보관 요건 위반입니다.

</div>
</details>

---

## Q41. SaaS 소스에서 데이터 수집 성능 개선

**[상황]** 앱이 여러 **SaaS 소스**와 통합하여 데이터를 EC2에서 수신하고 S3에 업로드하며, 업로드 완료 시 사용자에게 알림을 보냅니다. EC2 인스턴스가 모든 것을 처리하다 보니 **성능이 느려지는 문제**가 발생했습니다.

**[요구사항]** 최소한의 운영 오버헤드로 성능을 개선해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Auto Scaling 그룹 + S3 업로드 완료 시 SNS 알림
- **B.** **Amazon AppFlow로 각 SaaS 소스 → S3 데이터 전송 + S3 업로드 완료 시 SNS 알림**
- **C.** 각 SaaS 소스용 EventBridge 규칙 + S3 버킷을 목적지로 + 두 번째 EventBridge → SNS
- **D.** Docker 컨테이너로 마이그레이션 + ECS 호스팅

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon AppFlow + S3 이벤트 → SNS**

**Amazon AppFlow**는 Salesforce, Marketo, Slack, ServiceNow 등 SaaS 앱과 AWS 서비스(S3, Redshift) 간에 데이터를 안전하게 전송하는 완전관리형 통합 서비스입니다. EC2 없이 SaaS→S3 데이터 전송이 가능하여 성능 병목이 제거됩니다.

> 💡 **SaaS 소스 데이터 통합** = **Amazon AppFlow**

</div>
</details>

---

## Q42. 멀티 AZ EC2가 NAT GW 통해 S3 접근 → 데이터 전송 비용 절감

**[상황]** 여러 AZ의 EC2 인스턴스들이 **단일 NAT 게이트웨이를 통해** Amazon S3에서 이미지를 다운로드하고 업로드합니다. 회사가 **데이터 전송 요금**에 대해 우려합니다.

**[요구사항]** 리전 내 데이터 전송 요금을 피하는 가장 비용 효율적인 방법이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 각 AZ에서 NAT 게이트웨이 추가 시작
- **B.** NAT 게이트웨이를 NAT 인스턴스로 교체
- **C.** **Amazon S3용 게이트웨이 VPC 엔드포인트 배포**
- **D.** EC2 전용 호스트 프로비저닝

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: C — S3 게이트웨이 VPC 엔드포인트**

S3 게이트웨이 VPC 엔드포인트를 사용하면 VPC와 S3 사이의 트래픽이 **AWS 내부 네트워크**로만 이동합니다. NAT 게이트웨이를 통하지 않으므로 **데이터 전송 요금과 NAT 게이트웨이 처리 요금이 모두 없어집니다**. 게다가 게이트웨이 엔드포인트 자체도 **무료**입니다!

</div>
</details>

---

## Q43. 온프레미스 → S3 백업 인터넷 대역폭 제한 해결

**[상황]** 온프레미스 앱이 **시간에 민감한 대량 데이터**를 S3에 백업합니다. 앱 성장으로 **인터넷 대역폭 제한에 대한 불만**이 생겼습니다. 내부 사용자의 인터넷 연결에 미치는 영향을 최소화하는 **장기 솔루션**이 필요합니다.

**[요구사항]** S3에 대한 적시 백업을 허용하고 내부 인터넷 연결의 영향을 최소화해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** AWS VPN 연결 설정 + VPC 게이트웨이 엔드포인트 통해 트래픽 프록시
- **B.** **새 AWS Direct Connect 연결 설정 → 이 연결을 통해 백업 트래픽 전송**
- **C.** 매일 Snowball 디바이스 주문 → 데이터 로드 → AWS로 반환
- **D.** 지원 티켓으로 S3 서비스 한도 제거 요청

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — AWS Direct Connect**

Direct Connect는 온프레미스 데이터센터와 AWS 사이에 **전용 전용선**을 제공합니다. 인터넷 대역폭을 사용하지 않으므로 일반 업무 트래픽에 영향을 주지 않습니다. C(Snowball 매일 주문)는 배송에 수일이 필요하여 "장기 솔루션"으로 비현실적입니다.

</div>
</details>

---

## Q44. S3 데이터 우발적 삭제 방지 (2가지 선택)

**[상황]** 회사의 S3 버킷에 중요한 데이터가 있습니다. 회사는 **우발적인 삭제**로부터 데이터를 보호해야 합니다.

**[요구사항]** 우발적 삭제로부터 데이터를 보호하는 방법을 2가지 선택해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** **S3 버킷에서 버전 관리(Versioning) 활성화**
- **B.** **S3 버킷에서 MFA 삭제(MFA Delete) 활성화**
- **C.** S3 버킷에 버킷 정책 생성
- **D.** S3 버킷에서 기본 암호화 활성화
- **E.** S3 버킷 객체에 수명 주기 정책 생성

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: A + B**

- **버전 관리(A)**: 실수로 삭제해도 이전 버전 복원 가능. 삭제 시 Delete Marker가 생성되어 원본은 보존됩니다.
- **MFA 삭제(B)**: 버전 영구 삭제 시 MFA 인증 토큰 추가 요구. 악의적·우발적 삭제를 이중으로 방어합니다.
- 버킷 정책(C)은 접근 권한, 암호화(D)는 내용 보호, 수명 주기(E)는 객체 전환·삭제 자동화 용도입니다.

</div>
</details>

---

## Q45. SNS+Lambda 수집 워크플로 실패 시 데이터 손실 방지 (2가지 선택)

**[상황]** SNS 주제로 알림을 받아 Lambda 함수가 데이터를 처리하는 수집 워크플로가 있습니다. **네트워크 연결 문제**로 수집 워크플로가 때때로 실패합니다.

**[요구사항]** Lambda 함수가 향후 **모든 데이터를 수집**하도록 보장해야 합니다. (2가지 선택)

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 여러 AZ에 Lambda 함수 배포
- **B.** **SQS 대기열을 생성하여 SNS 주제를 구독**
- **C.** Lambda 함수에 할당된 CPU와 메모리 증가
- **D.** Lambda 함수에 대해 프로비저닝된 처리량 증가
- **E.** **SQS 대기열에서 읽도록 Lambda 함수 수정**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B + E**

SNS → SQS → Lambda 패턴으로 변경합니다. SNS가 SQS에 메시지를 보내면(B), Lambda 함수는 SNS 대신 SQS에서 읽습니다(E). 네트워크 문제로 Lambda가 잠시 실패해도 메시지는 SQS에 안전하게 보관되어 있다가 Lambda 복구 후 자동으로 재처리됩니다.

</div>
</details>

---

## Q46. S3 업로드 파일에서 PII 자동 감지 + 관리자 알림

**[상황]** 회사가 SFTP를 통해 파일을 받고 처리·분석합니다. 최근 일부 파일에 **개인 식별 정보(PII)**가 포함된 것을 발견했습니다. PII가 공유될 경우 관리자에게 경고하고 **문제 해결을 자동화**하려 합니다.

**[요구사항]** 최소한의 개발 노력으로 PII 감지, 알림, 자동화를 구현해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Amazon Inspector로 S3 객체 스캔 + S3 수명 주기 정책으로 PII 객체 제거
- **B.** **Amazon S3를 전송 지점으로 사용 + Amazon Macie로 스캔 + PII 발견 시 SNS로 관리자 알림**
- **C.** Lambda 함수에 사용자 정의 스캔 알고리즘 구현 → 객체 로드 시 트리거 → SNS 알림
- **D.** Lambda 사용자 정의 스캔 + SES로 이메일 알림 + S3 수명 주기 정책으로 제거

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Amazon Macie + SNS**

Amazon Macie는 머신러닝과 패턴 매칭으로 S3의 PII를 **자동으로 탐지**합니다. 이미 다양한 형식의 PII를 감지하는 사전 구축된 규칙이 있어 **별도 개발 필요 없습니다**. Inspector(A)는 호스트 취약점 스캔용, Lambda 커스텀(C·D)은 개발 노력이 많이 필요합니다.

</div>
</details>

---

## Q47. 1주일 이벤트용 EC2 용량 특정 AZ에서 보장

**[상황]** 회사가 **1주일 동안 진행될 이벤트**를 위해 특정 리전의 **3개 특정 가용 영역**에서 보장된 EC2 용량이 필요합니다.

**[요구사항]** 특정 AZ에서 EC2 용량을 보장해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** 필요한 리전을 지정하는 **예약 인스턴스(Reserved Instance)** 구매
- **B.** 필요한 지역을 지정하는 **온디맨드 용량 예약(Capacity Reservation)** 생성
- **C.** 리전과 3개 AZ를 지정하는 **예약 인스턴스** 구매
- **D.** **필요한 리전과 3개 AZ를 지정하는 온디맨드 용량 예약 생성**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — 온디맨드 용량 예약 (특정 AZ 지정)**

**온디맨드 용량 예약(Capacity Reservation)**은 특정 AZ에서 EC2 용량을 원하는 기간 동안 보장합니다. 예약 인스턴스(RI)는 1년/3년 약정이라 1주일 이벤트에 부적합합니다. 온디맨드 용량 예약은 생성 즉시 용량이 보장되며 언제든 취소할 수 있습니다.

</div>
</details>

---

## Q48. EC2 인스턴스 스토어의 카탈로그를 고가용성·내구성 스토리지로 이동

**[상황]** 회사 웹사이트가 항목 카탈로그에 **Amazon EC2 인스턴스 스토어**를 사용합니다. 카탈로그의 **가용성이 높고 내구성 있는 위치**에 저장되기를 원합니다.

**[요구사항]** 고가용성과 내구성을 모두 갖춘 스토리지로 카탈로그를 이동해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Redis용 Amazon ElastiCache로 이동
- **B.** 더 큰 인스턴스 스토어의 더 큰 EC2 인스턴스 배포
- **C.** 인스턴스 스토어 → S3 Glacier Deep Archive로 이동
- **D.** **카탈로그를 Amazon EFS 파일 시스템으로 이동**

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — Amazon EFS**

인스턴스 스토어는 **휘발성**으로 인스턴스 종료 시 데이터가 사라집니다. EFS는 완전 관리형 공유 파일 시스템으로 여러 AZ에 자동으로 파일을 중복 저장하여 고가용성과 내구성을 제공합니다. ElastiCache(A)는 캐시, Glacier Deep Archive(C)는 즉시 접근이 불가한 아카이브 스토리지입니다.

</div>
</details>

---

## Q49. 통화 기록 1년 이내 즉시 접근 + 이후 저렴하게 보관 (최저 비용)

**[상황]** 회사가 통화 기록 파일을 저장합니다. **1년 이내는 무작위 접근**, **1년 이후에는 자주 접근하지 않습니다**. 1년 미만 파일을 **가능한 한 빠르게 쿼리하고 검색**할 수 있어야 하며, 오래된 파일 검색 지연은 허용됩니다.

**[요구사항]** 가장 비용 효율적인 솔루션이 필요합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** S3 Glacier Instant Retrieval에 태그와 함께 저장 → 태그로 쿼리
- **B.** **S3 Intelligent-Tiering에 저장 + 수명 주기(1년 후 Glacier Flexible) + Athena로 S3 쿼리 + Glacier Select로 Glacier 쿼리**
- **C.** S3 Standard에 태그와 메타데이터 저장 + 수명 주기(1년 후 Glacier Instant) → 메타데이터에서 조회
- **D.** S3 Standard + 수명 주기(1년 후 Glacier Deep Archive) + RDS에 메타데이터 저장

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: B — Intelligent-Tiering + Athena + Glacier Flexible + Glacier Select**

1년 이내의 접근 패턴이 불규칙하므로 S3 Intelligent-Tiering이 적합하고, Athena로 SQL 쿼리가 가능합니다. 1년 후에는 Glacier Flexible Retrieval으로 이전하여 비용을 절감하고, Glacier Select로 아카이브 데이터도 쿼리·검색이 가능합니다.

</div>
</details>

---

## Q50. 1,000개 EC2 인스턴스에 즉각 패치 적용

**[상황]** 회사에 **1,000개의 Amazon EC2 Linux 인스턴스**에서 실행되는 프로덕션 워크로드가 있습니다. 타사 소프트웨어의 **중요한 보안 취약성을 수정**하기 위해 **가능한 한 빨리** 모든 인스턴스를 패치해야 합니다.

**[요구사항]** 가능한 한 빠르게 모든 1,000개 EC2 인스턴스에 패치를 적용해야 합니다.

<details class="quiz-choices">
<summary>▶ 보기 펼치기</summary>
<div class="choices-content">

- **A.** Lambda 함수로 모든 EC2에 패치 적용
- **B.** AWS Systems Manager Patch Manager로 모든 EC2에 패치 구성
- **C.** AWS Systems Manager 유지 관리 기간(Maintenance Window) 예약
- **D.** **AWS Systems Manager Run Command**로 모든 EC2에 패치하는 사용자 지정 명령 실행

</div>
</details>

<details class="quiz-answer">
<summary>🔓 정답 및 해설 보기</summary>
<div class="answer-content">

**정답: D — SSM Run Command**

Run Command는 리소스 그룹을 통해 **즉시 여러 인스턴스에 동시에 명령을 실행**합니다. A(Lambda)는 1,000개 인스턴스 개별 처리로 비효율적. B(Patch Manager)는 릴리스 후 며칠 내 자동 승인 방식으로 즉각 적용이 어렵습니다. C(유지 관리 기간)는 예약된 시간에만 실행되므로 즉각성 요건 불충족입니다.

</div>
</details>

---

## 📊 Q26~50 핵심 패턴 정리

| 상황 키워드 | 정답 서비스 |
|------------|------------|
| AWS 리소스 구성 변경 추적 | **AWS Config** |
| AWS API 호출 기록 | **CloudTrail** |
| SaaS 데이터 통합 | **Amazon AppFlow** |
| VPC-S3 데이터 전송 비용 절감 | **S3 Gateway VPC Endpoint** |
| 전용선으로 온프레미스→AWS | **AWS Direct Connect** |
| S3 우발적 삭제 방지 | **버전 관리 + MFA Delete** |
| S3에서 PII 자동 감지 | **Amazon Macie** |
| UDP 글로벌 저지연 가속 | **NLB + Global Accelerator** |
| 특정 AZ EC2 용량 보장 | **온디맨드 용량 예약** |
| 즉각 EC2 대량 명령 실행 | **SSM Run Command** |
| SSH 없이 EC2 원격 접근 | **SSM Session Manager** |
| 온프레미스 AD → AWS SSO | **IAM Identity Center + 양방향 신뢰** |
