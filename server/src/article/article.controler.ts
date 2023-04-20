import {Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {ArticleService} from "./article.service";
import {CreateArticleDto} from "./dto/create-article.dto";
import {Types} from "mongoose";
import {CreateCommentDto} from "../comment/dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/articles')
export class ArticleControler {
 constructor(private articleService: ArticleService) {
 }
 @Post()
 @UseInterceptors(FileFieldsInterceptor([
  { name: 'pictire', maxCount: 1 },
 ]))
 create(@UploadedFiles() files, @Body() dto: CreateArticleDto) {
   return this.articleService.create(dto, files.pictire[0])
 }

 @Get()
 getAll(@Query('count') count: number, @Query('offset') offset: number) {
  return this.articleService.getAll(count, offset)
 }

 @Get('/search')
 search(@Query('q') query: string) {
  return this.articleService.search(query)
 }

 @Get(':id')
 getOne(@Param('id') id: Types.ObjectId) {
  return this.articleService.getOne(id)
 }

 @Delete(':id')
 delete(@Param('id') id: Types.ObjectId) {
  return this.articleService.delete(id)
 }

 @Post('/comment')
 addComment(@Body() dto: CreateCommentDto) {
  return this.articleService.addComment(dto)
 }
}