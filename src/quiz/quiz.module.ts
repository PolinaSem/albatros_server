import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizEntity } from './quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { InterviewerEntity } from '../interviewer/interviewer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizEntity, InterviewerEntity])],
  controllers: [QuizController],
  providers: [QuizService],
  exports: [QuizService],
})
export class QuizModule {}
