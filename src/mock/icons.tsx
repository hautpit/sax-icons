import React from "react";
import {
  WalletAdd,
  ReceiptItem,
  EmptyWallet,
  WalletCheck,
  ReceiptDiscount,
  EmptyWalletRemove,
  EmptyWalletAdd,
  ReceiptMinus,
  WalletSearch,
  Strongbox2,
  ReceiptAdd,
  Money,
  EmptyWalletTick,
  EmptyWalletTime,
  TransactionMinus,
  Money2,
  EmptyWalletChange,
  Money3,
  PercentageSquare,
  Money4,
  ChartSquare,
  Moneys,
  Coin,
  ReceiptEdit,
  MoneyTick,
  DiscountShape,
  ReceiptSearch,
  MoneyAdd,
  DiscountCircle,
  ConvertCard,
  Wallet2,
  MoneyRemove,
  WalletMoney,
  CardRemove,
  Cards,
  MoneyForbidden,
  Wallet3,
  CardTick,
  Receipt2,
  Receipt,
  MoneyChange,
  WalletRemove,
  MoneyTime,
  ReceiptText,
  Strongbox,
  Wallet,
  SecurityCard,
  MoneyRecive,
  MoneySend,
  Archive,
  Tag,
  Tag2,
  Coin1,
  Document,
  Wallet1,
  CardAdd,
  CardRemove1,
  CardTick1,
  CardSlash,
  CardPos,
  Card,
  CardReceive,
  CardSend,
  CardEdit,
  WalletMinus,
  WalletAdd1,
  DollarSquare,
  Frame,
  ReceiptDisscount,
  Ticket,
  Receipt21,
  Receipt1,
  TicketStar,
  TicketExpired,
  Ticket2,
  TicketDiscount,
  Math,
  MicrophoneSlash,
  Microphone,
  Microphone2,
  MicrophoneSlash1,
  VolumeCross,
  VolumeSlash,
  VolumeUp,
  VolumeLow,
  VolumeLow1,
  VolumeHigh,
  VolumeMute,
  Video,
  VideoSlash,
  VideoSquare,
  VideoCircle,
  Gallery,
  GalleryFavorite,
  GallerySlash,
  GalleryTick,
  GalleryImport,
  GalleryExport,
  GalleryAdd,
  GalleryRemove,
  GalleryEdit,
  Image,
  ScreenMirroring,
  Camera,
  CameraSlash,
  Play,
  Record,
  Stop,
  Musicnote,
  Music,
  VideoVertical,
  VideoHorizontal,
  VideoPlay,
  Subtitle,
  PlayCircle,
  RecordCircle,
  StopCircle,
  PauseCircle,
  Pause,
  Scissor,
  Backward,
  Next,
  Previous,
  Forward,
  Backward5Seconds,
  PlayAdd,
  PlayRemove,
  PlayCricle,
  MusicCircle,
  Radio,
  Backward10Seconds,
  Backward15Seconds,
  Forward5Seconds,
  Forward10Seconds,
  Forward15Seconds,
  MusicPlaylist,
  MusicFilter,
  MusicDashboard,
  MusicSquareRemove,
  MusicSquareAdd,
  MusicSquareSearch,
  RepeateMusic,
  RepeateOne,
  Shuffle,
  Devices,
  MusicLibrary2,
  MusicSquare,
  AudioSquare,
  NoteSquare,
  MiniMusicSqaure,
  VideoAdd,
  VideoRemove,
  VideoTick,
  VideoTime,
  VideoOctagon,
  VoiceSquare,
  VoiceCricle,
  MaximizeCircle,
  DirectboxDefault,
  MessageAdd,
  MessageRemove,
  SmsSearch,
  SmsStar,
  SmsEdit,
  SmsNotification,
  SmsTracking,
  Sms,
  Messages3,
  Messages2,
  Messages,
  DeviceMessage,
  MessageText1,
  MessageSearch,
  MessageNotif,
  MessageFavorite,
  Message,
  DirectInbox,
  DirectSend,
  DirectNotification,
  Direct,
  DirectNormal,
  DirectboxSend,
  DirectboxReceive,
  DirectboxNotif,
  MessageEdit,
  MessageAdd1,
  MessageMinus,
  MessageText,
  MessageSquare,
  MessageCircle,
  Messages1,
  Message2,
  MessageTime,
  MessageTick,
  TextalignLeft,
  TextalignCenter,
  TextalignRight,
  TextalignJustifyright,
  TextalignJustifycenter,
  TextalignJustifyleft,
  Paperclip,
  LanguageCircle,
  LanguageSquare,
  Translate,
  LinkCircle,
  LinkSquare,
  QuoteUpCircle,
  QuoteDownCircle,
  QuoteDownSquare,
  QuoteUpSquare,
  QuoteDown,
  AttachCircle,
  AttachSquare,
  Eraser,
  Firstline,
  Link,
  Link1,
  Link2,
  Link21,
  Maximize,
  Paperclip2,
  Pharagraphspacing,
  QuoteUp,
  Smallcaps,
  TextBlock,
  TextBold,
  TextItalic,
  TextUnderline,
  Text,
  Moon,
  Cloud,
  CloudCross,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudMinus,
  CloudNotif,
  CloudPlus,
  CloudSnow,
  CloudSunny,
  Drop,
  Flash,
  Sun,
  Sun1,
  SunFog,
  Wind,
  Wind2,
  Folder,
  Folder2,
  FolderAdd,
  FolderCloud,
  FolderCross,
  FolderFavorite,
  FolderMinus,
  FolderOpen,
  ArrangeCircle,
  ArrangeCircle2,
  ArrangeSquare,
  ArrangeSquare2,
  Arrow2,
  Arrow3,
  ArrowBottom,
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  ArrowDown,
  ArrowDown1,
  ArrowDown2,
  ArrowLeft,
  ArrowLeft1,
  ArrowLeft2,
  ArrowLeft3,
  ArrowRight,
  ArrowRight1,
  ArrowRight2,
  ArrowRight3,
  ArrowSquareDown,
  ArrowSquareLeft,
  ArrowSquareRight,
  ArrowSquareUp,
  ArrowSwap,
  ArrowSwapHorizontal,
  ArrowUp,
  ArrowUp1,
  ArrowUp2,
  ArrowUp3,
  BackSquare,
  Convert,
  Export0,
  Export1,
  Export2,
  Export3,
  ForwardSquare,
  Import0,
  Import1,
  Import2,
  Login,
  Login1,
  Logout,
  Logout1,
  Received,
  ReceiveSquare,
  ReceiveSquare2,
  Redo,
  Refresh,
  Refresh2,
  RefreshLeftSquare,
  RefreshRightSquare,
  RefreshSquare2,
  Repeat,
  RepeatCircle,
  RotateLeft,
  RotateRight,
  Send,
  SendSqaure2,
  SendSquare,
  Undo,
  People,
  Profile2user,
  ProfileAdd,
  ProfileCircle,
  ProfileDelete,
  ProfileTick,
  TagUser,
  User,
  UserAdd,
  UserCirlceAdd,
  UserEdit,
  UserMinus,
  UserOctagon,
  UserRemove,
  UserSearch,
  UserSquare,
  UserTag,
  UserTick,
  ProfileRemove,
  Airplane,
  AirplaneSquare,
  Bus,
  Car,
  Driving,
  GasStation,
  Ship,
  SmartCar,
  Arrow,
  ArrowSquare,
  DirectDown,
  DirectLeft,
  DirectRight,
  DirectUp,
  Discover,
  Global,
  GlobalEdit,
  GlobalRefresh,
  GlobalSearch,
  Gps,
  GpsSlash,
  LocationAdd,
  LocationCross,
  LocationMinus,
  LocationSlash,
  LocationTick,
  Map1,
  PictureFrame,
  Radar,
  Radar2,
  RouteSquare,
  Routing,
  Routing2,
  Location,
  Map,
  Award,
  Book,
  Book1,
  Bookmark,
  Bookmark2,
  Briefcase,
  BrifecaseCross,
  BrifecaseTick,
  BrifecaseTimer,
  Calculator,
  Gift,
  Note,
  Note2,
  Teacher,
  Clipboard,
  Box,
  Box1,
  BoxAdd,
  BoxRemove,
  BoxSearch,
  BoxTick,
  BoxTime,
  DCubeScan,
  DRotate,
  DSquare,
  Icon1,
  Icon2,
  Truck,
  TruckFast,
  TruckTick,
  Convert3dCube,
  Alarm,
  Check,
  Eye,
  EyeSlash,
  FingerCricle,
  FingerScan,
  Key,
  KeySquare,
  Lock,
  Lock1,
  LockCircle,
  LockSlash,
  PasswordCheck,
  Radar1,
  Scan,
  ScanBarcode,
  Scanner,
  Scanning,
  Security,
  SecuritySafe,
  SecurityUser,
  ShieldCross,
  ShieldSearch,
  ShieldSlash,
  ShieldTick,
  Unlock,
  Additem,
  Bezier,
  Brush3,
  Brush4,
  Bucket,
  Magicpen,
  Paintbucket,
  PenTool,
  Ruler,
  Shapes,
  Brush1,
  Designtools,
  Lifebuoy,
  PenClose,
  PenTool2,
  Blend2,
  Brush2,
  BucketCircle,
  BucketSquare,
  ColorSwatch,
  Glass,
  Path,
  Path2,
  PenAdd,
  PenRemove,
  Scissor1,
  Blur,
  Eraser1,
  FlashCircle,
  Mask,
  OmegaCircle,
  OmegaSquare,
  PathSquare,
  Shapes1,
  Size,
  Blend,
  Brush,
  Colorfilter,
  ColorsSquare,
  Copy,
  Layer,
  Mask1,
  CopySuccess,
  MainComponent,
  RecoveryConvert,
  BackwardItem,
  ForwardItem,
  Mask2,
  Component2,
  AlignBottom,
  AlignHorizontally,
  AlignLeft,
  AlignRight,
  AlignVertically,
  Convertshape,
  Convertshape2,
  Crop,
  Element2,
  Element3,
  Element4,
  ElementEqual,
  ElementPlus,
  Fatrows,
  FormatCircle,
  FormatSquare,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
  Grid9,
  GridEdit,
  GridEraser,
  GridLock,
  Maximize1,
  Maximize2,
  Maximize21,
  Maximize3,
  Maximize4,
  RotateLeft1,
  RotateRight1,
  RowHorizontal,
  RowVertical,
  SliderHorizontal,
  SliderHorizontal1,
  SliderVertical,
  SliderVertical1,
  ThreeSquare,
  Bag,
  Bag2,
  BagCross,
  BagCross1,
  BagHappy,
  BagTick,
  BagTick2,
  BagTimer,
  Barcode,
  Shop,
  ShopAdd,
  ShoppingBag,
  ShoppingCart,
  ShopRemove,
  ArchiveBook,
  Bill,
  ClipboardClose,
  ClipboardExport,
  ClipboardImport,
  ClipboardText,
  ClipboardTick,
  Copyright,
  CreativeCommons,
  Document1,
  DocumentCloud,
  DocumentCopy,
  DocumentDownload,
  DocumentFavorite,
  DocumentFilter,
  DocumentForward,
  DocumentLike,
  DocumentNormal,
  DocumentPrevious,
  DocumentSketch,
  DocumentText,
  DocumentText1,
  DocumentUpload,
  Edit,
  Edit2,
  MenuBoard,
  Note1,
  Note21,
  NoteAdd,
  NoteFavorite,
  NoteRemove,
  NoteText,
  Stickynote,
  Task,
  TaskSquare,
  Code,
  Code1,
  CodeCircle,
  Command,
  CommandSquare,
  Data,
  Data2,
  DocumentCode,
  DocumentCode2,
  Hashtag,
  HashtagDown,
  HashtagUp,
  Hierarchy,
  Hierarchy2,
  Hierarchy3,
  HierarchySquare,
  HierarchySquare2,
  HierarchySquare3,
  MessageProgramming,
  MobileProgramming,
  ProgrammingArrow,
  ProgrammingArrows,
  Scroll,
  SidebarBottom,
  SidebarLeft,
  SidebarRight,
  SidebarTop,
  Add,
  AddCircle,
  AddSquare,
  Archive2,
  Autobrightness,
  BatteryCharging,
  BatteryDisable,
  BatteryEmpty,
  BatteryEmpty1,
  BatteryFull,
  Box2,
  Broom,
  Bubble,
  Cake,
  Cd,
  Chart,
  Chrome,
  CloseCircle,
  CloseSquare,
  Coffee,
  Computing,
  Crown,
  Crown1,
  Cup,
  Danger,
  Diamonds,
  Discover1,
  EmojiHappy,
  EmojiNormal,
  EmojiSad,
  Filter,
  FilterAdd,
  FilterEdit,
  FilterRemove,
  FilterSearch,
  FilterSquare,
  FilterTick,
  Flag,
  Flag2,
  Flash1,
  FlashCircle1,
  FlashSlash,
  Forbidden,
  Forbidden2,
  Ghost,
  Glass1,
  Grammerly,
  Happyemoji,
  Home,
  Home1,
  Home2,
  HomeWifi,
  InfoCircle,
  Information,
  Instagram,
  Judge,
  Lamp,
  Level,
  Menu,
  Milk,
  Minus,
  MinusCirlce,
  MinusSquare,
  Mirror,
  MoreCircle,
  MoreSquare,
  Mouse,
  MouseCircle,
  MouseSquare,
  Pet,
  Ranking,
  Reserve,
  SafeHome,
  Send1,
  Send2,
  Share,
  Signpost,
  Slash,
  Slider,
  SmartHome,
  Sort,
  Sound,
  Speedometer,
  Status,
  Sticker,
  Story,
  TagCross,
  TagRight,
  TickCircle,
  TickSquare,
  Trash,
  Tree,
  Triangle,
  TrushSquare,
  Verify,
  Warning2,
  Weight,
  Wifi,
  WifiSquare,
  C24Support,
  Dislike,
  Heart,
  HeartAdd,
  HeartCircle,
  HeartEdit,
  HeartRemove,
  HeartSearch,
  HeartSlash,
  HeartTick,
  Like,
  Like1,
  LikeDislike,
  LikeShapes,
  LikeTag,
  Lovely,
  MagicStar,
  Medal,
  MedalStar,
  MessageQuestion,
  Ranking1,
  Smileys,
  Star,
  Star1,
  StarSlash,
  Unlimited,
  LampCharge,
  LampOn,
  LampSlash,
  Notification1,
  NotificationBing,
  NotificationCircle,
  NotificationFavorite,
  NotificationStatus,
  Notification,
  Candle,
  Candle2,
  Category,
  Category2,
  Menu1,
  More,
  More2,
  Setting,
  Setting2,
  Setting3,
  Setting4,
  Setting5,
  Settings,
  ToggleOff,
  ToggleOffCircle,
  ToggleOn,
  ToggleOnCircle,
  Archive1,
  ArchiveAdd,
  ArchiveMinus,
  ArchiveSlash,
  ArchiveTick,
  BookSaved,
  BookSquare,
  ReceiptSquare,
  Save2,
  SaveAdd,
  SaveMinus,
  SaveRemove,
  Calendar,
  Calendar1,
  Calendar2,
  CalendarAdd,
  CalendarCircle,
  CalendarEdit,
  CalendarRemove,
  CalendarSearch,
  CalendarTick,
  Clock,
  SecurityTime,
  Timer,
  Timer1,
  TimerPause,
  TimerStart,
  Airdrop,
  Airpod,
  Airpods,
  Bluetooth,
  Bluetooth2,
  BluetoothCircle,
  BluetoothRectangle,
  Clock1,
  CloudAdd,
  CloudChange,
  CloudConnection,
  CloudRemove,
  Cpu,
  CpuCharge,
  CpuSetting,
  Devices1,
  Driver,
  Driver2,
  DriverRefresh,
  Electricity,
  ExternalDrive,
  FolderConnection,
  Game,
  Gameboy,
  Headphone,
  Headphones,
  Keyboard,
  KeyboardOpen,
  Lamp1,
  Microscope,
  MirroringScreen,
  Mobile,
  Monitor,
  MonitorMobbile,
  MonitorRecorder,
  Mouse1,
  MusicPlay,
  Printer,
  PrinterSlash,
  Ram,
  Ram2,
  Simcard,
  Simcard1,
  Simcard2,
  Speaker,
  Watch,
  WatchStatus,
  Weight1,
  Call,
  CallAdd,
  CallCalling,
  CallIncoming,
  CallMinus,
  CallOutgoing,
  CallReceived,
  CallSlash,
  Activity,
  Chart1,
  Chart2,
  Chart21,
  Chart3,
  ChartFail,
  ChartSuccess,
  Diagram,
  FavoriteChart,
  Graph,
  Hashtag1,
  Health,
  HomeHashtag,
  HomeTrendDown,
  HomeTrendUp,
  Personalcard,
  PresentionChart,
  StatusUp,
  TrendDown,
  TrendUp,
  Bank,
  Building,
  Building3,
  Building4,
  Buildings,
  Buildings2,
  Courthouse,
  Hospital,
  House2,
  House,
  Aquarius,
  Gemini,
  Gemini2,
  Man,
  Sagittarius,
  Woman,
  SearchFavorite,
  SearchFavorite1,
  SearchNormal,
  SearchNormal1,
  SearchStatus,
  SearchStatus1,
  SearchZoomIn,
  SearchZoomIn1,
  SearchZoomOut,
  SearchZoomOut1,
} from "../components/common/Icon";

