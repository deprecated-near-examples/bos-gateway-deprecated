export const NetworkId = "testnet" // "mainnet";

export const signInContractId =
  NetworkId === "testnet" ? "v1.social08.testnet" : "social.near";

export const networks = {
  mainnet: {
    networkId: "mainnet",
    viewAccountId: "near",
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
  },
  testnet: {
    networkId: "testnet",
    viewAccountId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
  },
  localnet: {
    networkId: "localnet",
    viewAccountId: "test.near",
  },
};

const TestnetWidgets = {
  homePage: "named-account.testnet/widget/HomeTest",
  LoggedPage: "named-account.testnet/widget/HomeTestLogged",
  profileImage: "eugenethedream/widget/ProfileImage",
  profilePage: "eugenethedream/widget/ProfileEditor",
  profileName: "eugenethedream/widget/ProfileName",
  notificationButton: "one.testnet/widget/NotificationButton",
  notificationsPage: "one.testnet/widget/NotificationsPage",
};

const MainnetWidgets = {
  image: "mob.near/widget/Image",
  default: "simplar.near/widget/Main",
  viewSource: "mob.near/widget/WidgetSource",
  widgetMetadataEditor: "near/widget/WidgetMetadataEditor",
  widgetMetadata: "mob.near/widget/WidgetMetadata",
  profileImage: "dev-support.near/widget/ProfileImage",
  profileName: "patrick.near/widget/ProfileName",
  editorComponentSearch: "mob.near/widget/Editor.ComponentSearch",
  profileInlineBlock: "mob.near/widget/Profile.InlineBlock",
  componentsPage: "near/widget/ComponentsPage",
  peoplePage: "near/widget/PeoplePage",
  notificationButton: "near/widget/NotificationButton",
  profilePage: "near/widget/ProfilePage",
  componentSummary: "near/widget/ComponentSummary",
  notificationsPage: "near/widget/NotificationsPage",
  tosCheck: "near/widget/TosCheck",
  tosContent: "adminalpha.near/widget/TosContent",
  wrapper: "near/widget/DIG.Theme",
  bosDirectory: "onboarder.near/widget/BOSDirectory",
  nearOrg: {
    homePage: "near/widget/NearOrg.HomePage",
  },
};

export const Widgets =
  NetworkId === "testnet" ? TestnetWidgets : MainnetWidgets;
