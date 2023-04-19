import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {ArticleService} from "./article.service";
import {CreateArticleDto} from "./dto/create-article.dto";
import {Types} from "mongoose";
import {CreateCommentDto} from "../comment/dto/create-comment.dto";

@Controller('/articles')
export class ArticleControler {
 constructor(private articleService: ArticleService) {
 }
 @Post()
 create(@Body() dto: CreateArticleDto) {
   return this.articleService.create(dto)
 }

 @Get()
 getAll() {
  return this.articleService.getAll()
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