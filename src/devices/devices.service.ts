import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/db/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

export interface createDevice{
  consumption: string
  cost: string
  userid: string
}

@Injectable()
export class DevicesService {
  constructor(private prisma:PrismaService){
  }

  async create(data:createDevice) {
    const user=await this.prisma.users.findUnique({where: {id: data.userid}})
    data.cost = (Number(user.tax) * Number(data.consumption)).toString()
    return await this.prisma.devices.create({data})
  }

  async findAll() {
    return await this.prisma.devices.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.devices.findUnique({where:{id}})
  }

  async update(id: string, data:Prisma.DevicesUpdateInput) {
    return await this.prisma.devices.update({data, where:{id}})
  }

  async remove(id: string) {
    return await this.prisma.devices.delete({where: {id}})
  }
}
