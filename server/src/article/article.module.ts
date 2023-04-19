import {Module} from "@nestjs/common";
import {ArticleControler} from "./article.controler";
import {ArticleService} from "./article.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Comment, CommentSchema} from "../comment/comment.schema";
import {Article, ArticleSchema} from "./article.schema";

@Module({
 imports: [
  MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
  MongooseModule.forFeature([{name: Article.name, schema: ArticleSchema}])
 ],
 controllers: [ArticleControler],
 providers: [ArticleService]
})
export class ArticleModule {
}