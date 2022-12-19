import { Length } from "class-validator";
import { Arg, Extensions, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class GQLAccount {

  @Field()
  name: string;

}

@InputType()
class GQLAccountInput implements Partial<GQLAccount> {

  @Field()
  @Length(10, undefined, { message: 'I should see this error message?'})
  name: string;

}

@Resolver(of => GQLAccount)
export class AccountResolver {

  @Query(returns => GQLAccount)
  account() {
    return { name: 'filler name' };
  }

  @Mutation(returns => GQLAccount)
  addAccount(@Arg('data') data: GQLAccountInput): GQLAccount {
    return data;
  }

}