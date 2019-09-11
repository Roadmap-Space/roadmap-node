interface IKeyValue {
  text: string;
  value: any;
}

interface IUser {
  id: string;
  first: string;
  last: string;
  email: string;
  gravatar: string;
}

interface IRoadmap {
  id: string;
  accountId: string;
  name: string;
  website?: string;
  subDomain?: string;
  domain?: string;
  color?: string;
  altColor?: string;
  css?: string;
  header?: string;
  footer?: string;
  title?: string;
  desc?: string;
  about?: string;
  logo?: string;
  favicon?: string;
  from?: string;
  replyTo?: string;
  subject?: string;
  body?: string;
  analytics?: string;
  newDays?: number;
  categories?: Array<string>;
  teams?: Array<string>;
  tags?: Array<string>;
  trello?: ITrello;
  github?: IGitHub;
  jira?: IJira;
  intercom?: IGitHub;
  slack?: IGitHub;
  custom?: Array<ICustomField>;
  private?: boolean;
  created?: Date;
  widget?: IWidgetOptions;
  pushTrigger?: number;
  emailNotifications?: IEmailNotificationOptions;
}

interface IMultiOverview {
  teams: Array<string>;
  objectives: Array<string>;
  items: Array<IItem>;
}

interface IWidgetOptions {
  type: number;
  text: string;
  title: string;
  feedback: string;
  submit: string;
  thanks: string;
  primary: string;
  alt: string;
  emoji: string;
  wl?: boolean;
  ad?: string;
}

interface ITrello {
  token: string;
  boardId: string;
  pushId: string;
  doneId: string;
}

interface IGitHub {
  token: string;
  owner: string;
  repo: string;
}

interface IEmailNotificationOptions {
  isAuto: boolean;
  name: string;
  feedbackAttached: boolean;
  toIdea: boolean;
  ideaCompleted: boolean;
  toStory: boolean;
  ideaConverted: boolean;
  statusChanged: boolean;
  storyCompleted: boolean;
}

interface IJira {
  url: string;
  projectId: string;
}

interface ICustomField {
  id: string;
  name: string;
  type: number;
}

interface IItem {
  attached: Array<IItem>;
  category: string;
  clap?: number;
  column?: number;
  comments: Array<IComment>;
  commentsCount: number;
  completed?: boolean;
  completedOn?: Date;
  created: Date;
  custom?: any;
  deleted?: Date;
  desc: string;
  descHtml?: string;
  effort?: number;
  hidden: boolean;
  id: string;
  isDeleted?: boolean;
  isNew?: boolean;
  lastUpdated?: string;
  like?: number;
  mockups: Array<IMockup>;
  objectives?: Array<string>;
  order: number;
  owner: IOwner;
  pmStates: { [key: string]: any };
  published?: boolean;
  revenue?: number;
  roadmapId: string;
  screenshot?: string;
  subscribers?: Array<ISubscriber>;
  subscribersCount?: number;
  tags?: Array<string>;
  //tasks: Array<ITask>;
  team?: string;
  title: string;
  token?: string;
  type: number;
  updated: Date;
  value?: number;
  /*
  id: string;
  roadmapId: string;
  category: string;
  type: number;
  column?: number;
  title: string;
  desc: string;
  descHtml?: string;
  hidden: boolean;
  order: number;
  completed?: boolean;
  completedOn?: Date;
  subscribers?: Array<ISubscriber>;
  clap?: number;
  subscribersCount?: number;
  revenue?: number;
  token?: string;
  team?: string;
  like?: number;
  comments: Array<IComment>;
  value?: number;
  effort?: number;
  tasks: Array<ITask>;
  mockups: Array<IMockup>;
  owner: IOwner;
  tags?: Array<string>;
  published?: boolean;
  custom?: any;
  created: Date;
  updated: Date;
  deleted?: Date;
  isDeleted?: boolean;
  lastUpdated?: string;
  screenshot: string;
  // helpers
  objectives?: Array<string>;

   */
}

interface IOwner {
  userId?: string;
  email?: string;
  first: string;
  last: string;
  avatar: string;
  via: string;
  link: string;
  original: string;
}

interface ISubscriber {
  id: string;
  first: string;
  last: string;
  email: string;
  via?: string;
  link?: string;
  original?: string;
  created: Date;
  isInternal?: boolean;
  isInfluencer?: boolean;

  // this is filled only when on subscriber list after calling the matchSubscribers of app user
  user?: IAppUser;
}

interface IComment {
  id: string;
  userId: string;
  type: number;
  name: string;
  gravatar: string;
  body: string;
  extra: any;
  created: Date;
}

interface ITask {
  id: string;
  title: string;
  done: boolean;
  assign: string;
  g: string;
  created: Date;
  completed?: Date;
  trelloId?: string;
  ghId?: number;
  jiraId?: string;
  ideaId?: string;
  subCount?: number;
  revenue?: number;
  value?: number;
  effort?: number;
  objective?: string;
  team?: string;
}

