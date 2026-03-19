export const quizData = [
  {
    id: 26,
    question: "S3 버킷의 무단 구성 변경을 지속적으로 감지하고 평가하는 운영 효율적인 방법은?",
    options: [
      "AWS Config를 적절한 규칙으로 활성화",
      "AWS Trusted Advisor를 적절한 검사로 활성화",
      "Amazon Inspector를 적절한 평가 템플릿으로 활성화",
      "S3 서버 액세스 로깅 활성화 + Amazon EventBridge 구성"
    ],
    answer: 0,
    explanation: "AWS Config는 리소스 구성을 지속적으로 모니터링하고 기록하며, 원하는 구성을 기준으로 자동 평가합니다.",
    glossary: {
      "AWS Config": "AWS 리소스 구성을 지속적으로 모니터링하고 기록하며, 규정 준수 여부를 평가하는 서비스"
    }
  },
  {
    id: 27,
    question: "AWS 계정이 없는 외부 제품 관리자에게 CloudWatch 대시보드의 지표를 안전하게 공유하려면?",
    options: [
      "CloudWatch 콘솔에서 대시보드를 공유하고 관리자의 이메일을 지정하여 공유 링크 제공",
      "IAM 사용자 생성 + CloudWatchReadOnlyAccess 정책 연결 + 자격증명 공유",
      "IAM 사용자 생성 + ViewOnlyAccess 정책 연결 + 자격증명 공유",
      "퍼블릭 서브넷에 배스천 서버 배포 + RDP 자격증명 공유"
    ],
    answer: 0,
    explanation: "CloudWatch 대시보드는 외부 사용자에게 이메일 기반으로 대시보드만 조회할 수 있는 전용 공유 기능을 제공합니다.",
    glossary: {
      "CloudWatch Dashboard": "AWS 리소스의 지표를 시각적으로 모니터링할 수 있는 사용자 지정 대시보드"
    }
  },
  {
    id: 28,
    question: "여러 AWS 계정을 관리하며 온프레미스 AD 자격증명으로 SSO 접근을 구현하는 아키텍처는?",
    options: [
      "AWS SSO 활성화 + 단방향 신뢰로 연결",
      "AWS SSO 활성화 + 양방향 포리스트 신뢰로 AWS Managed Microsoft AD를 온프레미스 AD와 연결",
      "AWS Directory Service + 양방향 신뢰 관계만 생성",
      "온프레미스에 IdP 배포 + AWS SSO 활성화"
    ],
    answer: 1,
    explanation: "AWS Managed Microsoft AD와 온프레미스 AD 간의 양방향 포리스트 신뢰 관계를 통해 기존 AD 사용자가 AWS 리소스에 SSO로 접근할 수 있습니다.",
    glossary: {
      "AWS SSO (IAM Identity Center)": "여러 AWS 계정 및 애플리케이션에 대한 로그인 권한을 중앙에서 관리하는 서비스",
      "Trust Relationship (신뢰 관계)": "두 개별 디렉터리 간에 인증을 공유할 수 있도록 허용하는 설정"
    }
  },
  {
    id: 29,
    question: "UDP 기반 VoIP 서비스의 글로벌 저지연 라우팅과 리전 간 자동 장애 조치를 위해 적합한 솔루션은?",
    options: [
      "NLB와 Auto Scaling 그룹 연결 -> 각 리전 NLB를 AWS Global Accelerator 엔드포인트로 설정",
      "ALB와 Auto Scaling 그룹 연결 -> 각 리전 ALB를 Global Accelerator 엔드포인트로 설정",
      "NLB와 Route 53 지연 시간 라우팅 활용",
      "ALB와 Route 53 가중치 라우팅 활용"
    ],
    answer: 0,
    explanation: "UDP 트래픽 처리를 위해 NLB가 필요하며, Global Accelerator를 통해 지연 시간 기반 글로벌 라우팅과 자동 장애 조치를 구현합니다.",
    glossary: {
      "Network Load Balancer (NLB)": "TCP, UDP, TLS 통신을 매우 낮은 지연 시간으로 처리하는 로드 밸런서",
      "Anycast IP": "전 세계의 여러 지점에서 동일한 IP 주소를 사용하여 가장 가까운 서버로 트래픽을 안내하는 주소 지정 방식"
    }
  },
  {
    id: 30,
    question: "한 달에 48시간만 사용하는 테스트용 RDS MySQL의 비용을 컴퓨팅 사양 변경 없이 최소화하려면?",
    options: [
      "테스트 완료 후 DB 인스턴스를 중지(Stop)",
      "Auto Scaling 정책으로 자동 축소 구성",
      "테스트 완료 후 스냅샷 생성 -> DB 인스턴스 종료(Terminate) -> 필요 시 복원",
      "사용하지 않을 때 최저 사양 인스턴스로 수정"
    ],
    answer: 2,
    explanation: "인스턴스를 종료하고 스냅샷만 보관하는 것이 사용하지 않는 기간 동안의 비용을 가장 극적으로 줄여줍니다.",
    glossary: {
      "RDS Snapshot": "데이터베이스 인스턴스의 특정 시점 복사본으로 S3에 저장됨"
    }
  },
  {
    id: 31,
    question: "EC2, RDS, Redshift에 필요한 태그가 적절히 지정되어 있는지 자동으로 지속 감지하려면?",
    options: [
      "AWS Config 규칙으로 정의 및 감지",
      "Cost Explorer로 태그 미설정 리서트 필터링",
      "태그 확인 API 호출용 커스텀 코드 실행",
      "CloudWatch 이벤트로 리소스 생성 모니터링"
    ],
    answer: 0,
    explanation: "AWS Config의 관린형 규칙을 사용하면 태그 준수 여부를 자동으로 추적하고 기록할 수 있습니다.",
    glossary: {
      "Compliance (규정 준수)": "조직의 내부 정책이나 외부 법 규정에 따라 리소스가 설정되어 있는지 관리하는 것"
    }
  },
  {
    id: 32,
    question: "정적 파일(HTML, CSS, JS, 이미지)로만 구성된 웹사이트를 가장 저렴하게 호스팅하는 방법은?",
    options: [
      "AWS Fargate 컨테이너에서 호스팅",
      "Amazon S3 버킷의 정적 웹사이트 호스팅 기능 사용",
      "EC2 인스턴스에 웹 서버 직접 설치",
      "ALB + Lambda 조합 활용"
    ],
    answer: 1,
    explanation: "서버 관리 오버헤드가 없고 객체 저장 비용만 발생하는 S3 정적 호스팅이 가장 비용 효율적입니다.",
    glossary: {
      "S3 Static Website Hosting": "S3 버킷에 저장된 파일을 웹사이트 형태로 직접 서비스하는 기능"
    }
  },
  {
    id: 33,
    question: "금융 거래 데이터를 여러 앱과 실시간 공유하고, 저장 전 민감 정보를 제거해야 할 때 적합한 도구는?",
    options: [
      "DynamoDB 및 스트림 규칙 활용",
      "Kinesis Data Firehose 및 S3 저장",
      "Kinesis Data Streams 및 Lambda 연동 변환",
      "S3 일괄 저장 및 배치 분석"
    ],
    answer: 2,
    explanation: "Kinesis Data Streams로 실시간 수집하고 Lambda로 즉시 가공하여 분배하는 구조가 가장 적합합니다.",
    glossary: {
      "Kinesis Data Streams": "대규모 데이터 스트림을 실시간으로 캡처하고 처리하는 서비스"
    }
  },
  {
    id: 34,
    question: "리소스 구성 변경 추적과 API 호출 기록을 위해 각각 사용해야 하는 서비스는?",
    options: [
      "CloudTrail(구성), Config(API)",
      "AWS Config(구성), AWS CloudTrail(API)",
      "Config(구성), CloudWatch(API)",
      "CloudTrail(구성), CloudWatch(API)"
    ],
    answer: 1,
    explanation: "Config는 리소스 자체의 역사(구성)를, CloudTrail은 행동 기록(누가 무엇을 했나)을 담당합니다.",
    glossary: {
      "AWS CloudTrail": "AWS 계정 내의 모든 API 호출 내역을 기록하는 감시 서비스"
    }
  },
  {
    id: 35,
    question: "ELB 앞단의 대규모 DDoS 공격에 대해 보호와 비용 보상을 제공하는 유료 서비스는?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Shield Standard",
      "AWS Shield Advanced"
    ],
    answer: 3,
    explanation: "AWS Shield Advanced는 정교한 DDoS 방어 지원과 함께 공격으로 인한 요금 급증에 대한 보호를 제공합니다.",
    glossary: {
      "AWS Shield": "애플리케이션을 DDoS 공격으로부터 보호하는 관리형 서비스"
    }
  },
  {
    id: 36,
    question: "두 리전의 S3 버킷 데이터를 동일한 KMS 키로 암호화/복호화하고 리전별로 키를 관리하려면?",
    options: [
      "SSE-S3 및 교차 리전 복제 구성",
      "고객 관리형 다중 리전 KMS 키 생성 및 활용",
      "각 리전에 별도의 KMS 키 생성 및 복제",
      "S3 버킷 정책으로 암호화 강제"
    ],
    answer: 1,
    explanation: "KMS 다중 리전 키를 사용하면 서로 다른 리전에서도 동일한 키 ID와 키 소재로 데이터를 처리할 수 있습니다.",
    glossary: {
      "Multi-Region KMS Key": "여러 AWS 리전에 복제되어 동일한 키 소재를 공유하는 KMS 키"
    }
  },
  {
    id: 37,
    question: "SSH 키 관리나 포트 개방 없이 EC2 인스턴스에 안전하게 원격 접속하는 권장 방법은?",
    options: [
      "EC2 시리얼 콘솔 접근",
      "AWS Systems Manager Session Manager 활용",
      "퍼블릭 서브넷에 배스천 호스트 배포",
      "Site-to-Site VPN 연결"
    ],
    answer: 1,
    explanation: "Session Manager는 브라우저나 CLI를 통해 인바운드 포트 오픈 없이도 EC2 인스턴스에 원격 셸 접근을 제공합니다.",
    glossary: {
      "AWS Systems Manager Session Manager": "SSH 키 관리나 인바운드 포트 허용 없이 인스턴스를 안전하게 관리하는 기능"
    }
  },
  {
    id: 38,
    question: "S3 정적 웹사이트의 전 세계 사용자 지연 시간을 가장 비용 효율적으로 줄이려면?",
    options: [
      "모든 리전에 버킷 복제 및 Route 53 라우팅",
      "AWS Global Accelerator 도입",
      "S3 앞단에 Amazon CloudFront 배포 추가",
      "S3 Transfer Acceleration 활성화"
    ],
    answer: 2,
    explanation: "CloudFront는 글로벌 엣지 로케이션을 통해 사용자에게 가장 가까운 곳에서 정적으로 캐싱된 데이터를 제공합니다.",
    glossary: {
      "Content Delivery Network (CDN)": "콘텐츠를 전 세계 사용자에게 빠르게 전달하기 위한 분산 노드 네트워크"
    }
  },
  {
    id: 39,
    question: "RDS 범용 SSD 스토리지에서 쓰기 작업 지연이 I/O 성능 때문일 때 가장 적절한 조치는?",
    options: [
      "스토리지 유형을 프로비저닝된 IOPS SSD(io1/io2)로 변경",
      "인스턴스 클래스를 메모리 최적화로 변경",
      "인스턴스 클래스를 버스트 가능 성능으로 변경",
      "읽기 전용 복제본 추가"
    ],
    answer: 0,
    explanation: "성능 문제의 원인이 스토리지 I/O라면 IOPS를 보장하는 전용 스토리지 타입으로 업그레이드해야 합니다.",
    glossary: {
      "Provisioned IOPS SSD": "예측 가능하고 일관된 높은 I/O 성능을 제공하도록 설계된 스토리지"
    }
  },
  {
    id: 40,
    question: "대량의 IoT 기기 경고를 수집하여 14일간 즉시 분석하고 이후 자동 보관하는 운영 효율적인 방법은?",
    options: [
      "Kinesis Data Firehose -> S3 -> 수명 주기 정책(14일 후 Glacier 전환)",
      "EC2 + ELB -> S3 -> 수명 주기 정책",
      "Kinesis Data Firehose -> OpenSearch Service",
      "SQS 표준 큐 활용 및 수동 스캔"
    ],
    answer: 0,
    explanation: "Firehose로 S3에 자동 수집하고, S3의 수명 주기 정책으로 14일 후 Glacier로 자동 이동시키는 것이 가장 관리 포인트가 적습니다.",
    glossary: {
      "Kinesis Data Firehose": "스트리밍 데이터를 S3, Redshift 등으로 로드하는 가장 쉬운 방법"
    }
  },
  {
    id: 41,
    question: "SaaS 애플리케이션의 데이터를 EC2 없이 S3로 안전하게 통합하고 알림을 받으려면?",
    options: [
      "Auto Scaling EC2 환경에서 수집",
      "Amazon AppFlow로 SaaS와 S3 연결 및 알림 설정",
      "EventBridge로 SaaS 이벤트 직접 수집",
      "Docker 컨테이너를 ECS에서 실행"
    ],
    answer: 1,
    explanation: "AppFlow는 SaaS 소스와 AWS 간의 데이터를 서버 관리 없이 연동해주는 전용 서비스입니다.",
    glossary: {
      "Amazon AppFlow": "SaaS 애플리케이션(Salesforce 등)과 AWS 서비스 간의 안전한 데이터 흐름을 자동화하는 서비스"
    }
  },
  {
    id: 42,
    question: "멀티 AZ EC2가 NAT 게이트웨이를 통해 S3에 접근할 때 비용을 절감하는 가장 좋은 방법은?",
    options: [
      "각 AZ에 NAT 게이트웨이 추가",
      "NAT 인스턴스로 비용 절감",
      "S3용 게이트웨이 VPC 엔드포인트 배포",
      "EC2 전용 호스트 사용"
    ],
    answer: 2,
    explanation: "S3 게이트웨이 엔드포인트는 무료이며, NAT 게이트웨이 통과 비용과 데이터 전송 비용을 모두 없앨 수 있습니다.",
    glossary: {
      "Gateway VPC Endpoint": "S3 및 DynamoDB와 VPC 사이의 내부 전용 경로를 제공하는 무료 엔드포인트"
    }
  },
  {
    id: 43,
    question: "온프레미스 대량 백업이 인터넷 대역폭에 영향을 주지 않도록 하려는 장기적인 방법은?",
    options: [
      "Site-to-Site VPN 연결 및 프록시 설정",
      "AWS Direct Connect 전용선 구축 및 활용",
      "매일 Snowball 장치를 사용하여 수동 전송",
      "S3 서비스 한도 증설 요청"
    ],
    answer: 1,
    explanation: "Direct Connect는 전용 전용선을 통해 인터넷망과 분리된 안정적인 대역폭을 제공합니다.",
    glossary: {
      "AWS Direct Connect": "온프레미스에서 AWS로 연결되는 전용 네트워크 연결 서비스"
    }
  },
  {
    id: 44,
    question: "S3 버킷 객체의 우발적인 삭제를 방지하기 위해 선택할 수 있는 전략 두 가지는? (2개 선택)",
    options: [
      "S3 버전 관리(Versioning) 활성화",
      "MFA 삭제(MFA Delete) 활성화",
      "개별 객체에 버킷 정책 적용",
      "S3 기본 암호화 활성화",
      "S3 수명 주기 정책 적용"
    ],
    answer: [0, 1],
    explanation: "버전 관리는 삭제된 객체를 복구할 수 있게 하며, MFA 삭제는 영구 삭제 시 추가 인증을 강제합니다.",
    glossary: {
      "Versioning": "객체의 여러 버전을 유지하여 실수로 덮어쓰거나 삭제한 데이터를 복구할 수 있게 하는 기능"
    }
  },
  {
    id: 45,
    question: "SNS+Lambda 수집 시 네트워크 장애로 데이터 손실이 발생할 때 보완하는 구조는? (2개 선택)",
    options: [
      "Lambda를 여러 AZ에 배포",
      "SQS 대기열을 생성하고 SNS 주제를 구독하도록 구성",
      "Lambda의 CPU와 메모리 사양 증가",
      "Lambda의 예약된 동시성 수준 증가",
      "SQS 대기열에서 메시지를 읽도록 Lambda 수정"
    ],
    answer: [1, 4],
    explanation: "SQS를 중간에 두면 처리 실패 시 메시지가 대기열에 보관되어 재처리가 가능한 탄력성을 확보합니다.",
    glossary: {
      "Amazon SQS": "완전관리형 메시지 대기열 서비스(메시지 버퍼링 소스)"
    }
  },
  {
    id: 46,
    question: "S3에 업로드되는 파일에서 PII(개인식별정보)를 자동으로 감지하고 알림을 주는 서비스는?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "커스텀 Lambda 텍스트 스캔",
      "Amazon GuardDuty"
    ],
    answer: 1,
    explanation: "Macie는 머신러닝을 사용하여 S3의 민감 정보를 자동으로 탐지하고 보호하는 전용 보안 서비스입니다.",
    glossary: {
      "Amazon Macie": "S3에서 민감 데이터를 검색, 분류 및 보호하는 데이터 프라이버시 서비스"
    }
  },
  {
    id: 47,
    question: "특정 기간 동안 특정 AZ에서 확실한 EC2 리소스 용량을 보장받으려면?",
    options: [
      "리전 지향 예약 인스턴스(RI) 구매",
      "리전 지향 온디맨드 용량 예약 생성",
      "AZ 지정 예약 인스턴스 구매",
      "AZ 지정 온디맨드 용량 예약 생성"
    ],
    answer: 3,
    explanation: "온디맨드 용량 예약은 특정 가용 영역에서 예약한 인스턴스 용량을 활성화된 동안 확실히 보장받습니다.",
    glossary: {
      "On-Demand Capacity Reservation": "특정 가용 영역에서 EC2 인스턴스에 대한 용량을 예약하는 서비스"
    }
  },
  {
    id: 48,
    question: "인스턴스 스토어에 저장된 카탈로그 데이터를 고가용성 공유 스토리지로 마이그레이션하려면?",
    options: [
      "Rediss용 ElastiCache로 이동",
      "더 큰 인스턴스 스토어 EC2 사용",
      "Glacier Deep Archive로 장기 보관",
      "Amazon EFS 파일 시스템으로 이동"
    ],
    answer: 3,
    explanation: "EFS는 내구성과 가용성이 뛰어난 공유 파일 시스템으로, 인스턴스 스토어의 데이터를 대체하기에 적합합니다.",
    glossary: {
      "Instance Store": "호스트 컴퓨터에 물리적으로 연결된 임시 스토리지 (인스턴스 종료 시 데이터 삭제)"
    }
  },
  {
    id: 49,
    question: "최근 1년은 빈번한 무작위 접근, 그 이후는 거의 접근하지 않는 데이터의 비용 최적화 방식은?",
    options: [
      "S3 Glacier Instant Retrieval 활용",
      "S3 Intelligent-Tiering + 수명 주기(1년 후 Glacier Flexible) 전환",
      "S3 Standard 저장 및 태그 기반 조회",
      "S3 Standard + 1년 후 Glacier Deep Archive 전환"
    ],
    answer: 1,
    explanation: "Intelligent-Tiering으로 초반 지연 없는 자동 계층화를 적용하고, 장기 보관 시에는 Glacier로 이동하는 것이 합리적입니다.",
    glossary: {
      "S3 Intelligent-Tiering": "액세스 패턴 변화에 따라 스토리지 계층을 자동으로 최적화해주는 클래스"
    }
  },
  {
    id: 50,
    question: "1,000개의 대규모 EC2 Linux 인스턴스에 즉각적으로 패치 명령을 내리는 도구는?",
    options: [
      "패치 루프용 Lambda 함수",
      "Systems Manager Patch Manager 자동 구성",
      "Systems Manager 유지 관리 기간 예약",
      "Systems Manager Run Command로 명령 실행"
    ],
    answer: 3,
    explanation: "Run Command는 다수의 인스턴스에 대해 즉각적이고 동시적인 명령 실행을 보장합니다.",
    glossary: {
      "AWS Systems Manager Run Command": "SSH 연결 없이 인스턴스 그룹에서 안전하게 명령을 실행하는 기능"
    }
  }
];
