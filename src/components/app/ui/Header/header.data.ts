import { appRoutes } from '../../../../core/config/routes.config'
import type { HeaderMenuItem } from './header.interfaces'

export const headerMenu: HeaderMenuItem[] = [{ title: 'Ребусы', url: appRoutes.rebuses.index() }]
