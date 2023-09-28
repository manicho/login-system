import { Module } from '@nestjs/common';
import { ResetController } from './reset.controller';
import { ResetService } from './reset.service';
import { Reset } from './reset.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MailerModule } from '@nestjs-modules/mailer';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reset]),
    // MailerModule.forRoot({
    //   // configure this with the smtp service you choose
    //   transport: {
    //     host: 'smtp.example.com',
    //     secure: false,
    //     auth: {
    //       user: 'user@example.com',
    //       pass: 'topsecret',
    //     },
    //   },
    //   defaults: {
    //     from: '"No Reply" <noreply@example.com>',
    //   },
    // }),
    UserModule,
  ],
  controllers: [ResetController],
  providers: [ResetService],
})
export class ResetModule {}
