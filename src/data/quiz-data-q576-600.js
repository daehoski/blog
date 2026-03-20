export const quizData = [
  {
    "id": 576,
    "question": "API Gateway와 Lambda로 서버리스 앱을 만드는데, 사용자들이 전 세계에 퍼져 있습니다. 모든 사용자가 빠르게 API에 접속하게 하려면 어떤 엔드포인트 유형을 써야 할까요?",
    "options": [
      "VPC 내부에서만 쓰는 프라이빗 엔드포인트",
      "특정 리전 거주자에게 최적화된 지역(Regional) 엔드포인트",
      "서버와 다이렉트로 연결하는 인터페이스 VPC 엔드포인트",
      "전 세계 Edge 로케이션을 활용하는 '엣지 최적화(Edge-optimized)' 엔드포인트"
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 사용자가 전 세계에 흩어져 있을 때는 '엣지 최적화' 엔드포인트가 정답입니다. CloudFront의 가속망을 타고 트래픽이 빛의 속도로 전달되므로 어느 나라에서든 쾌적한 접속이 가능해집니다.\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html",
    "glossary": {
      "Edge-optimized Endpoint": "CloudFront의 에지 로케이션을 거쳐 전 세계 사용자에게 가장 빠른 경로로 API를 제공하는 방식",
      "Regional Endpoint": "특정 리전에 인프라가 집중된 사용자를 위해 설계된 엔드포인트 유형",
      "Latency (지연 시간)": "요청이 목적지에 도착했다가 응답이 돌아올 때까지 걸리는 대기 시간"
    }
  },
  {
    "id": 577,
    "question": "CloudFront로 웹 사이트를 운영하는데, 보안(TLS) 인증서 발급과 갱신을 사람 손 안 가고 자동으로 처리하고 싶습니다. 가장 효율적인 방법은?",
    "options": [
      "CloudFront 전용 보안 정책 메뉴에서 인증서를 수동으로 생성합니다.",
      "OAC(원본 액세스 제어) 기능을 켜서 인증서 관리 권한을 넘깁니다.",
      "AWS Certificate Manager(ACM)를 사용하고, 도메인 증명을 위해 'DNS 검증' 방식을 선택합니다.",
      "ACM을 사용하되, 담당자 메일로 확인 번호를 받는 '이메일 검증' 방식을 씁니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 인증서 관리의 정석은 'ACM + DNS 검증' 조합입니다. 도메인 설정(레코드)을 통해 소유권을 자동 확인하고 만료 전 갱신까지 AWS가 알아서 해주므로 운영 수고가 제로가 됩니다.\n\nhttps://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html",
    "glossary": {
      "AWS Certificate Manager (ACM)": "SSL/TLS 인증서를 생성, 관리 및 배포하고 자동 갱신까지 해주는 보안 서비스",
      "DNS Validation (DNS 검증)": "도메인 설정(레코드)을 통해 해당 도메인의 소유권을 확인하는 방식으로 자동 갱신에 유리함",
      "TLS/SSL": "인터넷상에서 데이터를 암호화하여 전송하는 표준 보안 프로토콜"
    }
  },
  {
    "id": 578,
    "question": "DynamoDB를 쓰는 앱의 인기가 폭발해서 응답 속도를 더 높여야 합니다. 밀리초(ms) 단위를 넘어 마이크로초(μs) 수준의 속도를 내고 싶은데, 가장 편한 방법은?",
    "options": [
      "DynamoDB Accelerator(DAX)를 도입하여 캐시 기능을 활성화합니다.",
      "데이터를 분석용 DB인 Amazon Redshift로 통째로 옮깁니다.",
      "관리가 편한 관계형 DB인 Amazon RDS로 이사합니다.",
      "Redis용 ElastiCache를 따로 설치하고 복잡한 캐싱 코드를 직접 추가합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. DynamoDB 성능을 극한(마이크로초)까지 끌어올리는 비법은 DAX입니다. 별도의 복잡한 캐싱 코드를 짤 필요 없이 '인메모리 캐시' 엔진을 더해 읽기 속도를 10배 이상 높일 수 있습니다.\n\nhttps://aws.amazon.com/dynamodb/dax/",
    "glossary": {
      "Amazon DAX": "DynamoDB의 읽기 요청을 가속화하기 위해 제작된 완전 관리형 인메모리 캐시 서비스",
      "Microsecond (마이크로초)": "100만 분의 1초. 1,000분의 1초인 밀리초보다 훨씬 빠른 시간 단위",
      "In-memory Cache": "데이터를 하드디스크가 아닌 메모리에 담아두어 응답 속도를 광속으로 높이는 기술"
    }
  },
  {
    "id": 579,
    "question": "RDS PostgreSQL을 사용 중인데, 평일 업무 시간에만 사람들이 쓰고 밤이나 주말엔 아무도 안 씁니다. 비용을 아끼고 싶은데 가장 편한 자동화 방법은?",
    "options": [
      "AWS의 'Instance Scheduler'를 사용하여 출근할 때 켜고 퇴근할 때 끄게 설정합니다.",
      "자동 백업을 끄고 매주 사람이 직접 스냅샷을 찍어 관리합니다.",
      "CPU 사용량을 감시하는 복잡한 람다(Lambda) 함수를 직접 짜서 껐다 켰다 하게 합니다.",
      "전체 선결제 예약 인스턴스(RI)를 사서 24시간 내내 돌려도 싸게 나오게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 정해진 시간에 서버를 자동으로 껐다 켰다 해주는 'Instance Scheduler'가 가장 편리합니다. 밤낮과 주말 일정을 등록해두면 노는 서버의 요금을 획기적으로 줄여주는 효자 도구입니다.\n\nhttps://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/",
    "glossary": {
      "AWS Instance Scheduler": "사용자가 설정한 일정에 따라 EC2와 RDS 인스턴스를 자동으로 시작하고 중단하는 서비스",
      "Instance Stop/Start": "서버를 완전히 삭제하지 않고 전원만 잠시 꺼두어 컴퓨팅 요금을 아끼는 행위",
      "Cost Optimization (비용 최적화)": "성능은 유지하면서 클라우드 비용을 최소한으로 지출하도록 시스템을 개선하는 것"
    }
  },
  {
    "id": 580,
    "question": "온프레미스에서 쓰던 파일 저장 방식(로컬 저장소)을 그대로 유지하면서, 지연 시간(Latency)에 민감한 앱을 AWS로 옮기려 합니다. 가장 가성비 좋은 하드디스크 선택은?",
    "options": [
      "EC2에 ASG를 걸고, 고성능 파일 시스템인 FSx for Lustre를 연결합니다.",
      "EC2 서버를 띄우고 가장 대중적인 EBS GP2 볼륨을 사용합니다.",
      "고급 파일 시스템인 FSx for OpenZFS를 구축하여 속도를 확보합니다.",
      "EC2 서버에 최신형 가성비 볼륨인 'EBS GP3'를 사용하여 성능과 비용을 모두 잡습니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 최신형 가성비 볼륨인 EBS GP3는 이전 세대보다 요금은 싸면서 성능(IOPS)을 용량과 상관없이 독립적으로 높일 수 있어 성능과 비용 두 마리 토끼를 모두 잡는 탁월한 선택입니다.\n\nhttps://aws.amazon.com/ebs/general-purpose/",
    "glossary": {
      "Amazon EBS GP3": "성능(IOPS)과 용량을 따로 조절할 수 있어 가성비가 매우 뛰어난 최신형 클라우드 하드디스크",
      "Lift and Shift": "기존 온프레미스 시스템의 구조를 바꾸지 않고 그대로 클라우드로 옮겨오는 방식",
      "IOPS": "초당 하드디스크에 데이터를 입력하거나 출력하는 속도를 나타내는 단위"
    }
  },
  {
    "id": 581,
    "question": "우리의 아주 소중한 앱은 최소 2대의 서버가 24시간 내내 살아 있어야 합니다. 어떤 장애에도 견디는 고가용성 구조를 위해 Auto Scaling 그룹을 어떻게 설정할까요?",
    "options": [
      "최소 용량을 2로 맞추고, 두 가용 영역(AZ)에 각각 1대씩 온디맨드 서버를 둡니다.",
      "재난 상황을 대비해 최소 용량을 4로 잡고, 두 가용 영역에 각각 2대씩 온디맨드 서버를 배치합니다.",
      "돈을 아끼기 위해 최소 용량을 2로 하고, 한 가용 영역에 저렴한 스팟 인스턴스 4대를 몰아넣습니다.",
      "최소 용량 4로 설정하고, 한쪽엔 안정적인 온디맨드 2대, 반대쪽엔 싼 스팟 인스턴스 2대를 둡니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 진정한 고가용성은 '가용 영역 하나가 마비되어도' 서비스가 유지되어야 합니다. 각 영역에 필요한 대수만큼을 똑같이 배치해두면 비상 상황에서도 중단 없는 서비스를 보장할 수 있습니다.\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
    "glossary": {
      "AZ (Availability Zone)": "정전이나 지진 같은 재난으로부터 안전하게 격리된 독립된 데이터 센터 군락",
      "High Availability (고가용성)": "인프라의 일부가 고장 나도 전체 서비스가 중단되지 않고 계속 작동하는 능력",
      "On-demand Instance": "약정 없이 쓴 만큼만 돈을 내며 자리를 보장받는 가장 표준적인 서버 구매 방식"
    }
  },
  {
    "id": 582,
    "question": "회사가 미국 서부(us-west-1) 전산실과 독일(eu-central-1) AWS 계정 두 곳에 웹 사이트를 차려놨습니다. 전 세계 고객이 자신과 '지리적으로 가까운' 곳에 접속해 로딩 시간을 줄이게 하려면?",
    "options": [
      "Route 53에서 '지리적 위치(Geolocation)' 라우팅을 설정해 국가별로 가까운 서버를 찍어줍니다.",
      "단순 라우팅(Simple Routing) 주소를 두 개 만들어서 각자 알아서 찾게 합니다.",
      "지연 시간(Latency) 라우팅을 us-west-1에만 연결해 미국 손님만 배려합니다.",
      "가중치 기반(Weighted) 라우팅으로 두 곳의 트래픽을 정확히 5:5로 나눕니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 사용자가 접속하는 국가 근처의 서버로 안내해주는 '지리적 위치(Geolocation) 라우팅'이 정답입니다. 독일 손님은 독일 서버로, 미국 손님은 미국 서버로 보내 로딩 시간을 최소화해 줍니다.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geolocation.html",
    "glossary": {
      "Geolocation Routing": "사용자의 물리적 위치(대륙, 국가 등)를 파악해 가장 적합한 서버 주소를 알려주는 DNS 규칙",
      "Amazon Route 53": "웹 사이트 주소를 숫자 IP로 바꿔주며 똑똑한 라우팅 기능을 제공하는 AWS의 길잡이",
      "Domain Name System (DNS)": "사람이 읽기 쉬운 인터넷 주소(google.com 등)를 컴퓨터가 이해하는 숫자 주소로 바꿔주는 시스템"
    }
  },
  {
    "id": 583,
    "question": "5PB(페타바이트)라는 어마어마한 양의 테이프 백업 데이터를 6개월 안에 AWS로 옮겨야 합니다. 인터넷망(1Gbps)으로 보내기엔 너무 느린데, 가장 효율적인 이사 장비는?",
    "options": [
      "테이프 데이터를 파일로 바꿔서 DataSync 서비스로 매일 인터넷 전송을 시도합니다.",
      "기존 백업 프로그램에서 직접 S3 Glacier Deep Archive로 쏘아 올립니다.",
      "테이프 게이트웨이 기능이 탑재된 'AWS Snowball Edge' 장비 여러 대를 주문해 담아서 보냅니다.",
      "회전식 온프레미스 게이트웨이를 설치해 가상 테이프를 만들고 천천히 업로드합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 엄청난 양의 데이터를 인터넷으로 보내기엔 너무 느립니다. 이럴 땐 외장하드 장비인 Snowball Edge를 주문해 데이터를 직접 담아 택배로 보내는 것이 기한 내에 이사를 끝내는 가장 확실한 방법입니다.\n\nhttps://aws.amazon.com/snowball/",
    "glossary": {
      "AWS Snowball Edge": "인터넷이 너무 느릴 때 수십~수백 테라바이트 데이터를 물리적으로 담아서 옮겨주는 휴대용 데이터 센터 장비",
      "Petabyte (PB)": "1,000테라바이트(TB). 일반 하드디스크 수천 개 분량의 초거대 데이터 단위",
      "Tape Gateway": "물리 테이프 백업 장치를 클라우드 기반의 가상 테이프로 바꿔주는 중간 다리 역할"
    }
  },
  {
    "id": 584,
    "question": "수많은 데이터를 병렬로 처리하는 서버 그룹을 만들려 합니다. 한 대가 고장 날 때 옆 서버도 같이 죽는 불상사를 막기 위해, 서버들이 '서로 다른 실제 하드웨어'에 배치되게 하려면?",
    "options": [
      "EC2를 '분산(Spread)' 배치 그룹에 넣어 인스턴스들을 격리시킵니다.",
      "서버들을 아예 다른 AWS 계정으로 쪼개서 분산시킵니다.",
      "전용 테넌시(Dedicated Tenancy)를 구매해 고가 장비를 우리만 씁니다.",
      "공유 테넌시를 써서 남들이 쓰는 하드웨어에 무작위로 섞이게 합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. '분산(Spread)' 배치 그룹은 서버들을 서로 다른 실제 하드웨어 랙에 뿔뿔이 흩어지게 배치합니다. 하드웨어 한 대가 고장 나도 다른 서버가 동시에 죽는 연쇄 반응을 막아주는 안전장치입니다.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-spread",
    "glossary": {
      "Spread Placement Group": "인스턴스를 각각 다른 하드웨어 랙에 배치하여 장애의 연쇄 반응을 막는 설정",
      "Rack (랙)": "수십 대의 서버와 네트워크 장비가 꽂혀 있는 커다란 철제 선반",
      "Fault Isolation (장애 격리)": "시스템 한 곳의 고장이 다른 곳으로 번지지 않도록 울타리를 치는 보안/운영 전략"
    }
  },
  {
    "id": 585,
    "question": "재난 대비(DR)를 위해 다른 리전에 비상용 서버 자리를 미리 확보해두고 싶습니다. 다른 건 몰라도 '확정적으로' 우리 자리를 비워두게 만드는 서비스는?",
    "options": [
      "언제든 취소 가능한 온디맨드 인스턴스를 미리 결제해 둡니다.",
      "EC2 Savings Plan을 사서 어딜 가든 할인을 받게 세팅합니다.",
      "장애 조치 지역의 '지역 예약 인스턴스'를 사서 비용을 미리 냅니다.",
      "장애 조치 지역에서 '용량 예약(Capacity Reservations)'을 구매합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. '용량 예약'은 "나중에 쓸 테니 내 자리 미리 비워줘!"라고 AWS와 약속하는 것입니다. 재난 상황에서 전 세계 트래픽이 몰려 서버가 부족할 때도 나만은 당당하게 자리를 확보할 수 있는 확실한 보험입니다.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
    "glossary": {
      "On-Demand Capacity Reservation": "특정 가용 영역에서 일정 기간 동안 EC2 용량을 미리 확보(장소 예약)하는 서비스",
      "DR (Disaster Recovery)": "지진, 화재 등으로 서비스가 중단되었을 때 복구하기 위한 비상 계획",
      "Failover (장애 조치)": "문제가 생긴 주 리전 대신 미리 준비한 보조 리전으로 즉시 서비스를 옮기는 과정"
    }
  },
  {
    "id": 586,
    "question": "연구개발(R&D) 팀이 회사에서 독립해서 별도의 법인을 차리게 되었습니다. 기존 AWS 조직(Organizations)에서 R&D 전용 계정만 쏙 빼서 새 조직으로 옮기는 가장 깔끔한 절차는?",
    "options": [
      "이사하는 동안만큼은 R&D 계정이 양쪽 조직에 동시에 가입된 상태로 둡니다.",
      "R&D 계정이 기존 팀을 탈퇴(Leave)한 뒤, 새 법인 마스터 계정의 초대(Invite)를 수락합니다.",
      "새 법인에 아예 새 계정을 만들고, 기존 데이터와 서버들을 하나하나 직접 복사해서 옮깁니다.",
      "R&D 계정이 새 조직에 가입 신청을 하고, 기존 마스터 계정의 권한을 새 계정에게 넘깁니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. AWS 계정은 한 번에 하나의 조직에만 속할 수 있습니다. 기존 조직에서 탈퇴(Leave)하고 새 법인 마스터 계정의 초대(Invite)를 받으면, 계정 안의 설정은 그대로 유지한 채 우아하게 이사할 수 있습니다.\n\nhttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html",
    "glossary": {
      "AWS Organizations": "여러 개의 AWS 계정을 그룹으로 묶어 결제와 권한을 통합 관리하는 서비스",
      "Master Account (관리 계정)": "조직의 전체 결제와 정책을 결정하는 대장 계정",
      "OU (Organizational Unit)": "계정들을 관리하기 편하게 부서나 용도별로 나누어 놓은 폴더"
    }
  },
  {
    "id": 587,
    "question": "웹 앱에서 고객들의 행동 데이터를 수집해서 분석하려 합니다. 트래픽이 들쭉날쭉하고 갑자기 확 늘어날 수도 있는데, '본인 인증' 단계까지 포함된 안전하고 유연한 수집 통로는?",
    "options": [
      "서버 앞단에 GWLB 로드 밸런서를 두고 ECS 서버에 데이터를 저장합니다. 인증은 로드 밸런서가 직접 처리하게 합니다.",
      "API Gateway 엔드포인트 뒤에 Kinesis Data Stream을 둡니다. 인증은 람다(Lambda) 함수로 해결합니다.",
      "API Gateway 엔드포인트를 열고 바로 Kinesis Data Firehose로 연결합니다. 인증은 'API Gateway 람다 권한 부여(Authorizer)'를 사용합니다.",
      "GWLB 뒤에 ECS 컨테이너를 두고 인증은 별도의 람다로 처리합니다. 데이터는 EFS 공유 저장소에 쌓습니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. '들쭉날쭉한 트래픽 + 인증 + 수집' 요구에는 API Gateway와 Kinesis Firehose 조합이 최고입니다. Firehose가 서버 없이 데이터를 S3까지 안전하게 배달해주고, 인증은 람다로 해결하는 가장 서버리스다운 구조입니다.\n\nhttps://aws.amazon.com/kinesis/data-firehose/",
    "glossary": {
      "Kinesis Data Firehose": "스트리밍 데이터를 S3, Redshift 등으로 실시간 전용망을 통해 바로 배달해주는 서비스",
      "Lambda Authorizer": "API Gateway 입구에서 람다 코드를 통해 입장객이 누구인지 확인하고 허가를 내주는 보안 장치",
      "Ingestion (수집)": "여러 곳에서 발생하는 데이터를 분석하거나 저장하기 위해 한곳으로 모아들이는 단계"
    }
  },
  {
    "id": 588,
    "question": "RDS SQL Server에 대한 비상 계획(DR)을 세우려 합니다. 데이터가 최대 하루치(24시간) 정도 유실되어도 괜찮고 복구도 하루 안에만 끝나면 될 때, 가장 저렴한 방법은?",
    "options": [
      "다른 리전에 비싼 '읽기 전용 복제본'을 24시간 내내 띄워두고 비상 시 승격시킵니다.",
      "DMS 서비스를 이용해 실시간으로 다른 리전에 데이터를 복제해 둡니다.",
      "24시간마다 수동으로 백업 파일을 만들어 S3 버킷에 복사해 둡니다.",
      "RDS 설정에서 '교차 리전 스냅샷 복사' 기능을 켜서 24시간마다 스냅샷을 다른 리전으로 보냅니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 데이터가 하루치 유실되어도 괜찮다면 비싼 복제 서버 대신 '교차 리전 스냅샷 복사'가 정답입니다. 하루 한 번 스냅샷만 배달해두면 비상 시 그곳에서 새 서버를 띄울 수 있어 비용이 매우 저렴합니다.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.CrossRegion",
    "glossary": {
      "Snapshot (스냅샷)": "특정 시점의 데이터베이스 상태를 그대로 찍어놓은 사진 파일과 같은 백업본",
      "RPO (Recovery Point Objective)": "재난 시 최악의 경우 잃어버릴 수 있는 데이터의 시간적 범위",
      "RTO (Recovery Time Objective)": "장애 발생 후 다시 서비스를 가동시키는 데 걸리는 목표 시간"
    }
  },
  {
    "id": 589,
    "question": "로그인 정보(세션 유지)를 서버(EC2) 안에 저장하고 있는데, 서버가 한 대만 죽어도 해당 사용자가 로그아웃되어 버립니다. 무중단 가용성을 위해 세션을 어디로 빼는 게 좋을까요?",
    "options": [
      "임시 캐시 저장소인 Memcached용 ElastiCache에 세션 데이터를 담습니다.",
      "고성능 데이터 엔진인 Redis용 Amazon ElastiCache를 사용하여 세션 상태를 관리합니다.",
      "AWS Storage Gateway의 캐싱 기능을 활용해 서버 하드디스크처럼 세션을 저장합니다.",
      "관계형 DB인 Amazon RDS에 세션 정보를 하나하나 기록하도록 앱을 수정합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 로그인 유지 같은 세션 정보는 속도가 생명입니다. 메모리 기반 엔진인 Redis용 ElastiCache는 빛의 속도로 데이터를 주고받으면서도 안정성이 뛰어나 세션 저장소의 표준으로 쓰입니다.\n\nhttps://aws.amazon.com/elasticache/redis/",
    "glossary": {
      "Sticky Session (세션 고정)": "로드 밸런서가 한 번 접속한 사용자를 계속 같은 서버로만 안내하는 방식",
      "Session State (세션 상태)": "사용자가 로그인하고 웹 쇼핑을 하는 동안 잠시 기억해둬야 할 정보",
      "Amazon ElastiCache for Redis": "초고성능 인메모리 엔진인 Redis를 관리해주는 서비스로, 세션 저장과 캐싱에 널리 쓰임"
    }
  },
  {
    "id": 590,
    "question": "평소엔 괜찮다가 한 달에 한 번 보고서를 뽑을 때만 RDS MySQL이 버벅거립니다. 매일 쓰는 서비스 속도는 유지하면서, 보고서만이라도 시원하게 뽑아낼 수 있는 비법은?",
    "options": [
      "읽기 전용 복제본(Read Replica)을 하나 더 만들고, 보고서 쿼리를 그쪽으로 보냅니다.",
      "매달 보고서 쓰는 날에만 DB를 백업받아 새 서버에 복원하고, 작업이 끝나면 삭제합니다.",
      "데이터를 S3에 엑셀 파일로 뽑아놓고, Athena라는 툴로 S3 파일을 직접 쿼리합니다.",
      "보고서가 잘 돌아갈 때까지 DB 서버의 사양(CPU/메모리)을 무조건 계속 키웁니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 무거운 보고서 작업(읽기 전용)은 주 서버에 무리를 줍니다. 똑같은 복사본인 '읽기 전용 복제본'을 조수로 고용해 그쪽으로 업무를 넘기면 주 서버는 고객 대응에만 집중할 수 있어 성능이 유지됩니다.\n\nhttps://aws.amazon.com/rds/features/read-replicas/",
    "glossary": {
      "Read Replica (읽기 전용 복제본)": "주 데이터베이스의 내용을 그대로 복제해두고, 조회(Read) 작업만 전담하는 복사본 서버",
      "Reporting Query (보고서 쿼리)": "방대한 데이터를 한꺼번에 읽고 계산하여 통계를 내는 무거운 DB 명령어",
      "Amazon RDS": "복잡한 DB 설치와 백업을 AWS가 대신 해주는 관리형 데이터베이스 서비스"
    }
  },
  {
    "id": 591,
    "question": "EKS(쿠버네티스)로 돌아가는 여러 마이크로서비스(고객관리, 주문 등)가 있습니다. 들어오는 주소에 맞춰 각 서비스로 길을 터주려 하는데, 가장 가성비 좋은 하이브리드 로드 밸런서는?",
    "options": [
      "네트워크 계층(L4)에서 작동하는 'Network Load Balancer'를 설치합니다.",
      "애플리케이션 계층(L7)의 똑똑한 경로 탐색이 가능한 'Application Load Balancer'를 도입합니다.",
      "람다(Lambda) 함수를 중간에 두어 들어오는 요청을 EKS로 번역해서 넘깁니다.",
      "API Gateway를 지휘소로 삼아 복잡한 라우팅 규칙을 직접 관리합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. '어떤 주소면 어떤 서비스로 가라'는 식의 똑똑한 길찾기는 L7 로드 밸런서인 ALB의 전문 분야입니다. 마이크로서비스들의 복잡한 입구를 하나로 통합 관리하기에 가장 가성비 좋은 선택입니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/application-load-balancer/",
    "glossary": {
      "Application Load Balancer (ALB)": "사용자 요청의 내용(주소, 헤더 등)을 보고 각각 다른 서버로 보내주는 똑똑한 부하 분산 장치",
      "Microservices (마이크로서비스)": "시스템을 독립적인 작은 단위들로 쪼개어 개발하고 관리하는 효율적인 설계 방식",
      "L7 (Layer 7)": "네트워크 통신 중 앱 계층(HTTP 등)의 데이터를 들여다보고 판단하는 가장 높은 수준의 기술 계층"
    }
  },
  {
    "id": 592,
    "question": "저작권 이미지를 전 세계에 판매 중인데, 도난을 막기 위해 특정 국가는 접속을 막고 유료 회원에게만 한정된 시간 동안 접속 가능한 주소를 주고 싶습니다. 최적의 설계는?",
    "options": [
      "S3에 이미지를 넣고 주소를 공개하되, MFA(다단계 인증)를 켜서 아무나 못 보게 합니다.",
      "고객 한 명마다 IAM 아이디를 만들어주고 S3 접근 권한을 일일이 부여합니다.",
      "서버(EC2)에 직접 이미지를 넣고, 금지된 국가에는 아예 서버를 띄우지 않는 방식으로 막습니다.",
      "S3에 보관한 이미지를 CloudFront(CDN)로 배달하되, '지리적 제한'과 '서명된 URL(Signed URL)'을 조합해 보호합니다."
    ],
    "answer": 3,
    "explanation": "정답은 D입니다. 전 세계적인 속도 보장, 특정 국가 차단, 그리고 구매자에게만 일시적 권한 부여를 한 번에 해결하는 설계입니다. 보안과 고객 만족도 두 마리 토끼를 모두 잡는 정석적인 미디어 배전입니다.\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    "glossary": {
      "CloudFront Signed URL": "콘텐츠에 대한 임시 접근 권한을 URL 매개변수에 포함시켜 특정 기간 동안만 유효하게 만든 주소",
      "Geographic Restriction": "접속자의 국가 정보를 기반으로 콘텐츠 접근을 허용하거나 차단하는 보안 기술",
      "CDN (Content Delivery Network)": "전 세계 곳곳에 서버를 두어 사용자와 가장 가까운 곳에서 콘텐츠를 빠르게 배달하는망"
    }
  },
  {
    "id": 593,
    "question": "가용성이 매우 높은 Redis용 ElastiCache를 구축하려 합니다. 특정 가용 영역(AZ) 전체가 죽거나 서버 한 대가 고장 나도 데이터 유실이나 성능 저하가 없으려면?",
    "options": [
      "여러 노드를 묶은 샤드(Shard) 구조의 '다중 AZ Redis 복제 그룹'을 사용합니다.",
      "데이터가 바뀔 때마다 파일로 기록하는 AOF(Append Only Fiels) 기능을 켜서 버팁니다.",
      "읽기 복제본이 2개 이상인 수동 다중 AZ 클러스터를 구축합니다.",
      "Auto Scaling 기능을 활성화하고 서버가 죽으면 새로 띄우도록 설정합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. '복제 그룹'을 여러 영역(Multi-AZ)에 분산 배치하세요. 한쪽 데이터 센터가 무너져도 다른 쪽 복제본이 즉시 대장 자리를 이어받아 서비스 중단과 데이터 유실을 완벽히 막아줍니다.\n\nhttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html",
    "glossary": {
      "Amazon ElastiCache for Redis": "데이터를 메모리에 불러와 처리 속도를 비약적으로 높여주는 관리형 인메모리 DB 서비스",
      "Multi-AZ Redis Replication Group": "여러 가용 영역에 걸쳐 마스터와 복제본을 두어 장애 발생 시 자동으로 전환하는 고성능 가용성 구조",
      "Shard (샤드)": "거대한 데이터를 여러 개의 작은 단위로 쪼개어 여러 서버에 나누어 담는 방식"
    }
  },
  {
    "id": 594,
    "question": "EC2를 새로 켰을 때, 앱이 메모리로 로딩되는 데 시간이 너무 오래 걸려 테스트가 자꾸 늦어집니다. 다음에 켤 때 기다림 없이 '즉시 실행' 상태로 만들고 싶다면?",
    "options": [
      "서버를 늘 꺼지지 않게 Auto Scaling을 최소 2대로 유지시킵니다.",
      "EC2 스팟 인스턴스를 활용해 저렴한 가격으로 미리 여러 대를 띄워 놓습니다.",
      "EC2의 '최대 절전 모드(Hibernate)'를 활성화하고, Auto Scaling '웜 풀(Warm Pools)'을 활용합니다.",
      "용량 예약(Capacity Reservation)을 통해 자리를 확보하고 필요할 때 새 서버를 켭니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 끈 상태에서도 메모리 내용을 보존하는 '최대 절전 모드'와 실행 준비가 끝난 서버 대기군인 '웜 풀'을 결합하세요. 사용자가 올 때 기다림 없는 무지각 실행 환경을 선물할 수 있습니다.\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html",
    "glossary": {
      "EC2 Hibernation (최대 절전 모드)": "서버 종료 시 메모리 데이터를 하드에 담아뒀다가 다시 켤 때 그대로 불러와 로딩 시간을 없애는 기술",
      "Warm Pool": "트래픽이 오기 전 미리 부팅과 설정이 완료된 서버들을 대기시켜놓는 Auto Scaling의 예비군 저장소",
      "Cloud Computing Efficiency (클라우딩 효율성)": "필요할 때만 즉시 자원을 꺼내 쓰고, 비용도 아끼는 클라우드의 핵심 가치"
    }
  },
  {
    "id": 595,
    "question": "매일 똑같지 않은 '랜덤한 요일'에 갑자기 트래픽이 튀어서 서버 로드가 심해집니다. 이럴 때 가장 돈을 아끼면서 실시간으로 대응하는 방법은?",
    "options": [
      "관리자가 매달 초에 수동으로 서버 대수를 조정하는 스케줄을 짭니다.",
      "인공지능이 과거 데이터를 보고 미리 늘려주는 '예측 조정' 기능에만 의존합니다.",
      "서버 부하(CPU 사용량 등)를 감지해 자동으로 늘리고 줄이는 '동적 조정(Dynamic Scaling)'을 씁니다.",
      "매일 아침 9시마다 서버를 2대씩 더 늘려두는 일정 조정 방식을 택합니다."
    ],
    "answer": 2,
    "explanation": "정답은 C입니다. 언제 터질지 모르는 돌발 상황에는 실시간 감시인 '동적 조정(Dynamic Scaling)'이 약입니다. 서버가 힘들어할 때만 즉시 투입하고 조용해지면 회수하니 가장 경제적이고 확실한 대응법입니다.\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
    "glossary": {
      "Dynamic Scaling (동적 조정)": "실시간 부하 지표를 보고 서버 대수를 유동적으로 늘리거나 줄이는 방식",
      "Target Tracking Scaling (대상을 추구하는 조정)": "예를 들어 'CPU 사용률 50%'를 항상 유지하도록 알아서 조절하는 가장 편리한 조정 전략",
      "Traffic Spike": "평소보다 갑자기 트래픽이 수배 이상 몰려드는 폭증 현상"
    }
  },
  {
    "id": 596,
    "question": "EC2에 직접 깔아서 쓰는 PostgreSQL이 세일 이벤트마다 터져나가는 접속량을 못 버텨 연결 오류가 납니다. 트래픽은 예측 불가능하고 돈은 아끼고 싶다면?",
    "options": [
      "DB 엔진을 'Amazon Aurora Serverless v2'로 과감하게 마이그레이션합니다.",
      "기존 서버(EC2) 안의 DB 설정 메뉴에서 '자동 크기 조정' 옵션을 찾아 활성화합니다.",
      "서버 자체를 무조건 큰 녀석으로 바꾸고 RDS PostgreSQL 관리형 서비스로 옮깁니다.",
      "방대한 분석 전용인 Amazon Redshift로 DB 엔진 자체를 통째로 교체합니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 요동치는 트래픽에는 'Aurora Serverless v2'가 명약입니다. 부하가 몰리면 눈 깜짝할 새 사양을 높여 주문을 받아내고, 폭풍이 지나가면 다시 사양을 낮춰 지출을 최소화해주는 지능형 DB입니다.\n\nhttps://aws.amazon.com/rds/aurora/serverless/",
    "glossary": {
      "Amazon Aurora Serverless v2": "DB 부하에 따라 사양을 실시간으로 자동 조절해주는 지능형 데이터베이스 엔진",
      "Migration (마이그레이션)": "운영 중인 시스템이나 데이터를 다른 환경으로 통째로 옮기는 대공사",
      "Scalability (확장성)": "사용자 증가에 맞춰 시스템 자원을 얼마나 유연하게 늘릴 수 있는지를 나타내는 능력"
    }
  },
  {
    "id": 597,
    "question": "서버리스(Lambda) 앱을 쓰는데, 직원들이 매일 아침 업무를 시작할 때마다 첫 로딩이 너무 느리다고 불평합니다. 아침 첫 손님도 기분 좋게 빠르게 하려면?",
    "options": [
      "API Gateway의 요청 제한(Throttling) 수치를 더 높여서 활짝 열어둡니다.",
      "아침 시작 전에 미리 'Lambda 프로비저닝된 동시성' 수치를 높여두는 예약 조정을 설정합니다.",
      "매일 아침 담당자가 직접 람다 함수를 한 번씩 실행시켜서 서버를 예열해 둡니다.",
      "람다 함수의 메모리를 10배로 키워서 기초 체력 자체를 강화합니다."
    ],
    "answer": 1,
    "explanation": "정답은 B입니다. 람다의 첫 로딩 지연(Cold Start)을 해결하려면 '프로비저닝된 동시성'을 출근 시간에 맞춰 예약하세요. 미리 예열된 일꾼들이 직원들을 맞이하므로 아침 첫 업무부터 상쾌한 속도를 경험하게 됩니다.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    "glossary": {
      "Cold Start (콜드 스타트)": "오랫동안 안 쓰던 람다 함수가 호출되었을 때, 서버를 새로 준비하고 코드를 올리느라 처음에만 느려지는 현상",
      "Provisioned Concurrency": "람다 함수 초기화 단계를 미리 완료한 채로 대기시켜 실행 지연을 없애는 유료 옵션",
      "Scheduling (예약 설정)": "특정 시간대에 자동으로 자원을 늘리거나 줄이도록 미리 약속해놓는 것"
    }
  },
  {
    "id": 598,
    "question": "연구소 센서 장비들이 쏟아내는 CSV 파일들을 S3에 모아두고, 필요할 때마다 SQL로 쿼리해서 분석하려 합니다. 가장 비용 효율적인 3가지 단계는?",
    "options": [
      "온프레미스에 'Amazon S3 파일 게이트웨이'를 설치해 센서 데이터가 S3로 흐르게 합니다.",
      "데이터 센터에 FSx 게이트웨이를 깔아서 고성능 공유 드라이브를 구성합니다.",
      "S3 데이터를 자동으로 스캔해 표(Table) 형태의 사전으로 만들어줄 'AWS Glue 크롤러'를 설정합니다.",
      "EMR 빅데이터 분석 환경을 구축해 수천 대의 서버로 S3를 쿼리합니다.",
      "무거운 Redshift 분석 전용 DB 서버를 24시간 켜서 S3 데이터를 분석합니다.",
      "서버 한 대 없이도 SQL만 날리면 S3 파일을 바로 읽어오는 'Amazon Athena'를 분석기로 씁니다."
    ],
    "answer": [0, 2, 5],
    "explanation": "정답은 F입니다. 서버 한 대 없이도 SQL만 날리면 S3 파일을 바로 읽어오는 Athena가 분석의 핵심입니다. 쿼리한 만큼만 돈을 내며 Glue 크롤러와 연계하면 가장 저렴하고 스마트한 데이터 레이크가 완성됩니다.\n\nhttps://aws.amazon.com/athena/",
    "glossary": {
      "Amazon Athena": "S3에 저장된 데이터를 별도의 서버 없이 표준 SQL로 즉시 쿼리할 수 있는 대화형 분석 서비스",
      "AWS Glue Crawler": "S3나 DB를 뒤져서 데이터의 구조(스키마)를 자동으로 파악하고 목록화해주는 검색 로봇",
      "S3 File Gateway": "사무실의 파일 탐색기와 AWS S3를 연결해, 파일을 저장하면 즉시 클라우드로 올라가게 해주는 브리지 장비"
    }
  },
  {
    "id": 599,
    "question": "회사의 전산실(온프레미스)에 AWS 장비인 'Outposts'를 들여놓게 되었습니다. 이 하이브리드 환경에서 관리 책임 중 '우리 회사(고객)'가 담당해야 하는 일은? (3개 선택)",
    "options": [
      "Outposts 랙(Rack) 장비에 빵빵한 전원과 인터넷 랜선을 꽂아두는 일",
      "하드웨어 하이퍼바이저와 스토리지 시스템의 소프트웨어적 관리",
      "데이터 센터 건물의 물리적 보안 출입 통제와 도난 방지",
      "Outposts 내부에 든 서버 부품이나 전원 공급 장치의 물리적 가용성 확보",
      "고장 난 Outposts 부품을 직접 분해해서 고치거나 새 걸로 교환하는 일",
      "앱이 뻗지 않도록 ECS 클러스터에 여유 자원을 충분히 보급하고 관리하는 일"
    ],
    "answer": [0, 2, 5],
    "explanation": "정답은 A, C, F입니다. Outposts는 기계 대여 서비스입니다. 장비가 살 '집(데이터 센터)'의 전원과 네트워크(A), 물리적 보안(C)은 우리 몫입니다. 또한 그 안에서 돌아가는 앱의 효율적인 관리(F)도 운영팀의 책임입니다.\n\nhttps://aws.amazon.com/outposts/",
    "glossary": {
      "AWS Outposts": "AWS의 최신 서버 장비를 내 전산실에 갖다 놓고, 클라우드와 똑같이 사용하는 하이브리드 서비스",
      "Shared Responsibility Model (책임 공유 모델)": "클라우드 서비스 이용 시 AWS와 고객이 각각 어떤 보안과 관리를 맡을지 정의한 약속",
      "Rack (랙)": "수십 대의 서버와 네트워크 장비가 꽂혀 있는 커다란 철제 선반"
    }
  },
  {
    "id": 600,
    "question": "TCP 기반의 특수한 제조 앱을 마이그레이션하려 합니다. 비표준 포트를 쓰고 짧은 지연 시간(Low Latency)으로 초당 300만 번의 요청을 견뎌야 하는데, 입구에 세울 로드 밸런서는?",
    "options": [
      "초당 수백만 건을 번개처럼 처리하는 L4 'Network Load Balancer(NLB)'를 씁니다.",
      "웹 주소를 상세히 분석하고 경로를 나누는 'Application Load Balancer'를 도입합니다.",
      "글로벌 전송망인 CloudFront를 앞단에 세우고 ALB를 연결합니다.",
      "API Gateway와 람다를 엮어 모든 요청을 서버리스로 걸러냅니다."
    ],
    "answer": 0,
    "explanation": "정답은 A입니다. 초당 300만 건이라는 무지막지한 트래픽과 TCP 비표준 포트라는 조건이 나오면 정답은 무조건 NLB입니다. 번개처럼 패킷을 튕겨내듯 전달하므로 처리량이 어마어마하고 속도가 가장 빠릅니다.\n\nhttps://aws.amazon.com/elasticloadbalancing/network-load-balancer/",
    "glossary": {
      "Network Load Balancer (NLB)": "초저지연과 수백만 건의 대규모 트래픽 처리에 특화된 L4(네트워크 계층) 부하 분산 장치",
      "Non-standard TCP Port": "80이나 443 같은 흔한 약속이 아닌, 기업 내에서 자체적으로 정한 특수한 통신 통로 번호",
      "Throughput (처리량)": "정해진 시간 내에 얼마나 많은 양의 데이터를 처리할 수 있는지를 나타내는 지표"
    }
  }
];