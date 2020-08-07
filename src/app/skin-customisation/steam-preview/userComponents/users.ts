export type Status = 'ingame' | 'away' | 'online' | 'offline';

export interface User {
  name: string;
  image: string;
  status: Status[];
  nickname?: string;
  statusText?: string;
}

export const currentUser: User = {
  name: 'LaserFlash',
  image:
    'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a0/a09590824ce6e05560677ab513ac8a9a52c311fd_medium.jpg',
  status: ['online'],
};

export const ingameUsers: User[] = [
  {
    name: 'Rocktopus',
    nickname: 'A real human',
    image:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0e/0e13c8d6fc39b10022f06d51cf58824e1942c763_medium.jpg',
    status: ['ingame'],
    statusText: 'For Honor',
  },
  {
    name: 'MaoFace',
    nickname: 'A cat',
    image:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ed/ede51117cc29511eef00fd4e19cb6c800ff80dbc_medium.jpg',
    status: ['ingame', 'away'],
    statusText: 'Warframe',
  },
];

export const onlineUsers: User[] = [
  {
    name: 'Orangeboi',
    nickname: 'An orange',
    image:
      'https://cdn.pixabay.com/photo/2015/02/21/09/57/orange-644093_960_720.jpg',
    status: ['online'],
    statusText: 'Online',
  },
  {
    name: 'Gman',
    image:
      'https://vignette.wikia.nocookie.net/half-life/images/4/41/G-Man_Alyx_Trailer.jpg/revision/latest?cb=20191122020607&path-prefix=en',
    status: ['online'],
    statusText: 'Online',
  },
  {
    name: 'Wreap',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Orc_mask_by_GrimZombie.jpg',
    status: ['online', 'away'],
    statusText: 'Away',
  },
];

export const offlineUsers: User[] = [
  {
    name: 'Tukul',
    nickname: '',
    image:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00b74473078095669d0c099400dc1420364fba59_medium.jpg',
    status: ['offline'],
    statusText: 'Last online 12 days ago',
  },
  {
    name: 'Hazman',
    nickname: 'Harry',
    image:
      'https://instagram.fpmr1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104109250_692470461485813_1600622857120067904_n.jpg?_nc_ht=instagram.fpmr1-1.fna.fbcdn.net&_nc_ohc=_IuU6nGL7LIAX_BiSHA&oh=ac83aa0362b967793621012177432d2a&oe=5F54F46C',
    status: ['offline'],
    statusText: 'Last online 1 day and 2 hours ago',
  },
  {
    name: 'Banana',
    nickname: 'B1',
    image:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f6/f63f77a3f9f3794abd439657d7a87c2625198d87_medium.jpg',
    status: ['offline'],
    statusText: 'Last online 8 years ago',
  },
  {
    name: 'Red fruit',
    nickname: 'apple',
    image:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/17/17bb180d48b3dee0f63c1d65365d906996727d16_medium.jpg',
    status: ['offline'],
    statusText: 'Last online 8 years ago',
  },
];
