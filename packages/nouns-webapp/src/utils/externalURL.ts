export enum ExternalURL {
  discord,
  twitter,
  notion,
  telegram,
  email,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.discord:
      return 'https://discord.gg/Mmdp4dbmRh';
    case ExternalURL.twitter:
      return 'https://twitter.com/Daononame';
    case ExternalURL.notion:
      return 'https://nonamedao.com';
    case ExternalURL.telegram:
      return 'https://t.me/nonamedao';
    case ExternalURL.email:
      return 'mailto:hi@nonamedao.com';
  }
};
