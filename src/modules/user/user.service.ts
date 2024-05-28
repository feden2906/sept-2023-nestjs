import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity } from '../../database/entities/user.entity';
import { LoggerService } from '../logger/logger.service';
import { UserRepository } from '../repository/services/user.repository';
import { CreateUserReqDto } from './dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly logger: LoggerService,
    private readonly userRepository: UserRepository,
  ) {}

  public async create(createUserDto: CreateUserReqDto): Promise<any> {
    return await this.userRepository.save({
      email: 'asdfd',
      password: 'asdf',
      name: 'asdf',
    });
  }

  public async findAll(): Promise<any> {
    return `This action returns all user`;
  }

  public async findOne(id: string): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async update(
    id: string,
    updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async remove(id: string): Promise<any> {
    return `This action removes a #${id} user`;
  }
}
