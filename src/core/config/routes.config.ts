export const baseBrowseRoutes = {
  index: (): string => `/`,
  notFound: (): string => `*`,
}

export const appRoutes = {
  rebuses: {
    index: (): string => `/game/rebus`,
    view: (id: number | string = ':rebusId'): string => `/game/rebus/${id}`,
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
