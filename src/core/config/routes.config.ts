export const baseBrowseRoutes = {
  diamonds: (): string => '/diamonds',
  index: (): string => `/`,
  login: (): string => '/login',
  notFound: (): string => `*`,
  promo: (): string => '/promo',
  titles: (): string => '/titles',
}

export const appRoutes = {
  charades: {
    index: (): string => `/game/charade`,
    view: (id: number | string = ':charadeId'): string => `/game/charade/${id}`,
  },
  pictures: {
    index: (): string => `/game/picture`,
    view: (id: number | string = ':pictureId'): string => `/game/picture/${id}`,
  },
  rebuses: {
    index: (): string => `/game/rebus`,
    view: (id: number | string = ':rebusId'): string => `/game/rebus/${id}`,
  },
  riddles: {
    index: (): string => `/game/riddle`,
    view: (id: number | string = ':riddleId'): string => `/game/riddle/${id}`,
  },
  telepaths: {
    index: (): string => `/game/telepath`,
    view: (id: number | string = ':telepathId'): string => `/game/telepath/${id}`,
  },
}

export const adminRoutes = {
  main: {
    home: (): string => `/admin`,
  },
  puzzles: {
    create: (): string => `/admin/puzzles/create`,
    index: (): string => `/admin/puzzles`,
    view: (id = ''): string => `/admin/puzzles/view/${id}`,
  },
}
