import { adminRoutes } from '../../../../core/config/routes.config'
import type { HeaderMenuItem } from './header.interfaces'

export const headerMenu: HeaderMenuItem[] = [{ title: 'Ребусы', url: adminRoutes.puzzles.index() }]
