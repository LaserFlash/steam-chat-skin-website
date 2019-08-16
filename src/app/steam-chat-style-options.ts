export class SteamChatStyleOption {
  title: string;
  options: { displayName: string; shortName: string; importLine: string }[];
}

export class SteamChatStyleOptionSelectable extends SteamChatStyleOption {
  selectedOptionIndex = 0;
}

export const SteamChatCustomisationOptions: SteamChatStyleOptionSelectable[] = [
  {
    title: "Theme Colour",
    selectedOptionIndex: 0,
    options: [
      {
        displayName: "Discord Colours",
        shortName: "DiscordColour",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/colourSet/discordColours.css"
      },
      {
        displayName: "Dark Theme",
        shortName: "DarkColour",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/colourSet/darkMode.css"
      },
      {
        displayName: "Light Theme",
        shortName: "LightColour",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/colourSet/lightMode.css"
      }
    ]
  },
  {
    title: "Avatar Shape",
    selectedOptionIndex: 0,
    options: [
      {
        displayName: "Round Avatar",
        shortName: "RoundAvatar",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/avatarStyle/roundAvatar.css"
      },
      {
        displayName: "Squircle Avatar",
        shortName: "SquircleAvatar",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/avatarStyle/squircleAvatar.css"
      },
      {
        displayName: "Square Avatar",
        shortName: "SquareAvatar",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/avatarStyle/squareAvatar.css"
      }
    ]
  },
  {
    title: "Status Style",
    selectedOptionIndex: 0,
    options: [
      {
        displayName: "Discord Styled",
        shortName: "DiscordStatus",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/avatarStatus/discordStatus.css"
      },
      {
        displayName: "Outline Status",
        shortName: "OutlineStatus",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/avatarStatus/outlineStatus.css"
      },
      { displayName: "Steam Default", shortName: "", importLine: "" }
    ]
  },
  {
    title: "MiniProfile Blur",
    selectedOptionIndex: 0,
    options: [
      {
        displayName: "Blur On",
        shortName: "MiniBlur",
        importLine:
          "https://laserflash.tk/steam-friends-skin/src/css/customisable/miniProfile/miniProfileBlur.css"
      },
      { displayName: "Blur Off", shortName: "", importLine: "" }
    ]
  }
];