interface IMockup {
  id: string;
  title: string;
  url: string;
  featured: boolean;
}

interface IRoadmapStats {
  ideas: number;
  items: number;
  hasIntegrations: boolean;
  invitedTeam;
}

interface IRoadmapOptions {
  id: string;
  analytics: string;
  displayNew: number;
  categories: Array<string>;
  teams: Array<string>;
}

interface IPostComment {
  itemId: string;
  roadmapId: string;
  comment: string;
}

interface IAttachTo {
  roadmapId: string;
  parentId: string;
  id: string;
  token: string;
}

interface IItemFilterOptions {
  query?: string;
  sortBy?: number;
  customSort?: ICustomField;
  customSortDescending?: boolean;
  filterBy?: string;
  customFields?: Array<ICustomField>;
  scrollPos?: number;
}

interface IDataEntry {
  processing?: boolean;
  success?: boolean;
  successMessage?: string;
  hasError?: boolean;
  errorMessage?: string;
}

interface INotification {
  id: string;
  accountId: string;
  roadmapId: string;
  userId: string;
  notification: boolean;
  type: number;
  event: string;
  subject: IUser;
  owner: IUser;
  item: IItem;
  extra: any;
  seen: boolean;
  created: Date;
}

interface IParentFromAttached {
  id: string;
  token: string;
  title: string;
  type: number;
}

interface IPhotoSwipeImage {
  src: string;
  w: string;
  h: string;
  title?: string;
  msrc?: string;
}

interface IDashboardTimeFrame {
  today: number;
  lastWeek: number;
  lastMonth: number;
}

interface IItemEngagement {
  id: string;
  itemId: string;
  roadmapId: string;
  identity: string;
  isLike: boolean;
  isClap: boolean;
  occured: Date;
}

interface IDashboardEngagement {
  claps: any;
  comments: any;
  follows: any;
  likes: any;
}

interface IDashboard {
  latestFeedback: Array<IItem>;
  topIdeas: Array<IItem>;
  feedback: IDashboardTimeFrame;
  ideas: IDashboardTimeFrame;
  likes: IDashboardTimeFrame;
  claps: IDashboardTimeFrame;
  comments: IDashboardTimeFrame;
  followers: IDashboardTimeFrame;
  current: Array<IItem>;
  launched: Array<IItem>;
  engagement: IDashboardEngagement;
  ideaObjectives: { [key: string]: number };
  storyObjectives: { [key: string]: number };
  currentObjectives: { [key: string]: number };
  soonObjectives: { [key: string]: number };
  futureObjectives: { [key: string]: number };
  roadmapObjectives: { [key: string]: number };
  allIdeaObjectives: { [key: string]: number };
  storyIdeaObjectives: { [key: string]: number };
}

interface IAppUserEngagementMetric {
  previous: number;
  current: number;
  pct: number;
}

interface IAppUserEngagement {
  sessions: IAppUserEngagementMetric;
  feedback: IAppUserEngagementMetric;
  claps: IAppUserEngagementMetric;
  follows: IAppUserEngagementMetric;
  totalChanges: number;
}

interface IAppUserActivity {
  id: string;
  from: string;
  avatar: string;
  event: string;
  item: IItem;
  extra: any;
  created: Date;
}

interface IAppUser {
  id: string;
  accountId: string;
  via: string;
  roadmaps: Array<string>;
  userId: string;
  firstSeen: Date;
  lastSeen: Date;
  session: number;
  first: string;
  last: string;
  email: string;
  revenue: number;
  clap: number;
  following: number;
  feedback: number;
  company: string;
  custom: any;
  engagements: IAppUserEngagement;
  activities: Array<IAppUserActivity>;
  tags: Array<string>;
  created: Date;
  updated: Date;
  isDeleted: boolean;
  deleted: Date;
}

interface IAppUserDetail {
  user: IAppUser;
  following: Array<IItem>;
}

interface IAppUserSendEmail {
  isTest: boolean;
  testEmail?: string;
  roadmapId: string;
  itemId: string;
  token: string;
  // userIds is an array of all app user id that was targeted by the segment
  userIds: Array<string>;
  subject: string;
  body: string;
}

interface IExtraEmailResult {
  s: string; // subject
  b: string; // body
  f: Array<string>; // followers => array of app user id
  o: number; // open
  c: number; // click
  u: number; // unsubscribe
}

interface IAppUserFindIdbyEmail {
  id: string;
  found: boolean;
}

interface IStatusOverlay {
  type: number;
  message: string;
  title?: string;
  manualDismiss?: boolean;
  hasUndo?: boolean;
  hideIcon?: boolean;
}

interface IItemEngagementsParams {
  itemId: string;
  roadmapId: string;
  isClap: boolean;
  isLike: boolean;
}

interface IFeedbackAttachToParams {
  sourceId: string;
  sourceToken: string;
  parentId: string;
  parentToken: string;
}
