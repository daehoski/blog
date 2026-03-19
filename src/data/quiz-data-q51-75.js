export const quizData = [
  {
    id: 51,
    question: "매일 아침 배송 통계 이메일 보고서를 자동으로 발송하는 아키텍처는? (2개 선택)",
    options: [
        "Kinesis Data Firehose 구성",
        "Amazon SES로 이메일 보고서 발송",
        "AWS Glue 작업 예약",
        "EventBridge 예약 이벤트로 Lambda 호출",
        "S3 이벤트를 SNS로 연결"
    ],
    answer: [1, 3],
    explanation: "EventBridge Cron(예약)으로 Lambda를 실행하여 데이터를 가공한 뒤 SES를 통해 이메일을 보내는 것이 정석입니다.",
    glossary: {
        "Amazon SES": "확장 가능한 클라우드 기반 이메일 발송 서비스",
        "EventBridge Scheduler": "예약된 시간(Cron)에 작업을 트리거하는 서비스"
    }
  },
  {
    id: 52,
    question: "표준 파일 시스템 구조, 자동 확장, 고가용성을 제공하는 최소 오버헤드 스토리지는?",
    options: [
        "ECS 컨테이너 + S3",
        "EKS 컨테이너 + EBS",
        "멀티 AZ EC2 + Amazon EFS",
        "멀티 AZ EC2 + EBS"
    ],
    answer: 2,
    explanation: "EFS는 멀티 AZ 공유가 가능하며 자동으로 확장되는 완전관리형 공유 파일 시스템입니다.",
    glossary: {
        "Amazon EFS": "수천 개의 인스턴스가 동시에 공유할 수 있는 확장 가능한 완전관리형 NFS 파일 시스템"
    }
  },
  {
    id: 53,
    question: "10년 동안 관리자 포함 누구도 삭제 불가하며 최대 복원력을 갖춘 회계 기록 보관 방식은?",
    options: [
        "S3 Glacier 보관 및 액세스 제어 정책",
        "S3 Intelligent-Tiering 및 IAM 정책",
        "S3 수명 주기 + 10년 규정 준수 모드 S3 Object Lock",
        "S3 수명 주기 + 10년 거버넌스 모드 S3 Object Lock"
    ],
    answer: 2,
    explanation: "S3 Object Lock의 규정 준수(Compliance) 모드는 루트 사용자조차 지정 기간 내 삭제를 방지합니다. 11 9s 내구성을 위해 S3 Standard나 Glacier Deep Archive를 사용합니다.",
    glossary: {
        "S3 Object Lock": "객체의 삭제나 덮어쓰기를 일정 기간 동안 또는 무기한으로 방지하는 기능",
        "Compliance Mode": "지정된 보존 기간 동안 루트 사용자를 포함한 모든 사용자가 객체를 삭제할 수 없는 모드"
    }
  },
  {
    id: 54,
    question: "Windows 파일 공유(SMB) 환경을 고가용성·내구성 관리형 스토리지로 이전하려면?",
    options: [
        "모든 데이터를 S3로 마이그레이션",
        "S3 파일 게이트웨이 활용",
        "다중 AZ FSx for Windows File Server 구성",
        "Amazon EFS 멀티 AZ 구성"
    ],
    answer: 2,
    explanation: "Windows 파일 서버(SMB)와 호환되는 관리형 서비스는 FSx for Windows File Server입니다.",
    glossary: {
        "Amazon FSx for Windows File Server": "Windows 기반 애플리케이션을 위한 완전관리형 Microsoft Windows 파일 시스템"
    }
  },
  {
    id: 55,
    question: "프라이빗 서브넷의 EC2만 RDS에 접근하도록 하려면 어떤 보안 그룹 설정을 해야 하는가?",
    options: [
        "퍼블릭 서브넷 CIDR 제외 라우팅",
        "DB 인스턴스에 Deny 보안 그룹 연결",
        "DB 보안 그룹 인바운드에 프라이빗 EC2 보안 그룹 ID 허용 추가",
        "VPC 피어링 연결 생성"
    ],
    answer: 2,
    explanation: "보안 그룹 규칙에서 다른 보안 그룹 ID를 소스로 참조하는 것이 가장 안전하고 관리하기 쉬운 방식입니다.",
    glossary: {
        "Security Group (보안 그룹)": "인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽"
    }
  },
  {
    id: 56,
    question: "ca-central-1 리전의 리전 API Gateway에 커스텀 도메인과 HTTPS를 적용할 때 맞는 설정은?",
    options: [
        "ACM(us-east-1)에서 인증서 가져와 스테이지 변수 사용",
        "Route 53 별칭 -> ACM(us-east-1) 인증서 활용",
        "동일 리전(ca-central-1) ACM 인증서 생성 및 도메인 연결",
        "CloudFront 엔드포인트 생성 및 us-east-1 인증서 활용"
    ],
    answer: 2,
    explanation: "리전 엔드포인트 타입의 API Gateway는 API가 배포된 것과 동일한 리전의 ACM 인증서를 사용해야 합니다.",
    glossary: {
        "Regional Endpoint": "특정 리전에 배포되어 해당 리전 내에서 지연 시간을 최적화한 엔드포인트"
    }
  },
  {
    id: 57,
    question: "이미지의 부적절한 콘텐츠를 자동 감지하고 신뢰도가 낮을 때 인적 검토를 진행하는 최소 노력의 방법은?",
    options: [
        "Amazon Comprehend 활용",
        "Amazon Rekognition 활용",
        "Amazon SageMaker로 커스텀 모델 훈련",
        "Fargate에 직접 모델 배포"
    ],
    answer: 1,
    explanation: "Rekognition은 콘텐츠 조정(Content Moderation) API를 통해 이미지의 부적절한 요소 감지를 자동화해 줍니다.",
    glossary: {
        "Amazon Rekognition": "딥러닝 기술을 사용하여 시각적 분석을 수행하는 서비스"
    }
  },
  {
    id: 58,
    question: "인프라 프로비저닝이나 관리 없이 컨테이너를 실행하여 확장성·가용성을 확보하려면?",
    options: [
        "EC2에 Docker 설치",
        "ECS with EC2 워커 노드",
        "ECS with AWS Fargate",
        "ECS 최적화 AMI 사용"
    ],
    answer: 2,
    explanation: "Fargate는 서버 관리 없이 컨테이너만 배포하면 되는 서버리스 엔진입니다.",
    glossary: {
        "AWS Fargate": "서버를 관리하지 않고도 컨테이너를 실행할 수 있는 서버리스 컴퓨팅 엔진"
    }
  },
  {
    id: 59,
    question: "하루 30TB 이상의 글로벌 클릭스트림 데이터를 수집, 저장, 분석하는 최적의 구성은?",
    options: [
        "Data Pipeline -> S3 -> EMR",
        "Auto Scaling EC2 -> S3 -> Redshift",
        "CloudFront -> S3 -> Lambda",
        "Kinesis Data Streams -> Kinesis Data Firehose -> S3 -> Redshift"
    ],
    answer: 3,
    explanation: "실시간 대량 수집(Streams) + 자동 로드(Firehose) + 데이터 웨어하우스 분석(Redshift)의 시너지가 가장 높습니다.",
    glossary: {
        "Data Warehouse (DWH)": "여러 소스의 데이터를 통합하여 분석하는 보고 중심의 데이터베이스"
    }
  },
  {
    id: 60,
    question: "ALB에서 모든 HTTP 트래픽을 자동으로 HTTPS로 연결하도록 하려면?",
    options: [
        "ALB 네트워크 ACL 업데이트",
        "사용자 정의 리디렉션 스크립트 작성",
        "ALB 리스너 규칙에서 HTTPS 리디렉션 작업 추가",
        "NLB와 SNI 활용"
    ],
    answer: 2,
    explanation: "ALB 리스너는 규칙을 통해 간단히 프로토콜 간 리디렉션을 지원합니다.",
    glossary: {
        "Listener (리스너)": "설정된 프로토콜과 포트를 사용하여 연결 요청을 확인하는 로드 밸런서의 프로세스"
    }
  },
  {
    id: 61,
    question: "자격증명 하드코딩 없이 RDS 암호를 주기적으로 자동 교체 관리하는 최소 오버헤드 방법은?",
    options: [
        "인스턴스 메타데이터 저장",
        "S3 암호화 구성 파일 활용",
        "AWS Secrets Manager 및 자동 교체 활성화",
        "SSM Parameter Store 및 수동 교체"
    ],
    answer: 2,
    explanation: "Secrets Manager는 DB 암호 자동 교체 기능을 기본으로 제공하여 가장 운영이 쉽습니다.",
    glossary: {
      "Credential (자격증명)": "시스템 접근에 필요한 사용자 이름, 암호 등의 비밀 정보"
    }
  },
  {
    id: 62,
    question: "외부 CA에서 발급한 인증서를 ALB에 적용하고 연간 교체 알림을 받으려면?",
    options: [
        "ACM에서 수동 갱신 요청",
        "ACM에 키 자료 가져오기 후 자동 갱신",
        "ACM 사설 CA 활용",
        "ACM 인증서 가져오기(Import) 및 EventBridge 만료 알림 설정"
    ],
    answer: 3,
    explanation: "외부 인증서를 Import한 경우 ACM이 자동 갱신해주지 않으므로 알림을 설정해 수동 갱신해야 합니다.",
    glossary: {
        "Private Key": "인증서 보안 통신을 위해 사용되는 비밀 키"
    }
  },
  {
    id: 63,
    question: "업로드된 5MB 크기의 PDF를 JPG로 변환하는 가장 확장성 있고 경제적인 서버리스 구조는?",
    options: [
        "S3 PUT 이벤트 -> Lambda 트리거 변환 -> S3 저장",
        "DynamoDB 스트림 -> Lambda 호출 변환",
        "Elastic Beanstalk 환경 구축",
        "EC2 + EFS 환경 구축"
    ],
    answer: 0,
    explanation: "이벤트 기반 서버리스(S3 + Lambda) 방식이 비용과 확장성 면에서 가성비가 가장 뛰어납니다.",
    glossary: {
        "Event-driven (이벤트 기반)": "특정 사건(파일 업로드 등)이 발생했을 때 자동으로 작업을 수행하는 방식"
    }
  },
  {
    id: 64,
    question: "온프레미스 Windows 서버 데이터를 AWS FSx로 이전하고 양쪽에서 지연 없이 접속하려면?",
    options: [
        "단순 FSx 마이그레이션",
        "S3 파일 게이트웨이 도입",
        "온프레미스에 캐시용 FGW 설치 및 AWS FSx 도입",
        "AWS FSx for Windows 및 온프레미스 FSx 파일 게이트웨이 활용"
    ],
    answer: 3,
    explanation: "FSx File Gateway는 온프레미스에서 AWS FSx 데이터에 저지연 접근을 가능케 하는 하이브리드 솔루션입니다.",
    glossary: {
        "Hybrid Cloud (하이브리드 클라우드)": "온프레미스와 공용 클라우드를 결합하여 사용하는 IT 환경"
    }
  },
  {
    id: 65,
    question: "보고서 이미지나 PDF에서 텍스트를 추출하고 의료 정보(PHI)를 감지하는 최소 오버헤드 솔루션은?",
    options: [
        "오픈소스 Python 라이브러리 활용",
        "Amazon Textract + SageMaker 모델",
        "Amazon Textract + Amazon Comprehend Medical",
        "Rekognition + Comprehend Medical"
    ],
    answer: 2,
    explanation: "Textract로 텍스트를 읽고, Comprehend Medical로 전문 의료 지식을 분석하는 것이 가장 정확하고 빠릅니다.",
    glossary: {
        "Amazon Textract": "이미지나 문서에서 텍스트, 필기, 데이터를 기계가 읽을 수 있도록 자동 추출하는 서비스",
        "PHI (Protected Health Information)": "법적으로 보호받는 개인 건강 정보"
    }
  },
  {
    id: 66,
    question: "30일은 자주 접근하고 이후 4년은 보관만 하되 즉시 조회 가능해야 할 때 최적의 수명 주기는?",
    options: [
        "30일 후 S3 Standard -> S3 Glacier",
        "30일 후 S3 Standard -> S3 One Zone-IA",
        "30일 후 S3 Standard -> S3 Standard-IA",
        "30일 후 S3 Standard -> S3 Glacier Deep Archive"
    ],
    answer: 2,
    explanation: "즉시 조회(Instant Retrieval)가 필수이므로 Glacier는 제외되며, 내구성을 위해 Standard-IA가 적합합니다.",
    glossary: {
        "Durability (내구성)": "데이터 손실 없이 안전하게 보존되는 능력"
    }
  },
  {
    id: 67,
    question: "SQS 메시지 중복 처리 문제가 발생할 때, 소비자의 처리 속도를 고려한 해결책은?",
    options: [
        "대기열 재생성",
        "권한 추가 설정",
        "메시지 수신 대기 시간 조정",
        "가시성 타임아웃(Visibility Timeout) 증가"
    ],
    answer: 3,
    explanation: "처리 중인 메시지가 다른 소비자에게 보이지 않게 하는 시간(가시성 타임아웃)을 늘려 중복 처리를 방지합니다.",
    glossary: {
        "Visibility Timeout": "한 소비자가 메시지를 처리하는 동안 다른 소비자에게 해당 메시지가 보이지 않게 차단되는 시간"
    }
  },
  {
    id: 68,
    question: "주 연결로 낮은 지연 시간의 전용선을 쓰고, 장애 시 저비용으로 폴백하려는 구성은?",
    options: [
        "Direct Connect + Site-to-Site VPN",
        "이중 VPN 터널 구성",
        "이중 Direct Connect 구성",
        "Direct Connect + 자동 장애 조치 스크립트"
    ],
    answer: 0,
    explanation: "품질은 Direct Connect, 비용 효율적 백업은 VPN을 선택하는 것이 정석적인 하이브리드 설계입니다.",
    glossary: {
        "Fallback (폴백)": "주 시스템 장애 시 예비 시스템으로 원활하게 전환되는 것"
    }
  },
  {
    id: 69,
    question: "단일 AZ Aurora PostgreSQL을 다운타임 최소화와 데이터 보호를 위해 고가용성으로 개선하려면?",
    options: [
        "교차 리전 복제 구성",
        "멀티 AZ Auto Scaling + DB 멀티 AZ + RDS Proxy",
        "매시간 스냅샷 생성 예약",
        "데이터를 S3에 실시간 중복 저장"
    ],
    answer: 1,
    explanation: "멀티 AZ 구성과 RDS Proxy를 통해 장애 발생 시에도 연결을 유지하고 빠르게 복구할 수 있습니다.",
    glossary: {
        "RDS Proxy": "데이터베이스 연결 풀링을 관리하여 애플리케이션의 성능과 가용성을 높여주는 프록시 서비스"
    }
  },
  {
    id: 70,
    question: "L4 로드 밸런서(NLB)가 HTTP 5xx 오류를 감지하지 못해 가용성이 떨어질 때 조치는?",
    options: [
        "NLB에 HTTP 헬스체크 강제 설정",
        "EC2에 자가 진단 스크립트 실행",
        "ALB로 교체하여 L7 헬스체크 수행",
        "CloudWatch 경보 기반 수동 교체"
    ],
    answer: 2,
    explanation: "HTTP 상태 코드를 확인하려면 더 고차원적인 애플리케이션 계층(L7) 로드 밸런서인 ALB가 필요합니다.",
    glossary: {
        "Layer 7 (L7)": "OSI 7계층 중 애플리케이션 계층으로, HTTP/HTTPS 메시지 내용을 이해하고 처리함"
    }
  }
];
