import type { ImageMetadata } from "astro";

import atlLogisticsCentre from "../assets/images/atl-logistics-centre-kwai-chung.jpg";
import airportCargo from "../assets/images/hong-kong-airport-cargo-buildings.jpg";
import portRoadSouth from "../assets/images/container-port-road-south-stonecutters-bridge.png";
import kwaiTsingWide from "../assets/images/kwai-tsing-container-terminals-2024-1.jpg";
import kwaiTsingOverview from "../assets/images/kwai-tsing-container-terminals-2024-part1.jpg";
import landingPageBg from "../assets/images/landing-page-bg.png";
import mapletreeHub from "../assets/images/mapletree-logistics-hub-tsing-yi.jpg";
import airportCargoColdChainPickup from "../assets/images/enrichment/airport-cargo-cold-chain-pickup.jpg";
import coldChainTeamHandover from "../assets/images/enrichment/cold-chain-team-handover.jpg";
import coldRoomCleaningHygiene from "../assets/images/enrichment/cold-room-cleaning-hygiene.jpg";
import coldRoomPalletStaging from "../assets/images/enrichment/cold-room-pallet-staging-hk.jpg";
import deepFreezeDoorInsulatedPanels from "../assets/images/enrichment/deep-freeze-door-insulated-panels.jpg";
import dispatchPlanningHkMap from "../assets/images/enrichment/dispatch-planning-hk-map.jpg";
import etakColdChainHandoverPallets from "../assets/images/enrichment/etak-cold-chain-handover-pallets.png";
import etakDockFleetExterior from "../assets/images/enrichment/etak-dock-fleet-exterior.png";
import etakRefrigeratedLoadingTeam from "../assets/images/enrichment/etak-refrigerated-loading-team.png";
import etakTruckDockLineup from "../assets/images/enrichment/etak-truck-dock-lineup.png";
import foodServiceColdChainAssortment from "../assets/images/enrichment/food-service-cold-chain-assortment.jpg";
import frozenWarehouseRackingFlow from "../assets/images/enrichment/frozen-warehouse-racking-flow.jpg";
import nightYardCrossDock from "../assets/images/enrichment/night-yard-cross-dock.jpg";
import refrigeratedTruckLoadingBay from "../assets/images/enrichment/refrigerated-truck-loading-bay.jpg";
import temperatureControlMonitoring from "../assets/images/enrichment/temperature-control-monitoring.jpg";
import urbanRefrigeratedDeliveryHongKong from "../assets/images/enrichment/urban-refrigerated-delivery-hong-kong.jpg";
import valueAddedPackingSorting from "../assets/images/enrichment/value-added-packing-sorting.jpg";

export type Lang = "zh" | "en";

export const pageKeys = [
  "warehousing",
  "transportation",
  "value-added-services",
  "facilities",
  "about",
  "contact",
] as const;

export type PageKey = (typeof pageKeys)[number];
export type SitePageKey = PageKey | "home";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface FactItem {
  value: string;
  label: string;
}

export interface ContentSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface FeaturePanel {
  title: string;
  body: string;
  bullets: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface ReasonCard {
  title: string;
  body: string;
}

export interface HeroAction {
  label: string;
  href: string;
}

export interface HomePageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroStats: FactItem[];
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  trustPoints: string[];
  servicesHeading: string;
  servicesLead: string;
  temperatureHeading: string;
  temperatureLead: string;
  temperatureZones: Array<{
    name: string;
    range: string;
    body: string;
  }>;
  capabilityHeading: string;
  capabilityLead: string;
  capabilityPanels: FeaturePanel[];
  processHeading: string;
  processLead: string;
  processSteps: ProcessStep[];
  reasonsHeading: string;
  reasonsLead: string;
  reasonCards: ReasonCard[];
  sectorHeading: string;
  sectorLead: string;
  sectors: string[];
  ctaTitle: string;
  ctaBody: string;
}

