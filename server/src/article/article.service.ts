import {Injectable, Query} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Article, ArticleDocument} from "./article.schema";
import {Model, Types} from "mongoose";
import {Comment, CommentDocument} from "../comment/comment.schema";
import {CreateArticleDto} from "./dto/create-article.dto";
import {CreateCommentDto} from "../comment/dto/create-comment.dto";
import {FileService, FileType} from "../files/file.service";

@Injectable()
export class ArticleService {
 constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
						 @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
						 private fileService: FileService
 ) {
 }

 async create(dto: CreateArticleDto, pictire): Promise<Article> {
	const picturePath = this.fileService.createFile(FileType.IMAGE, pictire)
	const article = await this.articleModel.create({...dto, picture: picturePath})
	return article
 }

 async getAll(count = 3, offset = 0): Promise<Article[]> {
	const articles = await this.articleModel.find().skip(Number(offset)).limit(Number(count))
	return articles
 }

 async getOne(id: Types.ObjectId): Promise<Article> {
	const article = await this.articleModel.findById(id).populate('comments')
	return article
 }

 async delete(id: Types.ObjectId): Promise<Types.ObjectId> {
	const article = await this.articleModel.findByIdAndDelete(id)
	return article._id
 }

 async addComment(dto: CreateCommentDto): Promise<Comment> {
	const article = await this.articleModel.findById(dto.articleId)
	const comment = await this.commentModel.create({...dto})
	// @ts-ignore
	article.comments.push(comment._id)
	await article.save()
	return comment
 }

 async search(query: string): Promise<Article[]> {
	const articles = await this.articleModel.find({
	 name: {$regex: new RegExp(query, 'i')}
	})
	return articles
 }
}