export const quizData = [
  {
    id: 71,
    question: "DynamoDB 데이터 손상 시 RPO 15분, RTO 1시간을 충족하기 위한 가장 적합한 재해 복구 전략은?",
    options: [
      "DynamoDB 글로벌 테이블 구성",
      "DynamoDB 지정 시간 복구(PITR) 구성",
      "매일 S3 Glacier로 데이터 내보내기",
      "15분마다 EBS 스냅샷 예약"
    ],
    answer: 1,
    explanation: "PITR(Point-In-Time Recovery)은 지난 35일 이내의 어느 시점으로든 복원을 가능하게 하여 15분 RPO를 충분히 지원합니다.",
    glossary: {
      "RPO (Recovery Point Objective)": "복구 시점 목표. 얼마나 과거의 데이터까지 복구할 것인가에 대한 기준",
      "RTO (Recovery Time Objective)": "복구 시간 목표. 장애 발생 후 복구까지 걸리는 시간",
      "PITR": "가장 최근 35일 이내의 특정 시점으로 데이터베이스를 복원할 수 있는 기능"
    }
  },
  {
    id: 72,
    question: "동일 리전의 EC2와 S3 간 빈번한 데이터 전송 비용을 줄이는 가장 효과적인 방법은?",
    options: [
      "API Gateway를 통한 라우팅",
      "NAT 게이트웨이 성능 개선",
      "퍼블릭 서브넷으로 인스턴스 이동",
      "S3 VPC 게이트웨이 엔드포인트 배포"
    ],
    answer: 3,
    explanation: "VPC 엔드포인트를 사용하면 인터넷이나 NAT Gateway를 통하지 않고 내부 망으로 통신하므로 데이터 전송 비용이 발생하지 않습니다.",
    glossary: {
      "VPC Endpoint": "AWS 서비스를 인터넷 망 없이 VPC 내부에서 사설로 연결해주는 통로"
    }
  },
  {
    id: 73,
    question: "배스천 호스트와 프라이빗 앱 서버 간의 안전한 접속을 위한 보안 그룹 설정은? (2개 선택)",
    options: [
      "배스천 SG: 앱 인스턴스의 인바운드 허용",
      "배스천 SG: 회사 내부 IP 대신 외부(공용) IP 범위 인바운드 허용",
      "앱 SG: 배스천 호스트의 프라이빗 IP로부터 SSH 인바운드 허용",
      "앱 SG: 배스천 호스트의 공용 IP로부터 SSH 인바운드 허용",
      "배스천 SG: 0.0.0.0/0 모든 접속 허용"
    ],
    answer: [1, 2],
    explanation: "외부 사내 네트워크에서 배스천 접근 시에는 공용 IP를 허용해야 하며, 배스천에서 앱 서버 접근 시에는 VPC 내부이므로 프라이빗 IP를 허용해야 합니다.",
    glossary: {
      "Bastion Host (배스천 호스트)": "외부 인터넷에서 내부 프라이빗 네트워크로 접근하기 위한 발판 역할을 하는 특수 목적 서버"
    }
  },
  {
    id: 74,
    question: "웹 계층(퍼블릭)과 DB 계층(프라이빗) 보안 그룹 설정 중 옳은 것은? (2개 선택)",
    options: [
      "웹 계층 SG: 인터넷(0.0.0.0/0)에서 포트 443 인바운드 허용",
      "웹 계층 SG: 0.0.0.0/0 포트 443 아웃바운드 허용",
      "DB 계층 SG: 웹 계층 SG에서 포트 1433(SQL Server) 인바운드 허용",
      "DB 계층 SG: 웹 계층으로 아웃바운드 1433 허용",
      "DB 계층 SG: 모든 포트 인바운드 허용"
    ],
    answer: [0, 2],
    explanation: "인터넷 트래픽은 웹 서버의 HTTPS 포트로 들어와야 하며, DB는 웹 서버의 보안 그룹으로부터만 데이터베이스 포트(1433) 입력을 허용해야 합니다.",
    glossary: {
      "Stateful (상태 유지)": "보안 그룹의 특징으로, 들어오는 트래픽이 허용되면 나가는 트래픽도 자동으로 허용됨"
    }
  },
  {
    id: 75,
    question: "RESTful 서비스 간 통신에서 한 계층의 과부하 시 트랜잭션이 손실되는 문제를 해결하려면? (가장 효율적 방식)",
    options: [
      "API Gateway + Lambda + SQS를 사용한 메시지 버퍼링",
      "EC2 수직 확장(Scale-up)",
      "SNS를 통한 인스턴스 간 직접 통신 및 모니터링",
      "SQS를 쓰고 CloudWatch로 수동 관리"
    ],
    answer: 0,
    explanation: "SQS는 요청을 대기열에 쌓아둠으로써 백엔드 처리 능력을 초과하는 트래픽이 발생해도 트랜잭션 유실을 방지합니다.",
    glossary: {
        "Decoupling (분리/결합 해제)": "구성 요소들이 서로 직접 의지하지 않게 하여 독립적으로 확장하고 오류를 방지하는 것"
    }
  },
  {
    id: 76,
    question: "온프레미스 공장의 10TB 데이터를 Direct Connect 전용선을 통해 S3로 안전하게 전송하는 도구는?",
    options: [
      "공용 인터넷을 통한 DataSync",
      "Direct Connect를 통한 AWS DataSync",
      "공용 인터넷을 통한 AWS DMS",
      "Direct Connect를 통한 Snowball Edge"
    ],
    answer: 1,
    explanation: "DataSync는 Direct Connect 환경에서 대규모 데이터를 안전하고 빠르게 S3로 동기화하는 데 최적화되어 있습니다.",
    glossary: {
      "AWS DataSync": "온프레미스 스토리지와 AWS 서비스 간의 데이터 이동을 가속화하고 관리하는 서비스"
    }
  },
  {
    id: 77,
    question: "실시간 데이터를 수집하여 변환 후 S3에 저장하는 서버리스 파이프라인 구성은?",
    options: [
      "EC2 API -> Kinesis Streams -> Firehose -> Lambda -> S3",
      "EC2 API -> Glue -> S3",
      "API Gateway -> Kinesis Streams -> Kinesis Data Firehose -> Lambda -> S3",
      "API Gateway -> Glue -> Lambda -> S3"
    ],
    answer: 2,
    explanation: "API Gateway부터 S3까지 모든 구간을 완전관리형 서버리스 서비스로 구축하여 운영 부하를 최소화합니다.",
    glossary: {
      "Kinesis Data Firehose": "스트림 데이터를 받아서 원하는 목적지(S3 등)로 자동 전달 및 가공해주는 서비스"
    }
  },
  {
    id: 78,
    question: "DynamoDB 사용자 데이터를 7년 동안 보관해야 할 때 가장 운영 효율적인 방법은?",
    options: [
      "DynamoDB PITR 상시 활성화",
      "AWS Backup을 통한 백업 일정 및 보존 정책 설정",
      "주문형 백업 후 S3 수동 저장",
      "커스텀 Lambda를 통한 데이터 주기적 백업"
    ],
    answer: 1,
    explanation: "AWS Backup은 여러 AWS 서비스의 백업을 중앙에서 정책 기반으로 자동 관리해주며 장기 보관에 매우 적합합니다.",
    glossary: {
      "AWS Backup": "AWS 리소스의 데이터 백업을 중앙 집중식으로 자동화하는 완전관리형 백업 서비스"
    }
  },
  {
    id: 79,
    question: "사용량이 불규칙하고 예측 불가능한 DynamoDB 워크로드에 가장 비용 효율적인 모드는?",
    options: [
      "온디맨드 용량 모드(On-Demand)",
      "프로비저닝된 용량 모드(Provisioned)",
      "글로벌 보조 인덱스 최적화 모드",
      "예약 용량 구매 모드"
    ],
    answer: 0,
    explanation: "온디맨드 모드는 사전 용량 설정 없이 사용한 만큼만 비용을 지불하므로 예측 불가한 트래픽에 유리합니다.",
    glossary: {
      "On-demand Capacity": "사전 정의된 용량 없이 실제 요청 수에 따라 과금되는 모드"
    }
  },
  {
    id: 80,
    question: "암호화된 AMI를 파트너사의 AWS 계정에만 안전하게 공유하는 작업은? (2개 선택)",
    options: [
      "AMI를 퍼블릭으로 설정",
      "AMI의 launchPermission 속성을 파트너 계정 ID로 추가",
      "파트너 계정이 KMS 키를 사용하도록 키 정책 수정",
      "AMI를 S3로 내보내어 권한 부여",
      "파트너 계정에 IAM 사용자 생성"
    ],
    answer: [1, 2],
    explanation: "특정 계정에만 실행 권한을 주고, 암호화에 사용된 KMS 키에 대해서도 해당 계정이 사용할 수 있도록 정책을 열어줘야 합니다.",
    glossary: {
      "AMI (Amazon Machine Image)": "인스턴스를 시작하는 데 필요한 소프트웨어 구성이 포함된 템플릿"
    }
  },
  {
    id: 81,
    question: "작업 수에 따라 자동으로 확장되며 작업 항목이 영구 저장되는 느슨하게 연결된 구조는?",
    options: [
      "SNS + EC2 Auto Scaling (CPU 기반)",
      "SQS + EC2 Auto Scaling (Network 기반)",
      "SQS + EC2 Auto Scaling (SQS 대기열 항목 수 기반)",
      "SNS + EC2 Auto Scaling (SNS 메시지 수 기반)"
    ],
    answer: 2,
    explanation: "SQS는 작업을 안전하게 보관(영구 저장)하며, 대기열의 길이에 맞춰 서버 수를 조절하는 것이 가장 효율적인 확장 방식입니다.",
    glossary: {
      "Scale-out (수평 확장)": "인스턴스의 수를 늘려 처리 능력을 강화하는 방식"
    }
  },
  {
    id: 82,
    question: "ACM으로 가져온 인증서의 만료 30일 전에 보안팀에 알림을 주는 자동화 방식은?",
    options: [
      "ACM 콘솔에서 매일 알림 활성화",
      "AWS Config 규칙으로 만료 30일 전 감지 및 EventBridge-SNS 연동",
      "Trusted Advisor 경보 설정",
      "CloudWatch 지표 수동 감시"
    ],
    answer: 1,
    explanation: "AWS Config는 리소스의 상태 변화(만료 임박 등)를 감지하여 이벤트를 발생시키는 데 최적화되어 있습니다.",
    glossary: {
      "AWS Config Rule": "AWS 리소스가 특정 모범 사례나 설정 기준을 준수하는지 확인하는 규칙"
    }
  },
  {
    id: 83,
    question: "유럽 사용자의 온프레미스(미국) 동적 웹사이트 접근 속도를 개선하는 가장 빠른 방법은?",
    options: [
      "유럽 리전으로 전체 마이그레이션",
      "S3 교차 리전 복제 구성",
      "온프레미스를 오리진으로 하는 CloudFront 배포 생성",
      "Route 53 지리 근접 라우팅만 적용"
    ],
    answer: 2,
    explanation: "CloudFront는 온프레미스 서버를 오리진으로 삼을 수 있으며, 글로벌 엣지 네트워크를 통해 전 세계 사용자에게 빠른 전달을 보장합니다.",
    glossary: {
      "Edge Location": "CloudFront가 콘텐츠를 캐싱하여 사용자에게 제공하는 전 세계 데이터 센터 거점"
    }
  },
  {
    id: 84,
    question: "프로덕션(24/7 실행)과 개발용(매일 8시간 중지 가능) EC2의 가장 비용 효율적인 조합은?",
    options: [
      "프로덕션: 스팟 / 개발: 예약",
      "프로덕션: 예약 / 개발: 온디맨드",
      "프로덕션: 스팟 / 개발: 온디맨드",
      "둘 다 온디맨드"
    ],
    answer: 1,
    explanation: "중단되지 않아야 하는 고정 생산 서버는 예약 인스턴스(RI)가 저렴하며, 유동적인 개발 서버는 온디맨드로 쓰는 것이 약정 비용 낭비를 막습니다.",
    glossary: {
      "Reserved Instance (RI)": "1년 또는 3년 약정을 통해 온디맨드 대비 큰 할인을 받는 구매 옵션"
    }
  },
  {
    id: 85,
    question: "새로운 규제에 따라 저장된 문서를 수정하거나 삭제할 수 없도록 보장하는 S3 기능은?",
    options: [
      "S3 버전 관리 + S3 Object Lock (WORM)",
      "S3 수명 주기 정책",
      "S3 ACL 읽기 전용 제한",
      "EFS 읽기 전용 마운트"
    ],
    answer: 0,
    explanation: "Object Lock은 한 번 작성하면 읽기만 가능한(WORM) 환경을 제공하여 데이터 변조 및 삭제를 원천 방지합니다.",
    glossary: {
      "WORM (Write Once, Read Many)": "데이터를 한 번 기록한 후에는 수정이나 삭제가 불가능하고 읽기만 가능한 저장 방식"
    }
  },
  {
    id: 86,
    question: "RDS 자격증명을 하드코딩하지 않고 안전하게 관리하며 자주 교체해야 할 때 필요한 서비스는?",
    options: [
      "AWS Secrets Manager",
      "Systems Manager OpsCenter",
      "S3 암호화 버킷",
      "KMS 직접 호출 방식"
    ],
    answer: 0,
    explanation: "Secrets Manager는 자격증명 저장 뿐만 아니라 Lambda를 이용한 '자동 교체' 기능을 기본 지원합니다.",
    glossary: {
      "Rotation (교체)": "보안을 위해 비밀번호나 키를 정기적으로 새 것으로 바꾸는 작업"
    }
  },
  {
    id: 87,
    question: "DB 업그레이드 중 발생하는 애플리케이션의 데이터 기록 요청이 유실되지 않게 완충하는 구조는?",
    options: [
      "RDS Proxy 도입",
      "Lambda 재시도 횟수 증가",
      "Lambda 로컬 스토리지 임시 저장",
      "SQS FIFO 대기열에 저장 후 사후 처리"
    ],
    answer: 3,
    explanation: "메시지 큐(SQS)는 타겟 시스템이 오프라인일 때 데이터를 안전하게 보관했다가 온라인이 되면 전달하는 완충기 역할을 합니다.",
    glossary: {
      "Buffer (완충기)": "두 시스템 간의 처리 속도 차이나 일시적 장애를 흡수하기 위한 저장 공간"
    }
  },
  // Q88-100 생성 데이터
  {
    id: 88,
    question: "VPC 내부 리소스가 공용 인터넷에 노출되지 않으면서 외부 API를 호출해야 할 때 필요한 것은?",
    options: [
      "인터넷 게이트웨이",
      "NAT 게이트웨이",
      "Egress-only 인터넷 게이트웨이",
      "VPC 피어링"
    ],
    answer: 1,
    explanation: "NAT 게이트웨이는 프라이빗 서브넷 리소스가 외부로 나가는 연결은 허용하되, 외부에서 들어오는 연결은 차단합니다.",
    glossary: {
      "NAT Gateway": "프라이빗 서브넷의 인스턴스가 인터넷에 연결될 수 있도록 돕는 관리형 서비스"
    }
  },
  {
    id: 89,
    question: "리전 전체 장애에 대비하여 Aurora DB를 다른 리전에서 빠르게 읽기 전용으로 사용하려 할 때 기능은?",
    options: [
        "Aurora 글로벌 데이터베이스",
        "Aurora 서버리스 v2",
        "S3 교차 리전 복제",
        "AWS Backup 리전간 복사"
    ],
    answer: 0,
    explanation: "Aurora 글로벌 데이터베이스는 리전 간 데이터를 1초 미만의 지연 시간으로 복제하여 재해 복구 및 로컬 읽기를 지원합니다.",
    glossary: {
        "Global Database": "전 세계 여러 리전에 걸쳐 데이터베이스를 복제하고 서비스하는 기술"
    }
  },
  {
    id: 90,
    question: "실시간 비디오 분석을 통해 얼굴을 인식하거나 사물을 감지해야 할 때 적합한 서비스는?",
    options: [
        "Amazon Rekognition Video",
        "Amazon Kinesis Video Streams",
        "Amazon SageMaker",
        "AWS Elemental MediaConvert"
    ],
    answer: 0,
    explanation: "Rekognition Video는 비디오 스트림에서 객체, 장면, 얼굴 등을 실시간으로 감지하고 추출합니다.",
    glossary: {
        "Computer Vision (컴퓨터 비전)": "컴퓨터를 사용하여 이미지나 비디오에서 의미 있는 정보를 추출하는 인공지능 분야"
    }
  },
  {
    id: 91,
    question: "대규모 데이터 분석 워크로드를 위해 수천 개의 EC2가 동시에 저지연으로 접근해야 하는 병렬 파일 시스템은?",
    options: [
        "Amazon EFS",
        "Amazon FSx for Lustre",
        "Amazon EBS",
        "Amazon S3"
    ],
    answer: 1,
    explanation: "FSx for Lustre는 고성능 컴퓨팅(HPC) 및 머신러닝 워크로드에 최적화된 고성능 파일 시스템입니다.",
    glossary: {
        "High Performance Computing (HPC)": "슈퍼컴퓨터나 컴퓨터 클러스터를 사용하여 복잡한 계산 과제를 해결하는 기술"
    }
  },
  {
    id: 92,
    question: "서로 다른 VPC 간에 사설 네트워크 통신을 가장 간단하고 확장성 있게 연결하려면?",
    options: [
        "VPC Peering",
        "AWS Transit Gateway",
        "Site-to-Site VPN",
        "ClassicLink"
    ],
    answer: 1,
    explanation: "Transit Gateway는 수천 개의 VPC와 온프레미스 네트워크를 중앙에서 연결하는 네트워크 허브 역할을 합니다.",
    glossary: {
        "Hub and Spoke": "중앙 집중식 허브를 중심으로 여러 지점이 연결된 네트워크 구조"
    }
  },
  {
    id: 93,
    question: "자주 업데이트되는 정적 콘텐츠를 S3에서 제공할 때, 캐시된 데이터의 즉각적인 갱신이 필요하다면?",
    options: [
        "CloudFront 무효화(Invalidation) 실행",
        "S3 버킷 삭제 후 재생성",
        "TTL을 0으로 설정",
        "CloudFront 배포 중단 후 재시작"
    ],
    answer: 0,
    explanation: "무효화(Invalidation) 기능을 쓰면 CloudFront 엣지에 캐시된 특정 파일들을 강제로 제거하고 최신본을 가져오게 할 수 있습니다.",
    glossary: {
        "TTL (Time To Live)": "데이터가 캐시에 유지되는 유효 시간"
    }
  },
  {
    id: 94,
    question: "EC2 인스턴스의 CPU 사용량이 특정 임계치를 넘었을 때 담당자에게 이메일을 보내려면?",
    options: [
        "CloudWatch 경보(Alarm) + SNS 연결",
        "CloudWatch 로그 그룹 생성",
        "Systems Manager 자동화",
        "EventBridge 직접 이메일 발송"
    ],
    answer: 0,
    explanation: "CloudWatch 경보가 지표를 감시하다가 임계치를 넘으면 SNS 주제로 메시지를 보내고, SNS가 구독자에게 이메일을 전달합니다.",
    glossary: {
        "Threshold (임계치)": "경보를 발생시키기 위해 설정한 기준 값"
    }
  },
  {
    id: 95,
    question: "VPC 내의 모든 네트워크 트래픽(IP 트래픽) 정보를 캡처하여 보안 분석에 활용하려면?",
    options: [
        "VPC Flow Logs 활성화",
        "CloudTrail 로그 분석",
        "S3 서버 액세스 로그",
        "AWS Inspector 스캔"
    ],
    answer: 0,
    explanation: "VPC Flow Logs는 VPC 내의 네트워크 인터페이스를 통과하는 IP 트래픽에 대한 정보를 기록합니다.",
    glossary: {
        "Flow Logs": "네트워크 흐름 정보를 기록하여 분석할 수 있는 기능"
    }
  },
  {
    id: 96,
    question: "Amazon RDS의 읽기 성능을 확장하기 위해 가장 먼저 고려해야 할 옵션은?",
    options: [
        "읽기 전용 복제본(Read Replica) 추가",
        "멀티 AZ 배포 활성화",
        "인스턴스 타입 스케일 업",
        "EBS 최적화 인스턴스 사용"
    ],
    answer: 0,
    explanation: "읽기 전용 복제본은 주 DB의 부하를 분산시키고 읽기 성능을 수평적으로 확장해줍니다.",
    glossary: {
        "Read Replica": "데이터베이스의 읽기 전용 복사본인 하위 인스턴스"
    }
  },
  {
    id: 97,
    question: "가장 저렴한 비용으로 수개월~수년 동안 데이터를 저장하되, 필요 시 수시간 내 복구해도 되는 클래스는?",
    options: [
        "S3 Standard-IA",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive",
        "S3 One Zone-IA"
    ],
    answer: 2,
    explanation: "Deep Archive는 AWS 스토리지 중 가장 저렴하며, 복구까지 약 12시간 정도 소요되는 콜드 스토리지입니다.",
    glossary: {
        "Cold Storage": "자주 사용하지 않는 데이터를 보관하는 저비용 저장소"
    }
  },
  {
    id: 98,
    question: "애플리케이션 로그 파일에서 특정 오류 메시지를 실시간으로 감시하고 대응하려면?",
    options: [
        "CloudWatch Logs 에이전트 + 지표 필터(Metric Filter) + 경보",
        "CloudTrail 감사 로그 활용",
        "S3 수명 주기 정책 활용",
        "AWS Config 규칙 활용"
    ],
    answer: 0,
    explanation: "로그 파일에서 특정 패턴을 추출하여 지표로 만들고, 그 지표를 근거로 경보를 발생시키는 흐름입니다.",
    glossary: {
        "Metric Filter (지표 필터)": "로그 데이터의 단어나 패턴을 숫자 지표로 변환하는 기능"
    }
  },
  {
    id: 99,
    question: "EC2 인스턴스가 사용하는 루트 볼륨을 인스턴스 중지 없이 실시간으로 더 늘려야 할 때 작업은?",
    options: [
        "EBS 볼륨 크기 수정(Modify Volume) 후 파일 시스템 확장",
        "인스턴스를 종료하고 새 볼륨으로 교체",
        "S3로 데이터 이동",
        "새 EBS를 추가로 마운트만 함"
    ],
    answer: 0,
    explanation: "탄력적 볼륨(Elastic Volumes) 기능을 통해 인스턴스 중단 없이 EBS의 크기나 성능을 변경할 수 있습니다.",
    glossary: {
        "Elastic Volumes": "실행 중인 EBS 볼륨의 크기, IOPS, 유형을 중단 없이 변경할 수 있는 기능"
    }
  },
  {
    id: 100,
    question: "AWS에서 여러 팀이나 계정의 비용을 한 곳에서 확인하고 통합 결제(Consolidated Billing)하려면?",
    options: [
        "AWS Organizations 활용",
        "IAM 정책 통합",
        "Cost Explorer 수동 합산",
        "AWS Managed Services 활용"
    ],
    answer: 0,
    explanation: "Organizations의 통합 결제 기능을 쓰면 여러 계정의 사용량을 합쳐 대량 구매 할인 등을 일괄 적용받을 수 있습니다.",
    glossary: {
        "Consolidated Billing (통합 결제)": "여러 AWS 계정의 요금을 한 계정으로 몰아서 결제하는 방식"
    }
  }
];
