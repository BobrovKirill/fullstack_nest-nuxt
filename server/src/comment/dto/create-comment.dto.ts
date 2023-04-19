import {Types} from "mongoose";

export class CreateCommentDto {
 readonly articleId: Types.ObjectId;
 readonly username: string;
 readonly text: string;
 // readonly time_create;
 // readonly time_edit;
 // readonly rubric;
 // readonly content;
 // readonly comments;
}