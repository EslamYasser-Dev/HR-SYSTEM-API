import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'group';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