export interface ContactCard {
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormLabels {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  note: string;
}

export interface StandardPageContent {
  kind: "standard";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroBody: string;
  heroStats: FactItem[];
  leadTitle: string;
  leadBody: string;
  highlights: string[];
  sections: ContentSection[];
  ctaTitle: string;
  ctaBody: string;
}

export interface ContactPageContent {
  kind: "contact";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroBody: string;
  heroStats: FactItem[];
  leadTitle: string;
  leadBody: string;
  highlights: string[];
  sections: ContentSection[];
  ctaTitle: string;
  ctaBody: string;
  contactCards: ContactCard[];
  mapTitle: string;
  mapBody: string;
  formTitle: string;
  formIntro: string;
  formAction: string;
  formLabels: ContactFormLabels;
}

export type PageContent = StandardPageContent | ContactPageContent;

export interface PageEntry {
  navLabel: LocalizedText;
  cardLabel: LocalizedText;
  image: ImageMetadata;
  zh: PageContent;
  en: PageContent;
}

export interface SiteImageCard {
  image: ImageMetadata;
  title: LocalizedText;
  caption: LocalizedText;
}

export const brand = {
  siteName: "ETAK Logistics",
  legalName: "ETAK Logistics Limited",
  shortName: {
    zh: "意得物流",
    en: "ETAK Logistics",
  },
  tagline: {
    zh: "香港冷鏈倉儲與配送服務",
    en: "Cold-chain warehousing and distribution in Hong Kong",
  },
  phone: "+852 2615 2038",
  fax: "+852 2615 9087",
  email: "info@etaklogistics.com",
  address: {
    zh: "香港新界葵涌 3 號貨櫃碼頭 亞洲貨櫃物流中心 A 座 1 樓東翼 1013-1015 室",
    en: "1013-1015, East Wing, 1/F, ATL Logistics Centre A, Berth 3, Container Port Road, Kwai Chung, New Territories, Hong Kong",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=ATL%20Logistics%20Centre%20A%20Berth%203%20Container%20Port%20Road%20Kwai%20Chung%20Hong%20Kong&output=embed",
};

export const navigation = pageKeys.map((key) => ({ key }));

export const pageImages = {
  home: landingPageBg,
  warehousing: atlLogisticsCentre,
  transportation: kwaiTsingOverview,
  "value-added-services": airportCargo,
  facilities: mapletreeHub,
  about: kwaiTsingWide,
  contact: portRoadSouth,
} satisfies Record<SitePageKey, ImageMetadata>;

export const operationsGallery = [
  {
    image: coldRoomPalletStaging,
    title: {
      zh: "冷房收貨與暫存",
      en: "Cold-room receiving",
    },
    caption: {
      zh: "白色隔熱庫房、黃色安全線與托盤暫存，配合日常冷鏈入庫節奏。",
      en: "Insulated cold-room staging with safety-marked pallet flow for daily inbound handling.",
    },
  },
  {
    image: frozenWarehouseRackingFlow,
    title: {
      zh: "高架冷庫貨架",
      en: "Frozen racking flow",
    },
    caption: {
      zh: "高架貨架、叉車通道與包裝托盤，讓冷庫容量與動線更清晰。",
      en: "Tall racking, forklift lanes, and wrapped pallets support disciplined freezer movement.",
    },
  },
  {
    image: refrigeratedTruckLoadingBay,
    title: {
      zh: "冷凍車裝卸",
      en: "Refrigerated truck loading",
    },
    caption: {
      zh: "由月台銜接冷凍車，縮短貨物在交收環節的溫度暴露時間。",
      en: "Dock-to-truck loading keeps temperature-sensitive cargo moving with fewer handover gaps.",
    },
  },
  {
    image: temperatureControlMonitoring,
    title: {
      zh: "溫度監控",
      en: "Temperature control",
    },
    caption: {
      zh: "現場人員檢查溫度設備，確保倉內處理維持穩定溫控。",
      en: "On-site checks help keep warehouse handling within the required temperature conditions.",
    },
  },
  {
    image: airportCargoColdChainPickup,
    title: {
      zh: "機場冷鏈提貨",
      en: "Airport cold-chain pickup",
    },
    caption: {
      zh: "由機場貨運區接入冷凍車，支援進口食品與急件交收。",
      en: "Airport pickup connects imported cargo directly into refrigerated transfer.",
    },
  },
  {
    image: foodServiceColdChainAssortment,
    title: {
      zh: "食品冷鏈處理",
      en: "Food-service handling",
    },
    caption: {
      zh: "針對餐飲、零售與酒店供應鏈的冷藏、點算與分貨場景。",
      en: "Food-service cartons, chilled crates, and stock checks for retail and hospitality flow.",
    },
  },
  {
    image: valueAddedPackingSorting,
    title: {
      zh: "增值分貨與包裝",
      en: "Value-added sorting",
    },
    caption: {
      zh: "分貨、包裝與訂單處理，補足倉儲與配送之間的操作細節。",
      en: "Sorting and packing support bridges storage, order handling, and dispatch.",
    },
  },
  {
    image: coldRoomCleaningHygiene,
    title: {
      zh: "清潔與衛生流程",
      en: "Hygiene discipline",
    },
    caption: {
      zh: "以清潔地台、設備檢查與衛生流程支援食品冷鏈要求。",
      en: "Clean floors, equipment checks, and hygiene routines support food logistics standards.",
    },
  },
  {
    image: dispatchPlanningHkMap,
    title: {
      zh: "調度與路線規劃",
      en: "Dispatch planning",
    },
    caption: {
      zh: "把倉內交收、車隊與全港路線安排連成同一條作業線。",
      en: "Route planning links warehouse handover, fleet movement, and Hong Kong delivery timing.",
    },
  },
  {
    image: urbanRefrigeratedDeliveryHongKong,
    title: {
      zh: "市區冷凍配送",
      en: "Urban refrigerated delivery",
    },
    caption: {
      zh: "冷凍車進入市區收貨口，支援酒店、餐飲與零售補貨。",
      en: "Refrigerated delivery into city loading points for hotels, food service, and retail.",
    },
  },
  {
    image: deepFreezeDoorInsulatedPanels,
    title: {
      zh: "低溫庫門與隔熱",
      en: "Freezer infrastructure",
    },
    caption: {
      zh: "庫門、隔熱板與防撞設施，支撐低溫貨物的安全進出。",
      en: "Insulated doors, safety rails, and freezer staging protect deep-cold flow.",
    },
  },
  {
    image: nightYardCrossDock,
    title: {
      zh: "夜間出貨調度",
      en: "Night dispatch cross-dock",
    },
    caption: {
      zh: "夜間月台、托盤與冷凍車同步運作，支援高節奏出貨安排。",
      en: "Night dock operations keep refrigerated trucks, pallets, and teams moving in sync.",
    },
  },
  {
    image: coldChainTeamHandover,
    title: {
      zh: "冷鏈團隊交接",
      en: "Cold-chain team handover",
    },
    caption: {
      zh: "團隊在交收點核對貨件與流程，讓入庫、出庫及配送安排清楚銜接。",
      en: "Team handover checks help align receiving, dispatch, and delivery work.",
    },
  },
  {
    image: etakDockFleetExterior,
    title: {
      zh: "ETAK 月台與車隊",
      en: "ETAK dock and fleet",
    },
    caption: {
      zh: "公司月台、冷凍車與倉庫入口集中在同一營運場景，方便安排收貨與出車。",
      en: "Dock access, refrigerated trucks, and warehouse entry points support coordinated dispatch.",
    },
  },
  {
    image: etakTruckDockLineup,
    title: {
      zh: "月台冷凍車隊",
      en: "Refrigerated fleet at docks",
    },
    caption: {
      zh: "多架冷凍車停靠月台，配合分批裝車與香港本地配送時段。",
      en: "Refrigerated trucks staged at numbered docks support scheduled loading and route departures.",
    },
  },
  {
    image: etakRefrigeratedLoadingTeam,
    title: {
      zh: "冷鏈月台裝車",
      en: "Cold-chain dock loading",
    },
    caption: {
      zh: "月台人員、叉車與托盤貨物同步作業，減少冷鏈交接過程中的停留時間。",
      en: "Dock teams, forklifts, and palletized cargo keep refrigerated loading moving efficiently.",
    },
  },
  {
    image: etakColdChainHandoverPallets,
    title: {
      zh: "托盤交收與覆核",
      en: "Pallet handover checks",
    },
    caption: {
      zh: "貨物在車尾完成點算與交接，支援訂單處理、補貨與配送前覆核。",
      en: "Cargo checks at the truck support order handling, replenishment, and pre-delivery review.",
    },
  },
] satisfies SiteImageCard[];

const galleryScenes = {
  coldRoomReceiving: operationsGallery[0],
  frozenRackingFlow: operationsGallery[1],
  refrigeratedTruckLoading: operationsGallery[2],
  temperatureControl: operationsGallery[3],
  airportPickup: operationsGallery[4],
  foodServiceHandling: operationsGallery[5],
  valueAddedSorting: operationsGallery[6],
  hygieneDiscipline: operationsGallery[7],
  dispatchPlanning: operationsGallery[8],
  urbanDelivery: operationsGallery[9],
  freezerInfrastructure: operationsGallery[10],
  nightCrossDock: operationsGallery[11],
  teamHandover: operationsGallery[12],
  dockFleetExterior: operationsGallery[13],
  truckDockLineup: operationsGallery[14],
  refrigeratedLoadingTeam: operationsGallery[15],
  palletHandoverChecks: operationsGallery[16],
} satisfies Record<string, SiteImageCard>;

export const pageGalleryImages = {
  warehousing: [
    galleryScenes.coldRoomReceiving,
    galleryScenes.frozenRackingFlow,
    galleryScenes.freezerInfrastructure,
    galleryScenes.teamHandover,
  ],
  transportation: [
    galleryScenes.truckDockLineup,
    galleryScenes.refrigeratedTruckLoading,
    galleryScenes.urbanDelivery,
    galleryScenes.nightCrossDock,
  ],
  "value-added-services": [
    galleryScenes.airportPickup,
    galleryScenes.refrigeratedLoadingTeam,
    galleryScenes.palletHandoverChecks,
    galleryScenes.valueAddedSorting,
  ],
  facilities: [
    galleryScenes.temperatureControl,
    galleryScenes.freezerInfrastructure,
    galleryScenes.frozenRackingFlow,
    galleryScenes.hygieneDiscipline,
  ],
  about: [
    galleryScenes.dockFleetExterior,
    galleryScenes.teamHandover,
    galleryScenes.dispatchPlanning,
    galleryScenes.foodServiceHandling,
  ],
  contact: [
    galleryScenes.dispatchPlanning,
    galleryScenes.dockFleetExterior,
    galleryScenes.urbanDelivery,
    galleryScenes.airportPickup,
  ],
} satisfies Record<PageKey, SiteImageCard[]>;

export const homeGalleryImages = [
  galleryScenes.dockFleetExterior,
  galleryScenes.coldRoomReceiving,
  galleryScenes.truckDockLineup,
  galleryScenes.refrigeratedLoadingTeam,
  galleryScenes.airportPickup,
  galleryScenes.temperatureControl,
] satisfies SiteImageCard[];

export const homeContent: Record<Lang, HomePageContent> = {
  zh: {
    metaTitle: "意得物流 | 香港冷鏈物流與倉儲配送服務",
    metaDescription:
      "意得物流位於葵涌貨櫃港核心，提供冷凍倉儲、冷凍運輸、機場提貨及增值物流支援，服務香港食品與餐飲供應鏈。",
    eyebrow: "Hong Kong Cold Chain Logistics",
    title: "立足葵涌貨櫃港核心的冷鏈物流方案",
    intro:
      "意得物流以香港葵涌為營運核心，結合冷凍及溫控倉儲、冷凍車配送、機場提貨與訂單支援服務，為進口食品、零售、酒店及餐飲客戶提供穩定的一站式冷鏈物流配套。",
    heroStats: [
      { value: "30,000", label: "平方呎冷凍及溫控配送中心" },
      { value: "-18 C 至 22 C", label: "多溫區儲存與處理能力" },
      { value: "葵涌", label: "連接貨櫃碼頭、機場及市區" },
    ],
    primaryAction: { label: "查詢報價", href: "/contact/" },
    secondaryAction: { label: "查看服務", href: "/warehousing/" },
    trustPoints: [
      "冷凍、冷藏及恆溫多溫區操作",
      "GPS 監控冷凍車隊",
      "機場提貨、清關及配送支援",
      "位處葵涌物流走廊，交通高效",
    ],
    servicesHeading: "核心服務範圍",
    servicesLead:
      "ETAK 提供冷凍倉儲、冷鏈配送、溫控管理與營運支援，協助企業客戶處理日常香港冷鏈物流需求。",
    temperatureHeading: "溫控能力",
    temperatureLead:
      "以不同溫區應對急凍、冷藏及恆溫產品，配合庫內處理與配送流程，降低貨品在交收過程中的溫度風險。",
    temperatureZones: [
      {
        name: "急凍",
        range: "-18 C",
        body: "適合雪糕、凍肉、海產及需要低溫保存的冷凍食品。",
      },
      {
        name: "冷藏",
        range: "0 C - 4 C",
        body: "適用於冰鮮、乳製品、即食配料及其他冷藏食品。",
      },
      {
        name: "恆溫",
        range: "17 C - 22 C",
        body: "為需要受控環境但不需急凍處理的貨品提供穩定空間。",
      },
    ],
    capabilityHeading: "由倉庫到配送的整體能力",
    capabilityLead:
      "ETAK 的價值不止於存貨位置，而在於如何把入庫、儲存、點算、調度、提貨與配送連成可執行的日常流程。",
    capabilityPanels: [
      {
        title: "倉儲與基礎設施",
        body: "營運中心位於亞洲貨櫃物流中心，方便接駁機場、貨櫃碼頭及主要商業區，適合處理日常入庫、分貨與出貨安排。",
        bullets: [
          "冷凍及溫控倉儲配置",
          "多溫區處理與分貨",
          "面向進口食品與零售供應鏈",
        ],
      },
      {
        title: "配送與營運支援",
        body: "以冷凍車全程配送，配合車隊定位、貨物交收及訂單處理，讓客戶更清楚掌握日常出貨安排。",
        bullets: [
          "冷凍車全程配送",
          "GPS 與溫度監控",
          "可配合機場提貨及緊急出貨需求",
        ],
      },
    ],
    processHeading: "合作流程",
    processLead:
      "以四個步驟整理合作流程，方便採購、營運及供應鏈團隊快速掌握安排。",
    processSteps: [
      {
        number: "01",
        title: "需求確認",
        body: "確認貨品溫區、提貨地點、交收時間及入庫或配送安排。",
      },
      {
        number: "02",
        title: "溫控準備",
        body: "按貨品需要安排合適溫區、車輛、文件及人手。",
      },
      {
        number: "03",
        title: "處理與調度",
        body: "完成提貨、點算、分貨、庫內安排及冷凍車配送。",
      },
      {
        number: "04",
        title: "交付與回報",
        body: "完成交收後提供所需報表與後續訂單支援。",
      },
    ],
    reasonsHeading: "選擇 ETAK 的原因",
    reasonsLead:
      "企業客戶選擇冷鏈夥伴時，重點在於地點、設備、流程紀律與營運應對能力是否能配合日常交付要求。",
    reasonCards: [
      {
        title: "葵涌核心位置",
        body: "接近貨櫃碼頭與主要幹道，方便連接機場、口岸及市區配送。",
      },
      {
        title: "冷鏈操作專注",
        body: "以冷凍、冷藏及恆溫食品物流為主軸，而非泛用型倉儲服務。",
      },
      {
        title: "倉配一體",
        body: "由入庫、儲存、訂單處理到冷凍車交付，流程更完整。",
      },
      {
        title: "增值支援",
        body: "可配合機場提貨、文件處理、報表與貨物管理需求。",
      },
    ],
    sectorHeading: "主要服務對象",
    sectorLead: "服務食品進口、分銷、零售、酒店與餐飲等企業客戶。",
    sectors: ["食品進口商", "分銷商", "超市與零售鏈", "酒店與餐飲集團", "會所及餐飲供應商"],
    ctaTitle: "需要香港冷鏈物流支援？",
    ctaBody:
      "如你正在評估冷凍倉儲、冷凍配送或機場提貨安排，可直接聯絡 ETAK 團隊查詢合適配套。",
  },
  en: {
    metaTitle: "ETAK Logistics | Cold-Chain Warehousing and Distribution in Hong Kong",
    metaDescription:
      "ETAK Logistics operates from Kwai Chung, providing refrigerated warehousing, temperature-controlled transport, airport pickup, and value-added cold-chain support across Hong Kong.",
    eyebrow: "Hong Kong Cold Chain Logistics",
    title: "Cold-chain logistics built around Hong Kong's busiest freight corridor",
    intro:
      "ETAK Logistics combines temperature-controlled warehousing, refrigerated transport, airport pickup, and order support into a practical operating model for importers, distributors, retailers, hotels, and food-service businesses in Hong Kong.",
    heroStats: [
      { value: "30,000", label: "sq ft refrigerated and controlled warehouse space" },
      { value: "-18 C to 22 C", label: "multi-zone storage and handling capability" },
      { value: "Kwai Chung", label: "connected to terminals, airport, and urban delivery routes" },
    ],
    primaryAction: { label: "Request a Quote", href: "/en/contact/" },
    secondaryAction: { label: "Explore Services", href: "/en/warehousing/" },
    trustPoints: [
      "Frozen, chilled, and controlled-temperature handling",
      "GPS-monitored refrigerated fleet",
      "Airport pickup, clearance support, and local distribution",
      "Located in the Kwai Chung logistics corridor",
    ],
    servicesHeading: "Operational scope",
    servicesLead:
      "ETAK provides refrigerated warehousing, cold-chain distribution, temperature control, and operational support for Hong Kong business customers.",
    temperatureHeading: "Temperature capability",
    temperatureLead:
      "Different temperature zones support frozen, chilled, and controlled goods while reducing handling risk across storage, transfer, and delivery.",
    temperatureZones: [
      {
        name: "Frozen",
        range: "-18 C",
        body: "For ice cream, frozen meat, seafood, and other goods that require deep-cold storage.",
      },
      {
        name: "Chilled",
        range: "0 C - 4 C",
        body: "Suitable for fresh products, dairy, prepared ingredients, and short-life cold-chain inventory.",
      },
      {
        name: "Controlled",
        range: "17 C - 22 C",
        body: "For products that need a stable temperature-managed environment without frozen storage.",
      },
    ],
    capabilityHeading: "Integrated warehousing and distribution",
    capabilityLead:
      "ETAK connects inbound handling, storage, stock checking, dispatch, airport pickup, and local delivery into one coordinated operating process.",
    capabilityPanels: [
      {
        title: "Warehouse infrastructure",
        body: "The operation is based in ATL Logistics Centre in Kwai Chung, giving ETAK direct access to the container terminal district, airport routes, and major delivery corridors.",
        bullets: [
          "Refrigerated and controlled warehouse space",
          "Multi-zone handling and sorting",
          "Set up for imported food and local distribution flow",
        ],
      },
      {
        title: "Fleet and operational support",
        body: "Refrigerated vehicles, GPS-assisted monitoring, cargo handover support, and dispatch coordination keep outbound movement aligned with customer schedules.",
        bullets: [
          "End-to-end refrigerated delivery",
          "GPS and temperature monitoring",
          "Support for airport pickup and urgent dispatch requirements",
        ],
      },
    ],
    processHeading: "Working process",
    processLead:
      "A four-step service flow helps procurement, operations, and supply-chain teams assess requirements and move into execution efficiently.",
    processSteps: [
      {
        number: "01",
        title: "Requirement review",
        body: "Confirm temperature range, pickup point, delivery schedule, and whether the job includes storage or direct distribution.",
      },
      {
        number: "02",
        title: "Temperature preparation",
        body: "Assign the right temperature zone, vehicle, documents, and operational resources.",
      },
      {
        number: "03",
        title: "Handling and dispatch",
        body: "Process pickup, checking, warehouse handling, and refrigerated delivery to the required destination.",
      },
      {
        number: "04",
        title: "Delivery and reporting",
        body: "Complete handover and provide the reports or order follow-up required by the customer.",
      },
    ],
    reasonsHeading: "Why ETAK",
    reasonsLead:
      "For B2B buyers, the real questions are operational: location, equipment, handling discipline, and how well a team can execute under time and temperature constraints.",
    reasonCards: [
      {
        title: "Kwai Chung location",
        body: "Close to container terminals and major road links for airport, border, and city distribution access.",
      },
      {
        title: "Cold-chain focus",
        body: "Focused on refrigerated warehousing and transport for temperature-sensitive business cargo.",
      },
      {
        title: "Integrated flow",
        body: "Inbound handling, storage, order processing, and delivery work as one operating chain.",
      },
      {
        title: "Value-added support",
        body: "Airport pickup, documents, reporting, and cargo management extend beyond basic transport.",
      },
    ],
    sectorHeading: "Primary sectors served",
    sectorLead: "Serving food importers, distributors, retailers, hotels, restaurants, and other business customers in Hong Kong.",
    sectors: ["Food importers", "Distributors", "Retail and supermarket chains", "Hotels and restaurant groups", "Clubhouses and catering buyers"],
    ctaTitle: "Need cold-chain support in Hong Kong?",
    ctaBody:
      "If you are reviewing refrigerated warehousing, local cold-chain delivery, or airport pickup support, contact ETAK to discuss the right operating setup.",
  },
};

export const pages: Record<PageKey, PageEntry> = {
  warehousing: {
    navLabel: { zh: "倉儲服務", en: "Warehousing" },
    cardLabel: { zh: "冷凍及溫控倉儲", en: "Refrigerated Warehousing" },
    image: atlLogisticsCentre,
    zh: {
      kind: "standard",
      metaTitle: "倉儲服務 | 意得物流",
      metaDescription:
        "ETAK 於葵涌 ATL Logistics Centre 提供 30,000 平方呎冷凍及溫控倉儲，支援急凍、冷藏及恆溫貨品的入庫、存放、分貨及出貨安排。",
      eyebrow: "Warehousing",
      title: "葵涌冷凍及溫控配送中心",
      summary: "30,000 平方呎多溫區倉儲空間，支援入庫、分貨、暫存及出貨前處理。",
      heroBody:
        "營運中心位於 ATL Logistics Centre，連接葵涌貨櫃碼頭、機場路線及市區配送幹道，適合處理進口食品、分銷補貨及本地配送前的倉內作業。",
      heroStats: [
        { value: "30,000 平方呎", label: "冷凍及溫控配送中心" },
        { value: "3 zones", label: "急凍、冷藏及恆溫儲存" },
        { value: "葵涌", label: "鄰近碼頭、機場及市區路線" },
      ],
      leadTitle: "把倉儲能力直接接上日常出貨節奏",
      leadBody:
        "重點不只在倉位，而在於位置、溫區、處理流程與配送銜接是否足以支撐日常補貨、分貨及冷鏈交收。",
      highlights: [
        "位於葵涌 ATL Logistics Centre",
        "多溫區配置對應不同產品條件",
        "倉內處理可直接銜接本地配送",
      ],
      sections: [
        {
          title: "物流走廊位置",
          body: "葵涌位置有利連接碼頭、機場及市區配送路線，當貨品需要由入庫快速轉入本地交收時，位置本身就是效率的一部分。",
        },
        {
          title: "溫區結構",
          body: "急凍、冷藏及恆溫區分開處理，讓不同產品條件有更清晰的存放與作業安排，減少跨溫區風險。",
          bullets: ["急凍: -18 C", "冷藏: 0 C - 4 C", "恆溫: 17 C - 22 C"],
        },
        {
          title: "出貨前處理",
          body: "除存放外，亦可配合點算、分貨、揀貨、暫存及冷凍車交接，讓倉內作業直接服務出貨節奏。",
        },
      ],
      ctaTitle: "需要葵涌多溫區倉儲支援？",
      ctaBody: "如你正評估香港冷鏈倉儲、分貨或配送前處理安排，可與 ETAK 討論合適的倉配組合。",
    },
    en: {
      kind: "standard",
      metaTitle: "Warehousing | ETAK Logistics",
      metaDescription:
        "ETAK operates 30,000 sq ft of refrigerated and controlled warehouse space at ATL Logistics Centre in Kwai Chung for frozen, chilled, and controlled goods.",
      eyebrow: "Warehousing",
      title: "A refrigerated distribution centre in Kwai Chung",
      summary: "30,000 sq ft of multi-zone warehouse space for intake, sorting, short-term storage, and dispatch preparation.",
      heroBody:
        "Based in ATL Logistics Centre, the warehouse links Kwai Chung terminal traffic, airport routes, and city distribution corridors for imported food, replenishment stock, and local dispatch preparation.",
      heroStats: [
        { value: "30,000 sq ft", label: "refrigerated and controlled warehouse capacity" },
        { value: "3 zones", label: "frozen, chilled, and controlled storage" },
        { value: "Kwai Chung", label: "close to terminals, airport routes, and city access" },
      ],
      leadTitle: "Warehouse capacity tied directly to outbound flow",
      leadBody:
        "The service combines location, temperature zoning, handling flow, and delivery handover to support daily replenishment and cold-chain movement.",
      highlights: [
        "Based in ATL Logistics Centre, Kwai Chung",
        "Multi-zone storage aligned to product conditions",
        "Warehouse handling connected to local dispatch",
      ],
      sections: [
        {
          title: "Freight-corridor location",
          body: "Kwai Chung links terminal activity, airport routes, and urban delivery corridors, which matters when stock needs to move quickly from intake to local handover.",
        },
        {
          title: "Temperature-zone structure",
          body: "Dedicated frozen, chilled, and controlled areas let ETAK separate handling requirements and reduce cross-temperature risk inside the warehouse flow.",
          bullets: ["Frozen: -18 C", "Chilled: 0 C - 4 C", "Controlled: 17 C - 22 C"],
        },
        {
          title: "Dispatch-ready handling",
          body: "The facility supports counting, sorting, staging, and refrigerated-fleet handover so warehouse work feeds directly into outbound delivery.",
        },
      ],
      ctaTitle: "Need multi-zone warehouse support in Kwai Chung?",
      ctaBody: "Contact ETAK to review the right Hong Kong warehousing, sorting, and dispatch setup for your products and delivery profile.",
    },
  },
  transportation: {
    navLabel: { zh: "運輸服務", en: "Transportation" },
    cardLabel: { zh: "冷凍車配送", en: "Refrigerated Delivery" },
    image: kwaiTsingOverview,
    zh: {
      kind: "standard",
      metaTitle: "運輸服務 | 意得物流",
      metaDescription:
        "ETAK 以冷凍車處理急凍、冷藏及恆溫貨品配送，支援香港零售、餐飲、酒店及其他企業客戶的日常冷鏈交收。",
      eyebrow: "Transportation",
      title: "冷凍車全程配送服務",
      summary: "冷凍車隊支援香港日常冷鏈配送，涵蓋急凍、冷藏及恆溫貨品。",
      heroBody:
        "服務重點在於溫控、交收節奏與配送可視性，適合需要由倉庫、機場或指定交收點進入香港配送網絡的 B2B 客戶。",
      heroStats: [
        { value: "End-to-end", label: "冷凍車全程配送" },
        { value: "GPS", label: "追蹤車隊位置及配送狀態" },
        { value: "-18 C 至 22 C", label: "配合不同溫區貨品要求" },
      ],
      leadTitle: "按時間與溫度要求安排配送",
      leadBody:
        "ETAK 協調車隊、溫區、交收窗口及回報節奏，讓日常出貨安排更穩定、更容易掌握。",
      highlights: [
        "急凍、冷藏及恆溫配送",
        "GPS 與溫度監控支援交收可視性",
        "可銜接倉儲及機場提貨流程",
      ],
      sections: [
        {
          title: "多溫區配送",
          body: "車隊可按產品條件安排對應溫區，減少貨品由倉內到交收點之間的溫度與時間斷層。",
          bullets: ["急凍: -18 C", "冰鮮: 0 C - 4 C", "恆溫: 17 C - 22 C"],
        },
        {
          title: "車隊監控與交收",
          body: "GPS、車廂監控與交收回報有助掌握車隊位置、配送進度及貨品在途狀況。",
        },
        {
          title: "主要配送場景",
          body: "常見服務對象包括超市、零售總倉、酒店、餐廳及會所等對冷鏈交收有明確要求的商業場景。",
        },
      ],
      ctaTitle: "需要本地冷凍配送安排？",
      ctaBody: "如你的產品需要由倉庫、機場或指定交收點進入香港配送網絡，可與 ETAK 討論合適的冷鏈配送安排。",
    },
    en: {
      kind: "standard",
      metaTitle: "Transportation | ETAK Logistics",
      metaDescription:
        "ETAK provides refrigerated transport for frozen, chilled, and controlled goods across Hong Kong, including warehouse handover and airport pickup support.",
      eyebrow: "Transportation",
      title: "Refrigerated delivery across Hong Kong",
      summary: "Refrigerated fleet coverage for daily frozen, chilled, and controlled delivery across Hong Kong.",
      heroBody:
        "The service is built around temperature control, handover timing, and delivery visibility for B2B buyers moving goods from warehouse, airport, or nominated pickup point into Hong Kong routes.",
      heroStats: [
        { value: "End-to-end", label: "refrigerated transport throughout the journey" },
        { value: "GPS", label: "fleet location and delivery-status monitoring" },
        { value: "-18 C to 22 C", label: "frozen, chilled, and controlled goods supported" },
      ],
      leadTitle: "Delivery planned around time and temperature",
      leadBody:
        "Reliable cold-chain transport depends on vehicle availability, temperature condition, handover timing, and clear status visibility throughout daily dispatch.",
      highlights: [
        "Frozen, chilled, and controlled delivery coverage",
        "GPS and temperature monitoring for handover visibility",
        "Connected to warehouse and airport pickup workflows",
      ],
      sections: [
        {
          title: "Multi-temperature delivery",
          body: "The fleet is arranged around product conditions so goods can move from warehouse or pickup point to destination without breaking the cold chain.",
          bullets: ["Frozen: -18 C", "Chilled: 0 C - 4 C", "Controlled: 17 C - 22 C"],
        },
        {
          title: "Fleet monitoring and handover",
          body: "GPS, vehicle-condition monitoring, and handover reporting help ETAK track route progress and transport conditions during the journey.",
        },
        {
          title: "Core delivery scenarios",
          body: "Typical destinations include supermarkets, retail depots, hotels, restaurants, clubhouses, and other business sites that need disciplined cold-chain delivery.",
        },
      ],
      ctaTitle: "Need local cold-chain delivery support?",
      ctaBody: "If your products need to move from warehouse, airport, or handover point into a Hong Kong route, ETAK can review the right dispatch setup.",
    },
  },
  "value-added-services": {
    navLabel: { zh: "增值服務", en: "Value-Added Services" },
    cardLabel: { zh: "機場提貨與營運支援", en: "Airport Pickup and Support" },
    image: airportCargo,
    zh: {
      kind: "standard",
      metaTitle: "增值服務 | 意得物流",
      metaDescription:
        "ETAK 提供機場提貨、文件處理、訂單支援、包裝分貨及營運報表，補足冷鏈流程中的交接與後勤工作。",
      eyebrow: "Value-Added Services",
      title: "補足日常營運的增值物流支援",
      summary: "機場提貨、文件、訂單、包裝與報表支援，補足日常冷鏈交接與後勤流程。",
      heroBody:
        "ETAK 將交接、文件、改單與回報支援納入同一套日常流程，減少倉儲、提貨與配送之間的資訊斷層。",
      heroStats: [
        { value: "Airport pickup", label: "機場提貨與相關文件支援" },
        { value: "Order handling", label: "電郵、WhatsApp、Fax 下單支援" },
        { value: "Reporting", label: "收貨、庫存與出貨報表" },
      ],
      leadTitle: "把交接與後勤工作納入同一條作業線",
      leadBody:
        "這類支援的價值，在於減少倉外與運輸之間的資訊斷層，讓提貨、文件、訂單變更及報表都能跟上出貨節奏。",
      highlights: [
        "可配合機場提貨與相關文件手續",
        "提供貨物點算、退貨及銷毀安排",
        "可按客戶需要支援改單與即時發貨",
      ],
      sections: [
        {
          title: "機場提貨",
          body: "可安排冷凍車前往機場提貨，並配合航班資料、文件準備、登記及相關交接流程。",
        },
        {
          title: "貨物與訂單管理",
          body: "包括貨物點算、檢查、異常通知、退貨安排、電子下單、改單及緊急出貨支援。",
        },
        {
          title: "包裝與報表",
          body: "可支援重貼標籤、包裝、分貨及不同類型營運報表，讓客戶更容易掌握日常物流與交收狀況。",
        },
      ],
      ctaTitle: "需要機場提貨或後勤支援？",
      ctaBody: "ETAK 可按你的供應鏈流程評估是否需要加入提貨、文件、報表或額外處理安排。",
    },
    en: {
      kind: "standard",
      metaTitle: "Value-Added Services | ETAK Logistics",
      metaDescription:
        "ETAK supports airport pickup, document handling, order support, packing, and reporting as part of a practical cold-chain operating flow.",
      eyebrow: "Value-Added Services",
      title: "Operational support beyond storage and transport",
      summary: "Airport pickup, documents, order handling, packing, and reporting support built around daily cold-chain operations.",
      heroBody:
        "For temperature-sensitive supply chains, delays often happen around handovers, documents, order changes, and reporting. ETAK handles those tasks as part of one workable operating flow.",
      heroStats: [
        { value: "Airport pickup", label: "pickup and document handling support" },
        { value: "Order handling", label: "email, WhatsApp, and fax order support" },
        { value: "Reporting", label: "receiving, stock, and outbound reporting" },
      ],
      leadTitle: "Support work that keeps the shipment flow moving",
      leadBody:
        "These support services reduce gaps between pickup, documents, warehouse handling, order amendments, and outbound follow-up.",
      highlights: [
        "Support for airport pickup and related paperwork",
        "Cargo checking, returns, and destruction arrangements",
        "Order changes and urgent dispatch support",
      ],
      sections: [
        {
          title: "Airport pickup",
          body: "ETAK can arrange refrigerated airport pickup with flight coordination, document preparation, airport registration, and related handover steps.",
        },
        {
          title: "Cargo and order management",
          body: "Cargo counting, inspection, abnormality notification, return arrangements, order amendments, and urgent dispatch support help customers keep the shipment flow under control.",
        },
        {
          title: "Packaging and reporting",
          body: "Relabeling, packing support, and operational reports make recurring logistics work easier to manage.",
        },
      ],
      ctaTitle: "Need airport or operational support around the shipment flow?",
      ctaBody: "ETAK can review whether your workflow needs pickup support, document handling, reporting, or extra warehouse-side processing.",
    },
  },
  facilities: {
    navLabel: { zh: "設施與設備", en: "Facilities" },
    cardLabel: { zh: "設施與溫控設備", en: "Facilities and Control Systems" },
    image: mapletreeHub,
    zh: {
      kind: "standard",
      metaTitle: "設施與設備 | 意得物流",
      metaDescription:
        "涵蓋低溫倉、製冷系統、後備設備、GPS 車隊系統、溫度感應器及車輛清潔安排。",
      eyebrow: "Facilities and Equipment",
      title: "支撐冷鏈質素的設施與監控系統",
      summary: "多溫區倉儲、製冷與後備系統、GPS 車隊監控及車輛清潔制度，共同支援穩定冷鏈操作。",
      heroBody:
        "ETAK 以多溫區倉儲、溫度監控、後備設備與車輛衛生管理，支援食品及溫控貨品的日常收發與配送。",
      heroStats: [
        { value: "-18 C 至 22 C", label: "多溫區倉儲範圍" },
        { value: "24/7", label: "溫度監控安排" },
        { value: "GPS + sensors", label: "車隊定位與車廂感應" },
      ],
      leadTitle: "多溫區設施配合監控與後備安排",
      leadBody:
        "低溫空間、製冷系統、監控記錄及衛生管理一起運作，減少倉儲與配送過程中的溫度風險。",
      highlights: [
        "低溫倉可處理凍肉、雪糕及海產等產品",
        "製冷系統配合後備機組與溫度監控",
        "冷凍車配置獨立冷凍機與車廂感應器",
      ],
      sections: [
        {
          title: "低溫倉與隔熱配置",
          body: "多溫區倉儲範圍涵蓋 -18 C 至 22 C，配合隔熱物料與設施，處理不同類型冷凍、冷藏及恆溫食品。",
        },
        {
          title: "製冷與後備安排",
          body: "製冷系統結合定期檢查、維修及後備機組，減少因外來因素影響貨品質素的風險。",
        },
        {
          title: "GPS、感應器與衛生管理",
          body: "GPS 車隊系統與車廂溫度感應器有助掌握運輸狀況，而車輛定期清洗則反映食品配送對衛生要求的重視。",
        },
      ],
      ctaTitle: "需要更穩定的溫控與設備配套？",
      ctaBody: "如你的產品對儲存與運輸條件要求較高，可與 ETAK 討論現場與車隊配置。",
    },
    en: {
      kind: "standard",
      metaTitle: "Facilities | ETAK Logistics",
      metaDescription:
        "ETAK cold-chain facilities include multi-zone storage, refrigeration systems, backup units, GPS fleet controls, temperature sensors, and vehicle hygiene routines.",
      eyebrow: "Facilities and Equipment",
      title: "Facilities and control systems that support cold-chain quality",
      summary: "Multi-zone storage, refrigeration and backup equipment, GPS monitoring, sensors, and cleaning routines support stable cold-chain operations.",
      heroBody:
        "ETAK combines multi-zone storage, temperature monitoring, backup equipment, and vehicle hygiene routines for daily food and temperature-sensitive cargo movement.",
      heroStats: [
        { value: "-18 C to 22 C", label: "multi-zone storage range" },
        { value: "24/7", label: "temperature monitoring" },
        { value: "GPS + sensors", label: "fleet tracking and cargo-temperature monitoring" },
      ],
      leadTitle: "Multi-zone facilities backed by monitoring and contingency support",
      leadBody:
        "Storage range, refrigeration support, monitoring records, and hygiene routines work together to reduce temperature risk across handling and delivery.",
      highlights: [
        "Low-temperature warehouse for frozen product categories",
        "Refrigeration systems supported by backup units and monitoring",
        "Independent freezers and temperature sensors in refrigerated vehicles",
      ],
      sections: [
        {
          title: "Low-temperature warehouse and insulation",
          body: "The multi-zone storage setup covers -18 C to 22 C across frozen, chilled, and controlled-temperature goods.",
        },
        {
          title: "Refrigeration and backup support",
          body: "Regular inspection, insulation maintenance, and backup refrigeration units help protect product quality during daily operations.",
        },
        {
          title: "GPS, sensors, and hygiene",
          body: "Fleet GPS, in-vehicle temperature sensors, and scheduled vehicle cleaning support disciplined food-grade transport operations.",
        },
      ],
      ctaTitle: "Need tighter temperature-control standards?",
      ctaBody: "Speak with ETAK if your product category requires tighter control over storage, transport conditions, and handling discipline.",
    },
  },
  about: {
    navLabel: { zh: "關於意得", en: "About" },
    cardLabel: { zh: "公司與定位", en: "Company Profile" },
    image: portRoadSouth,
    zh: {
      kind: "standard",
      metaTitle: "關於意得 | 意得物流",
      metaDescription:
        "意得物流以葵涌為營運核心，提供香港冷鏈物流、倉儲、配送及營運支援。",
      eyebrow: "About ETAK",
      title: "專注香港冷鏈營運的物流團隊",
      summary: "以葵涌為核心，連接倉儲、配送與增值支援，服務本地及區域食品供應鏈客戶。",
      heroBody:
        "ETAK 以香港冷鏈執行能力為核心，整合倉儲、配送、交接支援與葵涌位置優勢。",
      heroStats: [
        { value: "Hong Kong", label: "本地冷鏈營運定位" },
        { value: "葵涌", label: "物流走廊與貨櫃港接駁" },
        { value: "B2B", label: "服務進口、分銷與餐飲供應鏈" },
      ],
      leadTitle: "以穩定執行建立信任",
      leadBody:
        "ETAK 熟悉食品供應鏈的日常交收要求，並以地點、溫控能力與服務銜接支援穩定運作。",
      highlights: [
        "定位於香港冷鏈物流與供應鏈解決方案",
        "服務本地及區域企業客戶",
        "整合倉儲、冷凍配送及增值支援",
      ],
      sections: [
        {
          title: "公司定位",
          body: "ETAK 以冷鏈物流為主，核心在於把倉庫、冷凍車與營運支援整理成具執行性的服務組合。",
        },
        {
          title: "服務對象與場景",
          body: "服務對象包括進口食品、分銷、超市、酒店、餐廳及其他對溫控交收有要求的企業客戶。",
        },
        {
          title: "地點優勢",
          body: "位於葵涌物流走廊，讓 ETAK 更容易連接機場、碼頭及本地配送網絡，並把地點優勢轉化為日常交付效率。",
        },
      ],
      ctaTitle: "評估 ETAK 是否適合你的供應鏈模式？",
      ctaBody: "可先從倉儲、配送頻率、提貨點及溫區要求開始，與 ETAK 團隊進一步交流。",
    },
    en: {
      kind: "standard",
      metaTitle: "About ETAK | ETAK Logistics",
      metaDescription:
        "ETAK provides Hong Kong cold-chain logistics from Kwai Chung, combining warehousing, refrigerated distribution, and value-added support.",
      eyebrow: "About ETAK",
      title: "A Hong Kong team focused on practical cold-chain operations",
      summary: "Based in Kwai Chung, ETAK connects warehousing, distribution, and operational support for local and regional food-supply workflows.",
      heroBody:
        "ETAK combines warehousing, delivery, handover support, and the Kwai Chung logistics corridor into a practical Hong Kong cold-chain operation.",
      heroStats: [
        { value: "Hong Kong", label: "local cold-chain operating focus" },
        { value: "Kwai Chung", label: "located in the logistics and terminal corridor" },
        { value: "B2B", label: "supports import, distribution, and food-service workflows" },
      ],
      leadTitle: "Trust built through operating clarity",
      leadBody:
        "ETAK's location, service mix, temperature-controlled capability, and fit for food-related supply chains give buyers a clear basis for evaluation.",
      highlights: [
        "Positioned as a Hong Kong cold-chain and supply-chain support provider",
        "Serving local and regional business customers",
        "Combines warehousing, refrigerated delivery, and value-added support",
      ],
      sections: [
        {
          title: "Company focus",
          body: "ETAK operates as a cold-chain-focused logistics provider that brings warehouse, fleet, and handling support together as one practical service model.",
        },
        {
          title: "Who the business serves",
          body: "ETAK serves importers, distributors, supermarkets, hotels, restaurants, and other buyers who need temperature-sensitive handling and delivery.",
        },
        {
          title: "Why location matters",
          body: "Kwai Chung provides an operating advantage for connecting airport movements, terminal-related flow, and local delivery across Hong Kong.",
        },
      ],
      ctaTitle: "Need to see whether ETAK fits your supply-chain model?",
      ctaBody: "Start with your storage profile, delivery frequency, pickup points, and temperature requirements. ETAK can then review the workable operating setup.",
    },
  },
  contact: {
    navLabel: { zh: "聯絡我們", en: "Contact" },
    cardLabel: { zh: "聯絡與查詢", en: "Contact and Inquiry" },
    image: atlLogisticsCentre,
    zh: {
      kind: "contact",
      metaTitle: "聯絡我們 | 意得物流",
      metaDescription:
        "聯絡意得物流了解冷凍倉儲、冷凍配送、機場提貨及增值冷鏈物流服務安排。",
      eyebrow: "Contact",
      title: "聯絡 ETAK 團隊",
      summary: "如你需要香港冷鏈倉儲、配送或機場提貨支援，可直接透過電話、電郵或查詢表單聯絡。",
      heroBody:
        "可透過電話、電郵或查詢表單提交冷鏈倉儲、配送、機場提貨或營運支援需求。",
      heroStats: [
        { value: "+852 2615 2038", label: "電話" },
        { value: "info@etaklogistics.com", label: "電郵" },
        { value: "ATL Logistics Centre", label: "葵涌營運據點" },
      ],
      leadTitle: "讓採購與營運團隊可快速提出需求",
      leadBody:
        "不論你需要定期冷凍配送、倉庫安排，還是機場提貨與文件支援，都可先提供基本貨品與流程資訊，方便 ETAK 進一步跟進。",
      highlights: [
        "直接聯絡電話與電郵",
        "辦公及營運位置清晰",
        "查詢表單聚焦必要業務資料",
      ],
      sections: [
        {
          title: "適合提交的查詢內容",
          body: "可先提供貨品種類、溫區需求、提貨地點、送貨目的地、出貨頻率及預計開始時間。",
        },
        {
          title: "更快取得回覆的方法",
          body: "如屬緊急或已有既定交收時間，建議直接致電或電郵並附上所需配送或倉儲安排。",
        },
      ],
      ctaTitle: "準備好開始討論？",
      ctaBody: "把你的操作需求告訴 ETAK，團隊可按實際情況提供更合適的倉配組合。",
      contactCards: [
        { label: "地址", value: brand.address.zh },
        { label: "電話", value: brand.phone, href: `tel:${brand.phone.replace(/\s+/g, "")}` },
        { label: "傳真", value: brand.fax },
        { label: "電郵", value: brand.email, href: `mailto:${brand.email}` },
      ],
      mapTitle: "營運位置",
      mapBody: "位於亞洲貨櫃物流中心，方便接駁機場、貨櫃碼頭及香港主要配送路線。",
      formTitle: "業務查詢",
      formIntro: "填寫基本需求後，可透過預設電郵方式把資料發送給 ETAK 團隊。",
      formAction: `mailto:${brand.email}`,
      formLabels: {
        name: "姓名",
        email: "電郵",
        company: "公司",
        message: "需求內容",
        submit: "傳送查詢",
        note: "如需即時回覆，請直接致電或電郵 ETAK。",
      },
    },
    en: {
      kind: "contact",
      metaTitle: "Contact | ETAK Logistics",
      metaDescription:
        "Contact ETAK Logistics for refrigerated warehousing, cold-chain transport, airport pickup, and value-added logistics support in Hong Kong.",
      eyebrow: "Contact",
      title: "Contact the ETAK team",
      summary: "For warehousing, refrigerated delivery, airport pickup, or value-added cold-chain support in Hong Kong, contact ETAK directly by phone, email, or inquiry form.",
      heroBody:
        "Contact ETAK by phone, email, or inquiry form for cold-chain warehousing, refrigerated delivery, airport pickup, or operational support.",
      heroStats: [
        { value: "+852 2615 2038", label: "phone" },
        { value: "info@etaklogistics.com", label: "email" },
        { value: "ATL Logistics Centre", label: "Kwai Chung operating base" },
      ],
      leadTitle: "A clear inquiry path for procurement and operations teams",
      leadBody:
        "Whether you need recurring cold-chain delivery, warehouse space, airport pickup, or document support, start with the basic product and operating requirements and ETAK can follow up from there.",
      highlights: [
        "Direct phone and email access",
        "Clear office and operating-location details",
        "Short form focused on essential business requirements",
      ],
      sections: [
        {
          title: "What to include in an inquiry",
          body: "A useful starting brief includes product type, temperature range, pickup point, delivery destination, shipment frequency, and target launch timing.",
        },
        {
          title: "How to get a faster response",
          body: "If the job is urgent or tied to a fixed delivery window, call or email ETAK directly with the required warehouse or transport arrangement.",
        },
      ],
      ctaTitle: "Ready to discuss the job?",
      ctaBody: "Share the operating requirement and ETAK can review the most practical warehouse and distribution setup.",
      contactCards: [
        { label: "Address", value: brand.address.en },
        { label: "Phone", value: brand.phone, href: `tel:${brand.phone.replace(/\s+/g, "")}` },
        { label: "Fax", value: brand.fax },
        { label: "Email", value: brand.email, href: `mailto:${brand.email}` },
      ],
      mapTitle: "Operating location",
      mapBody: "Based in ATL Logistics Centre, with access to airport routes, terminal corridors, and Hong Kong distribution links.",
      formTitle: "Business inquiry",
      formIntro: "Use the form to send a basic project brief via your default email client, or contact ETAK directly by phone or email.",
      formAction: `mailto:${brand.email}`,
      formLabels: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Project brief",
        submit: "Send inquiry",
        note: "For urgent requests, call or email ETAK directly.",
      },
    },
  },
};

Object.assign(pages.facilities.zh, {
  metaTitle: "冷鏈設施與溫控設備 | 意得物流 ETAK",
  metaDescription:
    "ETAK 香港冷鏈設施包括低溫倉、製冷系統、後備機組、GPS 車隊監控、溫度感應器及衛生安排。",
  title: "支撐香港冷鏈物流的設施與溫控系統",
  summary:
    "多溫區倉儲、製冷與後備設備、GPS 監控、感應器及清潔制度，共同支援穩定冷鏈操作。",
  heroBody:
    "ETAK 以多溫區倉儲、溫度監控、後備設備與車輛衛生管理，支援食品及溫控貨品的日常收發與配送。",
  leadTitle: "多溫區設施配合監控與後備安排",
  leadBody:
    "低溫空間、製冷系統、監控紀錄及衛生管理一起運作，減少倉儲與配送過程中的溫度風險。",
  sections: [
    {
      title: "低溫倉與隔熱配置",
      body: "多溫區倉儲範圍涵蓋 -18 C 至 22 C，配合隔熱物料與空間配置，處理不同類型冷凍、冷藏及恆溫食品。",
    },
    {
      title: "製冷與後備安排",
      body: "製冷系統結合定期檢查、保養及後備機組，降低因設備異常或外部因素影響貨品質素的風險。",
    },
    {
      title: "GPS、感應器與衛生管理",
      body: "GPS 車隊系統與車廂溫度感應器有助掌握在途狀況，而定期清洗與衛生管理則是食品配送的基本要求。",
    },
  ],
  ctaBody:
    "如你的產品對儲存、運輸及監控條件要求較高，可與 ETAK 討論現場與車隊配置。",
});

Object.assign(pages.facilities.en, {
  metaTitle: "Cold Storage Facilities and Temperature Control | ETAK Logistics",
  metaDescription:
    "ETAK cold storage facilities in Hong Kong include multi-zone storage, refrigeration systems, backup units, GPS fleet controls, sensors, and hygiene routines.",
  title: "Cold storage facilities and temperature-control systems",
  summary:
    "Multi-zone storage, refrigeration and backup equipment, GPS monitoring, sensors, and cleaning routines support stable cold-chain operations.",
  heroBody:
    "ETAK combines temperature range, monitoring, backup support, and hygiene routines to support daily cold-chain operations.",
  leadTitle: "Multi-zone facilities backed by monitoring and contingency support",
  leadBody:
    "Storage range, refrigeration support, monitoring records, and hygiene routines work together to reduce temperature risk across handling and delivery.",
  sections: [
    {
      title: "Low-temperature warehouse and insulation",
      body: "The multi-zone storage setup covers -18 C to 22 C across frozen, chilled, and controlled-temperature goods.",
    },
    {
      title: "Refrigeration and backup support",
      body: "Regular inspection, insulation maintenance, and backup refrigeration units act as risk-control measures to protect product quality.",
    },
    {
      title: "GPS, sensors, and hygiene",
      body: "Fleet GPS, in-vehicle temperature sensors, and scheduled vehicle cleaning support disciplined food-grade transport operations.",
    },
  ],
});

Object.assign(pages.about.zh, {
  metaTitle: "關於 ETAK 香港冷鏈物流 | 意得物流",
  metaDescription:
    "ETAK 於葵涌整合冷凍倉儲、冷凍配送、機場提貨及營運支援，服務香港食品與溫控供應鏈。",
  title: "香港冷鏈物流營運團隊",
  summary:
    "以葵涌為營運核心，連接倉儲、配送與營運支援，服務香港食品及溫控供應鏈客戶。",
  heroBody:
    "ETAK 以香港本地冷鏈執行為核心，提供倉儲、配送與交接支援，並以葵涌營運位置連接主要物流節點。",
  leadTitle: "以營運適配度建立信任",
  leadBody:
    "對 B2B 客戶而言，更重要的是 ETAK 是否了解產品條件、交收節奏、提貨場景與香港本地配送限制。",
  sections: [
    {
      title: "公司定位",
      body: "ETAK 以冷鏈物流為主軸，把倉儲、冷凍車與營運支援整合成可執行的服務組合。",
    },
    {
      title: "服務對象與場景",
      body: "主要服務進口食品、分銷、零售、酒店、餐飲及其他對溫控交收有要求的企業客戶。",
    },
    {
      title: "葵涌位置優勢",
      body: "位於葵涌物流走廊，讓 ETAK 更容易連接機場、碼頭及本地配送網絡，把位置優勢轉化為日常營運效率。",
    },
  ],
  ctaBody:
    "可先由倉儲需求、配送頻率、提貨點與溫區要求開始，與 ETAK 團隊討論是否適合你的供應鏈模式。",
});

Object.assign(pages.about.en, {
  metaTitle: "About ETAK Hong Kong Cold-Chain Logistics | ETAK Logistics",
  metaDescription:
    "ETAK combines refrigerated warehousing, refrigerated delivery, airport pickup, and operational support from Kwai Chung for Hong Kong cold-chain logistics.",
  title: "A Hong Kong cold-chain logistics team built around operations",
  summary:
    "Based in Kwai Chung, ETAK connects warehousing, delivery, and operational support for food and temperature-sensitive supply chains in Hong Kong.",
  heroBody:
    "ETAK is a local Hong Kong cold-chain operator built around warehousing, delivery, and shipment support from Kwai Chung.",
  leadTitle: "Trust built through operational fit",
  leadBody:
    "For B2B buyers, the real question is whether ETAK understands product conditions, handover timing, pickup scenarios, and the constraints of Hong Kong distribution.",
  sections: [
    {
      title: "Company focus",
      body: "ETAK operates as a cold-chain logistics provider that brings warehousing, refrigerated delivery, and operational support into one workable service model.",
    },
    {
      title: "Customers and operating scenarios",
      body: "The service profile is built for importers, distributors, retail chains, hotels, restaurants, and other buyers that need disciplined temperature-sensitive handling.",
    },
    {
      title: "Kwai Chung as an operating advantage",
      body: "Kwai Chung is more than an address. It improves access to airport routes, terminal flow, and local delivery corridors across Hong Kong.",
    },
  ],
  ctaBody:
    "Start with your storage profile, delivery frequency, pickup points, and temperature requirements, and ETAK can review whether the operating model fits.",
});

Object.assign(pages.contact.zh, {
  metaTitle: "聯絡香港冷鏈物流團隊 | 意得物流 ETAK",
  metaDescription:
    "聯絡 ETAK 了解香港冷凍倉儲、冷凍配送、機場提貨及溫控物流服務，並提交你的產品、溫區與配送需求。",
  title: "聯絡 ETAK 香港冷鏈物流團隊",
  heroBody:
    "可透過電話、電郵或查詢表單提交冷鏈倉儲、配送、機場提貨或營運支援需求。",
  leadTitle: "先提供影響安排的操作資訊",
  leadBody:
    "查詢時可先列明產品類別、溫區要求、提貨點、送貨地點、出貨頻率與所需時程，讓 ETAK 更快判斷可行安排。",
  sections: [
    {
      title: "建議提供的查詢資料",
      body: "可先提供貨品類別、溫區需求、提貨地點、送貨目的地、出貨頻率及預計開始時間。",
    },
    {
      title: "較快取得回覆的方式",
      body: "如屬緊急安排或已有固定交收時間，建議直接致電或電郵，並附上所需倉儲、配送或提貨安排。",
    },
  ],
  ctaTitle: "準備好提交需求？",
  ctaBody:
    "把你的貨品條件與操作安排告訴 ETAK，團隊可據此回覆較合適的倉配與支援方式。",
  mapBody:
    "位於 ATL Logistics Centre，可直接連接機場路線、貨櫃碼頭及香港主要配送走廊。",
  formIntro:
    "填寫基本資料後，可透過預設電郵把簡短項目需求發送給 ETAK；如屬緊急安排，建議直接致電或電郵。",
});

Object.assign(pages.contact.en, {
  metaTitle: "Contact Hong Kong Cold-Chain Logistics Team | ETAK Logistics",
  metaDescription:
    "Contact ETAK for refrigerated warehousing, refrigerated delivery, airport pickup, and temperature-controlled logistics support in Hong Kong.",
  title: "Contact ETAK for Hong Kong cold-chain logistics",
  heroBody:
    "Contact ETAK by phone, email, or inquiry form for cold-chain warehousing, refrigerated delivery, airport pickup, or operational support.",
  leadTitle: "Start with the operating details that matter",
  leadBody:
    "A useful inquiry starts with product type, temperature range, pickup point, delivery destination, shipment frequency, and required timing so ETAK can assess the setup quickly.",
  sections: [
    {
      title: "Useful inquiry details",
      body: "Start with product type, temperature range, pickup point, delivery destination, shipment frequency, and target start date.",
    },
    {
      title: "Fastest way to get a response",
      body: "If the job is urgent or tied to a fixed handover window, call or email ETAK directly with the required warehouse, delivery, or pickup arrangement.",
    },
  ],
  ctaBody:
    "Share the operating requirement and ETAK can review the most practical warehouse, delivery, and support setup.",
  mapBody:
    "Based in ATL Logistics Centre, with direct access to airport routes, terminal corridors, and Hong Kong delivery links.",
  formIntro:
    "Use the form to send a short project brief through your default email client, or contact ETAK directly by phone or email for urgent work.",
});

Object.assign(homeContent.zh, {
  metaTitle: "香港冷鏈物流、冷凍倉儲及配送 | 意得物流 ETAK",
  metaDescription:
    "意得物流於葵涌提供香港冷鏈物流、冷凍倉儲、冷凍配送、機場提貨及溫控物流支援，服務食品、零售、酒店及餐飲供應鏈。",
  title: "香港冷鏈物流與冷凍倉儲配送方案",
  intro:
    "意得物流以香港葵涌為營運核心，整合冷凍及溫控倉儲、冷凍配送、機場提貨與訂單支援，為進口食品、零售、酒店及餐飲客戶提供一站式冷鏈物流配套。",
});

Object.assign(homeContent.en, {
  metaTitle:
    "Hong Kong Cold-Chain Logistics, Refrigerated Warehousing & Delivery | ETAK Logistics",
  metaDescription:
    "ETAK Logistics provides Hong Kong cold-chain logistics from Kwai Chung, including refrigerated warehousing, refrigerated delivery, airport pickup, and temperature-controlled logistics support.",
  title: "Hong Kong cold-chain logistics with refrigerated warehousing and delivery",
  intro:
    "ETAK Logistics combines refrigerated warehousing, refrigerated delivery, airport pickup, and temperature-controlled logistics support into a practical operating model for importers, distributors, retailers, hotels, and food-service businesses in Hong Kong.",
});

Object.assign(pages.warehousing.zh, {
  metaTitle: "香港冷凍倉儲服務 | 意得物流 ETAK",
  metaDescription:
    "ETAK 於葵涌 ATL Logistics Centre 提供 30,000 平方呎香港冷凍倉儲及溫控倉儲服務，支援急凍、冷藏、分貨、暫存及出貨安排。",
  title: "香港葵涌冷凍及溫控倉儲中心",
});

Object.assign(pages.warehousing.en, {
  metaTitle: "Refrigerated Warehousing in Hong Kong | ETAK Logistics",
  metaDescription:
    "ETAK operates 30,000 sq ft of refrigerated warehousing and temperature-controlled warehouse space in Kwai Chung, Hong Kong for frozen, chilled, sorting, and dispatch flow.",
  title: "Refrigerated warehousing in Kwai Chung, Hong Kong",
});

Object.assign(pages.transportation.zh, {
  metaTitle: "香港冷凍配送與冷鏈運輸 | 意得物流 ETAK",
  metaDescription:
    "ETAK 提供香港冷凍配送、冷鏈運輸及溫控物流服務，支援急凍、冷藏及恆溫貨品由倉庫、機場或指定提貨點配送至各區。",
  title: "香港冷凍配送與冷鏈運輸服務",
});

Object.assign(pages.transportation.en, {
  metaTitle: "Refrigerated Delivery in Hong Kong | ETAK Logistics",
  metaDescription:
    "ETAK provides refrigerated delivery and temperature-controlled transport across Hong Kong, connecting warehouse handover, airport pickup, and B2B cold-chain routes.",
  title: "Refrigerated delivery and cold-chain transport across Hong Kong",
});

Object.assign(pages["value-added-services"].zh, {
  metaTitle: "機場提貨與冷鏈營運支援 | 意得物流 ETAK",
  metaDescription:
    "ETAK 提供香港機場提貨、文件處理、訂單支援、包裝分貨及營運報表服務，補足冷鏈物流交接與後勤流程。",
  title: "機場提貨及冷鏈營運支援服務",
});

Object.assign(pages["value-added-services"].en, {
  metaTitle: "Airport Pickup and Cold-Chain Support | ETAK Logistics",
  metaDescription:
    "ETAK supports airport pickup, document handling, packing, order support, and reporting as part of Hong Kong temperature-controlled logistics workflows.",
  title: "Airport pickup and operational support for cold-chain logistics",
});

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path: string) {
  if (/^[a-z][a-z\d+\-.]*:/i.test(path) || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath && (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`))) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}

export function homeHref(lang: Lang) {
  return sitePath(lang === "zh" ? "/" : "/en/");
}

export function pageHref(lang: Lang, page: PageKey) {
  return sitePath(lang === "zh" ? `/${page}/` : `/en/${page}/`);
}

export function pageLabel(lang: Lang, page: PageKey) {
  return pages[page].navLabel[lang];
}

export function switchLanguage(lang: Lang) {
  return lang === "zh" ? "en" : "zh";
}
