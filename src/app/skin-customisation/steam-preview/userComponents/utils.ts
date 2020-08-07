import { Status } from './users';

export const statusToClassNames = (status: Status[]): string => {
  return status
    .map((s) => {
      switch (s) {
        case 'online':
          return 'online';
        case 'ingame':
          return 'ingame';
        case 'away':
          return 'awayOrSnooze';
        case 'offline':
          return 'offline';
      }
    })
    .join(' ');
};

export const statusToDisplayName = (status: Status[]): string => {
  return status
    .map((s) => {
      switch (s) {
        case 'online':
          return 'Online';
        case 'ingame':
          return 'ingame';
        case 'away':
          return 'Away';
        case 'offline':
          return 'Offline';
      }
    })
    .join(' ');
};

export default { statusToClassNames, statusToDisplayName };
