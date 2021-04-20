import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    ),
  ],
})
export class AppModule {}
