export class SteamChatStyleOption {
  public title: string;

  public options: Array<{
    displayName: string;
    shortName: string;
    importLine: string;
  }>;
}

export class SteamChatStyleOptionSelectable extends SteamChatStyleOption {
  public selectedOptionIndex = 0;
}

export const friendsBaseImport = 'https://ccss.lasr.dev/friends-client/friends-client.css';

export const SteamChatCustomisationOptions: SteamChatStyleOptionSelectable[] = [
  {
    title: 'Theme Colour',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Discord Colours',
        shortName: 'DiscordColour',
        importLine:
          'https://ccss.lasr.dev/friends-client/colourSet/discordColours.css',
      },
      {
        displayName: 'Dark Theme',
        shortName: 'DarkColour',
        importLine:
          'https://ccss.lasr.dev/friends-client/colourSet/darkMode.css',
      },
      {
        displayName: 'Black Theme',
        shortName: 'BlackColour',
        importLine:
          'https://ccss.lasr.dev/friends-client/colourSet/blackMode.css',
      },
      {
        displayName: 'Steam Like',
        shortName: 'SteamColours',
        importLine:
          'https://ccss.lasr.dev/friends-client/colourSet/steamColours.css',
      },
      {
        displayName: 'Light Theme',
        shortName: 'LightColour',
        importLine:
          'https://ccss.lasr.dev/friends-client/colourSet/lightMode.css',
      },
    ],
  },
  {
    title: 'Avatar Shape',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Round Avatar',
        shortName: 'RoundAvatar',
        importLine:
          'https://ccss.lasr.dev/friends-cliente/avatarStyle/roundAvatar.css',
      },
      {
        displayName: 'Squircle Avatar',
        shortName: 'SquircleAvatar',
        importLine:
          'https://ccss.lasr.dev/friends-client/avatarStyle/squircleAvatar.css',
      },
      {
        displayName: 'Square Avatar',
        shortName: 'SquareAvatar',
        importLine:
          'https://ccss.lasr.dev/friends-client/avatarStyle/squareAvatar.css',
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
          'https://ccss.lasr.dev/friends-client/avatarStatus/discordStatus.css',
      },
      {
        displayName: 'Outline Status',
        shortName: 'OutlineStatus',
        importLine:
          'https://ccss.lasr.dev/friends-client/avatarStatus/outlineStatus.css',
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
          'https://ccss.lasr.dev/friends-client/miniProfile/miniProfileBlur.css',
      },
      {
        displayName: 'Blur Off',
        shortName: 'MiniNoBlur',
        importLine:
          'https://ccss.lasr.dev/friends-client/miniProfile/miniProfileSolid.css',
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
          'https://ccss.lasr.dev/friends-client/statusGlow/themedGlow.css',
      },
      {
        displayName: 'No Glow',
        shortName: 'noGlow',
        importLine:
          'https://ccss.lasr.dev/friends-client/statusGlow/noGlow.css',
      },
      { displayName: 'Steam Default', shortName: '', importLine: '' },
    ],
  },
  {
    title: 'Shadow Effects',
    selectedOptionIndex: 0,
    options: [
      {
        displayName: 'Improved Shadows',
        shortName: 'improvedShadows',
        importLine:
          'https://ccss.lasr.dev/friends-client/shadowEffects/improvedShadow.css',
      },
      {
        displayName: 'No Shadows',
        shortName: 'noShadow',
        importLine:
          'https://ccss.lasr.dev/friends-client/shadowEffects/noShadow.css',
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
          'https://ccss.lasr.dev/friends-client/avatarFrame/disable.css',
      },
    ],
  },
];
