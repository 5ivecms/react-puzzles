export const baseBrowseRoutes = {
  index: (): string => `/`,
  notFound: (): string => `*`,
}

export const appRoutes = {
  charades: {
    index: (): string => `/game/charade`,
    view: (id: number | string = ':charadeId'): string => `/game/charade/${id}`,
  },
  rebuses: {
    index: (): string => `/game/rebus`,
    view: (id: number | string = ':rebusId'): string => `/game/rebus/${id}`,
  },
  riddles: {
    index: (): string => `/game/riddle`,
    view: (id: number | string = ':riddleId'): string => `/game/riddle/${id}`,
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
