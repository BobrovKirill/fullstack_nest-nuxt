import {HydratedDocument, Types} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Article} from "../article/article.schema";

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
 @Prop()

 @Prop({type: Types.ObjectId, ref: 'Article'})
 article: Article;

 @Prop()
 username: string;

 @Prop()
 time_create: number;

 @Prop()
 img: string;

 @Prop()
 text: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);