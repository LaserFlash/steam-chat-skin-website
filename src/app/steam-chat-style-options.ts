export class SteamChatStyleOption {
  public title: string;
  public oFriendsSupport?: boolean;

  public options: Array<{
    displayName: string;
    shortName: string;
    importLine: string;
    oFriendsImport?: string;
  }>;
}

export class SteamChatStyleOptionSelectable extends SteamChatStyleOption {
  public selectedOptionIndex = 0;
}

export const friendsBaseImport = 'https://ccss.lasr.dev/src/baseTheme.css';

export const oFriendsBaseImport =
  'https://ccss.lasr.dev/offlineFriends/offlineFriends.css';

export const SteamChatCustomisationOptions: SteamChatStyleOptionSelectable[] = [
  {
    title: 'Theme Colour',
    oFriendsSupport: true,
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Discord Colours',
        shortName: 'DiscordColour',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/colourSet/discordColours.css',
      },
      {
        displayName: 'Dark Theme',
        shortName: 'DarkColour',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/colourSet/darkMode.css',
      },
      {
        displayName: 'Black Theme',
        shortName: 'BlackColour',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/colourSet/blackMode.css',
      },
      {
        displayName: 'Steam Like',
        shortName: 'SteamColours',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/colourSet/steamColours.css',
      },
      {
        displayName: 'Light Theme',
        shortName: 'LightColour',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/colourSet/lightMode.css',
      },
    ],
  },
  {
    title: 'Avatar Shape',
    oFriendsSupport: true,
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Round Avatar',
        shortName: 'RoundAvatar',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarStyle/roundAvatar.css',
        oFriendsImport:
          'https://ccss.lasr.dev/offlineFriends/avatarStyle/roundAvatar.css',
      },
      {
        displayName: 'Squircle Avatar',
        shortName: 'SquircleAvatar',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarStyle/squircleAvatar.css',
        oFriendsImport:
          'https://ccss.lasr.dev/offlineFriends/avatarStyle/squircleAvatar.css',
      },
      {
        displayName: 'Square Avatar',
        shortName: 'SquareAvatar',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarStyle/squareAvatar.css',
        oFriendsImport:
          'https://ccss.lasr.dev/offlineFriends/avatarStyle/squareAvatar.css',
      },
    ],
  },
  {
    title: 'Status Style',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Discord Styled',
        shortName: 'DiscordStatus',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarStatus/discordStatus.css',
      },
      {
        displayName: 'Outline Status',
        shortName: 'OutlineStatus',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarStatus/outlineStatus.css',
      },
      { displayName: 'Steam Default', shortName: '', importLine: '' },
    ],
  },
  {
    title: 'MiniProfile Blur',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Blur On',
        shortName: 'MiniBlur',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/miniProfile/miniProfileBlur.css',
      },
      {
        displayName: 'Blur Off',
        shortName: 'MiniNoBlur',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/miniProfile/miniProfileSolid.css',
      },
    ],
  },
  {
    title: 'Status Glow',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Themed Glow',
        shortName: 'themedGlow',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/statusGlow/themedGlow.css',
      },
      {
        displayName: 'No Glow',
        shortName: 'noGlow',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/statusGlow/noGlow.css',
      },
      { displayName: 'Steam Default', shortName: '', importLine: '' },
    ],
  },
  {
    title: 'Shadow Effects',
    oFriendsSupport: true,
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Improved Shadows',
        shortName: 'improvedShadows',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/shadowEffects/improvedShadow.css',
        oFriendsImport:
          'https://ccss.lasr.dev/offlineFriends/shadowEffects/improvedShadow.css',
      },
      {
        displayName: 'No Shadows',
        shortName: 'noShadow',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/shadowEffects/noShadow.css',
        oFriendsImport:
          'https://ccss.lasr.dev/offlineFriends/shadowEffects/noShadow.css',
      },
      { displayName: 'Steam Default', shortName: '', importLine: '' },
    ],
  },
  {
    title: 'Steam Avatar Frames',
    selectedOptionIndex: 0,
    options: [
      { displayName: 'Enable', shortName: 'enable', importLine: '' },
      {
        displayName: 'Disable',
        shortName: 'disable',
        importLine:
          'https://ccss.lasr.dev/src/css/customisable/avatarFrame/disable.css',
      },
    ],
  },
];
