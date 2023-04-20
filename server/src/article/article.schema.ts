import {HydratedDocument, Types} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Comment} from "../comment/comment.schema";

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {

 @Prop()
 author: string;

 @Prop()
 name: string;

 @Prop()
 time_create: number;

 @Prop()
 time_edit: number;

 @Prop()
 rubric: string;

 @Prop()
 picture: string;

 @Prop()
 content: string;

 @Prop({type: [{type: Types.ObjectId, ref: 'Comment'}]})
 comments: Comment[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);