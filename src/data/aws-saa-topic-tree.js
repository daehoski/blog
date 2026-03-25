export const topicTree = [
  {
    id: "compute",
    title: "1. 컴퓨팅, 컨테이너 및 서버리스",
    services: [
      { 
        id: "ec2", 
        name: "EC2", 
        desc: "모든 OS 제어권과 네트워크 구성을 직접 관리할 수 있는 가상 서버의 정수입니다.", 
        techDetails: [
          { title: "Purchase Options", detail: "On-Demand(초단기), RI/SP(연단기), Spot(최대 90% 할인)으로 비용 최적화가 필수적입니다." },
          { title: "Instance Types", detail: "C(연산), R(메모리), M(범용), G(GPU) 등 워크로드별 하드웨어 최적화가 가능합니다." }
        ],
        comparison: { target: "Lambda", points: ["EC2: OS 제어 필요, 15분 이상의 작업, 상태 저장 필요", "Lambda: 서버 관리 불필요, 이벤트 트리거, 15분 이내 짧은 작업"] },
        
        synergies: [
          { linked: "EC2 + ASG + ELB", detail: "트래픽 증감에 따라 ASG가 EC2를 동적으로 할당하고, ELB가 부하를 분산하여 무중단 고가용성(HA) 아키텍처를 완성합니다. SAA 시험 확장의 기본 패턴입니다." },
          { linked: "EC2 + EFS", detail: "다수의 분산된 EC2 인스턴스들이 중앙 EFS(NFS)를 동시 마운트하여 정적 미디어 에셋이나 설정 파일을 완벽하게 공유하는 패턴입니다." }
        ],
        examTips: "지문에 '특정 커널 수정'이나 '애플리케이션 종속성 OS 설치'가 나오면 정답은 무조건 EC2입니다.",
        connections: ["ebs", "vpc", "asg"] 
      },
      { 
        id: "lambda", 
        name: "Lambda", 
        desc: "서버 없이 코드만 실행하는 이벤트 기반 FaaS의 표준입니다.", 
        techDetails: [
          { title: "Timeout & RAM", detail: "최대 15분 실행 제한, 128MB~10GB 메모리 할당에 따른 CPU 성능 비례 증가 전략이 핵심입니다." },
          { title: "Provisioned Concurrency", detail: "미리 실행 환경을 준비하여 Cold Start 지연 시간을 수 밀리초 단위로 방어합니다." }
        ],
        comparison: { target: "Fargate", points: ["Lambda: 코드 실행만 집중, 호출 건당 비용, 초저지연 트리거", "Fargate: 컨테이너 실행, 운영 필요 없음, 지속적 서비스 가용성"] },
        
        synergies: [
          { linked: "API Gateway + Lambda + DynamoDB", detail: "전형적인 완전 서버리스(Serverless) 3-tier 백엔드입니다. 인프라 프로비저닝 없이 무한에 가까운 확장성과 Pay-as-you-go 요금제를 달성합니다." },
          { linked: "S3 + EventBridge + Lambda", detail: "S3 버킷에 이미지가 업로드되면 EventBridge가 이를 가로채고 Lambda가 비동기적으로 썸네일을 생성하는 등 완벽한 이벤트 주도형(EDA) 패턴을 구성합니다." }
        ],
        examTips: "'서버 운영 오버헤드 최소화'와 '특정 이벤트 발생 시에만 동작' 조합은 Lambda가 가장 경제적입니다.",
        connections: ["s3", "api-gateway", "dynamodb"] 
      },
      { 
        id: "beanstalk", 
        name: "Elastic Beanstalk", 
        desc: "코드만 업로드하면 인프라(EC2, ASG, ELB, RDS)를 자동 구성해주는 PaaS 서비스입니다.", 
        techDetails: [
          { title: "Provisioning", detail: "용량 프로비저닝, 부하 분산, 오토 스케일링, 상태 모니터링을 자동으로 처리합니다." },
          { title: "Customization", detail: "시스템 설정을 완전히 제어할 수 있으며, 기존 인프라에 대한 유연한 관리가 가능합니다." }
        ],
        comparison: { target: "CloudFormation", points: ["Beanstalk: 애플리케이션 중심, 빠른 배포 가이드", "CloudFormation: 인프라 자체에 대한 세밀한 템플릿 제어"] },
        examTips: "'빠른 배포'와 '인프라 관리 최소화'가 핵심이지만, '세밀한 제어권'도 유지하고 싶을 때 선택합니다.",
        connections: ["ec2", "rds", "s3"] 
      },
      { 
        id: "batch", 
        name: "AWS Batch", 
        desc: "수천 건의 배치 컴퓨팅 작업을 효율적으로 실행해주는 완전 관리형 서비스입니다.", 
        techDetails: [
          { title: "Job Queues", detail: "작업의 우선순위를 정하고 Spot 인스턴스를 활용해 비용을 극단적으로 절감할 수 있습니다." },
          { title: "Auto-Provisioning", detail: "작업 부하에 따라 최적의 EC2 또는 Fargate 자원을 자동으로 동적으로 프로비저닝합니다." }
        ],
        comparison: { target: "Lambda", points: ["Batch: 대규모 연산, 장기 실행 가능, Docker 기반", "Lambda: 짧은 작업, 소규모 이벤트 처리"] },
        examTips: "'대량의 데이터 분석'이나 '수만 건의 병렬 연산' 지문에서 가장 많이 등장합니다.",
        connections: ["ec2", "s3", "ecr"] 
      },
      { 
        id: "outposts", 
        name: "AWS Outposts", 
        desc: "온프레미스 환경에 AWS 인프라(랙)를 직접 설치하여 진정한 하이브리드 클라우드를 구현합니다.", 
        techDetails: [
          { title: "Low Latency", detail: "온프레미스 시스템과의 초저지연 통신 및 현지 데이터 처리가 필요한 경우 필수입니다." },
          { title: "Same APIs", detail: "AWS 리전에서 사용하는 것과 동일한 API, 도구, 인프라를 로컬에서 그대로 사용합니다." }
        ],
        comparison: { target: "Local Zones", points: ["Outposts: 사용자 데이터 센터에 설치", "Local Zones: AWS가 대도시 인근에 설치한 인프라 활용"] },
        examTips: "'데이터 주권 보장'이나 '밀리초 미만의 로컬 네트워크 응답' 요구 시 정답입니다.",
        connections: ["direct-connect", "vpc"] 
      },
      { id: "ecs-eks", name: "ECS / EKS", desc: "컨테이너 오케스트레이션. ECS는 AWS 네이티브, EKS는 쿠버네티스 표준입니다.", techDetails: [{ title: "ECS", detail: "AWS 전용 컨테이너 오케스트레이터. IAM·ALB 통합이 쉽고, EC2 또는 Fargate 모드로 실행합니다." }, { title: "EKS", detail: "관리형 쿠버네티스. 기존 k8s 마이그레이션이나 멀티 클라우드 전략 시 선택합니다." }], comparison: { target: "Lambda", points: ["ECS/EKS: 컨테이너(Docker) 기반, 장기 실행, 세밀한 설정", "Lambda: 코드만 실행, 이벤트 트리거, 15분 제한"] }, examTips: "'쿠버네티스 마이그레이션' → EKS. '서버 관리 없이 컨테이너' → Fargate. '간단한 배포' → ECS.", connections: ["fargate", "alb", "cloudwatch"] },
      { id: "fargate", name: "Fargate", desc: "EC2 없이 컨테이너만 실행하는 서버리스 컨테이너 엔진입니다.", techDetails: [{ title: "Serverless Containers", detail: "vCPU·메모리 직접 할당, 사용한 만큼 과금. OS 패치·관리 부담 제로." }, { title: "ECS/EKS 통합", detail: "ECS와 EKS 모두의 실행 환경으로 사용 가능. OS 접근이 불필요한 모든 컨테이너 워크로드에 최적." }], examTips: "'EC2 관리 없이 컨테이너' 혹은 '서버리스 + 컨테이너' 조합이 나오면 Fargate가 정답입니다.", connections: ["ecs-eks", "vpc", "cloudwatch"] },
      { id: "asg", name: "Auto Scaling", desc: "트래픽에 맞게 EC2 수를 자동 조절, 비용과 가용성을 동시에 최적화합니다.", techDetails: [{ title: "Scaling Policies", detail: "Target Tracking(목표값), Step(단계별), Scheduled(일정 기반) 세 정책을 상황별로 조합합니다." }, { title: "Launch Template", detail: "AMI, 인스턴스 타입, 보안 그룹을 사전 정의하여 일관된 수평 확장을 보장합니다." }], examTips: "'수요에 따라 자동 확장/축소' → ASG. ELB와 반드시 함께 이해해야 고가용성 아키텍처가 완성됩니다.", connections: ["ec2", "alb", "cloudwatch"] }
    ]
  },
  {
    id: "storage",
    title: "2. 스토리지",
    services: [
      { 
        id: "s3", 
        name: "S3", 
        desc: "사실상 무제한의 내구성과 확장성을 가진 객체 스토리지의 글로벌 표준입니다.", 
        techDetails: [
          { title: "Storage Classes", detail: "Standard, IA(접근 빈도 낮음), Glacier(아카이브) 등 비용 최적화 계층화가 필수입니다." },
          { title: "Version control", detail: "버전 관리를 통해 실수로 인한 데이터 삭제나 덮어쓰기로부터 데이터를 보호합니다." }
        ],
        examTips: "'99.999999999% 내구성' 키워드는 S3의 상징이며, 정적 콘텐츠 배포 시 CloudFront와 연계가 정답입니다.",
        connections: ["cloudfront", "glacier", "iam"] 
      },
      { 
        id: "fsx", 
        name: "FSx", 
        desc: "Lustre, Windows File Server 등 고성능 서드파티 파일 시스템을 제공하는 관리형 서비스입니다.", 
        techDetails: [
          { title: "FSx for Lustre", detail: "S3와 연계하여 수백만 IOPS의 초고속 데이터 처리가 필요한 머신러닝/HPC 워크로드 전용입니다." },
          { title: "FSx for Windows", detail: "AD(Active Directory) 연동 및 SMB 프로토콜을 완벽 지원하여 기업용 윈도우 파일 서버를 대체합니다." }
        ],
        comparison: { target: "EFS", points: ["FSx: 특정 프로토콜/고성능 요구(SMB, Lustre)", "EFS: 일반 리눅스 공유 워크로드(NFS)"] },
        examTips: "'윈도우 서버 간 공유'는 FSx for Windows, '머신러닝 가속'은 FSx for Lustre입니다.",
        connections: ["s3", "vpc", "directory-service"] 
      },
      { 
        id: "snow-family", 
        name: "Snow Family", 
        desc: "오프라인 상태에서 대규모 데이터를 AWS로 물리적으로 이전하거나 엣지 연산을 수행하는 장치입니다.", 
        techDetails: [
          { title: "Capacity Scale", detail: "Snowcone(8TB), Snowball Edge(80TB), Snowmobile(100PB) 등 데이터 규모에 맞춰 선택합니다." },
          { title: "Edge Computing", detail: "네트워크 연결이 어려운 환경에서 로컬 연산을 처리한 후 데이터를 리전으로 보낼 수 있습니다." }
        ],
        examTips: "네트워크 대역폭 제한으로 '데이터 이전이 수개월 걸릴 것으로 예상'될 때 하드웨어를 요청하는 것이 정답입니다.",
        connections: ["s3", "iam"] 
      },
      { id: "efs", name: "EFS", desc: "여러 EC2 인스턴스가 동시에 마운트해 사용할 수 있는 완전 관리형 NFS 파일 시스템입니다.", techDetails: [{ title: "Shared File System", detail: "수천 개의 EC2 인스턴스가 동시에 접근 가능. 마운트 시 자동으로 용량이 늘어납니다." }, { title: "Storage Classes", detail: "EFS Standard와 EFS-IA(Infrequent Access)를 수명 주기 정책으로 자동 전환하여 비용을 절감합니다." }], comparison: { target: "EBS", points: ["EFS: 다중 인스턴스 동시 공유, Linux 전용(NFS), 자동 확장", "EBS: 단일 인스턴스 전용, 고성능 블록 스토리지, Windows 지원"] }, examTips: "'여러 EC2인스턴스가 동일한 파일에 접근' 또는 '공유 파일 시스템'이 나오면 EFS가 정답입니다.", connections: ["ec2", "kms"] },
      { id: "glacier", name: "S3 Glacier", desc: "거의 접근하지 않는 데이터를 극저가로 장기 보관하는 아카이브 스토리지입니다.", techDetails: [{ title: "Retrieval Options", detail: "Expedited(1~5분), Standard(3~5시간), Bulk(5~12시간) 세 가지 복구 방식으로 비용과 속도를 조절합니다." }, { title: "Vault Lock", detail: "규정 준수를 위해 데이터를 수정·삭제 불가능한 상태로 잠금(WORM 정책)할 수 있습니다." }], examTips: "'규정 준수를 위한 장기 아카이브' 또는 '접근 빈도가 극히 낮은 데이터 보관' 시 Glacier가 정답입니다.", connections: ["s3", "iam"] }
    ]
  },
  {
    id: "database",
    title: "3. 데이터베이스",
    services: [
      { 
        id: "rds", 
        name: "RDS", 
        desc: "6가지 엔진(MySQL, PostgreSQL 등)을 지원하는 관리형 관계형 DB입니다.", 
        techDetails: [
          { title: "Multi-AZ", detail: "물리적 장애 발생 시 DNS 자동 변경(Failover)을 통해 고가용성을 보장합니다. (동기식 복제)" },
          { title: "Read Replicas", detail: "읽기 전용 복제본을 최대 5~15개까지 생성하여 읽기 트래픽 부하를 분산합니다. (비동기식)" }
        ],
        
        synergies: [
          { linked: "RDS + ElastiCache", detail: "데이터베이스 앞단(Front)에 메모리 캐시인 Redis/Memcached를 배치하여, 반복되는 Read 워크로드에서의 응답 속도를 극대화시키고 DB 부하를 차단합니다." },
          { linked: "RDS + Route 53", detail: "Multi-AZ 구성 장애 발생 시 Failover 트리거에 맞춰 Route 53가 트래픽 라우팅을 자동으로 변경하여 DB 무중단 서비스를 지원합니다." }
        ],
        examTips: "'기존 SQL 쿼리 유지'와 '고가용성 확보'가 동시에 나오면 Multi-AZ RDS가 정답입니다.",
        connections: ["ec2", "kms", "vpc"] 
      },
      { 
        id: "aurora", 
        name: "Aurora", 
        desc: "클라우드 네이티브 아키텍처로 설계된 MySQL/PostgreSQL 호환 관계형 DB입니다.", 
        techDetails: [
          { title: "Scaling", detail: "스토리지가 10GB에서 128TB까지 자동으로 확장되며, 최대 15개의 읽기 복제본을 지원합니다." },
          { title: "Auto-Healing", detail: "데이터를 3개 가용 영역에 6개 복사본으로 저장하여 데이터 무결성을 극히 높입니다." }
        ],
        comparison: { target: "RDS", points: ["Aurora: 더 높은 가용성(6개 복제), 더 빠른 성능, 자동 스토리지 확장", "RDS: 범용적인 엔진 지원, 상대적으로 저렴한 엔트리 비용"] },
        connections: ["rds", "s3", "lambda"] 
      },
      { 
        id: "dynamodb", 
        name: "DynamoDB", 
        desc: "어떠한 트래픽 규모에서도 한 자릿수 밀리초 지연 시간을 보장하는 NoSQL DB입니다.", 
        techDetails: [
          { title: "Global Tables", detail: "멀티 리전 간 자동 복제를 통해 전 세계 어디서나 동일하게 낮은 지연 시간을 제공합니다." },
          { title: "TTL (Time to Live)", detail: "만료된 데이터를 자동으로 삭제하여 스토리지 비용을 절감하고 관리 부담을 줄입니다." }
        ],
        examTips: "'서버리스', '무제한 확장성', '일관된 성능' 키워드가 나오면 1순위 후보입니다.",
        connections: ["lambda", "api-gateway", "dax"] 
      },
      { id: "elasticache", name: "ElastiCache", desc: "Redis 또는 Memcached 기반의 완전 관리형 인메모리 캐시로, DB 부하를 획기적으로 줄입니다.", techDetails: [{ title: "Redis vs Memcached", detail: "Redis: 영속성, 클러스터, Pub/Sub, 복잡한 자료구조 지원. Memcached: 순수 캐시, 멀티스레드, 단순 분산." }, { title: "Lazy Loading vs Write-Through", detail: "Lazy Loading: 캐시 미스 시에만 DB 조회. Write-Through: 데이터 write 시 캐시도 동시 갱신." }], comparison: { target: "DynamoDB DAX", points: ["ElastiCache: 범용 캐시, RDS 앞단에 배치, 다양한 자료구조", "DAX: DynamoDB 전용 캐시, 설정 최소화, 마이크로초 응답"] }, examTips: "'DB 읽기 부하 감소'와 '세션 저장소' 키워드는 ElastiCache입니다. Redis는 순위표·세션·Pub/Sub에 최적.", connections: ["rds", "lambda", "vpc"] },
      { id: "neptune", name: "Neptune", desc: "소셜 네트워크, 지식 그래프 등 복잡한 관계형 데이터를 위한 완전 관리형 그래프 DB입니다.", techDetails: [{ title: "Graph Models", detail: "Property Graph(Gremlin)와 RDF(SPARQL) 두 가지 쿼리 언어를 지원합니다." }, { title: "High Availability", detail: "3개 AZ에 6개 복제본을 저장하고, 최대 15개의 읽기 복제본을 지원합니다." }], examTips: "'소셜 그래프', '사기 탐지', '추천 엔진'처럼 노드-엣지 관계가 핵심인 워크로드에 Neptune을 선택합니다.", connections: ["vpc", "iam"] }
    ]
  },
  {
    id: "network",
    title: "4. 네트워킹 및 콘텐츠 전송",
    services: [
      { 
        id: "vpc", 
        name: "VPC", 
        desc: "사용자만의 격리된 가설 네트워크 환경을 구성하는 AWS의 근간입니다.", 
        techDetails: [
          { title: "Endpoints", detail: "인터넷 게이트웨이 없이 AWS 내부 망을 통해 S3, DynamoDB 등에 안전하게 접근합니다. (PrivateLink)" },
          { title: "Peering & TGW", detail: "다른 VPC나 온프레미스와의 망 연결을 위해 Peering 또는 Transit Gateway를 사용합니다." }
        ],
        connections: ["ec2", "rds", "route53"] 
      },
      { 
        id: "route53", 
        name: "Route 53", 
        desc: "고가용성 DNS 서비스로, 도메인 등록부터 상태 확인 및 트래픽 제어까지 수행합니다.", 
        techDetails: [
          { title: "Routing Policies", detail: "Weighted(가중치), Latency(지연 시간), Geolocation(지리적), Failover(장애 조치) 등 다양한 정책을 지원합니다." },
          { title: "Health Checks", detail: "엔드포인트의 상태를 지속적으로 모니터링하여 가용한 서버로만 트래픽을 유도합니다." }
        ],
        examTips: "'지연 시간 기반 라우팅'이나 '전역적 장애 조치'가 필요할 때 반드시 고려해야 합니다.",
        connections: ["cloudfront", "alb", "s3"] 
      },
      { id: "cloudfront", name: "CloudFront", desc: "전 세계 450+ 엣지 로케이션을 통해 정적·동적 콘텐츠를 초저지연으로 전송하는 CDN 서비스입니다.", techDetails: [{ title: "Origin Types", detail: "S3, ALB, EC2, 커스텀 오리진 등 다양한 백엔드를 오리진으로 지정할 수 있습니다." }, { title: "OAC (Origin Access Control)", detail: "S3 버킷을 CloudFront를 통해서만 접근 가능하도록 강제하여 보안을 강화합니다." }], examTips: "'전 세계 사용자를 위한 낮은 지연 시간'과 '정적 콘텐츠 가속' → CloudFront. S3 + CloudFront + OAC 조합을 암기하세요.", connections: ["s3", "route53", "waf-shield"] },
      { id: "alb", name: "ELB (ALB/NLB/GWLB)", desc: "트래픽을 여러 대상으로 분산시키는 로드 밸런서. 레이어에 따라 ALB(L7), NLB(L4), GWLB(L3)로 구분됩니다.", techDetails: [{ title: "ALB (Application)", detail: "HTTP/HTTPS 트래픽을 경로·호스트 기반으로 라우팅. WebSocket, gRPC 지원. 컨테이너/람다 타겟 가능." }, { title: "NLB (Network)", detail: "TCP/UDP 트래픽을 극초저지연으로 처리. 고정 IP 지원. 초당 수백만 요청 처리 가능." }], comparison: { target: "Route 53", points: ["ELB: 단일 리전 내 트래픽 분산, 헬스체크 기반 라우팅", "Route 53: 글로벌 DNS 기반 트래픽 라우팅, 지역/지연시간/장애조치"] }, examTips: "'경로 기반 라우팅' 또는 '컨테이너로 트래픽 분산' → ALB. '고정 IP 필요' 또는 'TCP 부하분산' → NLB.", connections: ["ec2", "ecs-eks", "asg"] },
      { id: "tgw", name: "Transit Gateway", desc: "수백 개의 VPC와 온프레미스 네트워크를 중앙 허브 하나로 연결하는 네트워크 라우팅 서비스입니다.", techDetails: [{ title: "Hub-and-Spoke", detail: "각 VPC Peering을 개별 설정하는 대신 TGW 하나에 연결하여 확장성과 관리 효율성을 극대화합니다." }, { title: "Multi-region / Multi-account", detail: "리전 간, 계정 간 VPC도 TGW Peering을 통해 연결 가능합니다." }], examTips: "VPC가 3개 이상 연결되어야 할 때 VPC Peering 대신 Transit Gateway를 선택하세요. '허브 앤 스포크 아키텍처' 키워드.", connections: ["vpc", "direct-connect", "vpn"] },
      { id: "direct-connect", name: "Direct Connect", desc: "데이터 센터와 AWS 간의 물리적인 전용 네트워크 연결을 제공하여 안정적이고 일관된 대역폭을 보장합니다.", techDetails: [{ title: "Dedicated vs Hosted", detail: "Dedicated(1~100Gbps 전용 회선)와 Hosted(파트너 경유, 50Mbps~10Gbps) 두 가지 옵션을 제공합니다." }, { title: "VIF (Virtual Interface)", detail: "Private VIF(VPC 접근), Public VIF(AWS 퍼블릭 서비스 접근), Transit VIF(TGW 연결) 세 가지를 사용합니다." }], comparison: { target: "VPN", points: ["Direct Connect: 물리 전용선, 일관된 대역폭, 높은 비용·설치 기간", "VPN: 인터넷 기반 암호화, 빠른 설치, 대역폭 변동"] }, examTips: "'일관된 네트워크 성능'과 '대용량 데이터 전송'이 나오면 Direct Connect가 정답입니다.", connections: ["tgw", "vpc", "outposts"] },
      { id: "global-accelerator", name: "Global Accelerator", desc: "AWS의 글로벌 네트워크 백본을 활용하여 사용자로부터 가장 가까운 엣지로 트래픽을 전달하고 지연을 최소화합니다.", techDetails: [{ title: "Static Anycast IP", detail: "2개의 고정 Anycast IP를 제공하여 DNS 전파 지연 없이 즉각적인 장애 조치가 가능합니다." }, { title: "TCP/UDP 지원", detail: "HTTP뿐 아니라 TCP/UDP 기반 게임, IoT 애플리케이션에도 사용 가능합니다." }], comparison: { target: "CloudFront", points: ["Global Accelerator: TCP/UDP 최적화, 고정 IP, 비HTTP 지원", "CloudFront: HTTP/S 캐싱·CDN, 콘텐츠 배포 최적화"] }, examTips: "'고정 IP로 전 세계 성능 최적화'나 'TCP 기반 글로벌 서비스' → Global Accelerator.", connections: ["alb", "ec2", "route53"] }
    ]
  },
  {
    id: "integration",
    title: "5. 애플리케이션 통합",
    services: [
      { 
        id: "sqs", 
        name: "SQS", 
        desc: "컴포넌트 간 결합도를 낮추어(Decoupling) 개별 구성 요소의 장애가 전체로 확산되는 것을 방지합니다.", 
        techDetails: [
          { title: "Standard vs FIFO", detail: "Standard는 무제한 처리량을 제공하고, FIFO는 메시지 순서 및 중복 제거를 보장합니다." },
          { title: "DLQ (Dead Letter Queue)", detail: "처리에 실패한 메시지를 별도로 보관하여 디버깅 및 분석을 용이하게 합니다." }
        ],
        examTips: "'Decoupling(결합도 제거)' 혹은 '부하 급증 시 메시지 버퍼링' 지문에서 필수 정답입니다.",
        connections: ["lambda", "ec2", "sns"] 
      },
      { 
        id: "appsync", 
        name: "AppSync", 
        desc: "GraphQL 인터페이스를 통해 여러 데이터 소스(DynamoDB, Lambda 등)의 데이터를 실시간으로 통합합니다.", 
        techDetails: [
          { title: "Real-time Sync", detail: "구독(Subscription) 기능을 통해 데이터 변경 사항을 실시간으로 클라이언트에 푸시합니다." },
          { title: "Offline Support", detail: "클라이언트가 오프라인일 때도 앱이 작동하고 다시 온라인이 되면 데이터를 동기화합니다." }
        ],
        comparison: { target: "API Gateway", points: ["AppSync: GraphQL 전용, 실시간 동기화 강점, 자동 오프라인 처리", "API Gateway: REST/WebSocket 지원, 범용성, 엄격한 제어"] },
        examTips: "'모바일 앱 실시간 동기화' 및 'GraphQL 기반 데이터 수집' 요구 시 단독 정답 수준입니다.",
        connections: ["dynamodb", "lambda", "cognito"] 
      },
      { 
        id: "step-functions", 
        name: "Step Functions", 
        desc: "여러 AWS 서비스들을 워크플로우로 엮어 복잡한 비즈니스 로직을 상태 머신으로 관리합니다.", 
        techDetails: [
          { title: "State Machine", detail: "성공, 실패, 재시도, 분기 로직을 시각적으로 설계하고 추적할 수 있습니다." },
          { title: "Standard vs Express", detail: "Standard는 장기간 워크플로우, Express는 고처리량/단기 워크플로우에 최적화되어 있습니다." }
        ],
        examTips: "'복잡한 마이크로서비스 간 오케스트레이션' 및 '장기 실행 워크플로우' 지문에 등장합니다.",
        connections: ["lambda", "sns", "sqs"] 
      },
      { id: "sns", name: "SNS", desc: "발행-구독(Pub/Sub) 모델로 메시지를 여러 구독자에게 동시에 Fan-out 방식으로 전달합니다.", techDetails: [{ title: "Fan-out Pattern", detail: "하나의 SNS 토픽에 여러 SQS 큐를 구독시켜 메시지를 병렬로 처리하는 아키텍처 패턴의 핵심입니다." }, { title: "Push-based", detail: "이메일, SMS, HTTP, Lambda, SQS 등 다양한 프로토콜로 구독자에게 즉시 푸시 전송합니다." }], comparison: { target: "SQS", points: ["SNS: 다수 구독자에게 동시 전송(Fan-out), 푸시 기반", "SQS: 단일 큐, 풀링 기반, 메시지 순서 보장 가능(FIFO)"] }, examTips: "'하나의 이벤트를 여러 서비스에 동시 전달' → SNS + SQS Fan-out 패턴이 정답입니다.", connections: ["sqs", "lambda", "cloudwatch"] },
      { id: "eventbridge", name: "EventBridge", desc: "AWS 서비스, SaaS 앱, 자체 서비스 간의 이벤트 기반 아키텍처를 위한 서버리스 이벤트 버스입니다.", techDetails: [{ title: "Event Rules", detail: "이벤트 패턴과 스케줄을 기반으로 Lambda, SQS, Step Functions 등 다양한 타겟으로 라우팅합니다." }, { title: "Schema Registry", detail: "이벤트 스키마를 자동으로 추론하고 등록하여 이벤트 구조를 코드에서 직접 바인딩할 수 있습니다." }], comparison: { target: "SNS", points: ["EventBridge: 이벤트 필터링·변환, 외부 SaaS 통합, 스케줄러 기능", "SNS: 단순 Pub/Sub, 빠른 Fan-out, 무제한 처리량"] }, examTips: "'일정 기반 Lambda 트리거'(=Cron) 또는 'SaaS 통합 이벤트 라우팅' → EventBridge.", connections: ["lambda", "sqs", "step-functions"] },
      { id: "api-gateway", name: "API Gateway", desc: "RESTful API와 WebSocket API를 생성·배포·관리하는 완전 관리형 API 프록시 서비스입니다.", techDetails: [{ title: "REST vs HTTP vs WebSocket", detail: "REST API: 풍부한 기능(캐싱, 모델 검증). HTTP API: 저비용 단순 프록시. WebSocket: 양방향 실시간 통신." }, { title: "Throttling & Caching", detail: "API 레벨 및 스테이지 레벨에서 속도 제한을 걸고, 응답 캐싱으로 Lambda 호출 수를 줄입니다." }], examTips: "'서버리스 백엔드를 외부에 API로 노출' → API Gateway + Lambda. 'WebSocket 채팅' → API Gateway WebSocket.", connections: ["lambda", "cognito", "waf-shield"] }
    ]
  },
  {
    id: "analytics",
    title: "6. 분석",
    services: [
      { 
        id: "athena", 
        name: "Athena", 
        desc: "S3에 저장된 데이터를 표준 SQL을 사용해 즉시 분석하는 서버리스 대화형 쿼리 서비스입니다.", 
        techDetails: [
          { title: "Query Pricing", detail: "스캔한 데이터 양만큼 비용을 지불하므로 파티셔닝(Partitioning) 작업이 성능과 비용의 핵심입니다." },
          { title: "Standard SQL", detail: "테이블 생성이나 인프라 설정 없이 ANSI SQL을 그대로 사용할 수 있어 분석 장벽이 낮습니다." }
        ],
        examTips: "'로그 파일(S3)에 대한 임시 쿼리 분석' 혹은 '별도의 DB 구축 없는 분석' 상황에서 최우선 답안입니다.",
        connections: ["s3", "glue", "quick-sight"] 
      },
      { 
        id: "redshift", 
        name: "Redshift", 
        desc: "대규모 데이터 웨어하우징 워크로드를 위한 고성능 분석용 데이터베이스입니다.", 
        techDetails: [
          { title: "Columnar Storage", detail: "데이터를 열 기반으로 저장하여 분석용 쿼리(OLAP) 성능을 비약적으로 향상시킵니다." },
          { title: "Spectrum", detail: "S3에 있는 데이터도 Redshift 내부 테이블처럼 연결하여 직접 쿼리할 수 있습니다." }
        ],
        examTips: "'복잡한 OLAP 쿼리 처리' 및 'BI 도구 연동' 요구 시 RDS 정답이 아닌 Redshift가 정답일 확률이 높습니다.",
        connections: ["s3", "quick-sight", "iam"] 
      },
      { id: "glue", name: "Glue", desc: "ETL(추출-변환-적재) 작업을 코드 없이 구성하고, 데이터 카탈로그로 메타데이터를 중앙 관리합니다.", techDetails: [{ title: "ETL Jobs", detail: "Python(PySpark) 또는 Scala 기반 ETL 코드를 서버리스로 실행합니다. DPU(데이터 처리 유닛) 단위로 과금됩니다." }, { title: "Data Catalog", detail: "S3, RDS, DynamoDB 등 다양한 소스의 스키마를 자동으로 크롤링하여 Athena, Redshift가 쿼리할 수 있게 합니다." }], examTips: "'S3 데이터를 Athena로 분석하기 전 전처리' 또는 '데이터 카탈로그 구축' → Glue가 정답입니다.", connections: ["s3", "athena", "redshift"] },
      { id: "kinesis", name: "Kinesis", desc: "실시간 스트리밍 데이터를 수집·처리·분석하는 플랫폼으로 4가지 서비스로 구성됩니다.", techDetails: [{ title: "Kinesis Data Streams", detail: "샤드(Shard) 단위로 처리 용량을 조절하며, 최대 365일간 데이터를 보관합니다. 커스텀 처리 로직에 적합." }, { title: "Kinesis Firehose", detail: "완전 관리형으로 S3, Redshift, OpenSearch 등으로 스트림 데이터를 자동 적재합니다. 코드 불필요." }, { title: "Kinesis Data Analytics", detail: "SQL 또는 Apache Flink를 사용하여 스트림 데이터를 실시간으로 분석합니다." }], comparison: { target: "SQS", points: ["Kinesis: 실시간 스트리밍 분석, 순서 보장, 데이터 리플레이 가능", "SQS: 메시지 큐, 비동기 처리, 컴포넌트 Decoupling"] }, examTips: "'실시간 로그 스트리밍'이나 '클릭스트림 분석' → Kinesis. '최대한 빠른 S3 적재' → Firehose.", connections: ["s3", "lambda", "redshift"] }
    ]
  },
  {
    id: "management",
    title: "7. 관리 및 거버넌스",
    services: [
      { 
        id: "cloudwatch", 
        name: "CloudWatch", 
        desc: "리소스 및 애플리케이션에 대한 모니터링, 로깅 및 알람 기능을 제공하는 통합 감시 시스템입니다.", 
        techDetails: [
          { title: "Metrics & Alarms", detail: "CPU 사용량, 디스크 I/O 등 기본 지표와 사용자 정의 지표를 수집하여 특정 임계치 발생 시 SNS 알림을 발송합니다." },
          { title: "Logs Insights", detail: "수집된 로그 데이터를 쿼리 언어로 검색하고 시각화하여 장애 원인을 빠르게 분석합니다." }
        ],
        connections: ["sns", "lambda", "ec2"] 
      },
      { 
        id: "cloudtrail", 
        name: "CloudTrail", 
        desc: "AWS 계정 내의 모든 API 호출 내역을 기록하여 '누가, 언제, 무엇을' 했는지에 대한 감사 로그를 제공합니다.", 
        techDetails: [
          { title: "Management Events", detail: "리소스 생성, 수정, 삭제 등 제어부(Control Plane)의 모든 활동을 90일간 무료로 저장합니다." },
          { title: "Data Events", detail: "S3 객체 접근, Lambda 실행 등 데이터 평면(Data Plane)의 상세 활동을 개별적으로 기록 설정할 수 있습니다." }
        ],
        comparison: { target: "CloudWatch", points: ["CloudTrail: 감사(Audit), 보안 규정 준수, API 로그", "CloudWatch: 성능 모니터링, 알림, 애플리케이션 로그"] },
        connections: ["s3", "iam", "kms"] 
      },
      { 
        id: "config", 
        name: "AWS Config", 
        desc: "AWS 리소스의 구성 변경 내역을 기록하고, 정의된 규칙에 부합하는지 실시간으로 평가 및 준수 여부를 확인합니다.", 
        techDetails: [
          { title: "Compliance Rules", detail: "태그 미설정 리소스, 암호화되지 않은 볼륨 등을 탐지하여 자동 수정(Remediation) 작업을 트리거할 수 있습니다." },
          { title: "Inventory", detail: "지정된 시점의 리소스 구성 상태를 스냅샷으로 저장하여 시간에 따른 변경 사항을 추적합니다." }
        ],
        examTips: "'리소스 구성 준수 여부' 혹은 '변경 이력 기록' 키워드가 나오면 Config가 정답입니다.",
        connections: ["cloudtrail", "s3", "sns"] 
      },
      { 
        id: "organizations", 
        name: "Organizations", 
        desc: "여러 AWS 계정을 중앙에서 통합 관리하고, 비용 통합(Consolidated Billing) 및 가드레일(SCP)을 설정합니다.", 
        techDetails: [
          { title: "SCP (Service Control Policy)", detail: "계정 수준에서 특정 서비스나 API를 차단하여 보안 정책을 강제합니다. (IAM보다 우선순위 높음)" },
          { title: "Consolidated Billing", detail: "모든 자식 계정의 비용을 하나의 계정으로 통합 결제하며, 대량 구매 할인을 극대화합니다." }
        ],
        connections: ["control-tower", "iam", "ram"] 
      },
      { id: "cloudformation", name: "CloudFormation", desc: "인프라를 코드(YAML/JSON 템플릿)로 정의하고, 반복 가능한 방식으로 AWS 리소스를 프로비저닝합니다.", techDetails: [{ title: "Stacks & StackSets", detail: "Stack은 단일 계정/리전의 리소스 묶음. StackSets는 여러 계정과 리전에 동일 스택을 동시에 배포합니다." }, { title: "Drift Detection", detail: "실제 리소스 설정이 템플릿과 달라졌는지(Drift) 감지하여 구성의 일관성을 유지합니다." }], comparison: { target: "Elastic Beanstalk", points: ["CloudFormation: 인프라 자체 세밀 제어, 모든 AWS 리소스 지원", "Beanstalk: 앱 배포 중심, 인프라 자동 관리, 빠른 시작"] }, examTips: "'IaC(Infrastructure as Code)'와 '반복 가능한 환경 배포' → CloudFormation. 'CDK'는 CloudFormation 위에서 동작합니다.", connections: ["s3", "ec2", "organizations"] }
    ]
  },
  {
    id: "security",
    title: "8. 보안, 자격 증명 및 규정 준수",
    services: [
      { 
        id: "iam", 
        name: "IAM", 
        desc: "AWS 리소스에 대한 접근 권한을 안전하게 제어하는 인증 및 권한 관리 시스템입니다.", 
        techDetails: [
          { title: "Polices & Roles", detail: "최소 권한 원칙(Least Privilege)을 기반으로 JSON 형태의 정책 문서를 통해 세밀한 접근 제어를 수행합니다." },
          { title: "MFA", detail: "다중 인증을 통해 보안 계층을 강화하며, 루트 계정은 일상적인 작업에 사용하지 않는 것이 원칙입니다." }
        ],
        connections: ["organizations", "cognito", "sts"] 
      },
      { 
        id: "kms", 
        name: "KMS", 
        desc: "데이터 암호화에 필요한 암호화 키를 생성, 보관 및 제어하는 중앙 관리 서비스입니다.", 
        techDetails: [
          { title: "CMK Types", detail: "AWS 관리형 키, 고객 관리형 키, 외부 키 등을 지원하며 FIPS 140-2 Level 2 하드웨어로 보호됩니다." },
          { title: "CloudTrail Integration", detail: "키 사용 내역이 CloudTrail에 모두 기록되어 감사(Audit) 요건을 완벽히 충족합니다." }
        ],
        examTips: "'암호화 키의 중앙 관리'와 '감사 기록' 요구 시 단독 정답입니다.",
        connections: ["s3", "ebs", "rds"] 
      },
      { 
        id: "waf-shield", 
        name: "WAF & Shield", 
        desc: "웹 애플리케이션 보안(Layer 7)과 DDoS 방어(Layer 3, 4)를 담당합니다.", 
        techDetails: [
          { title: "WAF Rules", detail: "SQL Injection, XSS 공격 등을 IP, 국가, 요청 패턴 기반으로 실시간 차단합니다." },
          { title: "Shield Advanced", detail: "보다 정교한 DDoS 공격으로부터 보호하고, 공격에 따른 비용 상승분을 보전하는 경제적 혜택을 제공합니다." }
        ],
        examTips: "L7(HTTP/HTTPS) 보안은 WAF, L3/L4 DDoS 방어는 Shield를 선택하세요.",
        connections: ["cloudfront", "alb", "api-gateway"] 
      },
      { id: "cognito", name: "Cognito", desc: "웹/모바일 앱에 회원가입·로그인·소셜 로그인 기능을 빠르게 추가하는 완전 관리형 사용자 인증 서비스입니다.", techDetails: [{ title: "User Pools", detail: "사용자 디렉토리로서 회원가입, 로그인, MFA, 이메일 인증 등 인증 흐름 전체를 관리합니다." }, { title: "Identity Pools", detail: "소셜 로그인(Google, Facebook) 또는 User Pool 인증 후 AWS 리소스에 임시 자격 증명을 부여합니다." }], examTips: "'모바일 앱에 사용자 인증 추가' → Cognito. 'S3에 직접 업로드 권한 위임' → Identity Pool + IAM Role.", connections: ["api-gateway", "appsync", "iam"] },
      { id: "guardduty", name: "GuardDuty", desc: "CloudTrail, VPC Flow Logs, DNS 로그를 기계학습으로 분석하여 위협과 이상 행동을 자동으로 탐지합니다.", techDetails: [{ title: "Threat Detection", detail: "암호화폐 채굴, 자격 증명 도용, 비정상 API 호출 등을 ML 기반으로 자동 탐지합니다." }, { title: "Multi-account 지원", detail: "Organizations와 연계하여 모든 멤버 계정의 보안을 중앙에서 통합 관리합니다." }], examTips: "'계정 내 무단 활동 탐지' 또는 'ML 기반 위협 탐지' → GuardDuty. 에이전트 설치가 불필요합니다.", connections: ["cloudtrail", "organizations", "sns"] },
      { id: "secrets-manager", name: "Secrets Manager", desc: "데이터베이스 자격 증명, API 키 등 민감한 정보를 안전하게 저장하고 자동으로 교체(Rotation)합니다.", techDetails: [{ title: "Automatic Rotation", detail: "RDS, Redshift 등의 비밀번호를 Lambda를 통해 자동으로 주기적으로 교체합니다." }, { title: "KMS Integration", detail: "저장되는 모든 시크릿은 KMS로 암호화됩니다. CloudTrail을 통해 모든 접근이 감사됩니다." }], comparison: { target: "SSM Parameter Store", points: ["Secrets Manager: 자동 교체, 비용 발생, 고급 시크릿 관리", "SSM Parameter Store: 무료(Standard), 단순 설정값 저장, 수동 교체"] }, examTips: "'DB 비밀번호 자동 교체'가 나오면 Secrets Manager가 정답입니다. Parameter Store와 구분 필수.", connections: ["rds", "lambda", "kms"] }
    ]
  }
];
