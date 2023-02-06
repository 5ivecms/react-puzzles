import { baseBrowseRoutes } from '../../../../core/config/routes.config'
import type { HeaderMenuItem } from './header.interfaces'

export const headerMenu: HeaderMenuItem[] = [
  { title: 'Игры', url: baseBrowseRoutes.index() },
  { title: 'Титулы', url: baseBrowseRoutes.titles() },
  { title: 'Алмазы', url: baseBrowseRoutes.diamonds() },
  { title: 'Акция', url: baseBrowseRoutes.promo() },
]
