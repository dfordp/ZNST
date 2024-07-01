import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    password : string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.email, email: user.password};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}