export interface IconSectionProps {
  title: string;
  icons: IconProps[];
}
export interface IconProps {
  name: string;
  icon: React.ReactNode;
}
export const iconSections: IconSectionProps[] = [
  {
    title: "Money",
    icons: [
      {
        name: "walletAdd",
        icon: <WalletAdd />,
      },
      {
        name: "receiptItem",
        icon: <ReceiptItem />,
      },
      {
        name: "emptyWallet",
        icon: <EmptyWallet />,
      },
      {
        name: "walletCheck",
        icon: <WalletCheck />,
      },
      {
        name: "receiptDiscount",
        icon: <ReceiptDiscount />,
      },
      {
        name: "emptyWalletRemove",
        icon: <EmptyWalletRemove />,
      },
      {
        name: "emptyWalletAdd",
        icon: <EmptyWalletAdd />,
      },
      {
        name: "receiptMinus",
        icon: <ReceiptMinus />,
      },
      {
        name: "walletSearch",
        icon: <WalletSearch />,
      },
      {
        name: "strongbox2",
        icon: <Strongbox2 />,
      },
      {
        name: "emptyWalletTick",
        icon: <EmptyWalletTick />,
      },
      {
        name: "receiptAdd",
        icon: <ReceiptAdd />,
      },
      {
        name: "money",
        icon: <Money />,
      },
      {
        name: "emptyWalletTime",
        icon: <EmptyWalletTime />,
      },
      {
        name: "transactionMinus",
        icon: <TransactionMinus />,
      },
      {
        name: "money2",
        icon: <Money2 />,
      },
      {
        name: "emptyWalletChange",
        icon: <EmptyWalletChange />,
      },
      {
        name: "money3",
        icon: <Money3 />,
      },
      {
        name: "percentageSquare",
        icon: <PercentageSquare />,
      },
      {
        name: "money4",
        icon: <Money4 />,
      },
      {
        name: "chartSquare",
        icon: <ChartSquare />,
      },
      {
        name: "moneys",
        icon: <Moneys />,
      },
      {
        name: "coin",
        icon: <Coin />,
      },
      {
        name: "receiptEdit",
        icon: <ReceiptEdit />,
      },
      {
        name: "moneyTick",
        icon: <MoneyTick />,
      },
      {
        name: "discountShape",
        icon: <DiscountShape />,
      },
      {
        name: "receiptSearch",
        icon: <ReceiptSearch />,
      },
      {
        name: "MoneyAdd",
        icon: <MoneyAdd />,
      },
      {
        name: "ConvertCard",
        icon: <ConvertCard />,
      },
      {
        name: "DiscountCircle",
        icon: <DiscountCircle />,
      },
      {
        name: "Wallet2",
        icon: <Wallet2 />,
      },
      {
        name: "MoneyRemove",
        icon: <MoneyRemove />,
      },
      {
        name: "CardRemove",
        icon: <CardRemove />,
      },
      {
        name: "Cards",
        icon: <Cards />,
      },
      {
        name: "MoneyForbidden",
        icon: <MoneyForbidden />,
      },
      {
        name: "Wallet3",
        icon: <Wallet3 />,
      },
      {
        name: "CardTick",
        icon: <CardTick />,
      },
      {
        name: "Receipt2",
        icon: <Receipt2 />,
      },
      {
        name: "Receipt",
        icon: <Receipt />,
      },
      {
        name: "MoneyChange",
        icon: <MoneyChange />,
      },
      {
        name: "WalletRemove",
        icon: <WalletRemove />,
      },
      {
        name: "MoneyTime",
        icon: <MoneyTime />,
      },
      {
        name: "ReceiptText",
        icon: <ReceiptText />,
      },
      {
        name: "Strongbox",
        icon: <Strongbox />,
      },
      {
        name: "Wallet",
        icon: <Wallet />,
      },
      {
        name: "SecurityCard",
        icon: <SecurityCard />,
      },
      {
        name: "MoneyRecive",
        icon: <MoneyRecive />,
      },
      {
        name: "MoneySend",
        icon: <MoneySend />,
      },
      {
        name: "Archive",
        icon: <Archive />,
      },
      {
        name: "Tag",
        icon: <Tag />,
      },
      {
        name: "Tag2",
        icon: <Tag2 />,
      },
      {
        name: "Coin1",
        icon: <Coin1 />,
      },
      {
        name: "Document",
        icon: <Document />,
      },
      {
        name: "Wallet1",
        icon: <Wallet1 />,
      },
      {
        name: "CardAdd",
        icon: <CardAdd />,
      },
      {
        name: "CardRemove1",
        icon: <CardRemove1 />,
      },
      {
        name: "CardTick1",
        icon: <CardTick1 />,
      },
      {
        name: "CardSlash",
        icon: <CardSlash />,
      },
      {
        name: "CardPos",
        icon: <CardPos />,
      },
      {
        name: "Card",
        icon: <Card />,
      },
      {
        name: "CardReceive",
        icon: <CardReceive />,
      },
      {
        name: "CardSend",
        icon: <CardSend />,
      },
      {
        name: "CardEdit",
        icon: <CardEdit />,
      },
      {
        name: "WalletMinus",
        icon: <WalletMinus />,
      },
      {
        name: "WalletAdd1",
        icon: <WalletAdd1 />,
      },
      {
        name: "DollarSquare",
        icon: <DollarSquare />,
      },
      {
        name: "Frame",
        icon: <Frame />,
      },
      {
        name: "Receipt1",
        icon: <Receipt1 />,
      },
      {
        name: "ReceiptDisscount",
        icon: <ReceiptDisscount />,
      },
      {
        name: "Ticket",
        icon: <Ticket />,
      },
      {
        name: "TicketStar",
        icon: <TicketStar />,
      },
      {
        name: "TicketExpired",
        icon: <TicketExpired />,
      },
      {
        name: "Ticket2",
        icon: <Ticket2 />,
      },
      {
        name: "TicketDiscount",
        icon: <TicketDiscount />,
      },
      {
        name: "Math",
        icon: <Math />,
      },
    ],
  },
  {
    title: "Video, Audio, Image",
    icons: [
      {
        name: "Microphone",
        icon: <Microphone />,
      },
      {
        name: "MicrophoneSlash",
        icon: <MicrophoneSlash />,
      },
      {
        name: "Microphone2",
        icon: <Microphone2 />,
      },
      {
        name: "MicrophoneSlash1",
        icon: <MicrophoneSlash1 />,
      },
      {
        name: "VolumeCross",
        icon: <VolumeCross />,
      },
      {
        name: "VolumeSlash",
        icon: <VolumeSlash />,
      },
      {
        name: "VolumeUp",
        icon: <VolumeUp />,
      },
      {
        name: "VolumeLow",
        icon: <VolumeLow />,
      },
      {
        name: "VolumeLow1",
        icon: <VolumeLow1 />,
      },
      {
        name: "VolumeHigh",
        icon: <VolumeHigh />,
      },
      {
        name: "VolumeMute",
        icon: <VolumeMute />,
      },
      {
        name: "Video",
        icon: <Video />,
      },
      {
        name: "VideoSlash",
        icon: <VideoSlash />,
      },
      {
        name: "VideoSquare",
        icon: <VideoSquare />,
      },
      {
        name: "VideoCircle",
        icon: <VideoCircle />,
      },
      {
        name: "Gallery",
        icon: <Gallery />,
      },
      {
        name: "GalleryFavorite",
        icon: <GalleryFavorite />,
      },
      {
        name: "GallerySlash",
        icon: <GallerySlash />,
      },
      {
        name: "GalleryTick",
        icon: <GalleryTick />,
      },
      {
        name: "GalleryImport",
        icon: <GalleryImport />,
      },
      {
        name: "GalleryExport",
        icon: <GalleryExport />,
      },
      {
        name: "GalleryAdd",
        icon: <GalleryAdd />,
      },
      {
        name: "GalleryRemove",
        icon: <GalleryRemove />,
      },
      {
        name: "GalleryEdit",
        icon: <GalleryEdit />,
      },
      {
        name: "Image",
        icon: <Image />,
      },
      {
        name: "ScreenMirroring",
        icon: <ScreenMirroring />,
      },
      {
        name: "Camera",
        icon: <Camera />,
      },
      {
        name: "CameraSlash",
        icon: <CameraSlash />,
      },
      {
        name: "Play",
        icon: <Play />,
      },
      {
        name: "Record",
        icon: <Record />,
      },
      {
        name: "Stop",
        icon: <Stop />,
      },
      {
        name: "Musicnote",
        icon: <Musicnote />,
      },
      {
        name: "Music",
        icon: <Music />,
      },
      {
        name: "VideoVertical",
        icon: <VideoVertical />,
      },
      {
        name: "VideoHorizontal",
        icon: <VideoHorizontal />,
      },
      {
        name: "VideoPlay",
        icon: <VideoPlay />,
      },
      {
        name: "Subtitle",
        icon: <Subtitle />,
      },
      {
        name: "PlayCircle",
        icon: <PlayCircle />,
      },
      {
        name: "RecordCircle",
        icon: <RecordCircle />,
      },
      {
        name: "StopCircle",
        icon: <StopCircle />,
      },
      {
        name: "PauseCircle",
        icon: <PauseCircle />,
      },
      {
        name: "Pause",
        icon: <Pause />,
      },
      {
        name: "Scissor",
        icon: <Scissor />,
      },
      {
        name: "Backward",
        icon: <Backward />,
      },
      {
        name: "Forward",
        icon: <Forward />,
      },
      {
        name: "Previous",
        icon: <Previous />,
      },
      {
        name: "Next",
        icon: <Next />,
      },
      {
        name: "Radio",
        icon: <Radio />,
      },
      {
        name: "MusicCircle",
        icon: <MusicCircle />,
      },
      {
        name: "PlayCricle",
        icon: <PlayCricle />,
      },
      {
        name: "PlayRemove",
        icon: <PlayRemove />,
      },
      {
        name: "PlayAdd",
        icon: <PlayAdd />,
      },
      {
        name: "Backward5Seconds",
        icon: <Backward5Seconds />,
      },
      {
        name: "Backward10Seconds",
        icon: <Backward10Seconds />,
      },
      {
        name: "Backward15Seconds",
        icon: <Backward15Seconds />,
      },
      {
        name: "Forward5Seconds",
        icon: <Forward5Seconds />,
      },
      {
        name: "Forward10Seconds",
        icon: <Forward10Seconds />,
      },
      {
        name: "Forward15Seconds",
        icon: <Forward15Seconds />,
      },
      {
        name: "MusicPlaylist",
        icon: <MusicPlaylist />,
      },
      {
        name: "MusicFilter",
        icon: <MusicFilter />,
      },
      {
        name: "MusicDashboard",
        icon: <MusicDashboard />,
      },
      {
        name: "MusicSquareRemove",
        icon: <MusicSquareRemove />,
      },
      {
        name: "MusicSquareAdd",
        icon: <MusicSquareAdd />,
      },
      {
        name: "MusicSquareSearch",
        icon: <MusicSquareSearch />,
      },
      {
        name: "RepeateMusic",
        icon: <RepeateMusic />,
      },
      {
        name: "RepeateOne",
        icon: <RepeateOne />,
      },
      {
        name: "Shuffle",
        icon: <Shuffle />,
      },
      {
        name: "Devices",
        icon: <Devices />,
      },
      {
        name: "MusicLibrary2",
        icon: <MusicLibrary2 />,
      },
      {
        name: "MusicSquare",
        icon: <MusicSquare />,
      },
      {
        name: "AudioSquare",
        icon: <AudioSquare />,
      },
      {
        name: "NoteSquare",
        icon: <NoteSquare />,
      },
      {
        name: "MiniMusicSqaure",
        icon: <MiniMusicSqaure />,
      },
      {
        name: "VideoAdd",
        icon: <VideoAdd />,
      },
      {
        name: "VideoRemove",
        icon: <VideoRemove />,
      },
      {
        name: "VideoTick",
        icon: <VideoTick />,
      },
      {
        name: "VideoTime",
        icon: <VideoTime />,
      },
      {
        name: "VideoOctagon",
        icon: <VideoOctagon />,
      },
      {
        name: "VoiceSquare",
        icon: <VoiceSquare />,
      },
      {
        name: "VoiceCricle",
        icon: <VoiceCricle />,
      },
      {
        name: "MaximizeCircle",
        icon: <MaximizeCircle />,
      },
    ],
  },
  {
    title: "Emails, Messages",
    icons: [
      {
        name: "DirectboxDefault",
        icon: <DirectboxDefault />,
      },
      {
        name: "DirectboxNotif",
        icon: <DirectboxNotif />,
      },
      {
        name: "DirectboxReceive",
        icon: <DirectboxReceive />,
      },
      {
        name: "DirectboxSend",
        icon: <DirectboxSend />,
      },
      {
        name: "DirectNormal",
        icon: <DirectNormal />,
      },
      {
        name: "Direct",
        icon: <Direct />,
      },
      {
        name: "DirectNotification",
        icon: <DirectNotification />,
      },
      {
        name: "DirectInbox",
        icon: <DirectInbox />,
      },
      {
        name: "DirectSend",
        icon: <DirectSend />,
      },
      {
        name: "Message",
        icon: <Message />,
      },
      {
        name: "MessageFavorite",
        icon: <MessageFavorite />,
      },
      {
        name: "MessageNotif",
        icon: <MessageNotif />,
      },
      {
        name: "MessageSearch",
        icon: <MessageSearch />,
      },
      {
        name: "MessageText1",
        icon: <MessageText1 />,
      },
      {
        name: "DeviceMessage",
        icon: <DeviceMessage />,
      },
      {
        name: "Messages",
        icon: <Messages />,
      },
      {
        name: "Messages2",
        icon: <Messages2 />,
      },
      {
        name: "Messages3",
        icon: <Messages3 />,
      },
      {
        name: "Sms",
        icon: <Sms />,
      },
      {
        name: "SmsTracking",
        icon: <SmsTracking />,
      },
      {
        name: "SmsNotification",
        icon: <SmsNotification />,
      },
      {
        name: "SmsEdit",
        icon: <SmsEdit />,
      },
      {
        name: "SmsStar",
        icon: <SmsStar />,
      },
      {
        name: "SmsSearch",
        icon: <SmsSearch />,
      },
      {
        name: "MessageRemove",
        icon: <MessageRemove />,
      },
      {
        name: "MessageAdd",
        icon: <MessageAdd />,
      },
      {
        name: "MessageTick",
        icon: <MessageTick />,
      },
      {
        name: "MessageTime",
        icon: <MessageTime />,
      },
      {
        name: "Message2",
        icon: <Message2 />,
      },
      {
        name: "Messages1",
        icon: <Messages1 />,
      },
      {
        name: "MessageCircle",
        icon: <MessageCircle />,
      },
      {
        name: "MessageSquare",
        icon: <MessageSquare />,
      },
      {
        name: "MessageText",
        icon: <MessageText />,
      },
      {
        name: "MessageMinus",
        icon: <MessageMinus />,
      },
      {
        name: "MessageAdd1",
        icon: <MessageAdd1 />,
      },
      {
        name: "MessageEdit",
        icon: <MessageEdit />,
      },
    ],
  },
  {
    title: "Type, Paragraph, Character",
    icons: [
      {
        name: "TextalignLeft",
        icon: <TextalignLeft />,
      },
      {
        name: "TextalignCenter",
        icon: <TextalignCenter />,
      },
      {
        name: "TextalignRight",
        icon: <TextalignRight />,
      },
      {
        name: "TextalignJustifyright",
        icon: <TextalignJustifyright />,
      },
      {
        name: "TextalignJustifycenter",
        icon: <TextalignJustifycenter />,
      },
      {
        name: "TextalignJustifyleft",
        icon: <TextalignJustifyleft />,
      },
      {
        name: "Firstline",
        icon: <Firstline />,
      },
      {
        name: "Paperclip2",
        icon: <Paperclip2 />,
      },
      {
        name: "Paperclip",
        icon: <Paperclip />,
      },
      {
        name: "Link",
        icon: <Link />,
      },
      {
        name: "Link21",
        icon: <Link21 />,
      },
      {
        name: "Link1",
        icon: <Link1 />,
      },
      {
        name: "Link2",
        icon: <Link2 />,
      },
      {
        name: "TextBlock",
        icon: <TextBlock />,
      },
      {
        name: "TextItalic",
        icon: <TextItalic />,
      },
      {
        name: "Text",
        icon: <Text />,
      },
      {
        name: "Smallcaps",
        icon: <Smallcaps />,
      },
      {
        name: "TextBold",
        icon: <TextBold />,
      },
      {
        name: "TextUnderline",
        icon: <TextUnderline />,
      },
      {
        name: "Pharagraphspacing",
        icon: <Pharagraphspacing />,
      },
      {
        name: "Maximize",
        icon: <Maximize />,
      },
      {
        name: "Eraser",
        icon: <Eraser />,
      },
      {
        name: "AttachSquare",
        icon: <AttachSquare />,
      },
      {
        name: "AttachCircle",
        icon: <AttachCircle />,
      },
      {
        name: "QuoteUp",
        icon: <QuoteUp />,
      },
      {
        name: "QuoteDown",
        icon: <QuoteDown />,
      },
      {
        name: "QuoteUpSquare",
        icon: <QuoteUpSquare />,
      },
      {
        name: "QuoteDownSquare",
        icon: <QuoteDownSquare />,
      },
      {
        name: "QuoteDownCircle",
        icon: <QuoteDownCircle />,
      },
      {
        name: "QuoteUpCircle",
        icon: <QuoteUpCircle />,
      },
      {
        name: "LinkSquare",
        icon: <LinkSquare />,
      },
      {
        name: "LinkCircle",
        icon: <LinkCircle />,
      },
      {
        name: "Translate",
        icon: <Translate />,
      },
      {
        name: "LanguageSquare",
        icon: <LanguageSquare />,
      },
      {
        name: "LanguageCircle",
        icon: <LanguageCircle />,
      },
    ],
  },
  {
    title: "Weather",
    icons: [
      {
        name: "moon",
        icon: <Moon />,
      },
      {
        name: "sun",
        icon: <Sun />,
      },
      {
        name: "cloud",
        icon: <Cloud />,
      },
      {
        name: "cloudPlus",
        icon: <CloudPlus />,
      },
      {
        name: "cloudMinus",
        icon: <CloudMinus />,
      },
      {
        name: "cloudCross",
        icon: <CloudCross />,
      },
      {
        name: "cloudSunny",
        icon: <CloudSunny />,
      },
      {
        name: "cloudNotif",
        icon: <CloudNotif />,
      },
      {
        name: "cloudDrizzle",
        icon: <CloudDrizzle />,
      },
      {
        name: "cloudSnow",
        icon: <CloudSnow />,
      },
      {
        name: "cloudLightning",
        icon: <CloudLightning />,
      },
      {
        name: "flash",
        icon: <Flash />,
      },
      {
        name: "drop",
        icon: <Drop />,
      },
      {
        name: "wind",
        icon: <Wind />,
      },
      {
        name: "wind2",
        icon: <Wind2 />,
      },
      {
        name: "cloudFog",
        icon: <CloudFog />,
      },
      {
        name: "sunFog",
        icon: <SunFog />,
      },
      {
        name: "sun1",
        icon: <Sun1 />,
      },
    ],
  },
  {
    title: "Files",
    icons: [
      {
        name: "folder",
        icon: <Folder />,
      },
      {
        name: "folderCross",
        icon: <FolderCross />,
      },
      {
        name: "folderAdd",
        icon: <FolderAdd />,
      },
      {
        name: "folderMinus",
        icon: <FolderMinus />,
      },
      {
        name: "folderFavorite",
        icon: <FolderFavorite />,
      },
      {
        name: "folder2",
        icon: <Folder2 />,
      },
      {
        name: "folderOpen",
        icon: <FolderOpen />,
      },
      {
        name: "folderCloud",
        icon: <FolderCloud />,
      },
    ],
  },
  {
    title: "Arrow",
    icons: [
      {
        name: "Received",
        icon: <Received />,
      },
      {
        name: "Send",
        icon: <Send />,
      },
      {
        name: "Arrow2",
        icon: <Arrow2 />,
      },
      {
        name: "Arrow3",
        icon: <Arrow3 />,
      },
      {
        name: "ArrowSquareUp",
        icon: <ArrowSquareUp />,
      },
      {
        name: "ArrowSquareDown",
        icon: <ArrowSquareDown />,
      },
      {
        name: "ArrowSquareLeft",
        icon: <ArrowSquareLeft />,
      },
      {
        name: "ArrowSquareRight",
        icon: <ArrowSquareRight />,
      },
      {
        name: "ArrowRight",
        icon: <ArrowRight />,
      },
      {
        name: "ArrowLeft1",
        icon: <ArrowLeft1 />,
      },
      {
        name: "ArrowUp",
        icon: <ArrowUp />,
      },
      {
        name: "ArrowDown1",
        icon: <ArrowDown1 />,
      },
      {
        name: "ArrowUp3",
        icon: <ArrowUp3 />,
      },
      {
        name: "ArrowDown2",
        icon: <ArrowDown2 />,
      },
      {
        name: "ArrowRight3",
        icon: <ArrowRight3 />,
      },
      {
        name: "ArrowLeft2",
        icon: <ArrowLeft2 />,
      },
      {
        name: "ArrowCircleLeft",
        icon: <ArrowCircleLeft />,
      },
      {
        name: "ArrowCircleRight",
        icon: <ArrowCircleRight />,
      },
      {
        name: "ArrowCircleDown",
        icon: <ArrowCircleDown />,
      },
      {
        name: "ArrowCircleUp",
        icon: <ArrowCircleUp />,
      },
      {
        name: "ArrowSwap",
        icon: <ArrowSwap />,
      },
      {
        name: "ArrowSwapHorizontal",
        icon: <ArrowSwapHorizontal />,
      },
      {
        name: "Undo",
        icon: <Undo />,
      },
      {
        name: "Redo",
        icon: <Redo />,
      },
      {
        name: "RotateLeft",
        icon: <RotateLeft />,
      },
      {
        name: "RotateRight",
        icon: <RotateRight />,
      },
      {
        name: "Refresh2",
        icon: <Refresh2 />,
      },
      {
        name: "ArrowLeft3",
        icon: <ArrowLeft3 />,
      },
      {
        name: "ArrowRight1",
        icon: <ArrowRight1 />,
      },
      {
        name: "ArrowUp2",
        icon: <ArrowUp2 />,
      },
      {
        name: "ArrowBottom",
        icon: <ArrowBottom />,
      },
      {
        name: "ArrowUp1",
        icon: <ArrowUp1 />,
      },
      {
        name: "ArrowRight2",
        icon: <ArrowRight2 />,
      },
      {
        name: "ArrowLeft",
        icon: <ArrowLeft />,
      },
      {
        name: "ArrowDown",
        icon: <ArrowDown />,
      },
      {
        name: "Convert",
        icon: <Convert />,
      },
      {
        name: "ArrangeSquare",
        icon: <ArrangeSquare />,
      },
      {
        name: "ArrangeSquare2",
        icon: <ArrangeSquare2 />,
      },
      {
        name: "BackSquare",
        icon: <BackSquare />,
      },
      {
        name: "ForwardSquare",
        icon: <ForwardSquare />,
      },
      {
        name: "RefreshSquare2",
        icon: <RefreshSquare2 />,
      },
      {
        name: "RefreshRightSquare",
        icon: <RefreshRightSquare />,
      },
      {
        name: "RefreshLeftSquare",
        icon: <RefreshLeftSquare />,
      },
      {
        name: "ReceiveSquare",
        icon: <ReceiveSquare />,
      },
      {
        name: "SendSquare",
        icon: <SendSquare />,
      },
      {
        name: "SendSqaure2",
        icon: <SendSqaure2 />,
      },
      {
        name: "ReceiveSquare2",
        icon: <ReceiveSquare2 />,
      },
      {
        name: "Login1",
        icon: <Login1 />,
      },
      {
        name: "Logout1",
        icon: <Logout1 />,
      },
      {
        name: "Import2",
        icon: <Import2 />,
      },
      {
        name: "Export3",
        icon: <Export3 />,
      },
      {
        name: "Export0",
        icon: <Export0 />,
      },
      {
        name: "Import0",
        icon: <Import0 />,
      },
      {
        name: "Login",
        icon: <Login />,
      },
      {
        name: "Logout",
        icon: <Logout />,
      },
      {
        name: "Export2",
        icon: <Export2 />,
      },
      {
        name: "Import1",
        icon: <Import1 />,
      },
      {
        name: "Export1",
        icon: <Export1 />,
      },
      {
        name: "Refresh",
        icon: <Refresh />,
      },
      {
        name: "ArrangeCircle",
        icon: <ArrangeCircle />,
      },
      {
        name: "ArrangeCircle2",
        icon: <ArrangeCircle2 />,
      },
      {
        name: "Repeat",
        icon: <Repeat />,
      },
      {
        name: "RepeatCircle",
        icon: <RepeatCircle />,
      },
    ],
  },
  {
    title: "User",
    icons: [
      {
        name: "User",
        icon: <User />,
      },
      {
        name: "UserAdd",
        icon: <UserAdd />,
      },
      {
        name: "UserRemove",
        icon: <UserRemove />,
      },
      {
        name: "UserTick",
        icon: <UserTick />,
      },
      {
        name: "UserMinus",
        icon: <UserMinus />,
      },
      {
        name: "UserSearch",
        icon: <UserSearch />,
      },
      {
        name: "UserEdit",
        icon: <UserEdit />,
      },
      {
        name: "UserTag",
        icon: <UserTag />,
      },
      {
        name: "UserOctagon",
        icon: <UserOctagon />,
      },
      {
        name: "UserCirlceAdd",
        icon: <UserCirlceAdd />,
      },
      {
        name: "UserSquare",
        icon: <UserSquare />,
      },
      {
        name: "Profile2user",
        icon: <Profile2user />,
      },
      {
        name: "ProfileRemove",
        icon: <ProfileRemove />,
      },
      {
        name: "ProfileTick",
        icon: <ProfileTick />,
      },
      {
        name: "ProfileAdd",
        icon: <ProfileAdd />,
      },
      {
        name: "ProfileDelete",
        icon: <ProfileDelete />,
      },
      {
        name: "ProfileCircle",
        icon: <ProfileCircle />,
      },
      {
        name: "TagUser",
        icon: <TagUser />,
      },
      {
        name: "People",
        icon: <People />,
      },
    ],
  },
  {
    title: "Car",
    icons: [
      {
        name: "Airplane",
        icon: <Airplane />,
      },
      {
        name: "Car",
        icon: <Car />,
      },
      {
        name: "Bus",
        icon: <Bus />,
      },
      {
        name: "SmartCar",
        icon: <SmartCar />,
      },
      {
        name: "Driving",
        icon: <Driving />,
      },
      {
        name: "Ship",
        icon: <Ship />,
      },
      {
        name: "AirplaneSquare",
        icon: <AirplaneSquare />,
      },
      {
        name: "GasStation",
        icon: <GasStation />,
      },
    ],
  },
  {
    title: "Location",
    icons: [
      {
        name: "LocationMinus",
        icon: <LocationMinus />,
      },
      {
        name: "LocationCross",
        icon: <LocationCross />,
      },
      {
        name: "LocationTick",
        icon: <LocationTick />,
      },
      {
        name: "LocationSlash",
        icon: <LocationSlash />,
      },
      {
        name: "Discover",
        icon: <Discover />,
      },
      {
        name: "Location",
        icon: <Location />,
      },
      {
        name: "LocationAdd",
        icon: <LocationAdd />,
      },
      {
        name: "Radar",
        icon: <Radar />,
      },
      {
        name: "Radar2",
        icon: <Radar2 />,
      },
      {
        name: "GlobalSearch",
        icon: <GlobalSearch />,
      },
      {
        name: "GlobalEdit",
        icon: <GlobalEdit />,
      },
      {
        name: "GlobalRefresh",
        icon: <GlobalRefresh />,
      },
      {
        name: "Global",
        icon: <Global />,
      },
      {
        name: "DirectUp",
        icon: <DirectUp />,
      },
      {
        name: "DirectDown",
        icon: <DirectDown />,
      },
      {
        name: "DirectLeft",
        icon: <DirectLeft />,
      },
      {
        name: "DirectRight",
        icon: <DirectRight />,
      },
      {
        name: "Map",
        icon: <Map />,
      },
      {
        name: "Gps",
        icon: <Gps />,
      },
      {
        name: "GpsSlash",
        icon: <GpsSlash />,
      },
      {
        name: "Map1",
        icon: <Map1 />,
      },
      {
        name: "Routing",
        icon: <Routing />,
      },
      {
        name: "Routing2",
        icon: <Routing2 />,
      },
      {
        name: "ArrowSquare",
        icon: <ArrowSquare />,
      },
      {
        name: "PictureFrame",
        icon: <PictureFrame />,
      },
      {
        name: "Arrow",
        icon: <Arrow />,
      },
      {
        name: "RouteSquare",
        icon: <RouteSquare />,
      },
    ],
  },
  {
    title: "School",
    icons: [
      {
        name: "Briefcase",
        icon: <Briefcase />,
      },
      {
        name: "BrifecaseTimer",
        icon: <BrifecaseTimer />,
      },
      {
        name: "BrifecaseTick",
        icon: <BrifecaseTick />,
      },
      {
        name: "BrifecaseCross",
        icon: <BrifecaseCross />,
      },
      {
        name: "Bookmark",
        icon: <Bookmark />,
      },
      {
        name: "Award",
        icon: <Award />,
      },
      {
        name: "Book",
        icon: <Book />,
      },
      {
        name: "Bookmark2",
        icon: <Bookmark2 />,
      },
      {
        name: "Book1",
        icon: <Book1 />,
      },
      {
        name: "Clipboard",
        icon: <Clipboard />,
      },
      {
        name: "Note",
        icon: <Note />,
      },
      {
        name: "Note2",
        icon: <Note2 />,
      },
      {
        name: "Teacher",
        icon: <Teacher />,
      },
      {
        name: "Gift",
        icon: <Gift />,
      },
      {
        name: "Calculator",
        icon: <Calculator />,
      },
    ],
  },
  {
    title: "Delivery",
    icons: [
      {
        name: "Box1",
        icon: <Box1 />,
      },
      {
        name: "DCubeScan",
        icon: <DCubeScan />,
      },
      {
        name: "convert3dCube",
        icon: <Convert3dCube />,
      },
      {
        name: "BoxAdd",
        icon: <BoxAdd />,
      },
      {
        name: "BoxRemove",
        icon: <BoxRemove />,
      },
      {
        name: "BoxTick",
        icon: <BoxTick />,
      },
      {
        name: "BoxTime",
        icon: <BoxTime />,
      },
      {
        name: "Box",
        icon: <Box />,
      },
      {
        name: "BoxSearch",
        icon: <BoxSearch />,
      },
      {
        name: "Truck",
        icon: <Truck />,
      },
      {
        name: "TruckFast",
        icon: <TruckFast />,
      },
      {
        name: "TruckTick",
        icon: <TruckTick />,
      },
      {
        name: "Icon2",
        icon: <Icon2 />,
      },
      {
        name: "Icon1",
        icon: <Icon1 />,
      },
      {
        name: "DSquare",
        icon: <DSquare />,
      },
      {
        name: "DRotate",
        icon: <DRotate />,
      },
    ],
  },
  {
    title: "Security",
    icons: [
      {
        name: "Eye",
        icon: <Eye />,
      },
      {
        name: "EyeSlash",
        icon: <EyeSlash />,
      },
      {
        name: "ShieldTick",
        icon: <ShieldTick />,
      },
      {
        name: "ShieldCross",
        icon: <ShieldCross />,
      },
      {
        name: "ShieldSlash",
        icon: <ShieldSlash />,
      },
      {
        name: "PasswordCheck",
        icon: <PasswordCheck />,
      },
      {
        name: "ShieldSearch",
        icon: <ShieldSearch />,
      },
      {
        name: "KeySquare",
        icon: <KeySquare />,
      },
      {
        name: "Key",
        icon: <Key />,
      },
      {
        name: "Check",
        icon: <Check />,
      },
      {
        name: "Lock1",
        icon: <Lock1 />,
      },
      {
        name: "Unlock",
        icon: <Unlock />,
      },
      {
        name: "LockSlash",
        icon: <LockSlash />,
      },
      {
        name: "Scan",
        icon: <Scan />,
      },
      {
        name: "ScanBarcode",
        icon: <ScanBarcode />,
      },
      {
        name: "Scanning",
        icon: <Scanning />,
      },
      {
        name: "FingerScan",
        icon: <FingerScan />,
      },
      {
        name: "FingerCricle",
        icon: <FingerCricle />,
      },
      {
        name: "Scanner",
        icon: <Scanner />,
      },
      {
        name: "SecurityUser",
        icon: <SecurityUser />,
      },
      {
        name: "Lock",
        icon: <Lock />,
      },
      {
        name: "LockCircle",
        icon: <LockCircle />,
      },
      {
        name: "Alarm",
        icon: <Alarm />,
      },
      {
        name: "Radar1",
        icon: <Radar1 />,
      },
      {
        name: "SecuritySafe",
        icon: <SecuritySafe />,
      },
      {
        name: "Security",
        icon: <Security />,
      },
    ],
  },
  {
    title: "Tools",
    icons: [
      {
        name: "Bezier",
        icon: <Bezier />,
      },
      {
        name: "Brush4",
        icon: <Brush4 />,
      },
      {
        name: "Brush3",
        icon: <Brush3 />,
      },
      {
        name: "Magicpen",
        icon: <Magicpen />,
      },
      {
        name: "PenTool",
        icon: <PenTool />,
      },
      {
        name: "Bucket",
        icon: <Bucket />,
      },
      {
        name: "Paintbucket",
        icon: <Paintbucket />,
      },
      {
        name: "Additem",
        icon: <Additem />,
      },
      {
        name: "Ruler",
        icon: <Ruler />,
      },
      {
        name: "Designtools",
        icon: <Designtools />,
      },
      {
        name: "Shapes",
        icon: <Shapes />,
      },
      {
        name: "Lifebuoy",
        icon: <Lifebuoy />,
      },
      {
        name: "PenTool2",
        icon: <PenTool2 />,
      },
      {
        name: "Brush1",
        icon: <Brush1 />,
      },
      {
        name: "PenClose",
        icon: <PenClose />,
      },
      {
        name: "PenAdd",
        icon: <PenAdd />,
      },
      {
        name: "PenRemove",
        icon: <PenRemove />,
      },
      {
        name: "Path",
        icon: <Path />,
      },
      {
        name: "Path2",
        icon: <Path2 />,
      },
      {
        name: "BucketCircle",
        icon: <BucketCircle />,
      },
      {
        name: "BucketSquare",
        icon: <BucketSquare />,
      },
      {
        name: "Brush2",
        icon: <Brush2 />,
      },
      {
        name: "Scissor1",
        icon: <Scissor1 />,
      },
      {
        name: "Glass",
        icon: <Glass />,
      },
      {
        name: "ColorSwatch",
        icon: <ColorSwatch />,
      },
      {
        name: "Blend2",
        icon: <Blend2 />,
      },
      {
        name: "PathSquare",
        icon: <PathSquare />,
      },
      {
        name: "OmegaCircle",
        icon: <OmegaCircle />,
      },
      {
        name: "OmegaSquare",
        icon: <OmegaSquare />,
      },
      {
        name: "Shapes1",
        icon: <Shapes1 />,
      },
      {
        name: "Size",
        icon: <Size />,
      },
      {
        name: "FlashCircle",
        icon: <FlashCircle />,
      },
      {
        name: "Eraser1",
        icon: <Eraser1 />,
      },
      {
        name: "Mask",
        icon: <Mask />,
      },
      {
        name: "Blur",
        icon: <Blur />,
      },
      {
        name: "Blend",
        icon: <Blend />,
      },
      {
        name: "Colorfilter",
        icon: <Colorfilter />,
      },
      {
        name: "ColorsSquare",
        icon: <ColorsSquare />,
      },
      {
        name: "Mask1",
        icon: <Mask1 />,
      },
      {
        name: "Brush",
        icon: <Brush />,
      },
      {
        name: "Layer",
        icon: <Layer />,
      },
      {
        name: "Copy",
        icon: <Copy />,
      },
      {
        name: "CopySuccess",
        icon: <CopySuccess />,
      },
      {
        name: "RecoveryConvert",
        icon: <RecoveryConvert />,
      },
      {
        name: "MainComponent",
        icon: <MainComponent />,
      },
      {
        name: "Component2",
        icon: <Component2 />,
      },
      {
        name: "Mask2",
        icon: <Mask2 />,
      },
      {
        name: "ForwardItem",
        icon: <ForwardItem />,
      },
      {
        name: "BackwardItem",
        icon: <BackwardItem />,
      },
    ],
  },
  {
    title: "Grid",
    icons: [
      {
        name: "Fatrows",
        icon: <Fatrows />,
      },
      {
        name: "RowVertical",
        icon: <RowVertical />,
      },
      {
        name: "RowHorizontal",
        icon: <RowHorizontal />,
      },
      {
        name: "SliderVertical1",
        icon: <SliderVertical1 />,
      },
      {
        name: "SliderHorizontal1",
        icon: <SliderHorizontal1 />,
      },
      {
        name: "SliderVertical",
        icon: <SliderVertical />,
      },
      {
        name: "SliderHorizontal",
        icon: <SliderHorizontal />,
      },
      {
        name: "Grid4",
        icon: <Grid4 />,
      },
      {
        name: "Grid9",
        icon: <Grid9 />,
      },
      {
        name: "Grid2",
        icon: <Grid2 />,
      },
      {
        name: "Grid3",
        icon: <Grid3 />,
      },
      {
        name: "Grid5",
        icon: <Grid5 />,
      },
      {
        name: "Grid6",
        icon: <Grid6 />,
      },
      {
        name: "Grid7",
        icon: <Grid7 />,
      },
      {
        name: "Grid8",
        icon: <Grid8 />,
      },
      {
        name: "Grid1",
        icon: <Grid1 />,
      },
      {
        name: "Element2",
        icon: <Element2 />,
      },
      {
        name: "Element3",
        icon: <Element3 />,
      },
      {
        name: "Element4",
        icon: <Element4 />,
      },
      {
        name: "ElementPlus",
        icon: <ElementPlus />,
      },
      {
        name: "ElementEqual",
        icon: <ElementEqual />,
      },
      {
        name: "ThreeSquare",
        icon: <ThreeSquare />,
      },
      {
        name: "AlignVertically",
        icon: <AlignVertically />,
      },
      {
        name: "AlignHorizontally",
        icon: <AlignHorizontally />,
      },
      {
        name: "AlignLeft",
        icon: <AlignLeft />,
      },
      {
        name: "AlignRight",
        icon: <AlignRight />,
      },
      {
        name: "AlignBottom",
        icon: <AlignBottom />,
      },
      {
        name: "Maximize1",
        icon: <Maximize1 />,
      },
      {
        name: "Maximize2",
        icon: <Maximize2 />,
      },
      {
        name: "Maximize3",
        icon: <Maximize3 />,
      },
      {
        name: "Maximize4",
        icon: <Maximize4 />,
      },
      {
        name: "FormatCircle",
        icon: <FormatCircle />,
      },
      {
        name: "FormatSquare",
        icon: <FormatSquare />,
      },
      {
        name: "RotateLeft1",
        icon: <RotateLeft1 />,
      },
      {
        name: "RotateRight1",
        icon: <RotateRight1 />,
      },
      {
        name: "Crop",
        icon: <Crop />,
      },
      {
        name: "Maximize21",
        icon: <Maximize21 />,
      },
      {
        name: "Convertshape",
        icon: <Convertshape />,
      },
      {
        name: "Convertshape2",
        icon: <Convertshape2 />,
      },
      {
        name: "GridEraser",
        icon: <GridEraser />,
      },
      {
        name: "GridLock",
        icon: <GridLock />,
      },
      {
        name: "GridEdit",
        icon: <GridEdit />,
      },
    ],
  },
  {
    title: "Shop",
    icons: [
      {
        name: "Bag",
        icon: <Bag />,
      },
      {
        name: "BagHappy",
        icon: <BagHappy />,
      },
      {
        name: "BagTick",
        icon: <BagTick />,
      },
      {
        name: "BagCross",
        icon: <BagCross />,
      },
      {
        name: "BagTimer",
        icon: <BagTimer />,
      },
      {
        name: "BagTick2",
        icon: <BagTick2 />,
      },
      {
        name: "BagCross1",
        icon: <BagCross1 />,
      },
      {
        name: "Bag2",
        icon: <Bag2 />,
      },
      {
        name: "ShoppingCart",
        icon: <ShoppingCart />,
      },
      {
        name: "ShoppingBag",
        icon: <ShoppingBag />,
      },
      {
        name: "ShopAdd",
        icon: <ShopAdd />,
      },
      {
        name: "ShopRemove",
        icon: <ShopRemove />,
      },
      {
        name: "Shop",
        icon: <Shop />,
      },
      {
        name: "Barcode",
        icon: <Barcode />,
      },
    ],
  },
  {
    title: "Content, Edit",
    icons: [
      {
        name: "Document1",
        icon: <Document1 />,
      },
      {
        name: "DocumentText",
        icon: <DocumentText />,
      },
      {
        name: "DocumentFavorite",
        icon: <DocumentFavorite />,
      },
      {
        name: "DocumentDownload",
        icon: <DocumentDownload />,
      },
      {
        name: "DocumentUpload",
        icon: <DocumentUpload />,
      },
      {
        name: "DocumentForward",
        icon: <DocumentForward />,
      },
      {
        name: "DocumentPrevious",
        icon: <DocumentPrevious />,
      },
      {
        name: "DocumentSketch",
        icon: <DocumentSketch />,
      },
      {
        name: "DocumentCloud",
        icon: <DocumentCloud />,
      },
      {
        name: "DocumentCopy",
        icon: <DocumentCopy />,
      },
      {
        name: "DocumentNormal",
        icon: <DocumentNormal />,
      },
      {
        name: "ClipboardText",
        icon: <ClipboardText />,
      },
      {
        name: "ClipboardTick",
        icon: <ClipboardTick />,
      },
      {
        name: "ClipboardClose",
        icon: <ClipboardClose />,
      },
      {
        name: "ClipboardExport",
        icon: <ClipboardExport />,
      },
      {
        name: "ClipboardImport",
        icon: <ClipboardImport />,
      },
      {
        name: "Note1",
        icon: <Note1 />,
      },
      {
        name: "DocumentText1",
        icon: <DocumentText1 />,
      },
      {
        name: "DocumentLike",
        icon: <DocumentLike />,
      },
      {
        name: "Edit",
        icon: <Edit />,
      },
      {
        name: "Edit2",
        icon: <Edit2 />,
      },
      {
        name: "Copyright",
        icon: <Copyright />,
      },
      {
        name: "CreativeCommons",
        icon: <CreativeCommons />,
      },
      {
        name: "Note21",
        icon: <Note21 />,
      },
      {
        name: "NoteRemove",
        icon: <NoteRemove />,
      },
      {
        name: "Stickynote",
        icon: <Stickynote />,
      },
      {
        name: "NoteAdd",
        icon: <NoteAdd />,
      },
      {
        name: "Task",
        icon: <Task />,
      },
      {
        name: "TaskSquare",
        icon: <TaskSquare />,
      },
      {
        name: "Bill",
        icon: <Bill />,
      },
      {
        name: "DocumentFilter",
        icon: <DocumentFilter />,
      },
      {
        name: "ArchiveBook",
        icon: <ArchiveBook />,
      },
      {
        name: "NoteText",
        icon: <NoteText />,
      },
      {
        name: "NoteFavorite",
        icon: <NoteFavorite />,
      },
      {
        name: "MenuBoard",
        icon: <MenuBoard />,
      },
    ],
  },
  {
    title: "Programing",
    icons: [
      {
        name: "Command",
        icon: <Command />,
      },
      {
        name: "ProgrammingArrow",
        icon: <ProgrammingArrow />,
      },
      {
        name: "Hierarchy",
        icon: <Hierarchy />,
      },
      {
        name: "Hierarchy2",
        icon: <Hierarchy2 />,
      },
      {
        name: "CommandSquare",
        icon: <CommandSquare />,
      },
      {
        name: "HierarchySquare",
        icon: <HierarchySquare />,
      },
      {
        name: "HierarchySquare2",
        icon: <HierarchySquare2 />,
      },
      {
        name: "HierarchySquare3",
        icon: <HierarchySquare3 />,
      },
      {
        name: "Data",
        icon: <Data />,
      },
      {
        name: "Data2",
        icon: <Data2 />,
      },
      {
        name: "DocumentCode",
        icon: <DocumentCode />,
      },
      {
        name: "CodeCircle",
        icon: <CodeCircle />,
      },
      {
        name: "Hierarchy3",
        icon: <Hierarchy3 />,
      },
      {
        name: "ProgrammingArrows",
        icon: <ProgrammingArrows />,
      },
      {
        name: "DocumentCode2",
        icon: <DocumentCode2 />,
      },
      {
        name: "MessageProgramming",
        icon: <MessageProgramming />,
      },
      {
        name: "MobileProgramming",
        icon: <MobileProgramming />,
      },
      {
        name: "Code",
        icon: <Code />,
      },
      {
        name: "Code1",
        icon: <Code1 />,
      },
      {
        name: "HashtagUp",
        icon: <HashtagUp />,
      },
      {
        name: "Hashtag",
        icon: <Hashtag />,
      },
      {
        name: "HashtagDown",
        icon: <HashtagDown />,
      },
      {
        name: "Scroll",
        icon: <Scroll />,
      },
      {
        name: "SidebarLeft",
        icon: <SidebarLeft />,
      },
      {
        name: "SidebarRight",
        icon: <SidebarRight />,
      },
      {
        name: "SidebarTop",
        icon: <SidebarTop />,
      },
      {
        name: "SidebarBottom",
        icon: <SidebarBottom />,
      },
    ],
  },
  {
    title: "Essestional",
    icons: [
      {
        name: "Trash",
        icon: <Trash />,
      },
      {
        name: "BatteryEmpty",
        icon: <BatteryEmpty />,
      },
      {
        name: "BatteryEmpty1",
        icon: <BatteryEmpty1 />,
      },
      {
        name: "BatteryFull",
        icon: <BatteryFull />,
      },
      {
        name: "BatteryCharging",
        icon: <BatteryCharging />,
      },
      {
        name: "BatteryDisable",
        icon: <BatteryDisable />,
      },
      {
        name: "Home1",
        icon: <Home1 />,
      },
      {
        name: "Home2",
        icon: <Home2 />,
      },
      {
        name: "MoreSquare",
        icon: <MoreSquare />,
      },
      {
        name: "TickCircle",
        icon: <TickCircle />,
      },
      {
        name: "AddCircle",
        icon: <AddCircle />,
      },
      {
        name: "MinusCirlce",
        icon: <MinusCirlce />,
      },
      {
        name: "CloseCircle",
        icon: <CloseCircle />,
      },
      {
        name: "MoreCircle",
        icon: <MoreCircle />,
      },
      {
        name: "InfoCircle",
        icon: <InfoCircle />,
      },
      {
        name: "Danger",
        icon: <Danger />,
      },
      {
        name: "Add",
        icon: <Add />,
      },
      {
        name: "Minus",
        icon: <Minus />,
      },
      {
        name: "AddSquare",
        icon: <AddSquare />,
      },
      {
        name: "MinusSquare",
        icon: <MinusSquare />,
      },
      {
        name: "TickSquare",
        icon: <TickSquare />,
      },
      {
        name: "CloseSquare",
        icon: <CloseSquare />,
      },
      {
        name: "Sort",
        icon: <Sort />,
      },
      {
        name: "Send1",
        icon: <Send1 />,
      },
      {
        name: "Send2",
        icon: <Send2 />,
      },
      {
        name: "Share",
        icon: <Share />,
      },
      {
        name: "Flash1",
        icon: <Flash1 />,
      },
      {
        name: "FlashSlash",
        icon: <FlashSlash />,
      },
      {
        name: "FlashCircle1",
        icon: <FlashCircle1 />,
      },
      {
        name: "Slash",
        icon: <Slash />,
      },
      {
        name: "Cake",
        icon: <Cake />,
      },
      {
        name: "Grammerly",
        icon: <Grammerly />,
      },
      {
        name: "Chart",
        icon: <Chart />,
      },
      {
        name: "Archive2",
        icon: <Archive2 />,
      },
      {
        name: "Chrome",
        icon: <Chrome />,
      },
      {
        name: "Instagram",
        icon: <Instagram />,
      },
      {
        name: "Coffee",
        icon: <Coffee />,
      },
      {
        name: "Pet",
        icon: <Pet />,
      },
      {
        name: "Happyemoji",
        icon: <Happyemoji />,
      },
      {
        name: "Reserve",
        icon: <Reserve />,
      },
      {
        name: "Sticker",
        icon: <Sticker />,
      },
      {
        name: "Computing",
        icon: <Computing />,
      },
      {
        name: "Verify",
        icon: <Verify />,
      },
      {
        name: "Crown",
        icon: <Crown />,
      },
      {
        name: "Crown1",
        icon: <Crown1 />,
      },
      {
        name: "Flag",
        icon: <Flag />,
      },
      {
        name: "Flag2",
        icon: <Flag2 />,
      },
      {
        name: "Cup",
        icon: <Cup />,
      },
      {
        name: "EmojiHappy",
        icon: <EmojiHappy />,
      },
      {
        name: "EmojiNormal",
        icon: <EmojiNormal />,
      },
      {
        name: "EmojiSad",
        icon: <EmojiSad />,
      },
      {
        name: "TagCross",
        icon: <TagCross />,
      },
      {
        name: "Menu",
        icon: <Menu />,
      },
      {
        name: "Cd",
        icon: <Cd />,
      },
      {
        name: "Information",
        icon: <Information />,
      },
      {
        name: "Autobrightness",
        icon: <Autobrightness />,
      },
      {
        name: "Triangle",
        icon: <Triangle />,
      },
      {
        name: "Glass1",
        icon: <Glass1 />,
      },
      {
        name: "Discover1",
        icon: <Discover1 />,
      },
      {
        name: "Weight",
        icon: <Weight />,
      },
      {
        name: "Filter",
        icon: <Filter />,
      },
      {
        name: "FilterSquare",
        icon: <FilterSquare />,
      },
      {
        name: "Sound",
        icon: <Sound />,
      },
      {
        name: "Story",
        icon: <Story />,
      },
      {
        name: "Slider",
        icon: <Slider />,
      },
      {
        name: "Status",
        icon: <Status />,
      },
      {
        name: "WifiSquare",
        icon: <WifiSquare />,
      },
      {
        name: "Box2",
        icon: <Box2 />,
      },
      {
        name: "TrushSquare",
        icon: <TrushSquare />,
      },
      {
        name: "Wifi",
        icon: <Wifi />,
      },
      {
        name: "Speedometer",
        icon: <Speedometer />,
      },
      {
        name: "Diamonds",
        icon: <Diamonds />,
      },
      {
        name: "Judge",
        icon: <Judge />,
      },
      {
        name: "Level",
        icon: <Level />,
      },
      {
        name: "Lamp",
        icon: <Lamp />,
      },
      {
        name: "Tree",
        icon: <Tree />,
      },
      {
        name: "Bubble",
        icon: <Bubble />,
      },
      {
        name: "Mirror",
        icon: <Mirror />,
      },
      {
        name: "TagRight",
        icon: <TagRight />,
      },
      {
        name: "Milk",
        icon: <Milk />,
      },
      {
        name: "Ghost",
        icon: <Ghost />,
      },
      {
        name: "Ranking",
        icon: <Ranking />,
      },
      {
        name: "MouseSquare",
        icon: <MouseSquare />,
      },
      {
        name: "MouseCircle",
        icon: <MouseCircle />,
      },
      {
        name: "Mouse",
        icon: <Mouse />,
      },
      {
        name: "Forbidden",
        icon: <Forbidden />,
      },
      {
        name: "Forbidden2",
        icon: <Forbidden2 />,
      },
      {
        name: "Warning2",
        icon: <Warning2 />,
      },
      {
        name: "Broom",
        icon: <Broom />,
      },
      {
        name: "Signpost",
        icon: <Signpost />,
      },
      {
        name: "FilterRemove",
        icon: <FilterRemove />,
      },
      {
        name: "FilterAdd",
        icon: <FilterAdd />,
      },
      {
        name: "FilterSearch",
        icon: <FilterSearch />,
      },
      {
        name: "FilterEdit",
        icon: <FilterEdit />,
      },
      {
        name: "FilterTick",
        icon: <FilterTick />,
      },
      {
        name: "Home",
        icon: <Home />,
      },
      {
        name: "SmartHome",
        icon: <SmartHome />,
      },
      {
        name: "HomeWifi",
        icon: <HomeWifi />,
      },
      {
        name: "SafeHome",
        icon: <SafeHome />,
      },
    ],
  },
  {
    title: "Support, Like, Question",
    icons: [
      {
        name: "Star",
        icon: <Star />,
      },
      {
        name: "StarSlash",
        icon: <StarSlash />,
      },
      {
        name: "Heart",
        icon: <Heart />,
      },
      {
        name: "Like",
        icon: <Like />,
      },
      {
        name: "Dislike",
        icon: <Dislike />,
      },
      {
        name: "Star1",
        icon: <Star1 />,
      },
      {
        name: "Ranking1",
        icon: <Ranking1 />,
      },
      {
        name: "MagicStar",
        icon: <MagicStar />,
      },
      {
        name: "HeartEdit",
        icon: <HeartEdit />,
      },
      {
        name: "HeartTick",
        icon: <HeartTick />,
      },
      {
        name: "HeartSearch",
        icon: <HeartSearch />,
      },
      {
        name: "HeartSlash",
        icon: <HeartSlash />,
      },
      {
        name: "HeartRemove",
        icon: <HeartRemove />,
      },
      {
        name: "HeartAdd",
        icon: <HeartAdd />,
      },
      {
        name: "Smileys",
        icon: <Smileys />,
      },
      {
        name: "LikeDislike",
        icon: <LikeDislike />,
      },
      {
        name: "LikeTag",
        icon: <LikeTag />,
      },
      {
        name: "C24Support",
        icon: <C24Support />,
      },
      {
        name: "LikeShapes",
        icon: <LikeShapes />,
      },
      {
        name: "MessageQuestion",
        icon: <MessageQuestion />,
      },
      {
        name: "MedalStar",
        icon: <MedalStar />,
      },
      {
        name: "Lovely",
        icon: <Lovely />,
      },
      {
        name: "Medal",
        icon: <Medal />,
      },
      {
        name: "Unlimited",
        icon: <Unlimited />,
      },
      {
        name: "Like1",
        icon: <Like1 />,
      },
      {
        name: "HeartCircle",
        icon: <HeartCircle />,
      },
    ],
  },
  {
    title: "Notification",
    icons: [
      {
        name: "NotificationBing",
        icon: <NotificationBing />,
      },
      {
        name: "Notification",
        icon: <Notification />,
      },
      {
        name: "Notification1",
        icon: <Notification1 />,
      },
      {
        name: "NotificationFavorite",
        icon: <NotificationFavorite />,
      },
      {
        name: "NotificationStatus",
        icon: <NotificationStatus />,
      },
      {
        name: "NotificationCircle",
        icon: <NotificationCircle />,
      },
      {
        name: "LampOn",
        icon: <LampOn />,
      },
      {
        name: "LampCharge",
        icon: <LampCharge />,
      },
      {
        name: "LampSlash",
        icon: <LampSlash />,
      },
    ],
  },
  {
    title: "Setting",
    icons: [
      {
        name: "Category",
        icon: <Category />,
      },
      {
        name: "Category2",
        icon: <Category2 />,
      },
      {
        name: "Setting",
        icon: <Setting />,
      },
      {
        name: "Setting2",
        icon: <Setting2 />,
      },
      {
        name: "Setting3",
        icon: <Setting3 />,
      },
      {
        name: "Setting4",
        icon: <Setting4 />,
      },
      {
        name: "Setting5",
        icon: <Setting5 />,
      },
      {
        name: "More",
        icon: <More />,
      },
      {
        name: "More2",
        icon: <More2 />,
      },
      {
        name: "ToggleOff",
        icon: <ToggleOff />,
      },
      {
        name: "ToggleOn",
        icon: <ToggleOn />,
      },
      {
        name: "ToggleOffCircle",
        icon: <ToggleOffCircle />,
      },
      {
        name: "ToggleOnCircle",
        icon: <ToggleOnCircle />,
      },
      {
        name: "Menu1",
        icon: <Menu1 />,
      },
      {
        name: "Candle",
        icon: <Candle />,
      },
      {
        name: "Settings",
        icon: <Settings />,
      },
      {
        name: "Candle2",
        icon: <Candle2 />,
      },
    ],
  },
  {
    title: "Archive",
    icons: [
      {
        name: "ArchiveTick",
        icon: <ArchiveTick />,
      },
      {
        name: "Archive1",
        icon: <Archive1 />,
      },
      {
        name: "ArchiveSlash",
        icon: <ArchiveSlash />,
      },
      {
        name: "ArchiveAdd",
        icon: <ArchiveAdd />,
      },
      {
        name: "ArchiveMinus",
        icon: <ArchiveMinus />,
      },
      {
        name: "ReceiptSquare",
        icon: <ReceiptSquare />,
      },
      {
        name: "BookSquare",
        icon: <BookSquare />,
      },
      {
        name: "Save2",
        icon: <Save2 />,
      },
      {
        name: "SaveAdd",
        icon: <SaveAdd />,
      },
      {
        name: "SaveMinus",
        icon: <SaveMinus />,
      },
      {
        name: "SaveRemove",
        icon: <SaveRemove />,
      },
      {
        name: "BookSaved",
        icon: <BookSaved />,
      },
    ],
  },
  {
    title: "Time",
    icons: [
      {
        name: "Timer",
        icon: <Timer />,
      },
      {
        name: "Clock",
        icon: <Clock />,
      },
      {
        name: "Timer1",
        icon: <Timer1 />,
      },
      {
        name: "TimerPause",
        icon: <TimerPause />,
      },
      {
        name: "TimerStart",
        icon: <TimerStart />,
      },
      {
        name: "SecurityTime",
        icon: <SecurityTime />,
      },
      {
        name: "Calendar",
        icon: <Calendar />,
      },
      {
        name: "CalendarTick",
        icon: <CalendarTick />,
      },
      {
        name: "CalendarSearch",
        icon: <CalendarSearch />,
      },
      {
        name: "CalendarRemove",
        icon: <CalendarRemove />,
      },
      {
        name: "CalendarAdd",
        icon: <CalendarAdd />,
      },
      {
        name: "CalendarEdit",
        icon: <CalendarEdit />,
      },
      {
        name: "Calendar2",
        icon: <Calendar2 />,
      },
      {
        name: "CalendarCircle",
        icon: <CalendarCircle />,
      },
      {
        name: "Calendar1",
        icon: <Calendar1 />,
      },
    ],
  },
  {
    title: "Computer, Devices, Electronic",
    icons: [
      {
        name: "Cpu",
        icon: <Cpu />,
      },
      {
        name: "Printer",
        icon: <Printer />,
      },
      {
        name: "PrinterSlash",
        icon: <PrinterSlash />,
      },
      {
        name: "CpuCharge",
        icon: <CpuCharge />,
      },
      {
        name: "CpuSetting",
        icon: <CpuSetting />,
      },
      {
        name: "Monitor",
        icon: <Monitor />,
      },
      {
        name: "MonitorRecorder",
        icon: <MonitorRecorder />,
      },
      {
        name: "MonitorMobbile",
        icon: <MonitorMobbile />,
      },
      {
        name: "Headphone",
        icon: <Headphone />,
      },
      {
        name: "Airpod",
        icon: <Airpod />,
      },
      {
        name: "Speaker",
        icon: <Speaker />,
      },
      {
        name: "Driver",
        icon: <Driver />,
      },
      {
        name: "Driver2",
        icon: <Driver2 />,
      },
      {
        name: "DriverRefresh",
        icon: <DriverRefresh />,
      },
      {
        name: "CloudAdd",
        icon: <CloudAdd />,
      },
      {
        name: "CloudRemove",
        icon: <CloudRemove />,
      },
      {
        name: "ExternalDrive",
        icon: <ExternalDrive />,
      },
      {
        name: "CloudConnection",
        icon: <CloudConnection />,
      },
      {
        name: "MusicPlay",
        icon: <MusicPlay />,
      },
      {
        name: "Devices1",
        icon: <Devices1 />,
      },
      {
        name: "Airpods",
        icon: <Airpods />,
      },
      {
        name: "Headphones",
        icon: <Headphones />,
      },
      {
        name: "FolderConnection",
        icon: <FolderConnection />,
      },
      {
        name: "Game",
        icon: <Game />,
      },
      {
        name: "Weight1",
        icon: <Weight1 />,
      },
      {
        name: "Keyboard",
        icon: <Keyboard />,
      },
      {
        name: "Mouse1",
        icon: <Mouse1 />,
      },
      {
        name: "Clock1",
        icon: <Clock1 />,
      },
      {
        name: "Ram",
        icon: <Ram />,
      },
      {
        name: "Ram2",
        icon: <Ram2 />,
      },
      {
        name: "Simcard",
        icon: <Simcard />,
      },
      {
        name: "Simcard2",
        icon: <Simcard2 />,
      },
      {
        name: "Lamp1",
        icon: <Lamp1 />,
      },
      {
        name: "Mobile",
        icon: <Mobile />,
      },
      {
        name: "Electricity",
        icon: <Electricity />,
      },
      {
        name: "MirroringScreen",
        icon: <MirroringScreen />,
      },
      {
        name: "Microscope",
        icon: <Microscope />,
      },
      {
        name: "Simcard1",
        icon: <Simcard1 />,
      },
      {
        name: "KeyboardOpen",
        icon: <KeyboardOpen />,
      },
      {
        name: "Airdrop",
        icon: <Airdrop />,
      },
      {
        name: "Gameboy",
        icon: <Gameboy />,
      },
      {
        name: "Watch",
        icon: <Watch />,
      },
      {
        name: "WatchStatus",
        icon: <WatchStatus />,
      },
      {
        name: "Bluetooth",
        icon: <Bluetooth />,
      },
      {
        name: "Bluetooth2",
        icon: <Bluetooth2 />,
      },
      {
        name: "BluetoothCircle",
        icon: <BluetoothCircle />,
      },
      {
        name: "BluetoothRectangle",
        icon: <BluetoothRectangle />,
      },
      {
        name: "CloudChange",
        icon: <CloudChange />,
      },
    ],
  },
  {
    title: "Call",
    icons: [
      {
        name: "Call",
        icon: <Call />,
      },
      {
        name: "CallCalling",
        icon: <CallCalling />,
      },
      {
        name: "CallIncoming",
        icon: <CallIncoming />,
      },
      {
        name: "CallOutgoing",
        icon: <CallOutgoing />,
      },
      {
        name: "CallAdd",
        icon: <CallAdd />,
      },
      {
        name: "CallMinus",
        icon: <CallMinus />,
      },
      {
        name: "CallRemove",
        icon: <CardRemove />,
      },
      {
        name: "CallReceived",
        icon: <CallReceived />,
      },
      {
        name: "CallSlash",
        icon: <CallSlash />,
      },
    ],
  },
  {
    title: "Business",
    icons: [
      {
        name: "ChartSuccess",
        icon: <ChartSuccess />,
      },
      {
        name: "ChartFail",
        icon: <ChartFail />,
      },
      {
        name: "Chart2",
        icon: <Chart2 />,
      },
      {
        name: "Graph",
        icon: <Graph />,
      },
      {
        name: "Activity",
        icon: <Activity />,
      },
      {
        name: "HomeTrendUp",
        icon: <HomeTrendUp />,
      },
      {
        name: "HomeTrendDown",
        icon: <HomeTrendDown />,
      },
      {
        name: "HomeHashtag",
        icon: <HomeHashtag />,
      },
      {
        name: "TrendUp",
        icon: <TrendUp />,
      },
      {
        name: "TrendDown",
        icon: <TrendDown />,
      },
      {
        name: "Hashtag1",
        icon: <Hashtag1 />,
      },
      {
        name: "Chart1",
        icon: <Chart1 />,
      },
      {
        name: "Personalcard",
        icon: <Personalcard />,
      },
      {
        name: "StatusUp",
        icon: <StatusUp />,
      },
      {
        name: "Diagram",
        icon: <Diagram />,
      },
      {
        name: "PresentionChart",
        icon: <PresentionChart />,
      },
      {
        name: "Chart3",
        icon: <Chart3 />,
      },
      {
        name: "Chart21",
        icon: <Chart21 />,
      },
      {
        name: "Health",
        icon: <Health />,
      },
      {
        name: "FavoriteChart",
        icon: <FavoriteChart />,
      },
    ],
  },
  {
    title: "Security",
    icons: [
      {
        name: "Building",
        icon: <Building />,
      },
      {
        name: "Courthouse",
        icon: <Courthouse />,
      },
      {
        name: "House",
        icon: <House />,
      },
      {
        name: "House2",
        icon: <House2 />,
      },
      {
        name: "Buildings",
        icon: <Buildings />,
      },
      {
        name: "Bank",
        icon: <Bank />,
      },
      {
        name: "Buildings2",
        icon: <Buildings2 />,
      },
      {
        name: "Building3",
        icon: <Building3 />,
      },
      {
        name: "Building4",
        icon: <Building4 />,
      },
      {
        name: "Hospital",
        icon: <Hospital />,
      },
    ],
  },
  {
    title: "Astrology",
    icons: [
      {
        name: "Aquarius",
        icon: <Aquarius />,
      },
      {
        name: "Gemini",
        icon: <Gemini />,
      },
      {
        name: "Gemini2",
        icon: <Gemini2 />,
      },
      {
        name: "Sagittarius",
        icon: <Sagittarius />,
      },
      {
        name: "Man",
        icon: <Man />,
      },
      {
        name: "Woman",
        icon: <Woman />,
      },
    ],
  },
  {
    title: "Search",
    icons: [
      {
        name: "SearchNormal",
        icon: <SearchNormal />,
      },
      {
        name: "SearchZoomIn",
        icon: <SearchZoomIn />,
      },
      {
        name: "SearchZoomOut",
        icon: <SearchZoomOut />,
      },
      {
        name: "SearchFavorite",
        icon: <SearchFavorite />,
      },
      {
        name: "SearchStatus",
        icon: <SearchStatus />,
      },
      {
        name: "SearchNormal1",
        icon: <SearchNormal1 />,
      },
      {
        name: "SearchZoomIn1",
        icon: <SearchZoomIn1 />,
      },
      {
        name: "SearchZoomOut1",
        icon: <SearchZoomOut1 />,
      },
      {
        name: "SearchFavorite1",
        icon: <SearchFavorite1 />,
      },
      {
        name: "SearchStatus1",
        icon: <SearchStatus1 />,
      },
    ],
  },
];
