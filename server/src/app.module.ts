import {Module} from "@nestjs/common";
import {ArticleModule} from "./article/article.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./files/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
 imports: [
	ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
	MongooseModule.forRoot('mongodb://localhost:27017/ohotniki'),
	ArticleModule,
	FileModule
 ]
})
export class AppModule {
}