import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { TypeGraphQLModule } from "../../src";

import RecipeModule from "./recipe/module";

@Module({
  imports: [
    TypeGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      emitSchemaFile: true,
      validate: false,
    }),
    RecipeModule,
  ],
})
export default class AppModule {}
